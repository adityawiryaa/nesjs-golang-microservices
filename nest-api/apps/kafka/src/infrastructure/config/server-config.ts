import * as env from 'env-var';
require('dotenv').config({ path : `environments/kafka/.env` });

export class ServerConfig {
    
    public static readonly KAFKA_URL : string = env.get('KAFKA_URL').required().asString();

}