import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const AllProduct = ({item, handleDelete}) => {
    const{supplierName, productName, price,_id, quantity}=item
    return (
        <tr>
          <td>{productName}</td>
          <td>{supplierName}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td className='btn bg-danger mx-auto text-center' onClick={()=>handleDelete(_id)}><AiFillDelete/></td>
        </tr>
    );
};

export default AllProduct;