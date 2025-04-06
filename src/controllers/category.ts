import { Request, Response } from 'express';
import Category from '../models/category.model.ts';

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    }else {
      res.json(category);
    }
  } catch (error) {
    res.status(500).send('Error fetching category');
  }
};


export const getCategories = async (req: Request, res: Response) => {
  try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).send('Error fetching categories');
    }
}

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    
    const newCategory = new Category({ name, price });

    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    
    const updatedCategory = await Category.findByIdAndUpdate(id, { name, price }, { new: true });

    if (!updatedCategory) {
      res.status(404).json({ message: 'Category not found' });
    }else {
      res.json(updatedCategory);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
    }else {
      res.json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error });
  }
}