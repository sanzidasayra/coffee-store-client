import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();

  console.log(coffee); // Debugging line

  if (!coffee) {
    return <p className="text-center mt-10 text-red-500">No data found!</p>;
  }

  const { photo, name, price, quantity, supplier, taste, details } = coffee;

  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-base-200">
      <div className="card card-side bg-base-100 shadow-xl w-full md:w-4/5 lg:w-3/5">
        <figure className="w-1/2 p-6">
          <img src={photo} alt={name} className="rounded-xl w-full h-auto" />
        </figure>
        <div className="w-1/2 p-6 space-y-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p><strong>Price:</strong> {price}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Supplier:</strong> {supplier}</p>
          <p><strong>Taste:</strong> {taste}</p>
          <p><strong>Details:</strong> {details}</p>

          <button onClick={() => navigate(-1)} className="btn mt-4 bg-[#D2B48C] text-white">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
