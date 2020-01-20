import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveTokenLocal(token: string) {
    localStorage.setItem('token', token);
  }

  deleteTokenLocal() {
    localStorage.removeItem('token');
  }

  getTokenLocal() {
    return localStorage.getItem('token');
  }
}
