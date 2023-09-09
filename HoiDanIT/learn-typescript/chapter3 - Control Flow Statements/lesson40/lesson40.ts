interface IPerson {
  readonly firstName: string;
  lastName?: string;
  address: string;
}

type Person_41 = {
  firstName: string;
  lastName: string;
};

function getFullName_1(person: IPerson) {
  return `${person.firstName} ${person.lastName}`;
}

let person_40 = {
  firstName: "Eric",
  lastName: "Hoi Dan IT",
  address: "Ha noi",
};

console.log(getFullName_1(person_40)); // Eric Hoi Dan IT
