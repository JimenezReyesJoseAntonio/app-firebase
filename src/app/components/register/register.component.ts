import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicializa el formulario reactivo
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    const { email, password } = this.registerForm.value;

    // Validamos que el formulario esté completo y válido antes de enviar
    if (this.registerForm.valid) {
      this.authService.signUp(email!, password!) // Asegúrate que los valores no son nulos
        .then(() => {
          console.log('Registration successful');
          this.router.navigate(['/login']); // Redirige al login después del registro
        })
        .catch(error => {
          console.error('Registration error:', error);
        });
    } else {
      console.error('Form is invalid');
    }
  }
}
