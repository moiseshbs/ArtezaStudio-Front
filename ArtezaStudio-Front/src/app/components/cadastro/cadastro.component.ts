import { Component } from '@angular/core';
import { Usuario, UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  usuario: Usuario = {
    nome: '',
    username: '',
    email: '',
    senha: '',
    ImagemPerfilUrl: 'https://i.pinimg.com/474x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg'
  };

  constructor(private usuarioService: UsuarioService) { }

  cadastrar() {
    this.usuarioService.cadastrar(this.usuario).subscribe({
      next: (res) => {
        console.log('Cadastro realizado com sucesso!', res);
      },
      error: (err) => {
        console.error('Erro ao cadastrar:', err);
        console.log('Detalhes do erro:', err.error?.errors);
      }
    });
  }
}
