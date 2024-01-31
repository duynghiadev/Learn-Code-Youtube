import { createStore } from "@reduxjs/toolkit";
import { Counter } from "./reducer";

export const store = createStore(Counter);
