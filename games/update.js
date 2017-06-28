import * as dynamoDbLib from './libs/dynamodb';
import { success, failure } from './libs/response';

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'fightdb_games',
    Key: {
      gameId: event.pathParameters.id
    },
    UpdateExpression: 'SET title = :title, picture = :picture, characters = :characters',
    ExpressionAttributeValues: {
      ':title': data.title ? data.title : null,
      ':picture': data.picture ? data.picture : null,
      ':characters': data.characters ? data.characters : null,
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
