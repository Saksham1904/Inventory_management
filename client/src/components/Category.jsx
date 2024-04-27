import React, { useEffect, useState } from 'react'
import Sidescroll from './Sidescroll'
import {  deletecategory, getcategorydata } from '../services/operations2';



const Category = () => {
    const[refresh,setrefresh]=useState(true)
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
      const handleclick=async(id)=>{
           await deletecategory(id)
           setrefresh(true)
      }
     
  return (
    <div>
        <div className="flex">
      <div className="w-1/2 ">
        
        <Sidescroll />
      </div>
      <div className="w-1/9 ">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y  divide-gray-200">
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
                            handleclick(data.category_id);
                          }}
                        >
                          DELETE
                        </button>
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
        </div>
   
  )
}

export default Category