import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const db = postgres(connectionString, { ssl: "require" });

export default db;
