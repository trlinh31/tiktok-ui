import { Post as PostType } from "@/types";
import { Profile } from "@/data/profile";

export const Post: PostType[] = [
  {
    id: 1,
    profile: Profile,
    videoUrl:
      "https://videocdn.cdnpk.net/videos/2095d647-b8b4-4050-ade4-19c326dad54d/horizontal/previews/clear/large.mp4?token=exp=1722786267~hmac=d8c68ec5604ba59a75dd8bf3dddf5370bd790314529ee68abfe584f1ccab7c6e",
    tags: ["xuhuong", "tranhalinh"],
    music: "Em của ngày hôm qua PSVN remix Sơn Tùng MTp - PHÁP SƯ VIỆT NAM",
    hearts: 13000,
    comments: 6230,
    saves: 550,
    shares: 1200,
    createdAt: "2021-01-01 00:00:00",
  },
  {
    id: 2,
    profile: Profile,
    videoUrl: "/videos/thl-2.mp4",
    tags: ["xuhuong", "tranhalinh"],
    music: "Em của ngày hôm qua PSVN remix Sơn Tùng MTp - PHÁP SƯ VIỆT NAM",
    hearts: 13000,
    comments: 6230,
    saves: 550,
    shares: 1200,
    createdAt: "2021-01-01 00:00:00",
  },
  {
    id: 3,
    profile: Profile,
    videoUrl: "/videos/tranhalinh.mp4",
    tags: ["xuhuong", "tranhalinh"],
    music: "Em của ngày hôm qua PSVN remix Sơn Tùng MTp - PHÁP SƯ VIỆT NAM",
    hearts: 13000,
    comments: 6230,
    saves: 550,
    shares: 1200,
    createdAt: "2021-01-01 00:00:00",
  },
];
