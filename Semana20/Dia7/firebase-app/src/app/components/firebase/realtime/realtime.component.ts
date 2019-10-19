import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference, DataSnapshot } from '@angular/fire/database/interfaces';

// 3. importando clases para formularios reactivos 
import { FormGroup, FormControl, Validators } from '@angular/forms';

// s7 importar servicio del storage
import { AngularFireStorage } from '@angular/fire/storage';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {
  //s10 variables para la carga de imagen
  imgURL;

  // 17
  modoTabla: boolean = true;
  //4.  variable que va a representar a todo el formulario
  formulario: FormGroup;

  refUsuarios: DatabaseReference;
  listaUsuarios: Array<any>
  // s9 agregamos storage
  constructor(private _realtime: AngularFireDatabase, private zone: NgZone, private _storage: AngularFireStorage) {
    this.refUsuarios = this._realtime.database.ref("usuarios");
    //  5. inicializando el formulario reactivo
    this.formulario = new FormGroup({
      // 9. validadores Validators.required
      "campo_nombre": new FormControl('', Validators.required),
      "campo_apellido": new FormControl('', Validators.required),
      // img colocamos null
      "campo_imagen": new FormControl(null, Validators.required),
      "campo_email": new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")])
    });
  }

  // 8. evento submit del formulario reactivo
  onSubmit(miimg) {
    console.log(miimg.files[0]);
    // 14
    Swal.fire({
      title: 'Espere',
      text: 'Estamos creando registros',
      type: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,

    });

    // imprimiendo todo el objeto formulario
    console.log(this.formulario);
    // obtener el objeto usuario del formulario
    console.log(this.formulario.value);
    // obtener la referencia al input del email y si adicionamos value nos muestra el valor
    console.log(this.formulario.get('campo_email').value);

    //armar el objeto para enviarlo a firebase
    // 13.1 crear un ID a partir de la referencia al nodo 'usuarios'
    let key = this.refUsuarios.push().key;

    // subir la imagen a firebase

    let archivo = miimg.files[0];
    const tarea = this._storage.upload(key, archivo);
    tarea.then(() => {

      // en este scope la imagen ya se subio con el nombre de la key generada



      // para obtener el link de descarga de mi imagen
      this._storage.ref(key).getDownloadURL().subscribe((url_imagen) => {
        // console.log(key);
        // 13.2 crear una referencia al nodo 'usuarios'=>'key'
        let refKey = this.refUsuarios.child(key);
        // 13.3 enviar el objeto usuario a su referencia
        refKey.set({
          nombre: this.formulario.get('campo_nombre').value,
          apellido: this.formulario.get('campo_apellido').value,
          email: this.formulario.get('campo_email').value,
          imagen: url_imagen,
        }).then(() => {
          // 15
          console.log("Datros creados correctamente");
          Swal.fire({
            title: 'Exito!',
            text: 'Registro creado correctamente',
            type: 'success',
            timer: 1000
          });
          // 16..
          // reset limpia todos los campos luego de agragra el formulario
          // this.formulario.reset();
          // si queremos limpiar pero mantener el valor de un campo
          // this.formulario.reset({
          //   "campo_imagen": 'sin-imagen'
          // });
          this.formulario.reset();
        })

      })
    });




  }

  ngOnInit() {
    // console.log(this.refUsuarios.key);
    //  this.traerDataConOnce();
    // this.traerDataConOn();
    this.traerUsuariosConOn();
  }

  // // trae la data con la funcion 'on' e itera los objetos con un ciclo FOREACH
  traerUsuariosConOn() {
    this.refUsuarios.on('value', (UsuariosSnap: DataSnapshot) => {

      let usuariosTmp = []
      UsuariosSnap.forEach((usuario) => {
        let objUsuarioTmp = {
          id: usuario.key,
          nombre: usuario.val().nombre,
          apellido: usuario.val().apellido,
          imagen: usuario.val().imagen
        }

        console.log(objUsuarioTmp);
        usuariosTmp.push(objUsuarioTmp);
      })
      // el servicio zone, sirve para ejecutar una tarea sincrona en la zona angular 
      // zona algular=>cualquier componente visual de angular
      this.zone.run(() => {
        this.listaUsuarios = usuariosTmp;
      })
      console.log(this.listaUsuarios);
    })
  }

  // trae la data con la funcion 'on' e itera los objetos con un ciclo FOR IN  
  traerDataConOn() {
    this.refUsuarios.on('value', (data: DataSnapshot) => {
      let objUsuarios = data.toJSON()
      // iterando un objeto
      for (const key in objUsuarios) {
        console.log(objUsuarios[key]);
      }
    })
  }

  traerDataConOnce() {
    this.refUsuarios.once('value').then((data: DataSnapshot) => {
      // console.log(data.toJSON());
      let objUsuarios = data.toJSON()
      // iterando un objeto
      for (const key in objUsuarios) {
        console.log(objUsuarios[key]);
      }
    })
  }

  eliminarUsuario(id) {
    // para una sub referencia child
    // db -> usuarios-> id(del registro a borrar)

    // console.log(id);
    Swal.fire({
      title: 'Borrar Registro',
      text: '¿Seguro que quiere eliminar el registro?',
      type: 'question',
      showCancelButton: true,
    }).then(rpta => {
      if (rpta.value) {
        this.refUsuarios.child(id).remove().then(() => {
          Swal.fire({
            title: 'Exito',
            text: 'Registro elimado correctamente',
            type: 'success',
            timer: 1500,
          })
        })
      }
    })


  }

  // s8
  previsualizarFoto(event) {
    // console.log(this.formulario.get("campo_imagen"));
    let archivo = event.target.files[0];
    let reader = new FileReader();
    // this.imagePath= event.target.files;
    reader.readAsDataURL(archivo);
    reader.onload = () => {
      this.imgURL = reader.result;
      console.log(this.imgURL);

    }

  }
}
