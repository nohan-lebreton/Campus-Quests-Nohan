-- Insertion d'un utilisateur
INSERT INTO utilisateurs (nom, email, mot_de_passe) VALUES 
('John Doe', 'john@example.com', 'motdepasse123');

-- Insertion de quelques quêtes
INSERT INTO quetes (titre, description, qr_code, nfc_tag, position_latitude, position_longitude) VALUES 
('Quête 1', 'Description de la quête 1', 'qr_code_1', 'nfc_tag_1', 48.8566, 2.3522),
('Quête 2', 'Description de la quête 2', 'qr_code_2', 'nfc_tag_2', 40.7128, -74.0060),
('Quête 3', 'Description de la quête 3', 'qr_code_3', 'nfc_tag_3', 51.5074, -0.1278);

-- Insertion de quelques notifications
INSERT INTO notifications (quete_id, message) VALUES 
(1, 'Nouvelle notification pour la quête 1'),
(2, 'Nouvelle notification pour la quête 2'),
(3, 'Nouvelle notification pour la quête 3');

-- Attribution d'un thème à un utilisateur
-- Supposons que l'utilisateur avec l'ID 1 choisit le thème 'Sombre'
INSERT INTO selection_theme_utilisateur (utilisateur_id, theme_id) VALUES 
(1, 1);

-- Supposons que l'utilisateur avec l'ID 1 a progressé dans les quêtes 1 et 2
INSERT INTO progres_utilisateurs (utilisateur_id, quete_id, progression) VALUES 
(1, 1, 50), -- L'utilisateur a progressé à 50% dans la quête 1
(1, 2, 100); -- L'utilisateur a terminé la quête 2 à 100%
