import React, { useState } from 'react';

const SignUp=()=>{
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const collectData=()=>{
        console.warn(name,email,password);
    }

    return(
        <div>
            <h1 className='register'>Register</h1>
            <input type="text" className='inputBox' placeholder='Enter Name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
            <input type="text" className='inputBox' placeholder='Enter E -Mail' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
            <input type="text" className='inputBox' placeholder='Enter Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
            <button type="button" className='appbutton' onClick={collectData}>Sign Up</button>
        </div>
    )};

export default SignUp;    