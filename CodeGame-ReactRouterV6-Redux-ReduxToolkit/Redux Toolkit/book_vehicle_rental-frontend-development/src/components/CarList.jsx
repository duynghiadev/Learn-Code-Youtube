import React, { useEffect } from 'react';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVehicle, fetchCars } from '../redux/slices/carSlice';

const CarList = () => {
  const cars = useSelector((state) => state.cars.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDelete = async (vehicleId) => {
    try {
      await dispatch(deleteVehicle(vehicleId));
      await dispatch(fetchCars());
      toast.success('Vehicle successfully deleted.');
    } catch (error) {
      error('something went wrong');
    }
  };

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id} className="p-3">
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="avatar items-center ">
              <div className="w-32 h-32 md:h-52 md:w-52 rounded-full">
                <img src={car.photo} alt="Cars" className="w-1/2" />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">
                <Link className="link-hover link-primary" to={`/details/${car.id}`}>
                  {car.name}
                </Link>
              </h2>
              <small>{car.description}</small>
              <div className="card-actions justify-end">
                <button
                  type="button"
                  onClick={() => handleDelete(car.id)}
                  className="btn btn-sm bg-red-100 text-red-500 hover:bg-red-500 hover:text-red-100"
                >
                  <MdOutlineDeleteSweep className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
