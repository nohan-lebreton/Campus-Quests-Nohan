/*
import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS `;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.valeur}
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
                <div className="col-md-8">
                    <div className="card p-4 rounded">
                        <h1 className="card-title display-4 mb-4 text-center">Bienvenue sur Campus Quests</h1>
                        <p className="card-text lead text-center">Prêt à commencer votre aventure sur le campus ?</p>
                        <div className="text-center">
                            <a href="/login" className="btn btn-primary btn-lg">Jouer à Campus Quests</a>
                        </div>
                    </div>
                    <div className="text-center mt-4 rounded">
                            <img src="/favicon.ico" alt="Logo"/>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;



