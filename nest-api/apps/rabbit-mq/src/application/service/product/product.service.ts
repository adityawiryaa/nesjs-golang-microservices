import { Injectable } from "@nestjs/common";
import { ProductDto } from "apps/rabbit-mq/src/core/dto/product.dto";
import { Product } from "apps/rabbit-mq/src/core/entity/product/product.entity";

@Injectable()
export class ProductService {

    async createProduct(payload : ProductDto ) : Promise<Product> {
        const product = new Product();
        product.name    = payload.name;
        product.price   = payload.price;
        product.desc    = payload.desc;
        return product;
    };
}