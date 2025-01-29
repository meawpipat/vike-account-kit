import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Account Kit Quickstart",
  description: "Account Kit Quickstart NextJS Template",

  extends: vikeReact,
  ssr: false,
} satisfies Config;
