
import DashboardHeader from "@/app/component/dashboardHeader";
import SideMenu from "@/app/component/sideMenu";
import { UsersidebarMenuData } from "@/data/sidebaMenuData";

const UserElection = () => {
  return (
    <div className="flex relative">
      <SideMenu sidebarMenuData={UsersidebarMenuData} />
      <section className="w-full pl-6 h-screen overflow-y-scroll overflow-x-hidden bg-[#F1F1F1]">
        <DashboardHeader/>
      </section>
    </div>
  );
};

export default UserElection;