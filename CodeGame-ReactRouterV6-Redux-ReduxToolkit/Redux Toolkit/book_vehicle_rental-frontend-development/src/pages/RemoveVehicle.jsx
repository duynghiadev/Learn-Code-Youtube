import React, { useState } from 'react';
import CarList from '../components/CarList';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';

const RemoveVehicle = () => {
  const [showItemList, setShowItemList] = useState(true);

  return (
    <div className="drawer lg:drawer-open">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center px-2 gap-3">
        <MenuIcon />
        {/* Render the list of items if showItemList is true */}
        {showItemList ? <CarList /> : <h1 className="text-4xl">REMOVE VEHICLE</h1>}
        {/* Add a link to toggle the visibility of the item list */}
        <button type="button" onClick={() => setShowItemList(!showItemList)}>
          {showItemList }
        </button>
      </div>
      <SideBar />
    </div>
  );
};

export default RemoveVehicle;
