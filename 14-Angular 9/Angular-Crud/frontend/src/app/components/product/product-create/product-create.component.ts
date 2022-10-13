import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: ""
  }
  
  constructor(private productService: ProductService,
    private router: Router) { }
    
    ngOnInit(): void {
    //this.productService.showMessage('Operação executada com sucesso!')
  }

  // Essa função aqui vai criar o produto, vai avisar quando concluido e navegar caso não queira mais.
  createProduct(): void { // Comando que vai usar no botão para criar o produtor.
    this.productService.create(this.product).subscribe(() => { // Subcribe -> Voce vai ser notificado quando a respostar chegar.
      this.productService.showMessage('Produto Criado!') // Manda mensagem concluindo. Ligados ao product-create.html/product/service.ts
        // this.router.navigate(['/products']) Quando o produto for criado ele voltara para o inicio da tabela
    })
    
  }
  cancel(): void { // Fazendo navegar quando for cancelado.
    this.router.navigate(['/products'])
  }
}