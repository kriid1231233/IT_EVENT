import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {
  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    password: '********'
  };

  confirmPassword = '';  // Campo para la confirmación de la contraseña
  originalPassword = '********';  // La contraseña original que se mostrará de forma enmascarada
  isEditing = false;  // Estado para el modo edición
  passwordType = 'password';  // Tipo de campo de contraseña (oculto por defecto)

  constructor() { }

  // Habilitar el modo de edición
  enableEditing() {
    this.isEditing = true;
    this.confirmPassword = '';  // Limpiar el campo de confirmación cuando se entra en edición
  }

  // Guardar el perfil y deshabilitar el modo edición
  saveProfile() {
    if (this.passwordsMatch) {
      console.log('Perfil guardado', this.user);
      this.isEditing = false;
    } else {
      console.error('Las contraseñas no coinciden.');
    }
  }

  // Cancelar edición y restaurar los valores originales
  cancelEditing() {
    this.isEditing = false;
    this.user.password = this.originalPassword;  // Restaurar la contraseña original
    this.confirmPassword = '';  // Limpiar el campo de confirmación
    console.log('Edición cancelada');
  }

  // Validar que las contraseñas coincidan
  get passwordsMatch(): boolean {
    return this.user.password === this.confirmPassword;
  }

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  ngOnInit() {
  }

}
