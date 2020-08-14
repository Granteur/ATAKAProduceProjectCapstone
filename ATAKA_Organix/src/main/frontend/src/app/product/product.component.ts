import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../frontend/src/app/product/model/Product'
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // productOrders: ProductOrder[] = [];
  products: Array<Product>;
  // selectedProductOrder: ProductOrder;
  // private shoppingCartOrders: ProductOrders;
  // sub: Subscription;
  productSelected: boolean = false;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.products = response;
  }

  // getProducts() {
  //   this.ecommerceService.getAllProducts()
  //     .subscribe(
  //       (products: any[]) => {
  //         this.products = products;
  //         this.products.forEach(product => {
  //           this.productOrders.push(new ProductOrder(product, 0));
  //         })
  //       },
  //       (error) => console.log(error)
  //     );
  // }

  // loadOrders() {
  //   this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
  //     this.shoppingCartOrders = this.ecommerceService.ProductOrders;
  //   });
  // }

  // addToCart(order: ProductOrder) {
  //   this.ecommerceService.SelectedProductOrder = order;
  //   this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
  //   this.productSelected = true;
  // }

  // removeFromCart(productOrder: ProductOrder) {
  //   let index = this.getProductIndex(productOrder.product);
  //   if (index > -1) {
  //     this.shoppingCartOrders.productOrders.splice(
  //       this.getProductIndex(productOrder.product), 1);
  //   }
  //   this.ecommerceService.ProductOrders = this.shoppingCartOrders;
  //   this.shoppingCartOrders = this.ecommerceService.ProductOrders;
  //   this.productSelected = false;
  // }

  // reset() {
  //   this.productOrders = [];
  //   this.loadProducts();
  //   this.ecommerceService.ProductOrders.productOrders = [];
  //   this.loadOrders();
  //   this.productSelected = false;
  // }

}
