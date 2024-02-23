import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../components/Slider';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';
import { fetchCars } from '../redux/slices/carSlice';

const Vehicles = () => {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cars.length === 0) dispatch(fetchCars());
  }, [dispatch, cars.length]);
  return (
    <div className="flex">
      <div className="lg:drawer-open flex flex-col ">
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle my_toggle" />
        {/* <div className="drawer-content">
        </div> */}
        <SideBar />
      </div>
      <div className="sliderWrapper w-full h-full flex flex-col">
        <MenuIcon />
        <Slider />
      </div>
    </div>
  );
};

export default Vehicles;
