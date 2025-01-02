import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmailData {
  name: string
  email: string
  userType: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, userType } = await req.json() as EmailData

    const welcomeHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Welcome to YesSigh! 🎉</h1>
        <p>Dear ${name},</p>
        <p>Thank you for joining our pioneer program as a ${userType}. We're excited to have you on board!</p>
        <p>As an early adopter, you're eligible for our special 50% discount until January 30th, 2025.</p>
        <h2>What's Next?</h2>
        <ul>
          <li>Explore our features designed specifically for ${userType}s</li>
          <li>Set up your profile</li>
          <li>Connect with other members of our community</li>
        </ul>
        <p>If you have any questions, feel free to reach out to our support team.</p>
        <p>Best regards,<br>The YesSigh Team</p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'YesSigh <onboarding@resend.dev>',
        to: [email],
        subject: 'Welcome to YesSigh - Your Journey Begins!',
        html: welcomeHtml,
      }),
    })

    const data = await res.json()
    
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: res.ok ? 200 : 400,
    })
  } catch (error) {
    console.error('Error sending welcome email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})