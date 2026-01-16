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
            name = "",
            email = "",
            prompt_type = "",
            deadline = "",
            details = "",
            source = "jk_ai_hub_prompt_vault",
            timestamp = new Date().toISOString()
        } = await req.json()

        if (!email || !prompt_type || !details) {
            return new Response(
                JSON.stringify({ ok: false, error: "Missing required fields" }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
            )
        }

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        const supabase = createClient(supabaseUrl, supabaseKey)

        const { error: dbError } = await supabase
            .from("prompt_requests")
            .insert([{ name, email, prompt_type, urgency: deadline, details, status: "new" }])

        if (dbError) {
            console.warn("Supabase request error:", dbError)
        }

        // Trigger Zapier
        const zapierUrl = "https://hooks.zapier.com/hooks/catch/15661366/ugld0hd/";
        await fetch(zapierUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "custom_prompt_request",
                name,
                email,
                prompt_type,
                deadline,
                details,
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
