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
            this.create_date = product.create_date;
            this.status = product.status;
        }
    }

    public toDocument() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            create_date: this.create_date,
            status: this.status
        };
    }
}

export = Product;
