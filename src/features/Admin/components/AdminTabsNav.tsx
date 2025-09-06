import { tabs, NavLink, useLocation } from "@/features/Admin";


const AdminTabsNav = () => {
  const location = useLocation();
  return (
    <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
      <nav className="flex gap-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-t-md font-medium transition-colors duration-150 ${
                isActive || location.pathname === tab.to
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`
            }
            end
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminTabsNav;
