import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-message-box',
  imports: [],
  templateUrl: './message-box.html',
  styleUrl: './message-box.scss',
})
export class MessageBox {
  title = input ('Confirmar accion');
  message = input('¿Deseas continuar?');
  confirmtext = input('Aceptar');
  canceltext = input('Cancelar');

  confirm = output<void>();
  cancel = output<void>();
}
