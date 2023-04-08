const router = require('express').Router();
// const { Model } = require('sequelize/types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories & associated Products
  Category.findAll({
    attributes: [
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: [
          'product_name',
          'price',
          'stock',
          'category_id'
        ]
      }
      
    ]
  }).then((categoryData) => res.json(categoryData))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value + its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: [
          'product_name',
          'price',
          'stock',
          'category_id'
        ]
      }
    ]
  }).then((categoryData) => res.json(categoryData))
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
