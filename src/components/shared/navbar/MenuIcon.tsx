/* eslint-disable @typescript-eslint/no-explicit-any */
const MenuIcon: React.FC<{ item: any; location: any }> = ({ item, location }) => (
  <span
    className={`hover:!text-[#F5B754] mr-2 flex justify-center items-center transition-all duration-300 ${
      location.pathname === item.key ? "!text-[#F5B754]" : "!text-slate-100"
    }`}
  >
    {item.icon}
  </span>
);
export default MenuIcon;
