import { getConnection } from "../database/dbConnection.js";

const getAllCategories = async (req, res) => {
    try {
        const connection = await getConnection();
        const categories = await connection.query('SELECT * FROM category')
        if(categories.length > 0){
            return res.json({
                ok: true,
                data: categories
            })
        }

        return res.json({
            ok: false,
            message: 'No categories to show'
        })
    } catch (error) {
        console.log(error);
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const connection = await getConnection();
        const {id} = req.params
        const products = await connection.query('SELECT * FROM product WHERE category = ?', id)

        if(products.length > 0){
            return res.json({
                ok: true,
                data: products
            })
        }

        return res.json({
            ok: false,
            message: 'There are no products for this category'
        })
    } catch (error) {
        console.log(error);
    }
}

const getCategory = async (req, res) => {
    try {
        const connection = await getConnection();
        const {id} = req.params;
        const category = await connection.query('SELECT * FROM category WHERE id = ?', id)
        if(category.length > 0){
            return res.json({
                ok: true,
                data: category
            })
        }

        return res.json({
            ok: false,
            message: 'Category not found'
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllCategories,
    getProductsByCategory,
    getCategory
}