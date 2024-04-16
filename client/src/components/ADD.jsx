import React from "react"
import { useState } from "react"

import { endpoint } from "../services/api"
import { apiconnector } from "../services/apiconnector"
import { storage } from "../firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

const ADD=()=>{
     const {ADDINVT_API}=endpoint

    






    const [data,setdata]=useState({name:"",des:"",category:"",price:"",discount:"",quantity:"",image:""})
    const [imageupload,setimage]=useState(null)

    const send=async()=>{
        try{
          const response=await apiconnector("POST",ADDINVT_API,data)
         console.log(response)
        }
        catch(error){
         console.log(error)
        }
     }
    const sumbithandler=(event)=>{
        event.preventDefault()
        console.log(data)
        changehandle()
        console.log(data)
        send()
    }
    const changehandler=(event)=>{
      setdata(predata=>{
        return{
            ...predata,
            [event.target.name]:event.target.value
        }
      })
    }
    const changehandle=async()=>{
       if(imageupload==null) return
       const imageref=ref(storage,`images/${imageupload.name}`)
     
   await  uploadBytes(imageref,imageupload).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
            setdata(predata=>{
                return{
                    ...predata,
                    image:url
                }
            })
           
        })
            
         })
       

    }
    
 
    return (
        <div>
            <form onSubmit={sumbithandler} >
                <input type="text" placeholder="PRODUCT NAME" name="name" value={data.name} onChange={changehandler}/>
                <input type="text" placeholder="Product Price" name="price" value={data.price} onChange={changehandler}/>
                <input type="textarea" placeholder="Description" name="des" value={data.des} onChange={changehandler}/>
                <input type="number" placeholder="Quantity" name="quantity" value={data.quantity} onChange={changehandler}/>
                <input type="file" placeholder="ADD PRODUCT IMAGE" name="imageupload" onChange={(event)=>{setimage(event.target.files[0])}}/>
               
                <input type="text" placeholder="CATEGORY" name="category" value={data.category} onChange={changehandler}/>
                <input type="text" placeholder="DISCOUNT" name="discount" value={data.discount} onChange={changehandler}/>
                <button>SUMBIT</button>
                

            </form>
        </div>
    )

}
export default  ADD
