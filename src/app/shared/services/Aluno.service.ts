import { Injectable } from '@angular/core';
 

import { Observable, debounceTime, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenteReclamationService {

  public api:string= '/api/v1';
  public base:string = `${this.api}/portal-agente/agente/reclamacao`

  constructor(private httpApi:HttpClient) { }

  listar(pessoaId:number,filtro:any):Observable<any>{
    return this.httpApi
      .get(`${this.base}/${pessoaId}`)
      .pipe(
        debounceTime(500),
        map((response:Object)=>{
            return Object(response).object
        })
      )
  }

  registar(item:any):Observable<any>{
    return this.httpApi 
            .post(`${this.base}`,item)
            .pipe(
              debounceTime(500),
              map((response:Object)=>{
                return Object(response).object
              })
            )
  }
  public item(pessoaId:number,id:number):Observable<any>{
    return this.httpApi.get(`${this.base}/agente/${pessoaId}/${id}`)
                .pipe(
                  debounceTime(500),
                  map((response:Object)=>{
                    return Object(response).object
                  })
                )
  }
  public delete(pessoaId:number,id:number):Observable<any>{
    return this.httpApi.delete(`${this.base}/agente/${pessoaId}/${id}`)
                .pipe(
                  debounceTime(500),
                  map((response:Object)=>{
                    return Object(response).object
                  })
                )
  }

}
