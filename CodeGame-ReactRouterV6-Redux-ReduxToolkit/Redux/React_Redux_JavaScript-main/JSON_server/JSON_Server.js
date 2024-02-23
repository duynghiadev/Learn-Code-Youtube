import React, { useEffect, useState } from "react";
export const API = "http://localhost:3000/cars";

export default function CarsManager() {
  const [carsList, setCarsList] = useState(null);

  useEffect(() => {
    const getCars = async () => {
      const res = await fetch(API);
      const cars = await res.json();
      console.log(cars);
      setCarsList(cars);
    };
    getCars();
  }, []);

  if (!carsList) return <p>loading cars...</p>;

  const removeCar = async (id) => {
    const res = await fetch(API + "/" + id, {
      method: "DELETE",
    });
    if (res.ok) {
      setCarsList((prev) => prev.filter((car) => car.id !== id));
    }
  };

  return (
    <div>
      <h1>CarsManager</h1>
      <ul>
        {carsList.map((car) => (
          <li key={car.id}>
            {car.brand} {car.name}{" "}
            <button onClick={() => removeCar(car.id)}>Sell - {car.id}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
