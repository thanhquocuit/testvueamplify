import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type Todo2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodo2 = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo2 = {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo2 = LazyLoading extends LazyLoadingDisabled ? EagerTodo2 : LazyTodo2

export declare const Todo2: (new (init: ModelInit<Todo2, Todo2MetaData>) => Todo2) & {
  copyOf(source: Todo2, mutator: (draft: MutableModel<Todo2, Todo2MetaData>) => MutableModel<Todo2, Todo2MetaData> | void): Todo2;
}

type EagerUserProfile = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly created?: string | null;
  readonly status?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly created?: string | null;
  readonly status?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile, UserProfileMetaData>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}