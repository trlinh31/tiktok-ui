import { MenuItem } from "@/types";
import { House, User, Users, Video } from "lucide-react";

export const Menu: MenuItem[] = [
  {
    title: "sidebar.title.forYou",
    path: "/",
    icon: House,
  },
  {
    title: "sidebar.title.following",
    path: "/following",
    icon: Users,
  },
  {
    title: "sidebar.title.friends",
    path: "/friends",
    icon: User,
  },
  {
    title: "sidebar.title.live",
    path: "/live",
    icon: Video,
  },
];
