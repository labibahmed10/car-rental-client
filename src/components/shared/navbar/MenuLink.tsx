/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";

const MenuLink: React.FC<{ item: any; location: any }> = ({ item, location }) => (
  <NavLink
    to={item.key}
    className={`hover:!text-[#F5B754] transition-all duration-300 ${location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"}`}
  >
    {item.label}
  </NavLink>
);
export default MenuLink;
