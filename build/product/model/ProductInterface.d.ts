import ProductStatus = require('./ProductStatus');
interface ProductInterface {
    id?: string;
    name: string;
    price: number;
    create_date: Date;
    status: ProductStatus;
    toDocument(): Object;
}
export = ProductInterface;
