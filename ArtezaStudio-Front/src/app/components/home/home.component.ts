import { Component, inject } from '@angular/core';
import { SubmitService } from '../../services/submit.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private submitService = inject(SubmitService);
  booleano = false;

  atualizaBool(valor: boolean) {
    this.booleano = valor;
  }

  submit() {
    
  }
}
