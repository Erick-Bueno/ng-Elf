import {createState, createStore, Store, withProps} from '@ngneat/elf';
import {entitiesPropsFactory, withEntities} from "@ngneat/elf-entities"

interface User {
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
const {userEntitiesRef, withUserEntities} = entitiesPropsFactory('user');
const {addressEntitiesRef, withAddressEntities} = entitiesPropsFactory('address');
interface User{}
//criando o estado a ser utilizado na nossa store
const {state, config} = createState(
  withProps<GlobalProps>({accessToken: "", refreshToken:""}), //setando propriedades globais ao state da minha store
  withEntities<User, "id">({idKey: "id"}), //setando propriedades especificas da minha entidade usuario ao state da minha store
  withAddressEntities<Address>()
)

const userStore = new Store({name: "user", state, config})


userStore.subscribe(u => (console.log(u)));
