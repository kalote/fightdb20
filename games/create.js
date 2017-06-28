import uuid from 'uuid';
import * as dynamoDbLib from './libs/dynamodb';
import { success, failure } from './libs/response';

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'fightdb_games',
    Item: {
      gameId: uuid.v1(),
      title: data.title,
      picture: data.picture,
      characters: data.characters,
      createdAt: new Date().getTime(),
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
