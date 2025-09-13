import type { VercelRequest, VercelResponse } from "@vercel/node";
import emailjs from "@emailjs/nodejs";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    try {
        const { name, email, phone, service, message } = req.body;

        // Nettoyage téléphone (si renseigné)
        const cleanPhone = phone
        ? phone.replace(/^0/, "+33 ").replace(/\s/g, "")
        : "Non renseigné";

        // Mail de notification à Otech
        await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_NOTIFICATION!,
        {
            name,
            email,
            phone: cleanPhone,
            service: service || "Belirtilmedi,
            message,
        },
        {
            publicKey: process.env.EMAILJS_PUBLIC_KEY!,
            privateKey: process.env.EMAILJS_PRIVATE_KEY!,
        }
        );

        // Mail de confirmation au client
        await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_CONFIRMATION!,
        {
            name,
            email,
            service: service || "Non spécifié",
        },
        {
            publicKey: process.env.EMAILJS_PUBLIC_KEY!,
            privateKey: process.env.EMAILJS_PRIVATE_KEY!,
        }
        );

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Erreur EmailJS:", error);
        return res.status(500).json({ success: false, error: (error as Error).message });
    }
}
