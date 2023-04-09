const router = require('express').Router();
// const { Model } = require('sequelize/types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories & associated Products
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id'
        ]
      }
      
    ]
  }).then((categoryData) => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value + its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock',
          'category_id'
        ]
      }
    ]
  }).then((categoryData) => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  /*
  Input the following into Insomnia:
  {
    "category_name": "Accessories"
  }
  */
  Category.create({
    category_name: req.body.category_name
  })
  .then((categoryData) => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((categoryData) => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
