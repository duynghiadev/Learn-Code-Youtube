const initState = {
  cars: ["BMW"],
};

export default function reducer(state = initState, action, args) {
  switch (action) {
    case "ADD":
      return {
        ...state,
        cars: [...state.cars, args],
      };
    case "DELETE":
      const newCars = [...state.cars];
      newCars.splice(args, 1);
      return {
        ...state,
        cars: newCars,
      };
    default:
      return state;
  }
}
