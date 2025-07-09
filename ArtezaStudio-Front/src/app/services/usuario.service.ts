import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  nome: string,
  username: string,
  email: string,
  senha: string,
  ImagemPerfilUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:7037/api/Usuario';

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastrarUsuario`, usuario)
  }
}
