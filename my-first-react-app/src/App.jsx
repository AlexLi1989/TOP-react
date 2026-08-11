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
function App() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>;
}

export default App;
