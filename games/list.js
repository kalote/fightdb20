import * as dynamoDbLib from './libs/dynamodb';
import { success, failure } from './libs/response';

export async function main(event, context, callback) {
  const params = {
    TableName: 'fightdb_games',
    Limit: 50
  };

  try {
    const result = await dynamoDbLib.call('scan', params);
    // Return the matching list of items in response body
    callback(null, success(result.Items));
  }
  catch(e) {
    callback(null, failure({status: false}));
  }
};
