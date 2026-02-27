export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const { name, email, message } = await request.json();

      if (!email || !name) {
        return new Response(JSON.stringify({ error: 'Name and email are required' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const res = await fetch(
        `https://api.emailoctopus.com/lists/${env.EMAILOCTOPUS_LIST_ID}/contacts`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.EMAILOCTOPUS_API_KEY}`,
          },
          body: JSON.stringify({
            email_address: email,
            fields: {
              FullName: name,
              ContactMessage: message || '',
              ContactBrand: env.CONTACT_BRAND,
            },
            tags: { 'website-inquiry': true, [env.CONTACT_BRAND]: true },
            status: 'subscribed',
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return new Response(JSON.stringify({ error: 'Submission failed', details: data }), {
          status: res.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Internal error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
