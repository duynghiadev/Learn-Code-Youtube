import { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState<Record<string, string>>({
    firstName: "Henry",
    lastName: "Web Dev",
    email: "henrywebdev@youtube.com"
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newPerson = {
      ...person,
      [event.target.name]: event.target.value
    };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>Form</h1>
      <label>First name </label>
      <input
        value={person.firstName}
        onChange={handleInputChange}
        name="firstName"
      />
      <br />
      <label>Last name </label>
      <input
        value={person.lastName}
        onChange={handleInputChange}
        name="lastName"
      />
      <br />
      <label>Email </label>
      <input value={person.email} onChange={handleInputChange} name="email" />
      <br />
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default Form;
