import * as mysql2 from 'mysql2/promise'

export const mysqslConn = mysql2.createPool({
    user: 'root',
    database: 'salesflow',
    password: '123456',
    host: 'localhost'
})