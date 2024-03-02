import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from "axios";
function Dashboard() {
    const {id} = useParams();
    console.log(id);
    const [name , setName] =useState('');
    const [age , setAge] = useState('');
    const [email,setEmail]=useState('')

    useEffect(()=>{
        axios.get('https://loginpage-qycs.onrender.com/dashboard/'+id)
        .then(res => {
            console.log(res.data.name);
            setAge(res.data.age);
            setName(res.data.name);
            setEmail(res.data.email);
        });
    },[])
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <div>
        
        <p className='dash'><b>Name:</b><span>{name}</span></p>
        <p className='dash'><b>Email:</b><span>{email}</span></p>
        <p className='dash'><b>Age:</b><span>{age}</span></p>
        <div className='dash'>
        <Link to={`/updateUser/${email}`}><button className="button capitalize">update</button></Link>
        <Link to={`/`}><button className="button capitalize">Logout</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
