import type { VercelRequest, VercelResponse } from '@vercel/node';
import emailjs from '@emailjs/nodejs';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const EMAILJS_NOTIFICATION_TEMPLATE = process.env.EMAILJS_NOTIFICATION_TEMPLATE;
  const EMAILJS_CONFIRMATION_TEMPLATE = process.env.EMAILJS_CONFIRMATION_TEMPLATE;

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_NOTIFICATION_TEMPLATE || !EMAILJS_CONFIRMATION_TEMPLATE) {
    return res.status(500).json({ error: 'EmailJS environment variables not set' });
  }

  try {
    // Nettoyer le numéro de téléphone
    const cleanPhone = phone ? phone.replace(/^0/, '+33 ').replace(/\s/g, '') : 'Non renseigné';

    // Email de notification à Otech
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_NOTIFICATION_TEMPLATE,
      {
        name,
        email,
        phone: cleanPhone,
        service: service || 'Belirtilmedi',
        message
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

    // Email de confirmation à l'expéditeur
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONFIRMATION_TEMPLATE,
      {
        name,
        email,
        service: service || 'Non spécifié'
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi' });
  }
}
