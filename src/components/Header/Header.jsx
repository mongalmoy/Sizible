import { BiSearch } from "react-icons/bi";
import "./Header.css";
import { CiHeart } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [navbarItems, setNavbarItems] = useState([
    { name: "Shop", active: false },
    { name: "Men", active: false },
    { name: "Women", active: false },
    { name: "Combos", active: false },
    { name: "Joggers", active: false },
  ]);
  return (
    <header className="header">
      <div className="app_logo">Sizible</div>
      <div className="app_navigation">
        <nav>
          <ul>
            {navbarItems.map((el) => (
              <li
                key={el.name}
                onClick={() => {
                  setNavbarItems((prev) => {
                    const newList = prev.map((prevEl) => 
                      prevEl.name === el.name
                        ? { ...prevEl, active: true }
                        : { ...prevEl, active: false }
                    );
                    return newList;
                  });
                }}
                className={el.active ? "active" : ""}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="app_search">
        <BiSearch />
        <input placeholder="Search" />
      </div>
      <div className="app_cart">
        <ul>
          <li>
            <CiHeart />
          </li>
          <li>
            <LuUser2 />
          </li>
          <li>
            <BsCart2 />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
