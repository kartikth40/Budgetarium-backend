import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true }
});

const Category = mongoose.model('Category', categorySchema, 'category');

export default Category;