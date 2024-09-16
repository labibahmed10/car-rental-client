import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const items = pathnames.map((_, index) => {
    return {
      title: <span className="text-slate-900"> {pathnames[index]}</span>,
    };
  });

  return (
    <>
      {items.length > 0 && (
        <aside className="hidden sm:grid place-items-center p-3 bg-gray-200 text-gray-900 rounded-lg">
          <Breadcrumb className=" sm:w-[1280px] max-w-screen-xl  text-lg" items={items} />
        </aside>
      )}
    </>
  );
}
