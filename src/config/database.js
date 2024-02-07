import dotenv from 'dotenv';

dotenv.config();

const knexConfig = {
    client: process.env.DB_CLIENT || 'mysql2' ,
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: 3306,
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'db_finance'
    }
};

export default knexConfig;
