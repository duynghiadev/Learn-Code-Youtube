import { TaskPropsType } from "types"
import { StatusEnum, STORAGE_KEY } from "./constants"

// updateTodos batch update todo list in local
// use for #2 requirement
export function updateTodos<T>(currentItems: T[], newItem: T) {
  const updated =[newItem, ...currentItems]
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

// updateTodo updates specific data (batch update) 
// use for #2 requirement
export function updateTodo(currentItems: any[], { id, status }:any) {
  const indexedId = currentItems.findIndex((item: any) => item.id === id)
  currentItems[indexedId].status = status
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(currentItems))
}

// updateLocalTodoStatus updates local status for individual todo
// use for #1 requirement
export const updateLocalTodoStatus = (taskId:number, status:StatusEnum) => {
  let localData:any = []
  const getLocalData = localStorage.getItem("tasks")
  if(getLocalData) {
    localData = JSON.parse(getLocalData)
  }

  const indexedId = localData.findIndex((item:TaskPropsType) => item.id === taskId)
  localData[indexedId].status = status
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(localData))
}