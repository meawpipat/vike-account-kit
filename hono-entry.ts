import { vikeHandler } from "./server/vike-handler";
import { telefuncHandler } from "./server/telefunc-handler";
import { Hono } from "hono";
import { createHandler } from "@universal-middleware/hono";
import { rpcHandler } from "./server/api/rpc";

const app = new Hono();

app.post("/_telefunc", createHandler(telefuncHandler)());
app.post("/api/rpc/*", createHandler(rpcHandler)());

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", createHandler(vikeHandler)());

export default app;
