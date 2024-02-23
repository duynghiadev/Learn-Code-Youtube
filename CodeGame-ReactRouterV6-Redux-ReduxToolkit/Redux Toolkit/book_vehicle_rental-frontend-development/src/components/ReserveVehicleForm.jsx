import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchReservations, reserveVehicle } from '../redux/slices/carSlice';

const ReservationPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user) || {};
  const car = useSelector((state) => state.cars.car[params.car_id]) || {};

  const [reservationDate, setReservationDate] = useState('');
  const [returnedDate, setReturnedDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservationData = {
      user_id: user.id,
      car_id: params.car_id,
      reservation_date: reservationDate,
      returned_date: returnedDate,
      city,
    };
    if (reservationDate === '' && returnedDate === '' && city === '') {
      toast.warning('Kindle fill required field');
    } else {
      dispatch(reserveVehicle(reservationData))
        .then(() => {
          dispatch(fetchReservations);
          navigate('/reservations');
          toast.success(`${car.name} successfully reserved.`);
        })
        .catch((error) => {
          error('Reservation failed:', error);
        });
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${car.photo})`, // Fix the image URL reference here
      }}
    >
      <div className="hero-overlay bg-green-600 bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">
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
                  placeholder={user.username}
                  readOnly
                  required
                  className="input input-bordered focus:outline-none placeholder:text-black"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span className="bg-green-800 text-white font-bold">Vehicle</span>
                <input
                  type="text"
                  id="name"
                  placeholder={car.name}
                  readOnly
                  required
                  className="input input-bordered focus:outline-none placeholder:text-black"
                />
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
                  className="input input-bordered text-black"
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
                  className="input input-bordered focus:outline-none  text-black"
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
          <Link className="link link-info hover:link-primary" to={`/details/${car.carId}`}>
            Back to
            {' '}
            {car.name}
            {' '}
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
