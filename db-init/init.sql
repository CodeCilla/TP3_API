-- init.sql

-- Création de la base de données (si elle n'existe pas déjà)
-- ⚠️ Cette commande doit être exécutée par un utilisateur ayant les droits CREATE DATABASE
CREATE DATABASE myapp_db;

\connect myapp_db;

-- Suppression de la table si elle existe déjà
DROP TABLE IF EXISTS tasks;

-- Création de la table tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
