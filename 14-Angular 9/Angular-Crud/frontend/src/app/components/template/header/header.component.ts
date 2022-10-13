import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }


  // METODOS GET's
  get title(): string {
    return this.headerService.headerData.title // Assim que se chamar o titulo para que sejá alterado. Usando o HeaderService.
  }

  get icon(): string {
    return this.headerService.headerData.icon // Assim que se chamar o titulo para que sejá alterado. Usando o HeaderService.
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl // Assim que se chamar o titulo para que sejá alterado. Usando o HeaderService.
  }
}
