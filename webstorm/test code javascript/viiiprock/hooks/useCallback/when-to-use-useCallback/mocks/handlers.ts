import { rest } from "msw";
import { ADD_TODO, TODOS, UPDATE_TODO } from "queries/endpoints";
import { updateTodos, updateTodo } from "common/utils";
import { STORAGE_KEY } from "common/constants";

export const handlers = [
  // get all todos
  rest.get(TODOS, (_, res, ctx) => {
    let data: [] = [];
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      data = JSON.parse(localData);
    }

    return res(ctx.status(200), ctx.json(data));
  }),
  // add new todo
  rest.post(ADD_TODO, (req, res, ctx) => {
    let data: [] = [];
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      data = JSON.parse(localData);
    }
    updateTodos(data, req.body);

    return res(ctx.status(200), ctx.json(req.body));
  }),
  // update status
  rest.post(UPDATE_TODO, (req, res, ctx) => {
    let data: [] = [];
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      data = JSON.parse(localData);
    }
    updateTodo(data, req.body);

    return res(ctx.status(200), ctx.json(req.body));
  }),
];
