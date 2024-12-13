import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getmessage(): string{
    return "Hello, This is Service Implementation";
  }
}
