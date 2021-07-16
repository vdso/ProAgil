import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;


  constructor(private http: HttpClient) { }

  //executado antes do html ser montado
  ngOnInit() {
    this.getEventos();

  }

  //Chamada de dados para a API
  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.eventos = response;
    }, error =>{
      console.log(error);
    });
  }

}
