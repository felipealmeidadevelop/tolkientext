import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "faotech",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [__dirname + "./../entities/*.ts"],
    migrations: [__dirname + './../database/migration/*.ts'],
    migrationsTableName: 'migrations',
    subscribers: [],
})
