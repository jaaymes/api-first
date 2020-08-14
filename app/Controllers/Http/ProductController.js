'use strict'

const Product = use ('App/Models/Product')

class ProductController {

    async store ({request}){

        const dataToCreate = request.only(['name', 'description', 'price']);

        return await Product.create(dataToCreate);
    }

    async list () {
        return await Product.all();
    }

    async show ({ params }){
        return await Product.find(params.id);
    }

    async update ({params, request}) {

        const product = await Product.findOrFail(params.id);

        const dataToUpdate = request.only(['name', 'description', 'price']);

        product.merge(dataToUpdate);

        await product.save();

        return product;
    }

    async delete ({ params }){
        const product = await Product.findOrFail(params.id);

        await product.delete();

        return { message: 'Curso Excluido'};
    }
}

module.exports = ProductController
