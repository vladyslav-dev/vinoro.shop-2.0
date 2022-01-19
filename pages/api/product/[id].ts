import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductModel from '@/models/ProductModel';
import CategoryModel from '@/models/CategoryModel';
import { translateProduct } from '@/utils/translatte';
const translatte = require('translatte');
dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id, lang } = req?.query;
             
        const product = await ProductModel.findById(id);

        const { category_name, _id } = await CategoryModel.findById(product?.category);
        
        switch(lang) {
            case "uk-UA": return translateProduct(product, "uk")
                            .then(p => res.status(200).json({ product: p, category: {category_name, _id} }))
            case "en-US": return translateProduct(product, "en")
                            .then(p => res.status(200).json({ product: p, categoryName: {category_name, _id} }))
            default: return res.status(200).json({ product, category: {category_name, _id}})
        }
    } catch (err) {
        throw new Error(err)
        
    }
}

export default api;