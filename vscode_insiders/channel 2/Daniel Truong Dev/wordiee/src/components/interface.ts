interface boardState {
  board: string[];
  pos: number;
  row: number;
  correctWord: string;
}

export interface rootState {
  board: boardState;
}
