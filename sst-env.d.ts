/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "AllergenEntries": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "Api": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "EvidenceUploads": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "Frontend": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
    "IdentityPool": {
      "id": string
      "type": "sst.aws.CognitoIdentityPool"
    }
    "UserPool": {
      "id": string
      "type": "sst.aws.CognitoUserPool"
    }
    "UserPoolClient": {
      "id": string
      "secret": string
      "type": "sst.aws.CognitoUserPoolClient"
    }
  }
}
export {}
