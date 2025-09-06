import { AdminTabsNav, Outlet } from "@/features/Admin";

const Dashboard = () => {

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <AdminTabsNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
