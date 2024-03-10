"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const Router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                // Connexion réussie, rediriger l'utilisateur vers la page de profil
                Router.push('/quests');
            } else {
                // Connexion échouée, afficher le message d'erreur
                const data = await response.json();
                setErrorMessage(data.message);
            }
        } catch (error) {
            // Erreur lors de la connexion, afficher l'erreur
            setErrorMessage(`Erreur lors de la connexion: ${error}`);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Connexion</div>
                        <div className="card-body">
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse e-mail</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
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
