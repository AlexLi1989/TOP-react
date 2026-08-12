import React from "react";

function User(props) {
  const { name, email } = props.user;

  return (
    <div className="person">
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
  );
}

function Input({ handleChange, inputValue }) {
  return <input onChange={handleChange} value={inputValue} />;
}
function App() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter((prevCounter) => ++prevCounter);
  };

  const decrement = () => {
    setCounter((prevCounter) => --prevCounter);
  };

  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div>
      <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>
      <div>
        <h2 data-testid="counter">{counter}</h2>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <Input handleChange={handleChange} inputValue={inputValue} />
      </div>
    </div>
  );
}

export { App, Input };
