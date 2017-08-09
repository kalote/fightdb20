import * as dynamoDbLib from './libs/dynamodb';
import { success, failure } from './libs/response';
import { isAlphanumeric, isDate, isEmail } from 'validator';
import * as moment from 'moment';

export async function main(event, context, callback) {
  const id = event.pathParameters.id;
  const data = JSON.parse(event.body);
  if (!isAlphanumeric(id))
    throw Error('Incorrect id');
  if (!isEmail(data.email))
    throw Error('Incorrect email');
  if (!moment(data.dob, "YYYY-MM-DD").isValid())
    throw Error('Incorrect Date of birth');

  const params = {
    TableName: 'fightdb_users_profile',
    Key: {
      userId: event.pathParameters.id
    },
    UpdateExpression: 'SET email = :email, dob = :dob, country = :country',
    ExpressionAttributeValues: {
      ':email': data.email,
      ':dob' : data.dob,
      ':country': data.country
    },
    ReturnValues: 'ALL_NEW',
  };

  try {
    const result = await dynamoDbLib.call('update', params);
    callback(null, success({status: true}));
  }
  catch(e) {
    callback(null, failure({status: false}));
  }
};
