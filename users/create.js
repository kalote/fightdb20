import uuid from 'uuid';
import * as dynamoDbLib from './libs/dynamodb';
import { success, failure } from './libs/response';
import { isAlphanumeric, isEmail } from 'validator';

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  if (!isEmail(data.email))
    throw Error('Incorrect email');

  const params = {
    TableName: 'fightdb_users_profile',
    Item: {
      userId: event.requestContext.authorizer.claims.sub,
      username: data.username,
      email: data.email,
      createdAt: new Date().getTime()
    },
  };

  try {
    const result = await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  }
  catch(e) {
    callback(null, failure({status: false}));
  }
};
