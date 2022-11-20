import { getConnection } from "../database/dbConnection.js"

const getAllProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const products = await connection.query('SELECT * FROM product');
        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'No products to show'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProduct = async (req, res) => {
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const product = await connection.query(`SELECT * FROM product WHERE id = ${id}`)

        if(product.length > 0){
            return res.json({
                ok: true,
                data: product
            })
        }

        return res.json({
            ok: false,
            message: 'Product not found'
        })
    } catch (error) {
        console.log(error);
    }
}

const searchProduct = async (req, res) => {
    try {
        const { name } = req.params;
        const connection = await getConnection();
        const productFound = await connection.query(`SELECT * FROM product WHERE name LIKE '%${name}%'`);

        if(productFound.length > 0){
            return res.json({
                ok: true,
                data: productFound
            })
        }

        return res.json({
            ok: false,
            message: 'Product not found'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductsWithDiscount = async (req, res) => {
    try {
        const connection = await getConnection();
        const products = await connection.query('SELECT * FROM product WHERE discount != 0')

        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'Products not found'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductsByIncreasingName = async (req, res) => {
    try {
        const connection = await getConnection();
        const products = await connection.query('SELECT * FROM product ORDER BY name ASC')

        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'No discounted products'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductsByDecreasingName = async (req, res) => {
    try {
        const connection = await getConnection();
        const products = await connection.query('SELECT * FROM product ORDER BY name DESC')

        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'Products not found'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductsByHigherPrice = async (req, res) => {
    try {
        const connection = await getConnection();
        const products = await connection.query('SELECT *, price - price*discount/100 as priceWithDiscount FROM product ORDER BY priceWithDiscount DESC');

        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'Products not found'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductsByLowerPrice = async (req, res) => {
    try {
        const connection = await getConnection();
        const products = await connection.query('SELECT *, price - price*discount/100 as priceWithDiscount FROM product ORDER BY priceWithDiscount ASC');

        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'Products not found'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductsBetweenPrices = async (req, res) => {
    try {
        const connection = await getConnection();
        const { lowerPrice, higherPrice } = req.body;
        const products = await connection.query(`SELECT *, price - price*discount/100 as price FROM product WHERE price BETWEEN ${lowerPrice} AND ${higherPrice} ORDER BY price ASC`);

        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'No products in this price range'
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllProducts,
    getProduct,
    searchProduct,
    getProductsWithDiscount,
    getProductsByIncreasingName,
    getProductsByDecreasingName,
    getProductsByHigherPrice,
    getProductsByLowerPrice,
    getProductsBetweenPrices
}