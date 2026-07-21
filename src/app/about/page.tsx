import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About Me | Shure",
  description: "徐航朔的个人设计档案与持续练习。",
};

export default function About() {
  return <AboutPage />;
}
