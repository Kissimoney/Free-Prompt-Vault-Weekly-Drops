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
            interest = "",
            source = "jk_ai_hub_prompt_vault",
            download_url = "",
            timestamp = new Date().toISOString()
        } = await req.json()

        console.log("Received lead:", { name, email, interest, download_url });

        if (!email) {
            return new Response(
                JSON.stringify({ ok: false, error: "Email required" }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
            )
        }

        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        const supabase = createClient(supabaseUrl, supabaseKey)

        const { error: dbError } = await supabase
            .from("leads")
            .upsert(
                [{ email, first_name: name, interest, source, download_url, status: "new" }],
                { onConflict: "email" }
            )

        if (dbError) {
            console.warn("Supabase leads error:", dbError)
        } else {
            console.log("Supabase insert success");
        }

        // Trigger Zapier
        const zapierUrl = "https://hooks.zapier.com/hooks/catch/15661366/uglelz8/";
        console.log("Triggering Zapier at:", zapierUrl);

        const zapResponse = await fetch(zapierUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "lead_magnet_signup",
                email,
                name,
                interest,
                source,
                download_url,
                timestamp
            })
        })

        const zapText = await zapResponse.text();
        console.log("Zapier Response Status:", zapResponse.status);
        console.log("Zapier Response Body:", zapText);

        return new Response(
            JSON.stringify({ ok: true, zapier_status: zapResponse.status }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
        )

    } catch (error) {
        console.error("Critical Error", error)
        return new Response(
            JSON.stringify({ ok: false, error: error.message }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
    }
})
