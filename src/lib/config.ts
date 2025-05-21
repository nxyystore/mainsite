import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "nxyy",
    link: "https://nxyy.lol/",
    github: "nxyystore",
    discord_id: "1294487023272595511",
    projects: [
      {
        name: "Protecction",
        description: "A free discord oauth verification bot with extra features.",
        url: "https://protecction-security.online",
        type: "website" as const,
      },
      {
        name: "honest",
        description: "A multipurpose bot that provides a wide range of features.",
        url: "https://honest.rocks",
        type: "website" as const,
      },
    ],
  },
  {
    name: "pk",
    link: "https://eslut.live/pkrhs",
    discord_id: "657766336709132328",
    projects: [
      {
        name: "Syncify",
        description: "A freemium member farm service.",
        url: "https://discord.gg/syncify",
        type: "website" as const,
      },
    ]
  },
  {
    name: "fien",
    link: "https://t.me/social832",
    discord_id: "837040462011433002",
  }
 
].sort((a, b) => {
  const topOrder = ["nxyy", "pk", "fien"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});
