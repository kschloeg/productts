import ProductStatus = require('./ProductStatus');
import ProductInterface = require('./ProductInterface');
declare class Product implements ProductInterface {
    id: string;
    name: string;
    price: number;
    create_date: Date;
    status: ProductStatus;
    constructor(product?: any);
    toDocument(): {
        id: string;
        name: string;
        price: number;
    };
}
export = Product;
