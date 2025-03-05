import "./SideBar.css";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <Link to="/science" className="sidebar__link">
            SCIENCE
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/general" className="sidebar__link">
            GENERAL
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/entertainment" className="sidebar__link">
            ENTERTAINMENT
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/technology" className="sidebar__link">
            TECHNOLOGY
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/business" className="sidebar__link">
            BUSINESS
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/health" className="sidebar__link">
            HEALTH
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="/sports" className="sidebar__link">
            SPORTS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
