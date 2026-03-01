const DEFAULT_TO_EMAIL = 'raunakuk2016@gmail.com';

const escapeHtml = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY' });
  }

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch (error) {
    return res.status(400).json({ error: 'Invalid request body.' });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const toEmail = process.env.TO_EMAIL || DEFAULT_TO_EMAIL;
  const fromEmail = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      text: `New Contact Message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return res.status(502).json({ error: `Email send failed: ${errorText}` });
  }

  return res.status(200).json({ ok: true });
};
