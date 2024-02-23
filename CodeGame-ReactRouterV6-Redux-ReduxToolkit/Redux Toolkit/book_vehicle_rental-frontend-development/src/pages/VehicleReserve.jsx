import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchReservations, reserveVehicle } from '../redux/slices/carSlice';

const VehicleReserve = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cars = useSelector((state) => state.cars.cars);
  const user = useSelector((state) => state.user.user);

  const [reservationDate, setReservationDate] = useState('');
  const [returnedDate, setReturnedDate] = useState('');
  const [city, setCity] = useState('');
  const [carId, setCarId] = useState('');

  const car = useSelector((state) => state.cars.car[carId]) || {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationData = {
      user_id: user.id,
      car_id: carId,
      reservation_date: reservationDate,
      returned_date: returnedDate,
      city,
    };
    if (!reservationDate || !returnedDate || !city) {
      toast.warning('Please fill all required fields');
    } else {
      dispatch(reserveVehicle(reservationData))
        .then(() => {
          dispatch(fetchReservations());
          navigate('/reservations');
          toast.success('Successfully reserved.');
        })
        .catch((error) => {
          toast.error(`Reservation failed: ${error.message}`);
        });
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen w-full"
        style={{
          backgroundImage: `url(${car.photo})`,
        }}
      >
        <div className="hero-overlay bg-green-600 bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold w-full">
              Reserve
              {' '}
              <small className="text-4xl">{car.name}</small>
            </h1>
            <form onSubmit={handleSubmit} className="reservation-form">
              {/* eslint-disable jsx-a11y/label-has-associated-control */}
              <div className="form-control">
                <label className="input-group input-group-vertical">
                  <span className="bg-green-800 text-white font-bold">Name</span>
                  <input
                    type="text"
                    id="name"
                    readOnly
                    required
                    value={user.username}
                    className="input input-bordered focus:outline-none placeholder:text-black"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group input-group-vertical">
                  <span className="bg-green-800 text-white font-bold placeholder:text-black">Vehicle</span>
                  <select
                    className="select select-bordered w-full focus:outline-none text-black placeholder:text-black"
                    value={carId}
                    onChange={(e) => setCarId(e.target.value)}
                  >
                    <option value="" disabled>Selected car to reserve?</option>
                    {cars && cars.map((car) => (
                      <option
                        className="text-black placeholder:text-black"
                        key={car.id}
                        value={car.id}
                      >
                        {car.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-control">
                <label className="input-group input-group-vertical">
                  <span className="bg-green-800 text-white font-bold flex justify-between items-center">
                    <h3>Reservation Date</h3>
                    <h3 className="text-red-600 text-2xl">*</h3>
                  </span>
                  <input
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="input input-bordered text-black w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group input-group-vertical">
                  <span className="bg-green-800 text-white font-bold flex justify-between items-center">
                    <h3>Returned Date</h3>
                    <h3 className="text-red-600 text-2xl">*</h3>
                  </span>
                  <input
                    type="date"
                    value={returnedDate}
                    onChange={(e) => setReturnedDate(e.target.value)}
                    className="input input-bordered focus:outline-none text-black"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input-group input-group-vertical">
                  <span className="bg-green-800 text-white font-bold flex justify-between items-center">
                    <h3>City</h3>
                    <h3 className="text-red-600 text-2xl">*</h3>
                  </span>
                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="input input-bordered focus:outline-none text-black"
                  />
                </label>
              </div>
              <button type="submit" className="btn bg-green-800 w-full">RESERVE</button>
            </form>
            <br />
            <Link className="link link-info hover:link-primary" to="/">
              Back Vehicle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleReserve;
