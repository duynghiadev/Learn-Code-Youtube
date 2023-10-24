export const datas = [
  { id: 0, name: "Leslie Alexander" },
  { id: 1, name: "Michael Foster" },
  { id: 2, name: "Lindsay Walton" },
  { id: 3, name: "Whitney Francis" },
  { id: 4, name: "Leonard Krasner" },
  { id: 5, name: "Emily Selman" },
  { id: 6, name: "Kristin Watson" },
  { id: 7, name: "Emma Dorsey" },
  { id: 8, name: "Alicia Bell" },
  { id: 9, name: "Anna Roberts" },
  { id: 10, name: "Benjamin Russel" },
  { id: 11, name: "Kathryn Murphy" },
  { id: 12, name: "Lawrence Hunter" },
  { id: 13, name: "Yvette Armstrong" },
  { id: 14, name: "Angela Fisher" },
  { id: 15, name: "Blake Reid" },
  { id: 16, name: "Fabricio Mendes" },
  { id: 17, name: "Jillian Steward" },
  { id: 18, name: "Chelsea Hagon" },
];

export const searchUsername = (term) => {
  const searchTerm = term.toLowerCase();
  console.log(`/api/users?q=${searchTerm}`);

  return datas.filter((user) => {
    const username = user.name.toLowerCase();

    if (!username.includes(searchTerm)) {
      return false;
    }

    return true;
  });
};
