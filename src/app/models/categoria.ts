import { Filmes } from "./filmes";

export abstract class CategoriaBase {

  constructor(
    public nome: string,
  ) {
  }
}

export class Categoria extends CategoriaBase {

  constructor(
    public _id: string,
    nome: string
  ) {
    super(nome); // Chamando o construtor da classe base com o parâmetro 'nome'
  }

}

export class CategoriaDetalhes extends CategoriaBase {

  constructor(
    public filmes: Filmes[],
    nome: string
  ) {
    super(nome); // Chamando o construtor da classe base com o parâmetro 'nome'
  }

}
