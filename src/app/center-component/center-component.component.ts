import { Component, OnInit } from '@angular/core';
import { Publishing } from '../models/Publishing';

@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css'],
})
export class CenterComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  PublishingArray: Publishing[] = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi assumenda tempore ipsam iste veritatis! Facilis, quia odit consectetur, vel autem optio dolorem ducimus atque velit labore quod esse necessitatibus non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ipsam soluta eum laborum, iure vero esse sunt illo optio autem saepe ipsum laboriosam! Necessitatibus, quae! Labore quasi saepe rem.',
      date: '01/02/2007',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi assumenda tempore ipsam iste veritatis! Facilis, quia odit consectetur, vel autem optio dolorem ducimus atque velit labore quod esse necessitatibus non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ipsam soluta eum laborum, iure vero esse sunt illo optio autem saepe ipsum laboriosam! Necessitatibus, quae! Labore quasi saepe rem.',
      date: '01/02/1998',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi assumenda tempore ipsam iste veritatis! Facilis, quia odit consectetur, vel autem optio dolorem ducimus atque velit labore quod esse necessitatibus non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ipsam soluta eum laborum, iure vero esse sunt illo optio autem saepe ipsum laboriosam! Necessitatibus, quae! Labore quasi saepe rem.',
      date: '11/05/2017',
    },
  ];

  active: boolean = false;
  Populares: string = "Populares";

  selectedPublishing: Publishing = new Publishing();
  textInput:string = "";

  isMenuOpen = false;
  isEdit = false;


  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  Ascendente():void {
    this.Populares="Ascendente";
    this.PublishingArray.sort((a: any, b: any) => {
      const fechaA = new Date(a.date.split('/').reverse().join('-'));
      const fechaB = new Date(b.date.split('/').reverse().join('-'));
      return fechaA.getTime() - fechaB.getTime();
    });
  }
  Descendente():void{
    this.Populares="Descendente";
    this.PublishingArray.sort((a: any, b: any) => {
      const fechaA = new Date(a.date.split('/').reverse().join('-'));
      const fechaB = new Date(b.date.split('/').reverse().join('-'));
      return fechaB.getTime()-fechaA.getTime();
    });
  }
  openForEdit(currentPublishing:Publishing):void{
    console.log(this.selectedPublishing)
    this.isEdit = !this.isEdit;
    if(this.isEdit==true){
      this.selectedPublishing = currentPublishing;
    }else{
      this.selectedPublishing = new Publishing();
    }
  }

  addOrEdit():void {
    if (this.selectedPublishing.id === 0) {
      this.selectedPublishing.id = this.PublishingArray.length + 1;
      this.selectedPublishing.text=this.textInput;
      console.log(this.selectedPublishing)
      const fechaActual = new Date();

      const dia = fechaActual.getDate().toString().padStart(2, '0');
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
      const anio = fechaActual.getFullYear().toString();

      const fechaFormateada = `${dia}/${mes}/${anio}`;
      this.selectedPublishing.date = fechaFormateada;
      this.PublishingArray.splice(0, 0, this.selectedPublishing);

    }

    this.selectedPublishing = new Publishing();
    this.active = false;
    this.textInput="";
  }
  delete():void {
    if (confirm('Are you sure you want to delete it?')) {
      this.PublishingArray = this.PublishingArray.filter(
        (x) => x != this.selectedPublishing
      );
      this.selectedPublishing = new Publishing();
      this.isEdit=false;
    }
  }
  changeInput(event: any):void {
    const value = event.target.value;
    if (value == '') {
      this.active = false;
    } else {
      this.active = true;
      console.log(this.selectedPublishing)
    }

  }
}
