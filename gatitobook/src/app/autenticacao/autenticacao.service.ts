//O serviço implementa regras de negócio. Ex: Comunicação com o backend
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';//serviço padrão do angular que se comuninca com o backend
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar( usuario: string, senha: string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    });
  }
}
