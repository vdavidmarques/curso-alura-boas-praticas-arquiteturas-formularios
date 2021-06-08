import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {first, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario)=> //switchMap para trocar o fluxo
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste)=> //map para trocar o resultado
          usuarioExiste ? {usuarioExistente: true} : null
        ),
        first()  //para encerrar o Observable, o fluxo
      );
    };
  }
}
