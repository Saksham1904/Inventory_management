import React from 'react'
import { useState } from 'react'
import { endpoint } from "../services/api"
import { apiconnector } from '../services/apiconnector'


const Form = () => {
    const[data,setdata]=useState({email:"",password:""})   //helps in changing state
    const changehandler=(event)=>{
        setdata(predata=>{
            return{
               ...predata,
               [event.target.name]:event.target.value
            }
        })
        }
        const {LOGIN_API}=endpoint

        const send=async()=>{
          try{

            const response=await apiconnector("POST",LOGIN_API,data)
            console.log(response)

          }
          catch(error){
            console.log(error)
          }
        }
        const sumbithandler=(event)=>{
            event.preventDefault()
            send();
            
             console.log(data)
             setdata({email:"",password:""})

        }           
  return (   //value is added to maintain state of particular variable as change in usestate lead to rerender the jsx code
    <div>
       <form onSubmit={sumbithandler}>  
        <input type='text' placeholder='name' name='email' onChange={changehandler} value={data.email}></input>
        <input type='password' placeholder='password' name='password' onChange={changehandler} value={data.password}></input>
<button >Sumbit</button>
       </form>
  

    </div>
  )
}

export default Form