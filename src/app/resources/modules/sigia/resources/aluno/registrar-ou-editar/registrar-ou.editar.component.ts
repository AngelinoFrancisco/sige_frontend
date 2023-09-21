import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sigia-registrar-ou-editar',
  templateUrl: './registrar-ou.editar.component.html',
  styleUrls: ['./registrar-ou.editar.component.scss']
})
export class RegistrarOuEditarComponent implements OnInit  {

  
simpleForm!:FormGroup

constructor(private fb:FormBuilder, ){}

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.simpleForm = this.fb.group({
      nome_completo:['', Validators.required],
      genero:['', Validators.required],
      nascimento:['', Validators.required],
      morada:['', Validators.required],
      bi:['', Validators.required],
      nome_pai:['', Validators.required],
      nome_mae:['', Validators.required],
      telefone:['', Validators.required],
      telefone_encarregado:['', Validators.required],
    })
  }


  onSubmit(){
    if(this.simpleForm.invalid){
      alert("Dados mal preenchidos!")
      return
    }
    console.log("data :>", this.simpleForm.value)

  }
  onCancel(){
    this.simpleForm.reset

  }
  onSelectFile(evt:any){
  }   
    
}
