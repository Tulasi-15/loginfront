import axios from "axios";
import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";

export default function Update(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    // const [phone,setPhone] = useState("");
    const [age,setAge] = useState("");

    useEffect(()=>{
        axios.get('https://loginpage-qycs.onrender.com/dashboard/'+id)
        .then(res =>{
            const arr = res.data;
            setName(arr.name);
            setEmail(arr.email);
            // setPhone(arr.phone);
            setAge(arr.age);
        });
    },[])

    const handleSubmit =() =>{
        axios.post('https://loginpage-qycs.onrender.com/updateUser/'+id ,{name , email,age})
        .then(res => navigate('/dashboard/'+id))
        .catch(e=>{
            alert(`enter a valid ${e.response.data.mes}`);    
        });
    }

    return(
        <div className='Bg'>
            <div className="container1">
                <div className='Add_Box'>
                    <input type="text" placeholder="Email" value={email} disabled={true}/>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    {/* <input type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/> */}
                    <input type="text" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}