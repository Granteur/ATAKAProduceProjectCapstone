import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../product/model/Product';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }







  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/books/get');
  }
}
