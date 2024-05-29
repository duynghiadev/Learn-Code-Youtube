type Person = {
  name: string,
  age: number,
  gender: 'male' | 'female' | 'other'
}

type Age = Person['age']
type Student = Person[keyof Person]
type Teacher = Person['name' | 'age']