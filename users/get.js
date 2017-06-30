import * as dynamoDbLib from './libs/dynamodb';
import { success, failure } from './libs/response';
import { isAlphanumeric } from 'validator';

export async function main(event, context, callback) {
  const id = event.pathParameters.id;
  if (!isAlphanumeric(id))
    throw Error('Incorrect id');
  const params = {
    TableName: 'fightdb_users_profile',
    Key: {
      userId: event.pathParameters.id
    },
  };

  try {
    const result = await dynamoDbLib.call('get', params);
    if (result.Item) {
      callback(null, success(result.Item));
    }
    else {
      callback(null, failure({status: false, error: 'Item not found.'}));
    }
  }
  catch(e) {
    callback(null, failure({status: false}));
  }
};
