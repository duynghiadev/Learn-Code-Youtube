const channelName: string = 'Duy nghia';
console.log('welcome to', channelName);

// Clone array of objects (BE CAREFUL!!!)
interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const studentList: Student[] = [
  { id: 1, name: 'Alice', age: 11, gender: 'female' },
  { id: 2, name: 'Bob', age: 12, gender: 'male' },
];

const newList = [...studentList];
newList[0].name = 'Alice Alice';

console.log('>>> studentList: ', studentList[0].name); // ???
console.log('>>> newList: ', newList);
