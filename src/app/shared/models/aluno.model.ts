import { Deserializable } from "./deserializable.model"

export class Aluno  implements Deserializable{
    id?:number
    nome_completo?:string
    nome_pai?:string
    nome_mae?:string
    telefone?:string
    telefone_encarregado?:string 
    morada?:string
    genero?:string
    bi?:string
    nascimetno?: Date
    updated_at?: Date
    elimanado?:boolean

    deserialize(input: any): this {
        return Object.assign(this,input)
    }


}
