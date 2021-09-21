// Code generated by Prisma (prisma@1.34.12). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateMovie {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateRoom {
  count: Int!
}

type AggregateSchedule {
  count: Int!
}

type AggregateSeat {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

enum Kind {
  NORMAL
  VIP
  TD
  CD
}

enum Level {
  ADMIN
  CLIENT
}

scalar Long

type Movie {
  id: ID!
  name: String!
  duration: Int!
  description: String
  clasification: String!
}

type MovieConnection {
  pageInfo: PageInfo!
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreateInput {
  id: ID
  name: String!
  duration: Int!
  description: String
  clasification: String!
}

input MovieCreateOneInput {
  create: MovieCreateInput
  connect: MovieWhereUniqueInput
}

type MovieEdge {
  node: Movie!
  cursor: String!
}

enum MovieOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  duration_ASC
  duration_DESC
  description_ASC
  description_DESC
  clasification_ASC
  clasification_DESC
}

type MoviePreviousValues {
  id: ID!
  name: String!
  duration: Int!
  description: String
  clasification: String!
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
  AND: [MovieSubscriptionWhereInput!]
}

input MovieUpdateDataInput {
  name: String
  duration: Int
  description: String
  clasification: String
}

input MovieUpdateInput {
  name: String
  duration: Int
  description: String
  clasification: String
}

input MovieUpdateManyMutationInput {
  name: String
  duration: Int
  description: String
  clasification: String
}

input MovieUpdateOneInput {
  create: MovieCreateInput
  update: MovieUpdateDataInput
  upsert: MovieUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: MovieWhereUniqueInput
}

input MovieUpdateOneRequiredInput {
  create: MovieCreateInput
  update: MovieUpdateDataInput
  upsert: MovieUpsertNestedInput
  connect: MovieWhereUniqueInput
}

input MovieUpsertNestedInput {
  update: MovieUpdateDataInput!
  create: MovieCreateInput!
}

input MovieWhereInput {
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
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  clasification: String
  clasification_not: String
  clasification_in: [String!]
  clasification_not_in: [String!]
  clasification_lt: String
  clasification_lte: String
  clasification_gt: String
  clasification_gte: String
  clasification_contains: String
  clasification_not_contains: String
  clasification_starts_with: String
  clasification_not_starts_with: String
  clasification_ends_with: String
  clasification_not_ends_with: String
  AND: [MovieWhereInput!]
}

input MovieWhereUniqueInput {
  id: ID
}

type Mutation {
  createMovie(data: MovieCreateInput!): Movie!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateManyMovies(data: MovieUpdateManyMutationInput!, where: MovieWhereInput): BatchPayload!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createRoom(data: RoomCreateInput!): Room!
  updateRoom(data: RoomUpdateInput!, where: RoomWhereUniqueInput!): Room
  updateManyRooms(data: RoomUpdateManyMutationInput!, where: RoomWhereInput): BatchPayload!
  upsertRoom(where: RoomWhereUniqueInput!, create: RoomCreateInput!, update: RoomUpdateInput!): Room!
  deleteRoom(where: RoomWhereUniqueInput!): Room
  deleteManyRooms(where: RoomWhereInput): BatchPayload!
  createSchedule(data: ScheduleCreateInput!): Schedule!
  updateSchedule(data: ScheduleUpdateInput!, where: ScheduleWhereUniqueInput!): Schedule
  updateManySchedules(data: ScheduleUpdateManyMutationInput!, where: ScheduleWhereInput): BatchPayload!
  upsertSchedule(where: ScheduleWhereUniqueInput!, create: ScheduleCreateInput!, update: ScheduleUpdateInput!): Schedule!
  deleteSchedule(where: ScheduleWhereUniqueInput!): Schedule
  deleteManySchedules(where: ScheduleWhereInput): BatchPayload!
  createSeat(data: SeatCreateInput!): Seat!
  updateSeat(data: SeatUpdateInput!, where: SeatWhereUniqueInput!): Seat
  upsertSeat(where: SeatWhereUniqueInput!, create: SeatCreateInput!, update: SeatUpdateInput!): Seat!
  deleteSeat(where: SeatWhereUniqueInput!): Seat
  deleteManySeats(where: SeatWhereInput): BatchPayload!
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

type Order {
  id: ID!
  createdAt: DateTime!
  room: Room
  active: Boolean!
  product(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  schedule: Schedule!
  sku: String!
  amount: Int!
  rewards: Int!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  id: ID
  createdAt: DateTime!
  room: RoomCreateOneInput
  active: Boolean
  product: ProductCreateManyInput
  schedule: ScheduleCreateOneInput!
  sku: String!
  amount: Int!
  rewards: Int!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  active_ASC
  active_DESC
  sku_ASC
  sku_DESC
  amount_ASC
  amount_DESC
  rewards_ASC
  rewards_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  active: Boolean!
  sku: String!
  amount: Int!
  rewards: Int!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  createdAt: DateTime
  room: RoomUpdateOneInput
  active: Boolean
  product: ProductUpdateManyInput
  schedule: ScheduleUpdateOneRequiredInput
  sku: String
  amount: Int
  rewards: Int
}

input OrderUpdateManyMutationInput {
  createdAt: DateTime
  active: Boolean
  sku: String
  amount: Int
  rewards: Int
}

input OrderWhereInput {
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
  room: RoomWhereInput
  active: Boolean
  active_not: Boolean
  product_some: ProductWhereInput
  schedule: ScheduleWhereInput
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  rewards: Int
  rewards_not: Int
  rewards_in: [Int!]
  rewards_not_in: [Int!]
  rewards_lt: Int
  rewards_lte: Int
  rewards_gt: Int
  rewards_gte: Int
  AND: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  description: String!
  price: Int!
  sku: String!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  description: String!
  price: Int!
  sku: String!
}

input ProductCreateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  sku_ASC
  sku_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  description: String!
  price: Int!
  sku: String!
}

input ProductScalarWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  name: String
  description: String
  price: Int
  sku: String
}

input ProductUpdateInput {
  name: String
  description: String
  price: Int
  sku: String
}

input ProductUpdateManyDataInput {
  name: String
  description: String
  price: Int
  sku: String
}

input ProductUpdateManyInput {
  create: [ProductCreateInput!]
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyMutationInput {
  name: String
  description: String
  price: Int
  sku: String
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  sku: String
  sku_not: String
  sku_in: [String!]
  sku_not_in: [String!]
  sku_lt: String
  sku_lte: String
  sku_gt: String
  sku_gte: String
  sku_contains: String
  sku_not_contains: String
  sku_starts_with: String
  sku_not_starts_with: String
  sku_ends_with: String
  sku_not_ends_with: String
  AND: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  movie(where: MovieWhereUniqueInput!): Movie
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  room(where: RoomWhereUniqueInput!): Room
  rooms(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Room]!
  roomsConnection(where: RoomWhereInput, orderBy: RoomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomConnection!
  schedule(where: ScheduleWhereUniqueInput!): Schedule
  schedules(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Schedule]!
  schedulesConnection(where: ScheduleWhereInput, orderBy: ScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScheduleConnection!
  seat(where: SeatWhereUniqueInput!): Seat
  seats(where: SeatWhereInput, orderBy: SeatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Seat]!
  seatsConnection(where: SeatWhereInput, orderBy: SeatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeatConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Room {
  id: ID!
  avaible: Boolean!
  movie: Movie
  kind: Kind!
}

type RoomConnection {
  pageInfo: PageInfo!
  edges: [RoomEdge]!
  aggregate: AggregateRoom!
}

input RoomCreateInput {
  id: ID
  avaible: Boolean
  movie: MovieCreateOneInput
  kind: Kind!
}

input RoomCreateOneInput {
  create: RoomCreateInput
  connect: RoomWhereUniqueInput
}

type RoomEdge {
  node: Room!
  cursor: String!
}

enum RoomOrderByInput {
  id_ASC
  id_DESC
  avaible_ASC
  avaible_DESC
  kind_ASC
  kind_DESC
}

type RoomPreviousValues {
  id: ID!
  avaible: Boolean!
  kind: Kind!
}

type RoomSubscriptionPayload {
  mutation: MutationType!
  node: Room
  updatedFields: [String!]
  previousValues: RoomPreviousValues
}

input RoomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoomWhereInput
  AND: [RoomSubscriptionWhereInput!]
}

input RoomUpdateDataInput {
  avaible: Boolean
  movie: MovieUpdateOneInput
  kind: Kind
}

input RoomUpdateInput {
  avaible: Boolean
  movie: MovieUpdateOneInput
  kind: Kind
}

input RoomUpdateManyMutationInput {
  avaible: Boolean
  kind: Kind
}

input RoomUpdateOneInput {
  create: RoomCreateInput
  update: RoomUpdateDataInput
  upsert: RoomUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: RoomWhereUniqueInput
}

input RoomUpdateOneRequiredInput {
  create: RoomCreateInput
  update: RoomUpdateDataInput
  upsert: RoomUpsertNestedInput
  connect: RoomWhereUniqueInput
}

input RoomUpsertNestedInput {
  update: RoomUpdateDataInput!
  create: RoomCreateInput!
}

input RoomWhereInput {
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
  avaible: Boolean
  avaible_not: Boolean
  movie: MovieWhereInput
  kind: Kind
  kind_not: Kind
  kind_in: [Kind!]
  kind_not_in: [Kind!]
  AND: [RoomWhereInput!]
}

input RoomWhereUniqueInput {
  id: ID
}

type Schedule {
  id: ID!
  startTime: DateTime!
  finalTime: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
  movie: Movie!
  room: Room!
}

type ScheduleConnection {
  pageInfo: PageInfo!
  edges: [ScheduleEdge]!
  aggregate: AggregateSchedule!
}

input ScheduleCreateInput {
  id: ID
  startTime: DateTime!
  finalTime: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
  movie: MovieCreateOneInput!
  room: RoomCreateOneInput!
}

input ScheduleCreateOneInput {
  create: ScheduleCreateInput
  connect: ScheduleWhereUniqueInput
}

type ScheduleEdge {
  node: Schedule!
  cursor: String!
}

enum ScheduleOrderByInput {
  id_ASC
  id_DESC
  startTime_ASC
  startTime_DESC
  finalTime_ASC
  finalTime_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchedulePreviousValues {
  id: ID!
  startTime: DateTime!
  finalTime: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ScheduleSubscriptionPayload {
  mutation: MutationType!
  node: Schedule
  updatedFields: [String!]
  previousValues: SchedulePreviousValues
}

input ScheduleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ScheduleWhereInput
  AND: [ScheduleSubscriptionWhereInput!]
}

input ScheduleUpdateDataInput {
  startTime: DateTime
  finalTime: DateTime
  createdAt: DateTime
  updatedAt: DateTime
  movie: MovieUpdateOneRequiredInput
  room: RoomUpdateOneRequiredInput
}

input ScheduleUpdateInput {
  startTime: DateTime
  finalTime: DateTime
  createdAt: DateTime
  updatedAt: DateTime
  movie: MovieUpdateOneRequiredInput
  room: RoomUpdateOneRequiredInput
}

input ScheduleUpdateManyMutationInput {
  startTime: DateTime
  finalTime: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

input ScheduleUpdateOneRequiredInput {
  create: ScheduleCreateInput
  update: ScheduleUpdateDataInput
  upsert: ScheduleUpsertNestedInput
  connect: ScheduleWhereUniqueInput
}

input ScheduleUpsertNestedInput {
  update: ScheduleUpdateDataInput!
  create: ScheduleCreateInput!
}

input ScheduleWhereInput {
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
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  finalTime: DateTime
  finalTime_not: DateTime
  finalTime_in: [DateTime!]
  finalTime_not_in: [DateTime!]
  finalTime_lt: DateTime
  finalTime_lte: DateTime
  finalTime_gt: DateTime
  finalTime_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  movie: MovieWhereInput
  room: RoomWhereInput
  AND: [ScheduleWhereInput!]
}

input ScheduleWhereUniqueInput {
  id: ID
}

type Seat {
  id: ID!
  room: Room!
}

type SeatConnection {
  pageInfo: PageInfo!
  edges: [SeatEdge]!
  aggregate: AggregateSeat!
}

input SeatCreateInput {
  id: ID
  room: RoomCreateOneInput!
}

type SeatEdge {
  node: Seat!
  cursor: String!
}

enum SeatOrderByInput {
  id_ASC
  id_DESC
}

type SeatPreviousValues {
  id: ID!
}

type SeatSubscriptionPayload {
  mutation: MutationType!
  node: Seat
  updatedFields: [String!]
  previousValues: SeatPreviousValues
}

input SeatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SeatWhereInput
  AND: [SeatSubscriptionWhereInput!]
}

input SeatUpdateInput {
  room: RoomUpdateOneRequiredInput
}

input SeatWhereInput {
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
  room: RoomWhereInput
  AND: [SeatWhereInput!]
}

input SeatWhereUniqueInput {
  id: ID
}

type Subscription {
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  room(where: RoomSubscriptionWhereInput): RoomSubscriptionPayload
  schedule(where: ScheduleSubscriptionWhereInput): ScheduleSubscriptionPayload
  seat(where: SeatSubscriptionWhereInput): SeatSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String
  name: String!
  type: Level!
  token: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String
  name: String!
  type: Level!
  token: String!
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
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  token_ASC
  token_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String
  name: String!
  type: Level!
  token: String!
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
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  type: Level
  token: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
  type: Level
  token: String
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
  type: Level
  type_not: Level
  type_in: [Level!]
  type_not_in: [Level!]
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  token: String
}
`