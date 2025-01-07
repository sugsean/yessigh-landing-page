import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'https://esm.sh/resend@1.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, userType } = await req.json()
    
    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: 'Email and name are required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

    const { data, error: emailError } = await resend.emails.send({
      from: 'YesSigh <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to YesSigh!',
      html: `
        <h1>Welcome to YesSigh, ${name}!</h1>
        <p>Thank you for joining our pioneer program as a ${userType}.</p>
        <p>We're excited to have you on board and look forward to supporting your journey in education and wellbeing.</p>
        <p>Our team will be in touch shortly with next steps.</p>
        <br/>
        <p>Best regards,</p>
        <p>The YesSigh Team</p>
      `
    })

    if (emailError) {
      console.error('Resend API error:', emailError)
      throw emailError
    }

    return new Response(
      JSON.stringify({ message: 'Welcome email sent successfully' }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in send-welcome-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send welcome email' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})