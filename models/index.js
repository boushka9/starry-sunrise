// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Set Associations between models

//Products exist inside Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

//Category includes multiple products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

//Products are connected to the tag table via 'ProductTag'
Product.belongsToMany(Tag, { 
  through: ProductTag,
  foreignKey: 'product_id'
})

// Many Products have a tag and are connected vie 'ProductTag'
Tag.belongsToMany(Product, { 
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
