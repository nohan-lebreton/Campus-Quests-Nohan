// api/login.tsx
"use server";
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from "@vercel/postgres";
import { FONT_MANIFEST } from 'next/dist/shared/lib/constants';

export default async function handleLogin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    try {
      const result = await sql`SELECT * FROM utilisateurs WHERE email = ${email} AND mot_de_passe = ${password}`;
      if (result.rows.length > 0) {
        // Utilisateur trouvé, authentification réussie
        res.status(200).json({ success: true });
      } else {
        // Aucun utilisateur trouvé, authentification échouée
        res.status(401).json({ success: false, message: 'Email ou mot de passe incorrect' });
      }
    } catch (error) {
      console.error('Erreur lors de la requête SQL:', error);
      res.status(500).json({ success: false, message: 'Erreur serveur lors de l\'authentification' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }
}
