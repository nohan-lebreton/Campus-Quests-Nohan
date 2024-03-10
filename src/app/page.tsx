/*
import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from utilisateurs `;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.email}
        </div>
      ))}
    </div>
  );
}
*/

import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="card p-4 rounded">
                        <h1 className="card-title display-4 mb-4 text-center">Bienvenue sur Campus Quests</h1>
                        <p className="card-text lead text-center">Prêt à commencer votre aventure sur le campus ?</p>
                        <div className="text-center">
                            <a href="/login" className="btn btn-primary btn-lg">Jouer à Campus Quests</a>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <img src="/favicon.ico" alt="Logo"
                        className="rounded mx-auto d-block"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
