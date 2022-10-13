import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(private router: Router, 
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  // Metodo para acessar tanto para editar quanto para Excluir.
  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id') // Converter em uma string, porém se quiser deixar como valor numero é só coloca o +this.
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    })
  }

  // Metodo de Excluir.
  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage('Produto Excluido com Sucesso!')
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"]) // Quando for clicado para cancelar ele ira voltar para o inicio da pagina.
  }
}
