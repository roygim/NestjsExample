const db2UsersDB = [{ id: 'db2_1', email: 'db2_aaa@gmail.com', password: 'db2_aaa'}, { id: 'db2_2', email: 'db2_bbb@gmail.com', password: 'd2_bbb'}]
const db2ProductsDB = [{ id: '1', name: 'product1', price: '100'}, { id: '1', name: 'product2', price: '200'}]
const db2CartsDB = [{ id: '1', userid: '', porducts: [1]}]

module.exports = {
    usersDB: db2UsersDB,
    productsDB: db2ProductsDB,
    cartsDB: db2CartsDB
};