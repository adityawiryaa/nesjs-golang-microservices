import { Inject, Injectable, RequestTimeoutException } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ProductDto } from "apps/api/src/core/dto/product.dto";
import { ProductInterface } from "apps/api/src/core/interface/product.interface";
import { throwError, TimeoutError } from "rxjs";
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class ProductService {
    constructor (
        @Inject('PRODUCT_SERVICE')
        private readonly client : ClientProxy
    ) {};

    async createProduct (payload : ProductDto) : Promise<ProductInterface> {

        const pattern =  { cmd : 'create', role : 'rabbit-mq-product' }
        const product = await this.client.send(pattern,payload)
        .pipe(
            timeout(10000),
            catchError(err => {
                if (err instanceof TimeoutError) {
                return throwError(new RequestTimeoutException());
                };
                return throwError(err);
            }),
            )
            .toPromise();
        return product;
    };
}