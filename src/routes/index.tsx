import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Following from "@/pages/Following";

type RouteType = {
  path: string;
  component: React.ComponentType;
  layout: React.ComponentType<{ children: React.ReactNode }>;
};

const publicRoutes: RouteType[] = [
  {
    path: "/",
    component: Home,
    layout: MainLayout,
  },
  {
    path: "/following",
    component: Following,
    layout: MainLayout,
  },
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes };
