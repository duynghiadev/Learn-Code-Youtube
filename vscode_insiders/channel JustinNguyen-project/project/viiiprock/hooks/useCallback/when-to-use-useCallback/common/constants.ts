export const API_URL = "http://localhost:8080";
export const STORAGE_KEY = "tasks";

export enum StatusEnum {
  TODO = "todo",
  IN_PROGRESS = "in-progress",
  DONE = "done",
  DELETE = "deleted",
  CANCELED = "canceled",
}

export const STATUS_ICONS = {
  [StatusEnum.TODO]: "assignment",
  [StatusEnum.IN_PROGRESS]: "autorenew",
  [StatusEnum.DONE]: "assignment_turned_in",
  [StatusEnum.DELETE]: "delete",
  [StatusEnum.CANCELED]: "cancel",
};

export const STATUS_COLORS = {
  [StatusEnum.TODO]: "grey",
  [StatusEnum.IN_PROGRESS]: "#01579b",
  [StatusEnum.DONE]: "green",
  [StatusEnum.DELETE]: "red",
  [StatusEnum.CANCELED]: "black",
};
