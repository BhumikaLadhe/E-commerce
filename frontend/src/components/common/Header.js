import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const tabs = [
    { title: "Home", url: "/" },
    { title: "products", url: "/products" },
    {
      title: "Add product",
      url: "/add-product",
    },
    { title: "logout", url: "/logout" },
    { title: "sign up", url: "/sign up" },
    { title: "Profile", url: "/profile" },
  ];
  return (
    <div
      style={{
        display: "flex",
        padding: "20px 10px",
        backgroundColor: "#8f2659",
        color: "white",
        textDecoration: "none",
      }}
    >
      {tabs.map((t) => (
        <div style={{ margin: "10px" }}>
          <Link to={t.url} className="Header-link">
            {t.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
