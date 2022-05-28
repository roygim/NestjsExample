const UsersDB = [{ id: '1', email: 'aaa@gmail.com', password: 'aaa'}, { id: '2', email: 'bbb@gmail.com', password: 'bbb'}]
const ProductsDB = [{ id: '1', name: 'product1', price: '100'}, { id: '1', name: 'product2', price: '200'}]
const CartsDB = [{ id: '1', userid: '', porducts: [1]}]

module.exports = {
    usersDB: UsersDB,
    productsDB: ProductsDB,
    cartsDB: CartsDB
};