import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum PrivilegeEnum {
  NONE = "NONE",
  ADMIN = "ADMIN"
}

export enum UserEnum {
  ACTIVE = "ACTIVE",
  DEACTIVE = "DEACTIVE",
  DELETED = "DELETED"
}

type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUserProfile = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly status?: UserEnum | keyof typeof UserEnum | null;
  readonly privilege?: PrivilegeEnum | keyof typeof PrivilegeEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly status?: UserEnum | keyof typeof UserEnum | null;
  readonly privilege?: PrivilegeEnum | keyof typeof PrivilegeEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile, UserProfileMetaData>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}

type EagerTodo = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}