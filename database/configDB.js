import { config } from "dotenv"

config()

const configDB = {
    host: process.env.HOST || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || '',
}

const PORT = process.env.PORT

export {
    configDB,
    PORT
}