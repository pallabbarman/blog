import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    db_url: process.env.MONGO_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
};
