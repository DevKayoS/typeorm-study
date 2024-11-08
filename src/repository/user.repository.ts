import { Connection } from "../db/data-source";
import { User } from "../entity/User";

export const UserRepository = Connection.getRepository(User)