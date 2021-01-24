import {ConnectionOptions} from "typeorm";
import {User} from "../entity/user";

export const dbConfig: ConnectionOptions = {
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [User],
    synchronize: true,
    logging: false
}
