import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    function validateForm() {
        let x = document.forms["myForm"]["First_Name"].value;
        if (x === "") {
          alert("First name should be filled");
          return false;
        }
        let y = document.forms["myForm"]["Last_Name"].value;
        if (y === "") {
            alert("Last name must be filled ");
            return false;
          }
        let z = document.forms["myForm"]["email_address"].value;
        if (z === "") {
            alert("email must be filled");
            return false;
          }
        let a = document.forms["myForm"]["password"].value;
        if (a === "") {
            alert("password must be filled");
            return false;
          }
      }

    const [userRegister, setUserRegister] = useState ({
        First_Name:"",
        Last_Name:"",
        email_address:"",
        Password:""
    });

    const[records, setRecords]= useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        setUserRegister({...userRegister, [name] : value });
    }

    const handleSubmit = (ev) =>{
        ev.preventDefault();

        const newRecord = {...userRegister, id: new Date().getTime.toString() }
        console.log(records);
        setRecords([...records, newRecord])
        console.log(records);

        setUserRegister({ First_Name:"", Last_Name:"", email_address:"", Password:""});
    }


  return (
    <body className='box'>
    <div >
    <form action="" onSubmit={validateForm} name="myForm">
        <div className='si'>Sign up</div>
        <div>
            <label htmlFor='First_Name' className='be'>First Name</label>
        </div>
        <input type=""
        placeholder='First Name' 
        autoComplete='off' 
        value={userRegister.First_Name} 
        onChange={handleInput} 
        name="First_Name" 
        id="First_Name" 
        className="te"
        ></input>


        <div>
            <label htmlFor='Last_Name' className='be'>Last Name</label>
        </div>
        <input type=""
        placeholder='Last Name' 
        autoComplete='off' 
        value={userRegister.Last_Name} 
        onChange={handleInput} 
        name="Last_Name" 
        id="Last_Name" 
        className="te"
        ></input>


        <div>
            <label htmlFor='email_address' className='be'>email address</label>
        </div>
        <input type=""
        placeholder='email' 
        autoComplete='off'
        value={userRegister.email_address} 
        onChange={handleInput} 
        name="email_address" 
        id="email_address" 
        className="te"></input>


        <div>
            <label htmlFor='Password'className='be' >Password</label>
        </div>
        <input type="password"
        placeholder='password' 
        autoComplete='off' 
        value={userRegister.Password} 
        onChange={handleInput} 
        name="Password" 
        id="Password" 
        className="te"
        ></input>


       
        <button type="submit" className="bu">Sign up</button>       

    </form>
   
    </div>
    </body>
  )
}

export default Login



