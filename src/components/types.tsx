export type Technology = {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: string;
};

export const categoryStyles: Record<Technology["category"], string> = {
  Frontend: "bg-sky-50 text-sky-700 ring-sky-200",
  Backend: "bg-violet-50 text-violet-700 ring-violet-200",
  Database: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Language: "bg-amber-50 text-amber-700 ring-amber-200",
  Styling: "bg-pink-50 text-pink-700 ring-pink-200",
  DevOps: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  Tools: "bg-slate-50 text-slate-700 ring-slate-200",
};

export const badgeStyles: Record<string, string> = {
  Popular: "bg-orange-50 text-orange-700 ring-orange-200",
  Fast: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Essential: "bg-violet-50 text-violet-700 ring-violet-200",
  Containers: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  "Developer-Friendly": "bg-sky-50 text-sky-700 ring-sky-200",
  Secure: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Top SQL": "bg-indigo-50 text-indigo-700 ring-indigo-200",
  Scalable: "bg-teal-50 text-teal-700 ring-teal-200",
  "Type-Safe": "bg-amber-50 text-amber-700 ring-amber-200",
};