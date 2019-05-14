// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  course: (where?: CourseWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  course: (where: CourseWhereUniqueInput) => CourseNullablePromise;
  courses: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Course>;
  coursesConnection: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CourseConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCourse: (data: CourseCreateInput) => CoursePromise;
  updateCourse: (args: {
    data: CourseUpdateInput;
    where: CourseWhereUniqueInput;
  }) => CoursePromise;
  updateManyCourses: (args: {
    data: CourseUpdateManyMutationInput;
    where?: CourseWhereInput;
  }) => BatchPayloadPromise;
  upsertCourse: (args: {
    where: CourseWhereUniqueInput;
    create: CourseCreateInput;
    update: CourseUpdateInput;
  }) => CoursePromise;
  deleteCourse: (where: CourseWhereUniqueInput) => CoursePromise;
  deleteManyCourses: (where?: CourseWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  course: (
    where?: CourseSubscriptionWhereInput
  ) => CourseSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CourseOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "language_ASC"
  | "language_DESC"
  | "image_ASC"
  | "image_DESC"
  | "price_ASC"
  | "price_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneRequiredWithoutCoursesInput {
  create?: Maybe<UserCreateWithoutCoursesInput>;
  update?: Maybe<UserUpdateWithoutCoursesDataInput>;
  upsert?: Maybe<UserUpsertWithoutCoursesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type CourseWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CourseUpdateManyWithoutUserInput {
  create?: Maybe<CourseCreateWithoutUserInput[] | CourseCreateWithoutUserInput>;
  delete?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  connect?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  set?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  disconnect?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
  update?: Maybe<
    | CourseUpdateWithWhereUniqueWithoutUserInput[]
    | CourseUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | CourseUpsertWithWhereUniqueWithoutUserInput[]
    | CourseUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
  updateMany?: Maybe<
    | CourseUpdateManyWithWhereNestedInput[]
    | CourseUpdateManyWithWhereNestedInput
  >;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  courses?: Maybe<CourseCreateManyWithoutUserInput>;
}

export interface CourseUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  language?: Maybe<String>;
  image?: Maybe<String>;
  price?: Maybe<Int>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface CourseCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  language: String;
  image?: Maybe<String>;
  price: Int;
  user: UserCreateOneWithoutCoursesInput;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserCreateOneWithoutCoursesInput {
  create?: Maybe<UserCreateWithoutCoursesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface CourseUpdateManyWithWhereNestedInput {
  where: CourseScalarWhereInput;
  data: CourseUpdateManyDataInput;
}

export interface UserCreateWithoutCoursesInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface CourseUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  language?: Maybe<String>;
  image?: Maybe<String>;
  price?: Maybe<Int>;
  user?: Maybe<UserUpdateOneRequiredWithoutCoursesInput>;
}

export interface CourseUpdateWithoutUserDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  language?: Maybe<String>;
  image?: Maybe<String>;
  price?: Maybe<Int>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  courses?: Maybe<CourseUpdateManyWithoutUserInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  courses_every?: Maybe<CourseWhereInput>;
  courses_some?: Maybe<CourseWhereInput>;
  courses_none?: Maybe<CourseWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpdateWithoutCoursesDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface CourseUpdateManyDataInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  language?: Maybe<String>;
  image?: Maybe<String>;
  price?: Maybe<Int>;
}

export interface CourseCreateManyWithoutUserInput {
  create?: Maybe<CourseCreateWithoutUserInput[] | CourseCreateWithoutUserInput>;
  connect?: Maybe<CourseWhereUniqueInput[] | CourseWhereUniqueInput>;
}

export interface CourseCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  language: String;
  image?: Maybe<String>;
  price: Int;
}

export interface CourseWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  language?: Maybe<String>;
  language_not?: Maybe<String>;
  language_in?: Maybe<String[] | String>;
  language_not_in?: Maybe<String[] | String>;
  language_lt?: Maybe<String>;
  language_lte?: Maybe<String>;
  language_gt?: Maybe<String>;
  language_gte?: Maybe<String>;
  language_contains?: Maybe<String>;
  language_not_contains?: Maybe<String>;
  language_starts_with?: Maybe<String>;
  language_not_starts_with?: Maybe<String>;
  language_ends_with?: Maybe<String>;
  language_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  price?: Maybe<Int>;
  price_not?: Maybe<Int>;
  price_in?: Maybe<Int[] | Int>;
  price_not_in?: Maybe<Int[] | Int>;
  price_lt?: Maybe<Int>;
  price_lte?: Maybe<Int>;
  price_gt?: Maybe<Int>;
  price_gte?: Maybe<Int>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<CourseWhereInput[] | CourseWhereInput>;
  OR?: Maybe<CourseWhereInput[] | CourseWhereInput>;
  NOT?: Maybe<CourseWhereInput[] | CourseWhereInput>;
}

export interface UserUpsertWithoutCoursesInput {
  update: UserUpdateWithoutCoursesDataInput;
  create: UserCreateWithoutCoursesInput;
}

export interface CourseScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  language?: Maybe<String>;
  language_not?: Maybe<String>;
  language_in?: Maybe<String[] | String>;
  language_not_in?: Maybe<String[] | String>;
  language_lt?: Maybe<String>;
  language_lte?: Maybe<String>;
  language_gt?: Maybe<String>;
  language_gte?: Maybe<String>;
  language_contains?: Maybe<String>;
  language_not_contains?: Maybe<String>;
  language_starts_with?: Maybe<String>;
  language_not_starts_with?: Maybe<String>;
  language_ends_with?: Maybe<String>;
  language_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  price?: Maybe<Int>;
  price_not?: Maybe<Int>;
  price_in?: Maybe<Int[] | Int>;
  price_not_in?: Maybe<Int[] | Int>;
  price_lt?: Maybe<Int>;
  price_lte?: Maybe<Int>;
  price_gt?: Maybe<Int>;
  price_gte?: Maybe<Int>;
  AND?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
  OR?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
  NOT?: Maybe<CourseScalarWhereInput[] | CourseScalarWhereInput>;
}

export interface CourseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CourseWhereInput>;
  AND?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
  OR?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
  NOT?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
}

export interface CourseUpdateWithWhereUniqueWithoutUserInput {
  where: CourseWhereUniqueInput;
  data: CourseUpdateWithoutUserDataInput;
}

export interface CourseUpsertWithWhereUniqueWithoutUserInput {
  where: CourseWhereUniqueInput;
  update: CourseUpdateWithoutUserDataInput;
  create: CourseCreateWithoutUserInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCourse {
  count: Int;
}

export interface AggregateCoursePromise
  extends Promise<AggregateCourse>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCourseSubscription
  extends Promise<AsyncIterator<AggregateCourse>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CourseSubscriptionPayload {
  mutation: MutationType;
  node: Course;
  updatedFields: String[];
  previousValues: CoursePreviousValues;
}

export interface CourseSubscriptionPayloadPromise
  extends Promise<CourseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CoursePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CoursePreviousValuesPromise>() => T;
}

export interface CourseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CourseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CourseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CoursePreviousValuesSubscription>() => T;
}

export interface CourseEdge {
  node: Course;
  cursor: String;
}

export interface CourseEdgePromise extends Promise<CourseEdge>, Fragmentable {
  node: <T = CoursePromise>() => T;
  cursor: () => Promise<String>;
}

export interface CourseEdgeSubscription
  extends Promise<AsyncIterator<CourseEdge>>,
    Fragmentable {
  node: <T = CourseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  courses: <T = FragmentableArray<Course>>(args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  courses: <T = Promise<AsyncIterator<CourseSubscription>>>(args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  courses: <T = FragmentableArray<Course>>(args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Course {
  id: ID_Output;
  title: String;
  description: String;
  language: String;
  image?: String;
  price: Int;
}

export interface CoursePromise extends Promise<Course>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  language: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Int>;
  user: <T = UserPromise>() => T;
}

export interface CourseSubscription
  extends Promise<AsyncIterator<Course>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  language: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  user: <T = UserSubscription>() => T;
}

export interface CourseNullablePromise
  extends Promise<Course | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  language: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Int>;
  user: <T = UserPromise>() => T;
}

export interface CourseConnection {
  pageInfo: PageInfo;
  edges: CourseEdge[];
}

export interface CourseConnectionPromise
  extends Promise<CourseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CourseEdge>>() => T;
  aggregate: <T = AggregateCoursePromise>() => T;
}

export interface CourseConnectionSubscription
  extends Promise<AsyncIterator<CourseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CourseEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCourseSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface CoursePreviousValues {
  id: ID_Output;
  title: String;
  description: String;
  language: String;
  image?: String;
  price: Int;
}

export interface CoursePreviousValuesPromise
  extends Promise<CoursePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  language: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Int>;
}

export interface CoursePreviousValuesSubscription
  extends Promise<AsyncIterator<CoursePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  language: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Course",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
