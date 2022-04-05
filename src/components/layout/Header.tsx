import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <header className="">
      <h1 className="">{title || "Todo App"}</h1>
      <nav
        className=""
        style={{
          display: "flex",
          gap: "1rem",
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
