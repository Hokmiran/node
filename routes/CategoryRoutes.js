const express = require('express');
const { categoryController } = require('../controllers/categoryController');
const { body } = require('express-validator');
const { validate } = require('../middleware/validator');
const categoryRoutes = express.Router();



categoryRoutes.get('/', categoryController.getAll)
categoryRoutes.get('/:id', categoryController.getById)
categoryRoutes.post(
    '/',
    body('name').isLength({ min: 3 }).withMessage('wrong nickname length').notEmpty().withMessage('Name alanı boş geçilemez!'),
    body('surname').isLength({ min: 3 }).withMessage('wrong surname length').notEmpty().withMessage('Surname alanı boş geçilemez!'),
    body('email').isEmail().withMessage('Email is not valid'),
    validate,
    categoryController.add
)
categoryRoutes.delete('/:id', categoryController.deleteById)
categoryRoutes.put('/:id', categoryController.update)


module.exports = {
    categoryRoutes
}