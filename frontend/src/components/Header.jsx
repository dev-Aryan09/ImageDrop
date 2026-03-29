import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section id="header-section">
      <h1>
        Image<span id="drop">Drop</span>
      </h1>

      <Link to="/feed" id="feed-link">
        Feed
      </Link>
    </section>
  );
};
