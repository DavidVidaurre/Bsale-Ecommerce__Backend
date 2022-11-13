import { Router } from "express";

const router = Router();

import {
    getAllProducts,
    getProduct,
    searchProduct,
    getProductsWithDiscount,
    getProductsByIncreasingName,
    getProductsByDecreasingName,
    getProductsByHigherPrice,
    getProductsByLowerPrice,
    getProductsBetweenPrices
} from '../controllers/product.js'

router.get('/', getAllProducts);
router.get('/discount', getProductsWithDiscount);
router.get('/:id', getProduct);
router.get('/search/:name', searchProduct);
router.get('/name/increasing', getProductsByIncreasingName);
router.get('/name/decreasing', getProductsByDecreasingName);
router.get('/price/higher', getProductsByHigherPrice);
router.get('/price/lower', getProductsByLowerPrice);
router.post('/price/between', getProductsBetweenPrices);

export default router