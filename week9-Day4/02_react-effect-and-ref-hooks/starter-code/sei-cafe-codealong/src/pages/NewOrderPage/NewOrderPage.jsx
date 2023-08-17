import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
// Add the following imports
import "./NewOrderPage.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import MenuList from "../../components/MenuList/MenuList";
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  // Create and initialize the ref to an empty array
  const categoriesRef = useRef([]);
  //
  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();

      // Remove dups of category names using a Set, then spread Set back into an array literal
      categoriesRef.current = [
        ...new Set(items.map((item) => item.category.name)),
      ];
      setMenuItems(items);
    }
    getItems();
  }, []);
  return (
    <>
      {/* <h1>NewOrderPage</h1> */}
      {/* <button onClick={setMenuItems}>Trigger re-render</button> */}
      <main className="NewOrderPage">
        <aside>
          <Logo />
          <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
          />
          <Link to="/orders" className="button btn-sm">
            PREVIOUS ORDERS
          </Link>
          <UserLogOut user={user} setUser={setUser} />
        </aside>
        <MenuList
          menuItems={menuItems.filter(
            (item) => item.category.name === activeCat
          )}
        />
        <OrderDetail />
      </main>
    </>
  );
}
