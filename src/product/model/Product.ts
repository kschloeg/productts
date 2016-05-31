import ProductStatus = require('./ProductStatus');
import ProductInterface = require('./ProductInterface');

class Product implements ProductInterface {
    public id:string;
    public name:string;
    public price:number;
    public create_date:Date;
    public status:ProductStatus;

    constructor(product?:any) {
        if (product) {
            this.id = product.id;
            this.name = product.name;
            this.price = product.price;
        }
    }

    public toDocument() {
        return {
            id: this.id,
            name: this.name,
            price: this.price
        };
    }
}

export = Product;
