import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { postVehicle } from '../redux/slices/carSlice';

const AddVehicleForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleVehicleSubmit = async (event) => {
    event.preventDefault();
    const userId = user.id;

    try {
      const vehicleData = {
        name,
        price,
        description,
        photo,
        model,
        user_id: userId,
      };
      await dispatch(postVehicle(vehicleData));
      setModel('');
      setName('');
      setPrice('');
      setPhoto('');
      setDescription('');
      toast.success('Vehicle added successfully');
    } catch (error) {
      error(error.message);
    }
  };

  return (
    <form className="w-full md:w-1/3 p-5" onSubmit={handleVehicleSubmit}>
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <div className="flex flex-col gap-3">
        <p className="text-4xl text-center">Create Car</p>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span className="font-bold">Car Name</span>
            <input
              type="text"
              name="name"
              className="input input-bordered focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span className="font-bold">Model</span>
            <input
              type="text"
              name="model"
              className="input input-bordered focus:outline-none"
              value={model}
              onChange={(e) => setModel(e.target.value)} // Corrected onChange handler
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span className="font-bold">Price ($)</span>
            <input
              type="number"
              name="price"
              className="input input-bordered focus:outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)} // Corrected onChange handler
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span className="font-bold">Photo</span>
            <input
              type="text"
              name="photo"
              className="input input-bordered focus:outline-none"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)} // Corrected onChange handler
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span className="font-bold">Description</span>
            <textarea
              type="text"
              name="description"
              className="input input-bordered focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <button type="submit" className="btn btn-primary">
            Add Car
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddVehicleForm;
