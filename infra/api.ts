import { table } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table],
      },
      // args: {
      //   auth: { iam: true }
      // }, for only allowing iam authentication to
    }
  }
});
api.route("GET /{id}", "packages/functions/src/index.get");
api.route("POST /", "packages/functions/src/index.post");