import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <h1 className="">Todo App</h1>
      <nav
        className=""
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
