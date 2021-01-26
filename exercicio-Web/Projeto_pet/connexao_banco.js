
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:gut99644788@localhost:3306/petshop");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}


async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cliente;');
    return rows;
}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO cliente(nome,tel) VALUES (?,?);';
    const values = [customer.nome, customer.tel];
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE cliente SET nome=?,tel=? WHERE ID_CLIENTE=?';
    const values = [customer.nome, customer.tel, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM CLIENTE WHERE ID_CLIENTE=?;';
    return await conn.query(sql, [id]);
}


module.exports = {selectCustomers,insertCustomer,updateCustomer, deleteCustomer}


exports = connect()