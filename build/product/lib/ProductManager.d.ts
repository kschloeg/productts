import ProductInterface = require('../model/ProductInterface');
declare class ProductManager {
    static DEFAULT_PRODUCT_NAME: string;
    static create: (product: ProductInterface, callback: (err: any, product: ProductInterface) => void) => void;
    static findById: (product_id: string, options: {
        include_inactive: boolean;
    }, callback: (err: any, product: ProductInterface) => void) => void;
    static update(args: {
        oldProduct: ProductInterface;
        newProduct: ProductInterface;
    }, callback: (err, product: ProductInterface) => void): void;
    static helloWorld(): void;
}
export = ProductManager;
