import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiCancel } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, fetchReservations } from '../redux/slices/carSlice';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';

const Reservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservations = useSelector((state) => state.cars.reservations);
  const cars = useSelector((state) => state.cars.car);
  const { isLoading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleCancelReservation = async (reservationId) => {
    try {
      await dispatch(cancelReservation(reservationId));
      await dispatch(fetchReservations());
      navigate('/reservations');
    } catch (error) {
      error('Error while canceling reservation:', error.message);
    }
  };

  if (!isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 font-semibold">
          Error: Failed to fetch vehicles.
        </div>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:px-5">
        <MenuIcon />
        <div>
          <table className=" border table-zebra w-full px-3">
            <thead>
              <tr className="mx-5 border text-black text-[14px] text-start ">
                <th className="text-center text-xl">Car</th>
                <th className="text-start md:text-center text-xl">Date</th>
                <th className="text-start md:text-center text-xl">City</th>
                <th className="text-start md:text-center text-xl">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {reservations
                && reservations.map((reservation) => {
                  const car = cars[reservation.car_id];
                  return (
                    <tr className="border my-5 shadow-xl mb-3" key={reservation.id}>
                      <td className="text-center p-5">
                        <div className="flex flex-col items-center gap-1 md:gap-3 md:flex-row">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              {car.photo && <img src={car.photo} alt="vehicle" />}
                            </div>
                          </div>
                          <div>
                            <Link to={`/details/${car.carId}`} className="font-bold link-hover link-primary">
                              {car.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="w-10/12 flex flex-col md:flex-row gap-3 justify-center p-3">
                        <span>
                          Reserved:
                          {' '}
                          <p className="badge badge-ghost font-bold p-3 bg-[#99cc33]">
                            {reservation.reservation_date}
                          </p>
                        </span>
                        <span>
                          Returned:
                          {' '}
                          <p className="badge badge-ghost font-bold p-3 bg-[#ffcc00]">
                            {reservation.returned_date}
                          </p>
                        </span>
                      </td>
                      <td className="mb-1">{reservation.city}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleCancelReservation(reservation.id)}
                          className="btn btn-sm bg-red-100 text-red-500 hover:bg-red-500 hover:text-red-100"
                        >
                          <GiCancel className="text-2xl" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Reservations;
