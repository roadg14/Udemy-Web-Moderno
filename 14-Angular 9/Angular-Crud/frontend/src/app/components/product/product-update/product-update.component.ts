import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {

  product!: Product; 

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  // Essa função é para pega o item pelo id e ele ir já completo no formulario para ser feito a alteração.
  // Quando for selecionado o item ira completo e será alterado.
  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    });
  }

  // Essa Função vai atualizar quando o item quando for clicado em SALVAR!
  // Vai atualizar os produtos.
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado!') // Mensagem de quando for atualizado.
      this.router.navigate(["/products"]) // E volta para a tabela de produtos.
    })
  }

  // Para cancelar o buttão
  cancel(): void {
    this.router.navigate(["/products"]); // Quando for clicado para cancelar ele ira voltar para o inicio da pagina.
  }

}