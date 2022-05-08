import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({item, handleDelete}) => {
  const navigate = useNavigate();
    const{supplierName, productName, price,_id, quantity}=item
    const handleSeeMore =(id)=>{
      navigate(`/inventory/${id}`);
    }
    return (
        <tr>
          <td>{productName}</td>
          <td>{supplierName}</td>
          <td>{price}</td>
          <td>{quantity>0 ? quantity:'sold out'}</td>
          <td className='d-flex justify-content-around'> <button  onClick={()=>handleSeeMore(_id)} className='btn btn-link'>Update</button> <button className='btn btn-danger'><AiFillDelete  className=' mx-auto text-center'  onClick={()=>handleDelete(_id)}/></button> </td>
        </tr>
    );
};

export default AllProduct;