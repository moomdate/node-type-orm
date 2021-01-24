import {ConnectionOptions, createConnection, getRepository} from "typeorm";
import {root} from "./paths";
import {User} from "./entity/user";
import {dbConfig} from "./config/db.config";


async function main() {
    const connection = await createConnection(dbConfig)
    const userRepo = connection.getRepository(User)

    const newUser: User = {
        name: 'surasak',
    }

    const userPromise = await getRepository(User).insert(newUser);

    console.log('======= saved', userPromise)

    const allMessages = await userRepo.find()
    console.log(`Hello ${allMessages.find(e=>e)?.name}`);

}

main().catch(console.error);
