import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";

// To handle a POST request to /api
export async function POST(req: NextRequest) {
  //je recupere le corps de la requete poru avoir mail et password
  const body = await req.json();
  console.log(body)
  const email = body.email;
  const password = body.password;
  

  if (!email || !password) {
    return NextResponse.json({ message: "Email et mot de passe requis" }, { status: 400 });
  }

  try {
    const result = await sql`SELECT * FROM utilisateurs WHERE email = ${email} AND mot_de_passe = ${password}`;
    console.log(result)
    if (result.rowCount == 0) {
      return NextResponse.json({ message: "Email ou mot de passe incorrect" }, { status: 401 });
    }
    if (result.rowCount > 0) {
      return NextResponse.json({ message: "Connexion reussi" }, { status: 200 });    }
  } catch (error) {
    console.error('Error executing SQL query:', error);
    return NextResponse.json({ message: "Erreur lors de la connexion" }, { status: 500 });
  }
}
