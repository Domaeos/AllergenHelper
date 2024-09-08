/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "allergenhelper",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },

  async run() {
    await import("./infra/api");
    await import("./infra/storage");
    const { frontend } = await import("./infra/web"); // Import the frontend

    const auth = await import("./infra/auth");

    return {
      frontendUrl: frontend.url, // Return custom domain or default URL
      UserPool: auth.userPool.id,
      Region: aws.getRegionOutput().name,
      IdentityPool: auth.identityPool.id,
      UserPoolClient: auth.userPoolClient.id,
    };
  }
});

