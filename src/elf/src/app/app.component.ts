import {Component, Inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User, UserRepository} from "./components/user/user.repository";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  userRepository = Inject(UserRepository)
  user$?:Observable<User>;
  title = 'elf';


  ngOnInit(): void {
      /*this.user$ = this.userRepository.findById(1)*/ //pegar o usuario
    this.userRepository.getAllEntities().subscribe()
  }
  updateUser(){
    const newUser:User = {
        email: "erickjb93@gmail.com",
        address: 1,
        name: "erick",
        id: 2
    }
    this.userRepository.updateUser(newUser) //atualizar usuario
  }
}
