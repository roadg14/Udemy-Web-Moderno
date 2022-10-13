import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //isError -> é para mostrar uma mensagem de erro e a class: msg-error esta em style.css.
  showMessage(msg: string, isError: boolean = false): void { // Quando o cadastro for finalizado vai aparecer uma mensagem dizendo que foi concluida.
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] // PanelClass -> Para as mensagems de Sucesso Ou Error CSS/style.css ONDE ESTA esse Class.
    })
  }

  // Essa função vai ser responsavel por inserir um novo produto no backend.
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe( // o pipe. vai obter que vai um map. vai obter obj.
      map(obj => obj), // Em caso de erro quando for enviar para o backend vai cair nesse catchError.
      catchError(e => this.errorHandler(e)) // catchError -> que vai chama a função que está com a mensagem de Erro.
    )
  }

  // Esse metodo vai ser o responsavel para ler os produtos cadastrados no backend.
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  
  // Busca de ID pra que quando for selecionado só oque voce deseja editar.
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  // Esse metodo de Editar e de delete.
  // Metodo de update. atualizar sempre que for clicado.
  update(product: Product): Observable<Product> { // Vai ler os produtor e selecionar eles quando for editados.
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product )
  }

  // Metodo de Delete.
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

  // função com a mensagem de erro!
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
