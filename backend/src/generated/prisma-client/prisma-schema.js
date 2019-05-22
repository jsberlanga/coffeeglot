module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.31.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCourse {
  count: Int!
}

type AggregateTeacher {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Course {
  id: ID!
  createdAt: DateTime!
  title: String!
  details: String!
  price: Int!
  language: String!
  location: String!
  seats: Int!
  startDate: String!
  endDate: String!
  createdBy: User
}

type CourseConnection {
  pageInfo: PageInfo!
  edges: [CourseEdge]!
  aggregate: AggregateCourse!
}

input CourseCreateInput {
  id: ID
  title: String!
  details: String!
  price: Int!
  language: String!
  location: String!
  seats: Int!
  startDate: String!
  endDate: String!
  createdBy: UserCreateOneWithoutCoursesInput
}

input CourseCreateManyWithoutCreatedByInput {
  create: [CourseCreateWithoutCreatedByInput!]
  connect: [CourseWhereUniqueInput!]
}

input CourseCreateWithoutCreatedByInput {
  id: ID
  title: String!
  details: String!
  price: Int!
  language: String!
  location: String!
  seats: Int!
  startDate: String!
  endDate: String!
}

type CourseEdge {
  node: Course!
  cursor: String!
}

enum CourseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  details_ASC
  details_DESC
  price_ASC
  price_DESC
  language_ASC
  language_DESC
  location_ASC
  location_DESC
  seats_ASC
  seats_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
}

type CoursePreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  details: String!
  price: Int!
  language: String!
  location: String!
  seats: Int!
  startDate: String!
  endDate: String!
}

input CourseScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  details: String
  details_not: String
  details_in: [String!]
  details_not_in: [String!]
  details_lt: String
  details_lte: String
  details_gt: String
  details_gte: String
  details_contains: String
  details_not_contains: String
  details_starts_with: String
  details_not_starts_with: String
  details_ends_with: String
  details_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  seats: Int
  seats_not: Int
  seats_in: [Int!]
  seats_not_in: [Int!]
  seats_lt: Int
  seats_lte: Int
  seats_gt: Int
  seats_gte: Int
  startDate: String
  startDate_not: String
  startDate_in: [String!]
  startDate_not_in: [String!]
  startDate_lt: String
  startDate_lte: String
  startDate_gt: String
  startDate_gte: String
  startDate_contains: String
  startDate_not_contains: String
  startDate_starts_with: String
  startDate_not_starts_with: String
  startDate_ends_with: String
  startDate_not_ends_with: String
  endDate: String
  endDate_not: String
  endDate_in: [String!]
  endDate_not_in: [String!]
  endDate_lt: String
  endDate_lte: String
  endDate_gt: String
  endDate_gte: String
  endDate_contains: String
  endDate_not_contains: String
  endDate_starts_with: String
  endDate_not_starts_with: String
  endDate_ends_with: String
  endDate_not_ends_with: String
  AND: [CourseScalarWhereInput!]
  OR: [CourseScalarWhereInput!]
  NOT: [CourseScalarWhereInput!]
}

type CourseSubscriptionPayload {
  mutation: MutationType!
  node: Course
  updatedFields: [String!]
  previousValues: CoursePreviousValues
}

input CourseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CourseWhereInput
  AND: [CourseSubscriptionWhereInput!]
  OR: [CourseSubscriptionWhereInput!]
  NOT: [CourseSubscriptionWhereInput!]
}

input CourseUpdateInput {
  title: String
  details: String
  price: Int
  language: String
  location: String
  seats: Int
  startDate: String
  endDate: String
  createdBy: UserUpdateOneWithoutCoursesInput
}

input CourseUpdateManyDataInput {
  title: String
  details: String
  price: Int
  language: String
  location: String
  seats: Int
  startDate: String
  endDate: String
}

input CourseUpdateManyMutationInput {
  title: String
  details: String
  price: Int
  language: String
  location: String
  seats: Int
  startDate: String
  endDate: String
}

input CourseUpdateManyWithoutCreatedByInput {
  create: [CourseCreateWithoutCreatedByInput!]
  delete: [CourseWhereUniqueInput!]
  connect: [CourseWhereUniqueInput!]
  set: [CourseWhereUniqueInput!]
  disconnect: [CourseWhereUniqueInput!]
  update: [CourseUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [CourseUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [CourseScalarWhereInput!]
  updateMany: [CourseUpdateManyWithWhereNestedInput!]
}

input CourseUpdateManyWithWhereNestedInput {
  where: CourseScalarWhereInput!
  data: CourseUpdateManyDataInput!
}

input CourseUpdateWithoutCreatedByDataInput {
  title: String
  details: String
  price: Int
  language: String
  location: String
  seats: Int
  startDate: String
  endDate: String
}

input CourseUpdateWithWhereUniqueWithoutCreatedByInput {
  where: CourseWhereUniqueInput!
  data: CourseUpdateWithoutCreatedByDataInput!
}

input CourseUpsertWithWhereUniqueWithoutCreatedByInput {
  where: CourseWhereUniqueInput!
  update: CourseUpdateWithoutCreatedByDataInput!
  create: CourseCreateWithoutCreatedByInput!
}

input CourseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  details: String
  details_not: String
  details_in: [String!]
  details_not_in: [String!]
  details_lt: String
  details_lte: String
  details_gt: String
  details_gte: String
  details_contains: String
  details_not_contains: String
  details_starts_with: String
  details_not_starts_with: String
  details_ends_with: String
  details_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  seats: Int
  seats_not: Int
  seats_in: [Int!]
  seats_not_in: [Int!]
  seats_lt: Int
  seats_lte: Int
  seats_gt: Int
  seats_gte: Int
  startDate: String
  startDate_not: String
  startDate_in: [String!]
  startDate_not_in: [String!]
  startDate_lt: String
  startDate_lte: String
  startDate_gt: String
  startDate_gte: String
  startDate_contains: String
  startDate_not_contains: String
  startDate_starts_with: String
  startDate_not_starts_with: String
  startDate_ends_with: String
  startDate_not_ends_with: String
  endDate: String
  endDate_not: String
  endDate_in: [String!]
  endDate_not_in: [String!]
  endDate_lt: String
  endDate_lte: String
  endDate_gt: String
  endDate_gte: String
  endDate_contains: String
  endDate_not_contains: String
  endDate_starts_with: String
  endDate_not_starts_with: String
  endDate_ends_with: String
  endDate_not_ends_with: String
  createdBy: UserWhereInput
  AND: [CourseWhereInput!]
  OR: [CourseWhereInput!]
  NOT: [CourseWhereInput!]
}

input CourseWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCourse(data: CourseCreateInput!): Course!
  updateCourse(data: CourseUpdateInput!, where: CourseWhereUniqueInput!): Course
  updateManyCourses(data: CourseUpdateManyMutationInput!, where: CourseWhereInput): BatchPayload!
  upsertCourse(where: CourseWhereUniqueInput!, create: CourseCreateInput!, update: CourseUpdateInput!): Course!
  deleteCourse(where: CourseWhereUniqueInput!): Course
  deleteManyCourses(where: CourseWhereInput): BatchPayload!
  createTeacher(data: TeacherCreateInput!): Teacher!
  updateTeacher(data: TeacherUpdateInput!, where: TeacherWhereUniqueInput!): Teacher
  updateManyTeachers(data: TeacherUpdateManyMutationInput!, where: TeacherWhereInput): BatchPayload!
  upsertTeacher(where: TeacherWhereUniqueInput!, create: TeacherCreateInput!, update: TeacherUpdateInput!): Teacher!
  deleteTeacher(where: TeacherWhereUniqueInput!): Teacher
  deleteManyTeachers(where: TeacherWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  course(where: CourseWhereUniqueInput!): Course
  courses(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Course]!
  coursesConnection(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CourseConnection!
  teacher(where: TeacherWhereUniqueInput!): Teacher
  teachers(where: TeacherWhereInput, orderBy: TeacherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Teacher]!
  teachersConnection(where: TeacherWhereInput, orderBy: TeacherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeacherConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  course(where: CourseSubscriptionWhereInput): CourseSubscriptionPayload
  teacher(where: TeacherSubscriptionWhereInput): TeacherSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Teacher {
  id: ID!
  createdAt: DateTime!
  name: String!
  age: Int!
  image: String!
  isNative: String!
  about: String!
  experience: String!
  education: String!
  certifications: String!
  createdBy: User
}

type TeacherConnection {
  pageInfo: PageInfo!
  edges: [TeacherEdge]!
  aggregate: AggregateTeacher!
}

input TeacherCreateInput {
  id: ID
  name: String!
  age: Int!
  image: String!
  isNative: String!
  about: String!
  experience: String!
  education: String!
  certifications: String!
  createdBy: UserCreateOneWithoutTeachersInput
}

input TeacherCreateManyWithoutCreatedByInput {
  create: [TeacherCreateWithoutCreatedByInput!]
  connect: [TeacherWhereUniqueInput!]
}

input TeacherCreateWithoutCreatedByInput {
  id: ID
  name: String!
  age: Int!
  image: String!
  isNative: String!
  about: String!
  experience: String!
  education: String!
  certifications: String!
}

type TeacherEdge {
  node: Teacher!
  cursor: String!
}

enum TeacherOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  age_ASC
  age_DESC
  image_ASC
  image_DESC
  isNative_ASC
  isNative_DESC
  about_ASC
  about_DESC
  experience_ASC
  experience_DESC
  education_ASC
  education_DESC
  certifications_ASC
  certifications_DESC
}

type TeacherPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  age: Int!
  image: String!
  isNative: String!
  about: String!
  experience: String!
  education: String!
  certifications: String!
}

input TeacherScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  isNative: String
  isNative_not: String
  isNative_in: [String!]
  isNative_not_in: [String!]
  isNative_lt: String
  isNative_lte: String
  isNative_gt: String
  isNative_gte: String
  isNative_contains: String
  isNative_not_contains: String
  isNative_starts_with: String
  isNative_not_starts_with: String
  isNative_ends_with: String
  isNative_not_ends_with: String
  about: String
  about_not: String
  about_in: [String!]
  about_not_in: [String!]
  about_lt: String
  about_lte: String
  about_gt: String
  about_gte: String
  about_contains: String
  about_not_contains: String
  about_starts_with: String
  about_not_starts_with: String
  about_ends_with: String
  about_not_ends_with: String
  experience: String
  experience_not: String
  experience_in: [String!]
  experience_not_in: [String!]
  experience_lt: String
  experience_lte: String
  experience_gt: String
  experience_gte: String
  experience_contains: String
  experience_not_contains: String
  experience_starts_with: String
  experience_not_starts_with: String
  experience_ends_with: String
  experience_not_ends_with: String
  education: String
  education_not: String
  education_in: [String!]
  education_not_in: [String!]
  education_lt: String
  education_lte: String
  education_gt: String
  education_gte: String
  education_contains: String
  education_not_contains: String
  education_starts_with: String
  education_not_starts_with: String
  education_ends_with: String
  education_not_ends_with: String
  certifications: String
  certifications_not: String
  certifications_in: [String!]
  certifications_not_in: [String!]
  certifications_lt: String
  certifications_lte: String
  certifications_gt: String
  certifications_gte: String
  certifications_contains: String
  certifications_not_contains: String
  certifications_starts_with: String
  certifications_not_starts_with: String
  certifications_ends_with: String
  certifications_not_ends_with: String
  AND: [TeacherScalarWhereInput!]
  OR: [TeacherScalarWhereInput!]
  NOT: [TeacherScalarWhereInput!]
}

type TeacherSubscriptionPayload {
  mutation: MutationType!
  node: Teacher
  updatedFields: [String!]
  previousValues: TeacherPreviousValues
}

input TeacherSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeacherWhereInput
  AND: [TeacherSubscriptionWhereInput!]
  OR: [TeacherSubscriptionWhereInput!]
  NOT: [TeacherSubscriptionWhereInput!]
}

input TeacherUpdateInput {
  name: String
  age: Int
  image: String
  isNative: String
  about: String
  experience: String
  education: String
  certifications: String
  createdBy: UserUpdateOneWithoutTeachersInput
}

input TeacherUpdateManyDataInput {
  name: String
  age: Int
  image: String
  isNative: String
  about: String
  experience: String
  education: String
  certifications: String
}

input TeacherUpdateManyMutationInput {
  name: String
  age: Int
  image: String
  isNative: String
  about: String
  experience: String
  education: String
  certifications: String
}

input TeacherUpdateManyWithoutCreatedByInput {
  create: [TeacherCreateWithoutCreatedByInput!]
  delete: [TeacherWhereUniqueInput!]
  connect: [TeacherWhereUniqueInput!]
  set: [TeacherWhereUniqueInput!]
  disconnect: [TeacherWhereUniqueInput!]
  update: [TeacherUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [TeacherUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [TeacherScalarWhereInput!]
  updateMany: [TeacherUpdateManyWithWhereNestedInput!]
}

input TeacherUpdateManyWithWhereNestedInput {
  where: TeacherScalarWhereInput!
  data: TeacherUpdateManyDataInput!
}

input TeacherUpdateWithoutCreatedByDataInput {
  name: String
  age: Int
  image: String
  isNative: String
  about: String
  experience: String
  education: String
  certifications: String
}

input TeacherUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TeacherWhereUniqueInput!
  data: TeacherUpdateWithoutCreatedByDataInput!
}

input TeacherUpsertWithWhereUniqueWithoutCreatedByInput {
  where: TeacherWhereUniqueInput!
  update: TeacherUpdateWithoutCreatedByDataInput!
  create: TeacherCreateWithoutCreatedByInput!
}

input TeacherWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  isNative: String
  isNative_not: String
  isNative_in: [String!]
  isNative_not_in: [String!]
  isNative_lt: String
  isNative_lte: String
  isNative_gt: String
  isNative_gte: String
  isNative_contains: String
  isNative_not_contains: String
  isNative_starts_with: String
  isNative_not_starts_with: String
  isNative_ends_with: String
  isNative_not_ends_with: String
  about: String
  about_not: String
  about_in: [String!]
  about_not_in: [String!]
  about_lt: String
  about_lte: String
  about_gt: String
  about_gte: String
  about_contains: String
  about_not_contains: String
  about_starts_with: String
  about_not_starts_with: String
  about_ends_with: String
  about_not_ends_with: String
  experience: String
  experience_not: String
  experience_in: [String!]
  experience_not_in: [String!]
  experience_lt: String
  experience_lte: String
  experience_gt: String
  experience_gte: String
  experience_contains: String
  experience_not_contains: String
  experience_starts_with: String
  experience_not_starts_with: String
  experience_ends_with: String
  experience_not_ends_with: String
  education: String
  education_not: String
  education_in: [String!]
  education_not_in: [String!]
  education_lt: String
  education_lte: String
  education_gt: String
  education_gte: String
  education_contains: String
  education_not_contains: String
  education_starts_with: String
  education_not_starts_with: String
  education_ends_with: String
  education_not_ends_with: String
  certifications: String
  certifications_not: String
  certifications_in: [String!]
  certifications_not_in: [String!]
  certifications_lt: String
  certifications_lte: String
  certifications_gt: String
  certifications_gte: String
  certifications_contains: String
  certifications_not_contains: String
  certifications_starts_with: String
  certifications_not_starts_with: String
  certifications_ends_with: String
  certifications_not_ends_with: String
  createdBy: UserWhereInput
  AND: [TeacherWhereInput!]
  OR: [TeacherWhereInput!]
  NOT: [TeacherWhereInput!]
}

input TeacherWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
  teachers(where: TeacherWhereInput, orderBy: TeacherOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Teacher!]
  courses(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Course!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  teachers: TeacherCreateManyWithoutCreatedByInput
  courses: CourseCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutCoursesInput {
  create: UserCreateWithoutCoursesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTeachersInput {
  create: UserCreateWithoutTeachersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCoursesInput {
  id: ID
  email: String!
  password: String!
  teachers: TeacherCreateManyWithoutCreatedByInput
}

input UserCreateWithoutTeachersInput {
  id: ID
  email: String!
  password: String!
  courses: CourseCreateManyWithoutCreatedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  teachers: TeacherUpdateManyWithoutCreatedByInput
  courses: CourseUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
}

input UserUpdateOneWithoutCoursesInput {
  create: UserCreateWithoutCoursesInput
  update: UserUpdateWithoutCoursesDataInput
  upsert: UserUpsertWithoutCoursesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutTeachersInput {
  create: UserCreateWithoutTeachersInput
  update: UserUpdateWithoutTeachersDataInput
  upsert: UserUpsertWithoutTeachersInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCoursesDataInput {
  email: String
  password: String
  teachers: TeacherUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutTeachersDataInput {
  email: String
  password: String
  courses: CourseUpdateManyWithoutCreatedByInput
}

input UserUpsertWithoutCoursesInput {
  update: UserUpdateWithoutCoursesDataInput!
  create: UserCreateWithoutCoursesInput!
}

input UserUpsertWithoutTeachersInput {
  update: UserUpdateWithoutTeachersDataInput!
  create: UserCreateWithoutTeachersInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  teachers_every: TeacherWhereInput
  teachers_some: TeacherWhereInput
  teachers_none: TeacherWhereInput
  courses_every: CourseWhereInput
  courses_some: CourseWhereInput
  courses_none: CourseWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    