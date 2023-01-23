import { Component } from '@angular/core';
import { Secondorder } from '../secondmodel/Secondorder';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  // Tu instancies ton objet avec des valeurs initiales
  secondmodel: Secondorder = new Secondorder('' , '', '', '');

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.secondmodel);
  }
}