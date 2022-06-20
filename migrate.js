import database from "./database.js";

import User from "./models/User.js"

database.sync({force : true})