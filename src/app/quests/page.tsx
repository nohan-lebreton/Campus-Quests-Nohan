import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestListPage: React.FC = () => {
    // Exemple de données de quête
    const quests = [
        { id: 1, title: 'Quête 1', description: 'Description de la quête 1', progress: 50 },
        { id: 2, title: 'Quête 2', description: 'Description de la quête 2', progress: 75 },
        { id: 3, title: 'Quête 3', description: 'Description de la quête 3', progress: 25 },
    ];

    // Exemple de données de profil utilisateur
    const userProfile = {
        username: 'Utilisateur123',
        level: 5,
        experience: 350,
    };

    return (
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-4">
                    <h2>Profil</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Utilisateur: {userProfile.username}</h5>
                            <p className="card-text">Niveau: {userProfile.level}</p>
                            <p className="card-text">Expérience: {userProfile.experience}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h2>Liste des quêtes</h2>
                    <div className="list-group">
                        {quests.map(quest => (
                            <a href="#" key={quest.id} className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{quest.title}</h5>
                                    <small>{quest.progress}%</small>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: `${quest.progress}%` }} aria-valuenow={quest.progress} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                                <p className="mb-1">{quest.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default QuestListPage;
