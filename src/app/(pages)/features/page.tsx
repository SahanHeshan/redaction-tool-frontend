import type { Metadata } from "next";
import Features from "@/components/features-1";

export const metadata: Metadata = {
  title: "Features",
  description: "Features page",
};

export default function FeaturesPage() {
  return (
    <>
      <Features />
    </>
  );
}
