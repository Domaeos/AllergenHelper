import * as uuid from "uuid";
import { Resource } from "sst";
import { APIGatewayProxyEvent } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export async function get(event: APIGatewayProxyEvent) {
  const params = {
    TableName: Resource.AllergenEntries.name,
    // 'Key' defines the partition key and sort key of
    // the item to be retrieved
    Key: {
      userId: "123", // The id of the author
      entryId: event?.pathParameters?.id, // The id of the note from the path
      // alternative queryStringParams
    },
  };

  const result = await dynamoDb.send(new GetCommand(params));
  if (!result.Item) {
    throw new Error("Item not found: " + event?.pathParameters?.id);
  }

  // Return the retrieved item
  return JSON.stringify(result.Item);
}

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export async function post(event: APIGatewayProxyEvent) {
  let data, params;

  // Request body is passed in as a JSON encoded string in 'event.body'
  if (event.body) {
    data = JSON.parse(event.body);
    params = {
      TableName: Resource.AllergenEntries.name,
      Item: {
        // The attributes of the item to be created
        userId: "123", // The id of the author
        entryId: uuid.v1(), // A unique uuid
        triggeringList: data.allergenList,
        severity: data.severity, // Parsed from request body
        date: Date.now().toString(),
      },
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: true }),
    };
  }

  try {
    await dynamoDb.send(new PutCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: message }),
    };
  }
}