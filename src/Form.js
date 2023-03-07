import React, { useEffect, useState } from 'react'

function Form() {
  const data={name:"",email:"",password:""}; 
  const [inputData,setInputData]=useState(data)
  const [flag,setFlag]=useState(false)
  useEffect(()=>{
     console.log("registered")
  },[flag])
  function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }
  function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name|| !inputData.email|| !inputData.password){
        alert("all fields are mandatory")
    }
    else{
        setFlag(true)

    }
  }
    return (
        <>
        <pre>
        {flag ? (<h1 className='ui-define'>Hello {inputData.name},You have registered successfully</h1>) : null}

        </pre>

   <form className='container' onSubmit={handleSubmit}>
    <div className="header">
        <h1 className='register'>Registration Form</h1>
    </div>

   <div className="all">
   <div className='text'>
<input type="text" placeholder='Enter Yor Name' name="name" id="" value={inputData.name} onChange={handleData} />
    </div>

    <div className='email'>
<input type="email" placeholder='Enter Yor email' name="email" id=""value={inputData
    .email} onChange={handleData} />
    </div>

    <div className='password'>
<input type="password" placeholder='Enter Yor Password' name="password" id="" 
 value={inputData.password} onChange={handleData}/>
    </div>

    <div className='submit'>
        <button type='submit'>Submit</button>
    </div>
   </div>

   </form>
   </>
  )
}

export default Form
