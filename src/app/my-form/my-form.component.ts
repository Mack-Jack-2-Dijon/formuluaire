import { Component } from '@angular/core';
import { Order } from '../model/Order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})

export class MyFormComponent {
  // Tu instancies ton objet avec des valeurs initiales
  model: Order = new Order('' , 0, new Date(), '');

  constructor() {}

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
