
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

// Função que os produtos criados sejão visto na tela de produtos!
  products!: Product[]; 
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void { // Faz carregar os produtos na tela.
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}