type Listener = () => void
type Unsubscribe = () => void
type Reducer = (state: any, action: any) => any

interface Store<T extends Reducer> {
  getState<R extends ReturnType<T>, K extends keyof R>(): T extends Function
    ? R
    : { [P in K]: R[P] }

  subscribe(listener: Listener): Unsubscribe

  dispatch(action: Parameters<T>[1]): void
}

export function createStore<T extends Reducer>(reducer: T): Store<T> {
  let state = reducer(undefined, {})
  let listeners: Listener[] = []

  return {
    getState() {
      return state
    },
    subscribe(listener) {
      listeners.push(listener)
      return () => {
        listeners = listeners.filter((listener_) => listener_ !== listener)
      }
    },
    dispatch(action) {
      state = reducer(state, action)
      listeners.forEach((listener) => {
        listener()
      })
    }
  }
}

export function combineReducers<T extends Record<string, Reducer>>(reducers: T) {
  return <K extends keyof T, ParamT extends Parameters<T[K]>>(
    state: ReturnType<T[K]>,
    action: ParamT[1]
  ) => {
    type R = { [P in K]: ReturnType<T[P]> }
    return Object.keys(reducers).reduce<R>((obj, name) => {
      const reducer = reducers[name]
      return {
        ...obj,
        [name]: reducer(state?.[name], action)
      }
    }, {} as R)
  }
}
