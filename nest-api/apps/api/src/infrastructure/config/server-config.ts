import * as env from 'env-var';
require('dotenv').config({ path : `environments/api/.env` });

export class ServerConfig {
    
    public static readonly APP_PORT: number = env.get('APP_PORT').required().asPortNumber();
    
    public static readonly RABBITMQ_URL: string = env.get('RABBITMQ_URL').required().asString();

    public static readonly KAFKA_URL: string = env.get('KAFKA_URL').required().asString();

    public static readonly GRPC_URL: string = env.get('GRPC_URL').required().asString();

}