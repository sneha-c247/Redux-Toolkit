
import { useDispatch,useSelector } from 'react-redux'
import { changeAge  } from './Reducers/userReducer';
import {fetchUserByName} from './action/Action'
import { AppDispatch } from './Store/Type';


interface MyState {
    name: string;
    age: number;
  }
  
const UserProfile = () => {
    const { name, age } = useSelector((state :MyState) => state);
  const dispatch= useDispatch<AppDispatch>();
  function updateAge(age:number){
    // dispatch({type:"UPDATE_AGE",payload : 30})
    dispatch(changeAge(age))
  }
  function updateName(){
    // dispatch({type:"UPDATE_AGE",payload : 30})
    dispatch(fetchUserByName())
  }
 
  
  return (
    <div>
       <h1>Redux Toolkit :-</h1>
      <h2>My Profile </h2>
      <h2>my name is : {name}</h2>
      <h2>my age is : {age}</h2>
      <button onClick={()=>updateAge(45)}>updateAge</button>
      <button onClick={updateName}>updateName</button>
    </div>
  )
}

export default UserProfile
