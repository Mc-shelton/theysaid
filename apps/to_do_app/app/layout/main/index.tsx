import { Outlet } from "react-router";
import { AppNav } from "../../app-nav";

const MainLayout = () => {
  return (
    <div className="flex h-screen gap-4">
      <AppNav />
      <div className="flex-[3]">
        <div className="h-[90%]">
          <Outlet/>
        </div>
      </div>
      <div className=" bg-white shadow-sm flex-[1]">lefasdfasdft nav</div>
    </div>
  );
};

export default MainLayout;
