import { LucideIcon } from "lucide-react";
export type IconType = LucideIcon;

export interface User {
  _id: string;
  followers?: string[];
  following?: string[];
  enable: boolean;
  createdAt: Date;
  updatedAt: Date;
  fullName: string;
  nickname: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  __v?: number;
}

export interface Video {
  _id: string;
  tags: string[];
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  videoUrl: string;
  __v: number;
  user: User;
  likesCount: number;
  commentsCount: number;
}
export type MenuItem = {
  title: string;
  path: string;
  icon: IconType;
};
