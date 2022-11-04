// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, Todo } = initSchema(schema);

export {
  UserProfile,
  Todo
};