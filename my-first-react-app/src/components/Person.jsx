import { useState } from "react";
export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "",
    age: 100,
  });
  const fullName = `${person.firstName} ${person.lastName}`.trim();
  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };
  const handleFirstNameChange = (e) =>
    setPerson({ ...person, firstName: e.target.value });
  const handleLastNameChange = (e) =>
    setPerson({ ...person, lastName: e.target.value });
  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <input
        type="text"
        value={person.firstName}
        onChange={handleFirstNameChange}
        placeholder="First name"
      />
      <input
        type="text"
        value={person.lastName}
        onChange={handleLastNameChange}
        placeholder="Last name"
      />
    </>
  );
}
