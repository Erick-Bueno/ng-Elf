import {createStore, select, withProps} from "@ngneat/elf";
import {selectAllEntities, setEntities, withEntities} from "@ngneat/elf-entities";
import {Injectable} from "@angular/core";

export interface User {
  id: number,
  email: string
}
interface Jwt{
  accessToken: string;
  refreshToken: string;
}

//setando a store e inicializando os campos
/*
no vuex seria:
const store = createStore({
state: {
    user:{
      id:null,
      email:""
    }
  }
})

* */
const store = createStore(
  {name: "user"},
  withProps<Jwt>({accessToken:"", refreshToken:""}), //propriedades mais simples e q são meio gerais
  withEntities<User>({idKey: "id"}) //utilizar quando trabalhamos com uma listagem por exemplo, lista de usuarios
);
@Injectable({providedIn: "root"})
export class UserRepository {
  user$ = store.pipe(select((state) => state));

  /*

  equivalente a mutation do vuex
    mutations: {
    UPDATE_USER(state, user) {
      state.user = user;
    }

  * */

  updateUser() {
    store.update(
      setEntities([
        {id:1, email:"test@test.com"},
        {id:2, email:"test@test.com"},
        {id:3, email:"test@test.com"},
      ])
    )
  }
  selectEntities(){
    return store.pipe(selectAllEntities()).subscribe((entities) => {
      console.log(entities);
    });
  }
}
