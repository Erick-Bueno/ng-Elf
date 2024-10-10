import {createState, createStore, Store, withProps} from '@ngneat/elf';

interface UserProps{
  name: string;
  email: string;
}

const {state, config} = createState(
  withProps<UserProps>({name:'',email:''})
)

const userStore = new Store({name: "user", state, config})


