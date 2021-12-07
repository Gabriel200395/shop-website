import "./style.css";
import { useState } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="nav-c">
      <h3>Shop</h3>
      <div className="menu-items">
        {dropdown && (
          <ul>
            <li name="my Account">my Account</li>
            <li>Search</li>
            <li className="sacola" data-testid="shoppin-card-icon">
              <i className="fas fa-shopping-cart" />
            </li>
          </ul>
        )}
        <a
          href="#dropmenu"
          className="icon-drop"
          aria-expanded="true"
          onClick={() => setDropdown((d) => !d)}
        >
          <i className={`${dropdown ? "fas fa-times" : "fas fa-bars"}`} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
