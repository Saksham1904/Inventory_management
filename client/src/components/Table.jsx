import React, { useEffect, useState } from "react";
import { deleteproduct } from "../services/operation";
import Popup from "./Popup";
import { addsales } from "../services/operations2";
import toast from "react-hot-toast";


const Table = (props) => {
  const heading = props.heading;
  const data = props.data;

  const [sale, setsale] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (data) => {
    setsale(data);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (value, date) => {
    

    const totalprice = sale.price * value;
    if (sale.quantity < value) {
      toast.error("QUANTITY EXCEED")
      return;
    }
    const currquantity=sale.quantity-value
  //function call for sale table
    await addsales(sale.name, sale.id,currquantity,value, totalprice, date.toDateString());
    setsale(sale.quantity=currquantity)
  };

  async function handleclick(id) {
    alert(" ARE YOU SURE WANT TO DELETE");

    const res = await deleteproduct(id);
    if (res) {
      props.setproduct(data.filter((product) => product.id !== id));
    }
  }
  return (
    <div>
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

                    <th scope="col" className="relative w-6 PX-6 py-3">
                      <span className="sr-only">SALE</span>
                    </th>
                    <th scope="col" className="relative w-3 px-6 py-3">
                      <span className="sr-only">DELETE</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((data) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-wrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={data.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {data.name}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.price}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                        {data.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.discount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.category_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            handleOpen(data);
                          }}
                        >
                          ADD SALE
                        </button>
                        <Popup
                          isOpen={isOpen}
                          onClose={handleClose}
                          onSubmit={handleSubmit}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            handleclick(data.id);
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
  );
};

export default Table;
