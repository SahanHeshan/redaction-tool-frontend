import type { Metadata } from "next";
import SignUp from "@/components/sign-up";

export const metadata: Metadata = {
  title: "SignUp",
  description: "SignUp page",
};

export default function SignUpPage() {
  return (
    <>
      <SignUp />
    </>
  );
}
