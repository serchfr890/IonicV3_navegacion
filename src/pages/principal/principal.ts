import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../index.paginas'

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;
  constructor(public navCtrl: NavController) {
  }

  navegar_pagina() {
    this.navCtrl.push( Pagina2Page);
  }

}
