import type { Metadata } from "next";
import Login from "@/components/login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}
