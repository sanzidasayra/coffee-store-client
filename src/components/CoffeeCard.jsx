import React from 'react';
import { AiTwotoneEye } from 'react-icons/ai';
import { FiEdit2, FiEye } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {photo, name, price, quantity, _id} = coffee;

const handleDelete = (_id) => {
    console.log(_id)

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {

// start deleting the coffee
fetch(`http://localhost:3000/coffees/${_id}`, {
    method: 'DELETE',
    headers: {
        'content-type': 'application/json'
    },
})
.then(res => res.json())
.then(data => {
    if(data.deletedCount){
        Swal.fire({
      title: "Deleted!",
      text: "Your Coffee has been deleted.",
      icon: "success"
    });
    }
})
  }
});
}


const handleCoffeeDetails =()=>{

}

    return (
        <div>
            <div className="card card-side bg-base-300 shadow-sm">
                
  <figure>
    <img
      src={photo} />
  </figure>
  <div className='flex mt-6 w-full justify-around'>
    <div className='space-y-4 mt-4'>
    <p>Name: {name}</p>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
    </div>
    <div className='join join-vertical space-y-3'>
      <Link onClick={handleCoffeeDetails} to={`/coffee/${_id}`}><button className="btn  btn-warning w-fit"><FiEye size={24} color="white"/></button></Link>
      <Link to={`updateCoffee/${_id}`}><button className="btn  bg-black w-fit"><FiEdit2 size={24} color="white"/></button></Link>
      <button onClick={()=>handleDelete(_id)} className="btn btn-error w-fit"><RiDeleteBin6Line size={24} color="white"/></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;