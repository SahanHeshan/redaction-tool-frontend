import type { Metadata } from "next";
import Team from "@/components/team";

export const metadata: Metadata = {
  title: "About",
  description: "About Us page",
};

export default function AboutsPage() {
  return (
    <>
      <Team />
    </>
  );
}
