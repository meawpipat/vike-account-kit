import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react";
import { alchemy, sepolia } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [
      [{ type: "email" }],
      [
        { type: "passkey" },
        { type: "social", authProviderId: "google", mode: "redirect", redirectUrl: "/" },
        { type: "social", authProviderId: "auth0", mode: "redirect", redirectUrl: "/", displayName: 'Line', logoUrl: "https://firebasestorage.googleapis.com/v0/b/boredtopia-999a7.firebasestorage.app/o/btn_base.png?alt=media&token=925f1e33-d752-4de9-8465-1e71eef6a813", auth0Connection: "line"},
      ],
      [
        {
          type: "external_wallets",
          walletConnect: { projectId: import.meta.env.PUBLIC_ENV__WALLETCONNECT_PROJECT_ID },
        },
      ],
    ],
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ rpcUrl: "/api/rpc" }), // TODO: add your Alchemy API key - https://dashboard.alchemy.com/accounts
    chain: sepolia,
    ssr: true, // more about ssr: https://accountkit.alchemy.com/react/ssr
    storage: cookieStorage, // more about persisting state with cookies: https://accountkit.alchemy.com/react/ssr#persisting-the-account-state
    enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
  },
  uiConfig
);

export const queryClient = new QueryClient();
