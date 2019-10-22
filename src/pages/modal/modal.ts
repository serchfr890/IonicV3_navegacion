import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre:string = "";
  edad:number = 0;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.nombre = this.navParams.get('nombre');
    this.edad = this.navParams.get('edad');
    console.log(this.edad);
    console.log(this.nombre);
  }

  cerrar_con_paramteros() {
    let data = {
      nombre: 'Sergio Flores',
      edad:25,
      coords: {
        lat: 10,
        lng: -10
      }
    };
    this.viewCtrl.dismiss(data);
  }
  cerrar_sin_parametros() {
    this.viewCtrl.dismiss();
  }

}
