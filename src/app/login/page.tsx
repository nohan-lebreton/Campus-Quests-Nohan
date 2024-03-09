import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Connexion</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse e-mail</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
