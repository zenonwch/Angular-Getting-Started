import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                productId: 2,
                productName: "Carden Cart",
                productCode: "GDN-0023",
                releaseDate: "March 18, 2016",
                description: "15 gallon capacity rolling garden cart",
                price: 32.99,
                starRating: 4.2,
                imageUrl: "http://www.clker.com/cliparts/C/4/b/w/s/7/wheelbarrow-md.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://www.clker.com/cliparts/a/9/e/2/1195421765134612385rejon_Hammer.svg.med.png"
            }
        ];
    }
}