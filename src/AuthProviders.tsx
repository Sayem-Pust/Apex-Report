"use client";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
}

export default function AuthProviders({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
