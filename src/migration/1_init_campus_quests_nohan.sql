-- Création de la table des utilisateurs
CREATE TABLE utilisateurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255), -- Remplacez 255 par la longueur maximale souhaitée
    email VARCHAR(255) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table des progrès des utilisateurs
CREATE TABLE progres_utilisateurs (
    id SERIAL PRIMARY KEY,
    utilisateur_id INT REFERENCES utilisateurs(id),
    quete_id INT NOT NULL,
    progression INT NOT NULL DEFAULT 0,
    CONSTRAINT fk_utilisateur FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
);

-- Création de la table des quêtes
CREATE TABLE quetes (
    id SERIAL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    qr_code VARCHAR(255) UNIQUE,
    nfc_tag VARCHAR(255) UNIQUE,
    position_latitude DECIMAL,
    position_longitude DECIMAL
);

-- Création de la table des notifications
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    quete_id INT REFERENCES quetes(id),
    message TEXT,
    date_notification TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_quete FOREIGN KEY (quete_id) REFERENCES quetes(id)
);

-- Création de la table des thèmes
CREATE TABLE themes (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) UNIQUE NOT NULL -- Remplacez 50 par la longueur maximale souhaitée
);

-- Insertion des thèmes disponibles
INSERT INTO themes (nom) VALUES 
('Sombre'),
('Lumineux');

-- Création de la table de sélection du thème par utilisateur
CREATE TABLE selection_theme_utilisateur (
    utilisateur_id INT REFERENCES utilisateurs(id),
    theme_id INT REFERENCES themes(id),
    PRIMARY KEY (utilisateur_id, theme_id),
    CONSTRAINT fk_theme FOREIGN KEY (theme_id) REFERENCES themes(id)
);
