import {createState, createStore, withProps} from '@ngneat/elf';

interface UserProps{
  name: string;
  email: string;
}

const {state, config} = createState(
  withProps<UserProps>({name:'',email:''})
)
