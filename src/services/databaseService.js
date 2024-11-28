import { CapacitorSQLite } from '@capacitor-community/sqlite';
export async function createDatabase() {
    try {
        const db = await CapacitorSQLite.createConnection(
            'myDb',
            false,
            'no-encryption',
            1
        );
        await db.open();
        const createTable = `
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL
                );
            `;
        await db.execute(createTable);
        await CapacitorSQLite.closeConnection('myDb');
    } catch (err) {
        console.error('Error: ', err);
    }
}