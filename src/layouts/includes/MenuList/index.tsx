import MenuItem from "@/layouts/includes/MenuItem";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@/data/menu";
import { MenuItem as MenuItemType } from "@/types";

export default function MenuList() {
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          {Menu.map((item: MenuItemType, index: number) => (
            <li key={index}>
              <Link to={item.path}>
                <MenuItem title={item.title} icon={item.icon} isCurrentPage={location.pathname === item.path} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
