import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}

  public errorAlert(htmlMessage: string, buttonText: string): void {
    Swal.fire({
      title: '',
      icon: 'error',
      html: htmlMessage,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: buttonText,
      width: 300,
      confirmButtonColor: '#3b4559',
      customClass: {
        confirmButton: 'btn-sweet',
      },
    });
  }
  public successAlert(htmlMessage: string, buttonText: string): void {
    Swal.fire({
      title: '',
      icon: 'success',
      html: htmlMessage,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: buttonText,
      width: 300,
      confirmButtonColor: '#3b4559',
      customClass: {
        confirmButton: 'btn-sweet',
      },
    });
  }
  public warningAlert(htmlMessage: string, buttonText: string): void {
    Swal.fire({
      title: '',
      icon: 'warning',
      html: htmlMessage,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: buttonText,
      width: 300,
      confirmButtonColor: '#3b4559',
      customClass: {
        confirmButton: 'btn-sweet',
      },
    });
  }
}
