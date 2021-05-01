import * as env from 'env-var';
require('dotenv').config({ path : `environments/rabbitmq/.env` });

export class ServerConfig {
    
    public static readonly RABBITMQ_URL: string = env.get('RABBITMQ_URL').required().asString();

}