import {createState, createStore, Store, withProps} from '@ngneat/elf';
import {withEntities} from "@ngneat/elf-entities"

interface UserProps{
  id:number | null;
  name: string;
  email: string;
}
interface User {
  id: number;
  name: string;
  email: string;
}
interface User{}
//criando o estado a ser utilizado na nossa store
const {state, config} = createState(
  withProps<UserProps>({name:'',email:'', id:null}), //setando os valores iniciais dos campos
  withEntities()
)

const userStore = new Store({name: "user", state, config})


