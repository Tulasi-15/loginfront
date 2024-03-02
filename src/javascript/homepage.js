import React, { useEffect, useState } from 'react';
import '../css/homepage.css'; // Import your CSS file
import Roc from '../img/rocket.png'
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";


function LoginForm() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const nav=useNavigate();
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("https://loginpage-qycs.onrender.com/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    nav("/dashboard/"+email);
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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

  return (
    <div className="container">
      <div className="inner">
        <form className="areaform" action="#">
          <label><h1 style={{ color: 'purple', marginLeft: '33%' }}>LOGIN</h1></label>
          <input type="text" placeholder="Username" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </form>
        <div className="check">
        <Link to={'SignUp'}>
          <p><label>Sign Up</label></p>
        </Link>
        </div>
          <button type="button" style={{ marginTop: '10px' }} onClick={submit}> LOGIN </button>
      </div>

      <div className="ig">
        <img src={Roc} alt="Rocket" />
      </div>
    </div>
  );
}
export default LoginForm;
