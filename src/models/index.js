// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PrivilegeEnum = {
  "NONE": "NONE",
  "ADMIN": "ADMIN"
};

const UserEnum = {
  "ACTIVE": "ACTIVE",
  "DEACTIVE": "DEACTIVE",
  "DELETED": "DELETED"
};

const { UserProfile, Todo } = initSchema(schema);

export {
  UserProfile,
  Todo,
  PrivilegeEnum,
  UserEnum
};