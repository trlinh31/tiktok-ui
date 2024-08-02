import { LucideIcon } from "lucide-react";
export type IconType = LucideIcon;

export type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email?: string;
  avatar?: string;
  dob?: string;
  gender?: string;
  bio?: string;
  enable: boolean;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  description: string;
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
