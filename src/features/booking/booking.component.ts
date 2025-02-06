import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Component({
  selector: 'app-booking',
  imports: [MatCardModule, MatIconModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  contactForm: FormGroup;
  statusMessage: string | null = null;
  statusClass: string = 'status-message-invalid';

  private formspreeUrl = 'https://formspree.io/f/xkgogkzl';

  nameError = signal('');
  messageError = signal('');
  emailError = signal('');

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    merge(this.contactForm.statusChanges, this.contactForm.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.formspreeUrl, this.contactForm.value, {
        headers: { Accept: 'application/json' }
      }).subscribe(
        () => {
          this.statusMessage = 'Az emailt sikeresen eküldtük!';
          this.statusClass = 'status-message';
          this.contactForm.reset();
          Object.keys(this.contactForm.controls).forEach(key => {
            this.contactForm.get(key)?.setErrors(null);
          });
        },
        (error) => {
          console.error(error);
          this.statusMessage = 'Valami baj történt! Kérem próbálja újra!';
          this.statusClass = 'status-message-invalid';
        }
      );
    }
  }

  updateErrorMessage() {
    console.log('itt')
    if (this.contactForm.get('name')?.hasError('required')) {
      this.nameError.set('Kötelező mező');
    } else {
      this.nameError.set('');
    }

    if (this.contactForm.get('message')?.hasError('required')) {
      this.messageError.set('Kötelező mező');
    } else {
      this.messageError.set('');
    }

    console.log(this.contactForm.get('email'))

    if (this.contactForm.get('email')?.hasError('required')) {
      this.emailError.set('Kötelező mező');
    } else if (this.contactForm.get('email')?.hasError('email')) {
      this.emailError.set('Hibás email cím (pl. abc@pelda.hu)');
    }
    else {
      this.emailError.set('');
    }
  }
}
