import { ReactNode } from 'react'

export interface TaskPropsType {
  id: number
  title: string
  status: StatusEnum
}

export interface TaskListItemProps {
  status: StatusEnum
  taskId: number
  children?: ReactNode
}

export type ErrorType =  {
  message: string
  statusCode: number
}

export interface FetchResultType {
  loading: boolean
  error?: ErrorType
  data?:any
}
