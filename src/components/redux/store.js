import { createStore } from 'redux'
import rootReducer from './reducers/Reducer'


// const store = createStore(rootReducer);


function saveToLocalStorage(state)
{
  console.log("inside saveToLocalStorage");
  try{
    const serializedState=JSON.stringify(state)
    localStorage.setItem('state',serializedState)

  }catch(e)
  {
  console.log("inside  catch saveToLocalStorage",e);
  }
}


function loadFromLocalStorage()
{
  console.log("inside loadFromLocalStorage");
  try{
    const serializedState=localStorage.getItem('state')
    if(serializedState==null)return undefined
    return JSON.parse(serializedState)
  }catch(e)
  {
  console.log("inside catch loadFromLocalStorage",e);
  }
}

const persisteState=loadFromLocalStorage()

const store=createStore(rootReducer,
persisteState);
store.subscribe(()=>saveToLocalStorage(store.getState()))


export default store;