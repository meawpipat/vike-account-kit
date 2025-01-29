import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContextServer) {
    // Access the headers from the request
    const cookie = pageContext?.headers?.cookie;
    return cookie;
  }
  