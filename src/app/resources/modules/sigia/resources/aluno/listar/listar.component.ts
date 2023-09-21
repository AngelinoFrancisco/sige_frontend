import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/shared/models/aluno.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  isLoading:boolean = false;
  reclamations:Array<Aluno> = []
  totalBase:number =  0;

  filtro = {
    page: 1,
    perPage: 5,
    search: ''
  }

  //public pagination =  new Pagination()
  public without:boolean =  true


  constructor(){}


  ngOnInit(): void {
    this.buscarReclamation()
  }

  buscarReclamation(){
   }

  filtrarPagina(key:string, $e:any){
    if(key==='page'){
      this.filtro.page = $e; 
    }else if(key==='perPage'){
      this.filtro.perPage = $e.target.value
    }else if(key==='search'){
      this.filtro.search = $e;
    }

    this.buscarReclamation()
  }
  recarregarPagina(){
    this.filtro.page = 1;
    this.filtro.perPage = 5;
    this.filtro.search = '';
    this.buscarReclamation()
  }
 
}
