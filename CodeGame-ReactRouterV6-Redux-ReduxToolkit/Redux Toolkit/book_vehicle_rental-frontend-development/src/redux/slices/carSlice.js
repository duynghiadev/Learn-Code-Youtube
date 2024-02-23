import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BASE_URL = 'http://localhost:3001/api/v1';

export const fetchCars = createAsyncThunk(
  'cars/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars`);
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  },
);

export const postVehicle = createAsyncThunk(
  'cars/postVehicle',
  async (vehicleData) => {
    try {
      const response = await fetch(`${BASE_URL}/cars`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const deleteVehicle = createAsyncThunk(
  'cars/deleteVehicle',
  async (userId) => {
    try {
      await fetch(`${BASE_URL}/cars/${userId}`, {
        method: 'DELETE',
      });
      return userId;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const reserveVehicle = createAsyncThunk(
  'cars/reserveVehicle',
  async (reservationData) => {
    try {
      const response = await fetch(`${BASE_URL}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const cancelReservation = createAsyncThunk(
  'cars/cancelReservation',
  async (vehicleId) => {
    try {
      await fetch(`${BASE_URL}/reservations/${vehicleId}`, {
        method: 'DELETE',
      });
      return vehicleId;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const fetchReservations = createAsyncThunk(
  'cars/fetchReservations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/reservations`);
      return response.data;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  },
);

export const initializeCars = createAsyncThunk(
  'cars/initializeCars',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(`${BASE_URL}/cars`);
      const { data } = response;
      dispatch(fetchCars.fulfilled(data));
    } catch (err) {
      throw new Error(err.message);
    }
  },
);

const initialState = {
  isLoading: false,
  cars: [],
  car: {},
  reservations: [],
};

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    // Fetching cars
    [fetchCars.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
      state.isLoading = true;
      state.car = state.cars.reduce(
        (acc, car) => ({
          ...acc,
          [car.id]: {
            carId: car.id,
            name: car.name,
            description: car.description,
            photo: car.photo,
            price: car.price,
            user: car.user,
            dateAdded: car.date_added,
          },
        }),
        {},
      );
    },
    // fetch cars
    [fetchCars.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [postVehicle.fulfilled]: (state, action) => {
      state.cars.push(action.payload);
      const {
        userId, name, description, photo, price, user, dateAdded,
      } = action.payload;
      state.car[userId] = {
        name,
        description,
        photo,
        price,
        user,
        dateAdded,
      };
    },
    // delete vehicle
    [deleteVehicle.fulfilled]: (state, action) => {
      state.cars = state.cars.filter((car) => car.user_id !== action.payload);
      delete state.car[action.payload];
    },
    // fetch reservations
    [fetchReservations.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchReservations.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.reservations = action.payload;
    },

  },
});

export const { selectCar } = carSlice.actions;
export default carSlice.reducer;
