import {open} from "sqlite";
import sqlite from "sqlite3";
import bcrypt from "bcrypt"

let db;

export async function initDb(){
    db = await open({filename: "auth.db", driver: sqlite.Database});

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            login TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            create_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `);

        return db;
}

export function getDb(){
    return db;
}