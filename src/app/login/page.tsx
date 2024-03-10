"use client";import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Router = useRouter();

    useEffect(() => {
        // Vérifier si les champs email et mot de passe sont déjà remplis par le navigateur
        const savedEmail = localStorage.getItem('savedEmail');
        const savedPassword = localStorage.getItem('savedPassword');
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Vérifier si l'email ou le mot de passe est vide
        if (email.trim() === '' || password.trim() === '') {
            console.error('Veuillez entrer une adresse e-mail et un mot de passe.');
            return;
        }
        console.log('email:', email);
        console.log('password:', password);
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                // Si la réponse n'est pas OK, l'authentification a échoué
                // Afficher le message d'erreur correspondant au code de statut HTTP
                console.error(`Erreur lors de la requête: ${response.statusText}`);
                return;
            }

            // Analyser la réponse JSON
            const data = await response.json();

            // Vérifier si la réponse contient les données attendues
            if ('success' in data) {
                // Vérifier si l'authentification a réussi
                if (data.success) {
                    // Authentification réussie, rediriger vers la page des quêtes
                    console.log('Authentification réussie');
                    Router.push('/quests');
                } else {
                    // Authentification échouée, afficher le message d'erreur
                    console.error(data.message);
                }
            } else {
                // La réponse ne contient pas les données attendues
                console.error('Réponse JSON invalide:', data);
            }
        } catch (error) {
            // Erreur lors de la connexion, afficher l'erreur
            console.error('Erreur lors de la connexion:', error);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log('Nouvelle valeur de email : ', e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log('Nouvelle valeur de password : ', e.target.value);
    };


    return (
        <div>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
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
    );
}

export default LoginPage;
