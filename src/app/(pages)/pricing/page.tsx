import type { Metadata } from "next";
import Pricing from "@/components/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page",
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
    </>
  );
}
