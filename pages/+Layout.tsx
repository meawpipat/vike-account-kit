import "./style.css";

import "./tailwind.css";

import React from "react";
import { Providers } from "./providers";
import { cookieToInitialState } from "@account-kit/core";
import { config } from "./accountKitConfig";
import { Data } from "./+data";
import { useData } from "vike-react/useData";
import { Buffer } from 'buffer';

if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const cookie = useData<Data>();
  const initialState = cookieToInitialState(
    config,
    (cookie || document.cookie) ?? undefined
  );
  return (
    <Providers initialState={initialState}>{children}</Providers>
  );
}
