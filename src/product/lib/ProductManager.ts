import _ = require('lodash');
import async = require('async');

import ProductStatus = require('../model/ProductStatus');
import ProductInterface = require('../model/ProductInterface');
import ProductDocumentManager = require('../model/ProductDocumentManager');

class ProductManager {
    public static DEFAULT_PRODUCT_NAME = "Some Product";

    public static create = (product:ProductInterface, callback:(err, product:ProductInterface) => void) => {
        var now:Date = new Date();
        product.create_date = now;
        product.status = product.status || ProductStatus.ACTIVE;

        // repository_utils call
    };

    public static findById = (organization_id:string, callback:(err, product:ProductInterface) => void) => {
        // ProductRepository.findById(organization_id, callback);
    };

    public static update(args:{oldProduct:ProductInterface; newProduct:ProductInterface}, callback:(err, product:ProductInterface) => void) {
        args.oldProduct = <ProductInterface>_.merge(args.oldProduct, args.newProduct);

        // repository_utils call
    }

    public static helloWorld() {
      console.log("Hello World");
    }
}

export = ProductManager;
