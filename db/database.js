import * as SQLite from 'expo-sqlite';

let db;

export async function initDB() {
    try {
        if (!db) {
            db = await SQLite.openDatabaseAsync('meubanco.db');

            await db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    email TEXT NOT NULL
                );
            `);
        }
    } catch (error) {
        console.error('Erro ao inicializar banco:', error);
        throw error;
    }
}

export async function inserirUsuario(nome, email) {
    try {
        if (!db) await initDB();

        const result = await db.runAsync(
            'INSERT INTO usuarios (nome, email) VALUES (?, ?);',
            [nome, email]
        );
        return result;
    } catch (error) {
        console.error('Erro ao inserir usuario:', error);
        throw error;
    }
}

export async function listarUsuarios() {
    try {
        if (!db) await initDB();

        const result = await db.getAllAsync('SELECT * FROM usuarios;');
        return result;
    } catch (error) {
        console.error('Erro ao listar usuarios:', error);
        throw error;
    }
}

export async function excluirUsuario(id) {
    try {
        if (!db) await initDB();

        const result = await db.runAsync(
            'DELETE FROM usuarios WHERE id = ?;',
            [id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao excluir usuario:', error);
        throw error;
    }
}