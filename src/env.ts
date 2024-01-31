import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    PROD: z.boolean(),
  },
  client: {},

  clientPrefix: "VITE_",

  runtimeEnvStrict: import.meta.env,
});
