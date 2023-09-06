import { useState } from "react";
export default function LoginPage({ setUser }) {
  const [input, setInput] = useState("");

  const handleLoginForm = (e) => {
    e.preventDefault();
    if (input !== "") {
      setUser(input);
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginForm}>
        <label for="login">User Name:</label>
        <br />
        <input
          type="text"
          name="login"
          value={input}
          onChange={handleChange}
        ></input>
        <br />
        <button type="submit">Log In!</button>
      </form>
    </>
  );
}
