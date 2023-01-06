import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {


  public imagenes:any={};
  public titulo:string='';
  public precio:number=0;
  public descripcion:string='';
  public id:number=0;



  constructor(private router:ActivatedRoute , private routerr: Router) { }

  ngOnInit() {
    this.router.params.subscribe(parametros =>{
      this.titulo = parametros['titulo']
    })

    this.router.queryParams.subscribe(parametros =>{
      this.precio = parametros['precio'] || 'Sin precio';
      this.descripcion = parametros['descripcion'] || 'Sin descripcion';
      this.id = parametros['id'] || 'Sin id';
    })

    this.imagenes = this.routerr.getCurrentNavigation()?.extras.state as object;

  }

}
