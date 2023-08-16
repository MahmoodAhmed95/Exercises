import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <>
      <nav>
        <Link to="/">Movies List Page</Link>
        &nbsp; | &nbsp;
        {/* <Link to="/movies/:movieName">Movie Detail Page</Link>
      &nbsp; | &nbsp; */}
        <Link to="/actors">Actor List Page</Link>
      </nav>
      <p>
        hello <span>{user}</span>
      </p>
    </>
  );
}
