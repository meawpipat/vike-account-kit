import { AlchemyClientState } from "@account-kit/core";
import { AlchemyAccountProvider } from "@account-kit/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { config, queryClient } from "./accountKitConfig";

export const Providers = (
  props: PropsWithChildren<{ initialState?: AlchemyClientState }>
) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider
        config={config}
        queryClient={queryClient}
        initialState={props.initialState}
      >
        {props.children}
      </AlchemyAccountProvider>
    </QueryClientProvider>
  );
};
