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
  title = 'elf';
  constructor(private  readonly  userRepository: UserRepository) {
  }


  ngOnInit(): void {
    this.userRepository.selectEntities()
  }
  updateUser(){
    this.userRepository.updateUser() //atualizar usuario
  }
}
