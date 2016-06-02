import _ = require('lodash');
import async = require('async');

import ProductStatus = require('../model/ProductStatus');
import Product = require('../model/Product');
import ProductInterface = require('../model/ProductInterface');
import ProductDocumentManager = require('../model/ProductDocumentManager');
import ProductDocument = require('../model/ProductDocument');

class ProductManager {
    public static DEFAULT_PRODUCT_NAME = "Some Product";

    public static create(product: ProductInterface, callback: (err, product: ProductInterface) => void): void {
        if (!product) return callback(new Error("Cannot create null or undefined Object"), null);

        var now: Date = new Date();
        product.create_date = now;
        product.status = product.status || ProductStatus.ACTIVE;
        delete product['_id'];

        ProductDocumentManager.create(product, (createErr, document: ProductDocument) => {
            if (createErr) return callback(createErr, null);
            if (!document) return callback(new Error("Create Error"), null);
            callback(null, new Product(document));
        });
    };

    public static findById(product_id: string, options: { include_inactive?: boolean }, callback: (err, product: ProductInterface) => void): void {
        if (!product_id) return callback(new Error("Missing ID"), null);

        var criteria = { _id: product_id };
        if (!options || !options.include_inactive) {
            criteria['status'] = ProductStatus.ACTIVE;
        }

        ProductDocumentManager.findOne(criteria, (findErr, document: ProductDocument) => {
            if (findErr) return callback(findErr, null);
            if (!document) return callback(null, null);
            callback(null, new Product(document));
        });
    }

    public static update(args: { oldProduct: ProductInterface; newProduct: ProductInterface }, callback: (err, product: ProductInterface) => void): void {
        args.oldProduct = <ProductInterface>_.merge(args.oldProduct, args.newProduct);

        // repository_utils call
    }

    public static helloWorld() {
        console.log("Hello World");
    }
}

export = ProductManager;
