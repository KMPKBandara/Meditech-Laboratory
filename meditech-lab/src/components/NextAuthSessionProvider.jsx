"use client"; // <--- VERY IMPORTANT: Mark this as a Client Component

import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionProvider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}