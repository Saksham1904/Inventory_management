import React, { useEffect, useState } from 'react'
import Sidescroll from './Sidescroll'
import {  deletecategory, getcategorydata } from '../services/operations2';
import Deleteprompt from './Deletionprompt';
import Addcategory from './Addcategory';



const Category = () => {
    const[refresh,setrefresh]=useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
 const[id,setid]=useState(null)
   
    const heading = [
        { key: "name", label: "CATEGORY NAME" },
        { key: "price", label: "TOTAL PRODUCT" },
      
      ];
      const [data,setdata]=useState(null)
      useEffect(()=>{
            async function fetch(){
                const res=await getcategorydata()
                console.log(res)
                setdata(res)
            }
            if(refresh){
                fetch()
                setrefresh(false)
            }
           
      },[refresh])

      const handledelete=async()=>{
           console.log(id)
           await deletecategory(id)
           setrefresh(true)
      }
     
  return (
    <div className="flex bg-steelwhite">
    <Sidescroll />
    <div className="w-3/4 p-4">
      <Addcategory setrefresh={setrefresh}/>
    
    
  

       
       <div className="flex flex-col mt-9 max-w-6xl ml-8 overflow-hidden">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y  divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    {heading.map((item, index) => (
                      <th
                        key={index}
                        value={item.label}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium w-8 text-gray-500 uppercase tracking-wider"
                      >
                        {item.label}
                      </th>
                    ))}

                    <th scope="col" className="relative w-3 px-6 py-3">
                      <span className="sr-only">DELETE</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {(data==null)?null:data.map((data) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-wrap">
                        
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {data.category_name}
                        
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.total_products}
                      </td>
                    
                      
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            setIsModalOpen(true)
                            setid(data.category_id)
                            
                          }}
                        >
                          DELETE
                        </button>
                        <Deleteprompt isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onDelete={()=>handledelete()} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> 
      </div> 
     </div>
     </div>
   
  )
}

export default Category