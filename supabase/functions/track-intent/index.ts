import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const DEFAULT_ZAPIER_URL = "https://hooks.zapier.com/hooks/catch/15661366/ugld0hd/"

Deno.serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const {
            product_id = "",
            buyer_email = "",
            buyer_name = "",
            source = "jk_ai_hub_prompt_vault",
            timestamp = new Date().toISOString()
        } = await req.json()

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        const supabase = createClient(supabaseUrl, supabaseKey)

        // Default intent logging to TRUE if not specified
        const enableLog = Deno.env.get('ENABLE_INTENT_LOG') ?? "true"
        if (enableLog === "true") {
            const { error: dbError } = await supabase.from("purchase_intents").insert([
                { product_id, buyer_email, buyer_name, source, created_at: timestamp }
            ])
            if (dbError) console.warn("Supabase intent error:", dbError)
        }

        // Trigger Zapier
        const zapierUrl = "https://hooks.zapier.com/hooks/catch/15661366/ugld0hd/";
        await fetch(zapierUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "purchase_intent",
                product_id,
                buyer_email,
                buyer_name,
                source,
                timestamp
            })
        })

        return new Response(
            JSON.stringify({ ok: true }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
        )

    } catch (error) {
        console.error(error)
        return new Response(
            JSON.stringify({ ok: false, error: error.message }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
    }
})
