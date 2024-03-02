import Roc from '../img/rocket.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

export default function Signup(){
  const nav=useNavigate();
  const [name , setName] =useState('');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [age , setAge] = useState('')
  async function submit(e){
    e.preventDefault();
    try{

        await axios.post("https://loginpage-qycs.onrender.com/SignUp",{
            email,password,age,name
        })
        .then(res=>{
           console.log(res);
            if(res.data=="exist"){
                alert("User already exists")
            }
            else if(res.data=="notexist"){
              alert("User Created")
                nav("/")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);
    }

}
    return(
    <div className="container">
    <div className="inner">
      <form className="areaform" action="post">
        <label><h1 style={{ color: 'purple', marginLeft: '33%' }}>SignUp</h1></label>
        <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="Age" onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        {/* <input type="password" placeholder="Confirm Password" /> */}

        <button type="button" style={{ marginTop: '10px' }} onClick={submit}> SIGNUP</button>
      </form>
      <div className="check">
        <Link to={'/'}>
        <p><label>login</label></p>
        </Link>
        
      </div>
    </div>

    <div className="ig">
      <img src={Roc} alt="Rocket" />
    </div>
  </div>
  )
}