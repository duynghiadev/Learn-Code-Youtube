interface IEmployee {
  empCode: number;
  name: string;
  getSalary: (empCode1: number) => number;
}

class Eric_1 implements IEmployee {
  public empCode: number;
  public name: string;

  getSalary = (code: number): number => {
    return 100 * code;
  };

  getName = () => {
    return "hoi dan it";
  };
}
