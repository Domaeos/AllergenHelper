// Create an S3 bucket
export const bucket = new sst.aws.Bucket("EvidenceUploads");

// Create the DynamoDB table
export const table = new sst.aws.Dynamo("AllergenEntries", {
  fields: {
    userId: "string",
    entryId: "string",
    // triggeringList: "list",
    severity: "number",
    date: "string",
  },
  primaryIndex: { hashKey: "userId", rangeKey: "entryId" },
  globalIndexes: {
    DateIndex: { hashKey: "date" },
    SeverityIndex: { hashKey: "severity" },  // GSI for 'severity'  // GSI for 'triggeringList'
  },
});