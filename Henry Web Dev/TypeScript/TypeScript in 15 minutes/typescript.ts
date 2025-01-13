const createStudent = (params: { name?: string; age: number }) => {
  const { name, age } = params;
  console.log({ name, age });
};
createStudent({ age: 22 });
