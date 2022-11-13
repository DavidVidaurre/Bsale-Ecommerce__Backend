import { Router } from "express";

const router = Router();

import { getAllCategories, getCategory, getProductsByCategory } from "../controllers/category.js";

router.get('/', getAllCategories);
router.get('/:id', getCategory);
router.get('/products/:id', getProductsByCategory)

export default router

