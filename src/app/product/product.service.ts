import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../config/interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http:HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http
            .get<Product[]>("http://localhost:8080/products");
    }
}