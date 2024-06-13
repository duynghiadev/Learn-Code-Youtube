import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import MenuIcon from '../components/MenuIcon';

const VehicleDetails = () => {
  const params = useParams();
  const car = useSelector((state) => state.cars.car[params.user_id]);
  const
    {
      name, photo, description, price, dateAdded, carId,
    } = car;

  return (
    <div className="drawer lg:drawer-open">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-3">
        <MenuIcon />
        <div className="w-full flex flex-col md:flex-row md:mt-32">
          <div className="text-xl md:w-3/4">
            <div className="px-10  flex justify-center content-center items-center rounded-full justify-center items-center">
              <img src={photo} alt="not found" className="shadow-xl w-full" />
            </div>
          </div>
          <div className="md:w-1/4">
            <h1 className="text-4xl font-bold text-center">{name}</h1>
            <p className="text-sm text-justify">{description}</p>
            <ul>
              <li className="flex justify-between bg-base-200 p-2 text-black">
                <span className=" text-black">Price: </span>
                <span className=" text-black">
                  <small className="text-xl">$</small>
                  {price}
                </span>
              </li>
              <li className="flex justify-between  p-2 text-black">
                <span className=" text-black">
                  Date Added:
                </span>
                <span className=" text-black">
                  {dateAdded}
                </span>
              </li>
              <li className="flex justify-between bg-base-200 p-2 text-black">
                <span className=" text-black">Duration: </span>
                <span className=" text-black">
                  {dateAdded}
                </span>
              </li>
            </ul>
            <br />
            <div className="flex justify-between items-center">
              <div className="radial-progress bg-green-200 text-green-500 border-4 border-green-300" style={{ '--value': 100 }}>Cars</div>
              <Link
                type="submit"
                className="btn text-white bg-green-500 rounded-xl btn-lg hover:btn-outline"
                to={`/reservation/${carId}`}
              >
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default VehicleDetails;
