import { LucideIcon } from "lucide-react";
export type IconType = LucideIcon;

export type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  password: string;
  email?: string;
  avatar?: string;
  dob?: string;
  gender?: string;
  bio?: string;
  enable: boolean;
};

export type Post = {
  id: number;
  profile: Profile;
  description?: string;
  videoUrl: string;
  tags: string[];
  music: string;
  hearts: number;
  comments: number;
  saves: number;
  shares: number;
  createdAt: string;
};

export type MenuItem = {
  title: string;
  path: string;
  icon: IconType;
};
