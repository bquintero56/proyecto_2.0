import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { filter} from 'rxjs/operators'


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  nombre: string;
  email: string;
  genero: string;
  status: string;
  id: string;
  cargando: boolean;


  constructor(private aRoute: ActivatedRoute, private usuarioService: UsuarioService) {
   this.nombre = "";
    this.email ="";
    this.genero = "";
    this.status = "";
    this.id = "";
    this.cargando =true;
    this.aRoute.queryParams.pipe(filter(params => params.id)).subscribe(Params =>{
      console.log(Params.id)
      this.id = Params.id;

    })
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.nombre = data.data.name;
      this.email = data.data.email;
      this.genero = data.data.gender;
      this.status = data.data.status;
      this.cargando = false;
      
      
    })

  }


  ngOnInit(): void {

  }

}
