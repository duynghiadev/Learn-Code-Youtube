import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservationPage from '../components/ReserveVehicleForm';
import { fetchReservations } from '../redux/slices/carSlice';

const ReserveForm = () => {
  const reservations = useSelector((state) => state.cars.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reservations.length === 0) dispatch(fetchReservations());
  }, [dispatch, reservations.length]);

  return <ReservationPage />;
};

export default ReserveForm;
