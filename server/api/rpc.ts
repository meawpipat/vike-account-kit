import { telefunc } from "telefunc";
// TODO: stop using universal-middleware and directly integrate server middlewares instead. (Bati generates boilerplates that use universal-middleware https://github.com/magne4000/universal-middleware to make Bati's internal logic easier. This is temporary and will be removed soon.)
import type { Get, UniversalHandler } from "@universal-middleware/core";
import { Abort } from 'telefunc'

export const rpcHandler: Get<[], UniversalHandler> = () => async (request, context, runtime) => {
  const apiUrl = "https://api.g.alchemy.com";
  const apiKey = import.meta.env.ALCHEMY_API_KEY;

  if (apiKey == null) {
    throw Abort({
      errorMessage: "ALCHEMY_API_KEY is not set"
    });
  }
  
  const url = request?.url ? new URL(request.url) : null;
  const pathname = url?.pathname;
  const routeParams = pathname ? pathname.slice(9) : null;

  const body = await request.json();

  const res = await fetch(apiUrl + "/" + routeParams, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      ...request.headers,
    },
    body: JSON.stringify(body),
  }).catch(err => {
    console.error('fetch error.');
    console.error(err);
    return null;
  });

  if (!res?.ok) {
    throw Abort({
      errorMessage: "Can't connect with Alchemy server."
    });
  }
  const resJSON = await res.json();
  return Response.json(resJSON);
};
