import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supermercado',
  templateUrl:'./supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent {
  Comprar(){
    Swal.fire({
      title: "Voce deseja comprar esse Produto",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado ao carrinho", "Sucess");
      } else if (result.isDenied) {
        Swal.fire("Erro adiconar no carrinho ", "", "error");
      }
    });  }
}


