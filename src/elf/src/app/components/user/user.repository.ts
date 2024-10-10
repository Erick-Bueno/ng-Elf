import {createState, createStore, Store, withProps} from '@ngneat/elf';
import {entitiesPropsFactory, selectAllEntities, selectEntity, withEntities} from "@ngneat/elf-entities"
import {Injectable} from "@angular/core";
import {localStorageStrategy, persistState} from "@ngneat/elf-persist-state";

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address['id']
}
interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
}
interface GlobalProps{
  accessToken: string;
  refreshToken: string;
}
const {addressEntitiesRef, withAddressEntities} = entitiesPropsFactory('address');
//criando o estado a ser utilizado na nossa store
const {state, config} = createState(
  withProps<GlobalProps>({accessToken: "sdasad", refreshToken:"asdsad"}), //setando propriedades globais ao state da minha store
  withEntities<User, "id">({idKey: "id"}), //setando propriedades especificas da minha entidade usuario ao state da minha store
  withAddressEntities<Address>()
)

const userStore = new Store({name: "user", state, config}) //criando store

export const persist = persistState(userStore, {
  key: 'auth',
  storage: localStorageStrategy,        //setando dados no estado do navegador
});

@Injectable()
  export class UserRepository{
  updateUser(user:User){
    userStore.update(state => ({
      ...state , user           //mantem o estado atual e adiciona o user passado
    }))
  }
  getUserById(id:number){
    return userStore.pipe(selectEntity(id))
  }
  getAllEntities(){
    return userStore.pipe(selectAllEntities());
  }
}
