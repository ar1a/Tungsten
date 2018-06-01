import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipes: <T = Recipe[]>(args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timelines: <T = Timeline[]>(args: { where?: TimelineWhereInput, orderBy?: TimelineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipments: <T = Equipment[]>(args: { where?: EquipmentWhereInput, orderBy?: EquipmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredients: <T = Ingredient[]>(args: { where?: IngredientWhereInput, orderBy?: IngredientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jams: <T = Jam[]>(args: { where?: JamWhereInput, orderBy?: JamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timeline: <T = Timeline | null>(args: { where: TimelineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jam: <T = Jam | null>(args: { where: JamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipesConnection: <T = RecipeConnection>(args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    timelinesConnection: <T = TimelineConnection>(args: { where?: TimelineWhereInput, orderBy?: TimelineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipmentsConnection: <T = EquipmentConnection>(args: { where?: EquipmentWhereInput, orderBy?: EquipmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredientsConnection: <T = IngredientConnection>(args: { where?: IngredientWhereInput, orderBy?: IngredientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jamsConnection: <T = JamConnection>(args: { where?: JamWhereInput, orderBy?: JamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRecipe: <T = Recipe>(args: { data: RecipeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTimeline: <T = Timeline>(args: { data: TimelineCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEquipment: <T = Equipment>(args: { data: EquipmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createIngredient: <T = Ingredient>(args: { data: IngredientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJam: <T = Jam>(args: { data: JamCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRecipe: <T = Recipe | null>(args: { data: RecipeUpdateInput, where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTimeline: <T = Timeline | null>(args: { data: TimelineUpdateInput, where: TimelineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEquipment: <T = Equipment | null>(args: { data: EquipmentUpdateInput, where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateIngredient: <T = Ingredient | null>(args: { data: IngredientUpdateInput, where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJam: <T = Jam | null>(args: { data: JamUpdateInput, where: JamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRecipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTimeline: <T = Timeline | null>(args: { where: TimelineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEquipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteIngredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJam: <T = Jam | null>(args: { where: JamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRecipe: <T = Recipe>(args: { where: RecipeWhereUniqueInput, create: RecipeCreateInput, update: RecipeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTimeline: <T = Timeline>(args: { where: TimelineWhereUniqueInput, create: TimelineCreateInput, update: TimelineUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEquipment: <T = Equipment>(args: { where: EquipmentWhereUniqueInput, create: EquipmentCreateInput, update: EquipmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertIngredient: <T = Ingredient>(args: { where: IngredientWhereUniqueInput, create: IngredientCreateInput, update: IngredientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJam: <T = Jam>(args: { where: JamWhereUniqueInput, create: JamCreateInput, update: JamUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRecipes: <T = BatchPayload>(args: { data: RecipeUpdateInput, where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTimelines: <T = BatchPayload>(args: { data: TimelineUpdateInput, where?: TimelineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEquipments: <T = BatchPayload>(args: { data: EquipmentUpdateInput, where?: EquipmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyIngredients: <T = BatchPayload>(args: { data: IngredientUpdateInput, where?: IngredientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJams: <T = BatchPayload>(args: { data: JamUpdateInput, where?: JamWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRecipes: <T = BatchPayload>(args: { where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTimelines: <T = BatchPayload>(args: { where?: TimelineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEquipments: <T = BatchPayload>(args: { where?: EquipmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyIngredients: <T = BatchPayload>(args: { where?: IngredientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJams: <T = BatchPayload>(args: { where?: JamWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    recipe: <T = RecipeSubscriptionPayload | null>(args: { where?: RecipeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    timeline: <T = TimelineSubscriptionPayload | null>(args: { where?: TimelineSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    equipment: <T = EquipmentSubscriptionPayload | null>(args: { where?: EquipmentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    ingredient: <T = IngredientSubscriptionPayload | null>(args: { where?: IngredientSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    jam: <T = JamSubscriptionPayload | null>(args: { where?: JamSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Recipe: (where?: RecipeWhereInput) => Promise<boolean>
  Timeline: (where?: TimelineWhereInput) => Promise<boolean>
  Equipment: (where?: EquipmentWhereInput) => Promise<boolean>
  Ingredient: (where?: IngredientWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Jam: (where?: JamWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateEquipment {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateIngredient {
  count: Int!
}

type AggregateJam {
  count: Int!
}

type AggregateRecipe {
  count: Int!
}

type AggregateTimeline {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Equipment implements Node {
  id: ID!
  name: String!
  washable: Boolean!
}

"""A connection to a list of items."""
type EquipmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EquipmentEdge]!
  aggregate: AggregateEquipment!
}

input EquipmentCreateInput {
  name: String!
  washable: Boolean
}

input EquipmentCreateManyInput {
  create: [EquipmentCreateInput!]
  connect: [EquipmentWhereUniqueInput!]
}

"""An edge in a connection."""
type EquipmentEdge {
  """The item at the end of the edge."""
  node: Equipment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EquipmentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  washable_ASC
  washable_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EquipmentPreviousValues {
  id: ID!
  name: String!
  washable: Boolean!
}

type EquipmentSubscriptionPayload {
  mutation: MutationType!
  node: Equipment
  updatedFields: [String!]
  previousValues: EquipmentPreviousValues
}

input EquipmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EquipmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EquipmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EquipmentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EquipmentWhereInput
}

input EquipmentUpdateDataInput {
  name: String
  washable: Boolean
}

input EquipmentUpdateInput {
  name: String
  washable: Boolean
}

input EquipmentUpdateManyInput {
  create: [EquipmentCreateInput!]
  connect: [EquipmentWhereUniqueInput!]
  disconnect: [EquipmentWhereUniqueInput!]
  delete: [EquipmentWhereUniqueInput!]
  update: [EquipmentUpdateWithWhereUniqueNestedInput!]
  upsert: [EquipmentUpsertWithWhereUniqueNestedInput!]
}

input EquipmentUpdateWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput!
  data: EquipmentUpdateDataInput!
}

input EquipmentUpsertWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput!
  update: EquipmentUpdateDataInput!
  create: EquipmentCreateInput!
}

input EquipmentWhereInput {
  """Logical AND on all given filters."""
  AND: [EquipmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [EquipmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EquipmentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  washable: Boolean

  """All values that are not equal to given value."""
  washable_not: Boolean
}

input EquipmentWhereUniqueInput {
  id: ID
}

type Event implements Node {
  id: ID!
  timeline(where: TimelineWhereInput): Timeline!
  date: String!
  jam(where: JamWhereInput): Jam!
}

"""A connection to a list of items."""
type EventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  date: String!
  timeline: TimelineCreateOneWithoutEventsInput!
  jam: JamCreateOneInput!
}

input EventCreateManyWithoutTimelineInput {
  create: [EventCreateWithoutTimelineInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateWithoutTimelineInput {
  date: String!
  jam: JamCreateOneInput!
}

"""An edge in a connection."""
type EventEdge {
  """The item at the end of the edge."""
  node: Event!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventPreviousValues {
  id: ID!
  date: String!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EventWhereInput
}

input EventUpdateInput {
  date: String
  timeline: TimelineUpdateOneWithoutEventsInput
  jam: JamUpdateOneInput
}

input EventUpdateManyWithoutTimelineInput {
  create: [EventCreateWithoutTimelineInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutTimelineInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutTimelineInput!]
}

input EventUpdateWithoutTimelineDataInput {
  date: String
  jam: JamUpdateOneInput
}

input EventUpdateWithWhereUniqueWithoutTimelineInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutTimelineDataInput!
}

input EventUpsertWithWhereUniqueWithoutTimelineInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutTimelineDataInput!
  create: EventCreateWithoutTimelineInput!
}

input EventWhereInput {
  """Logical AND on all given filters."""
  AND: [EventWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  date: String

  """All values that are not equal to given value."""
  date_not: String

  """All values that are contained in given list."""
  date_in: [String!]

  """All values that are not contained in given list."""
  date_not_in: [String!]

  """All values less than the given value."""
  date_lt: String

  """All values less than or equal the given value."""
  date_lte: String

  """All values greater than the given value."""
  date_gt: String

  """All values greater than or equal the given value."""
  date_gte: String

  """All values containing the given string."""
  date_contains: String

  """All values not containing the given string."""
  date_not_contains: String

  """All values starting with the given string."""
  date_starts_with: String

  """All values not starting with the given string."""
  date_not_starts_with: String

  """All values ending with the given string."""
  date_ends_with: String

  """All values not ending with the given string."""
  date_not_ends_with: String
  timeline: TimelineWhereInput
  jam: JamWhereInput
}

input EventWhereUniqueInput {
  id: ID
}

type Ingredient implements Node {
  id: ID!
  name: String!
  quantity: Float!
  scale: Float
}

"""A connection to a list of items."""
type IngredientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  name: String!
  quantity: Float!
  scale: Float
}

input IngredientCreateManyInput {
  create: [IngredientCreateInput!]
  connect: [IngredientWhereUniqueInput!]
}

"""An edge in a connection."""
type IngredientEdge {
  """The item at the end of the edge."""
  node: Ingredient!

  """A cursor for use in pagination."""
  cursor: String!
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  quantity_ASC
  quantity_DESC
  scale_ASC
  scale_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type IngredientPreviousValues {
  id: ID!
  name: String!
  quantity: Float!
  scale: Float
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [IngredientSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IngredientSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
}

input IngredientUpdateDataInput {
  name: String
  quantity: Float
  scale: Float
}

input IngredientUpdateInput {
  name: String
  quantity: Float
  scale: Float
}

input IngredientUpdateManyInput {
  create: [IngredientCreateInput!]
  connect: [IngredientWhereUniqueInput!]
  disconnect: [IngredientWhereUniqueInput!]
  delete: [IngredientWhereUniqueInput!]
  update: [IngredientUpdateWithWhereUniqueNestedInput!]
  upsert: [IngredientUpsertWithWhereUniqueNestedInput!]
}

input IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  data: IngredientUpdateDataInput!
}

input IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  update: IngredientUpdateDataInput!
  create: IngredientCreateInput!
}

input IngredientWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientWhereInput!]

  """Logical OR on all given filters."""
  OR: [IngredientWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IngredientWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  quantity: Float

  """All values that are not equal to given value."""
  quantity_not: Float

  """All values that are contained in given list."""
  quantity_in: [Float!]

  """All values that are not contained in given list."""
  quantity_not_in: [Float!]

  """All values less than the given value."""
  quantity_lt: Float

  """All values less than or equal the given value."""
  quantity_lte: Float

  """All values greater than the given value."""
  quantity_gt: Float

  """All values greater than or equal the given value."""
  quantity_gte: Float
  scale: Float

  """All values that are not equal to given value."""
  scale_not: Float

  """All values that are contained in given list."""
  scale_in: [Float!]

  """All values that are not contained in given list."""
  scale_not_in: [Float!]

  """All values less than the given value."""
  scale_lt: Float

  """All values less than or equal the given value."""
  scale_lte: Float

  """All values greater than the given value."""
  scale_gt: Float

  """All values greater than or equal the given value."""
  scale_gte: Float
}

input IngredientWhereUniqueInput {
  id: ID
}

type Jam implements Node {
  id: ID!
  recipe(where: RecipeWhereInput): Recipe!
}

"""A connection to a list of items."""
type JamConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [JamEdge]!
  aggregate: AggregateJam!
}

input JamCreateInput {
  recipe: RecipeCreateOneInput!
}

input JamCreateOneInput {
  create: JamCreateInput
  connect: JamWhereUniqueInput
}

"""An edge in a connection."""
type JamEdge {
  """The item at the end of the edge."""
  node: Jam!

  """A cursor for use in pagination."""
  cursor: String!
}

enum JamOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type JamPreviousValues {
  id: ID!
}

type JamSubscriptionPayload {
  mutation: MutationType!
  node: Jam
  updatedFields: [String!]
  previousValues: JamPreviousValues
}

input JamSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [JamSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JamSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JamSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: JamWhereInput
}

input JamUpdateDataInput {
  recipe: RecipeUpdateOneInput
}

input JamUpdateInput {
  recipe: RecipeUpdateOneInput
}

input JamUpdateOneInput {
  create: JamCreateInput
  connect: JamWhereUniqueInput
  delete: Boolean
  update: JamUpdateDataInput
  upsert: JamUpsertNestedInput
}

input JamUpsertNestedInput {
  update: JamUpdateDataInput!
  create: JamCreateInput!
}

input JamWhereInput {
  """Logical AND on all given filters."""
  AND: [JamWhereInput!]

  """Logical OR on all given filters."""
  OR: [JamWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JamWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  recipe: RecipeWhereInput
}

input JamWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createRecipe(data: RecipeCreateInput!): Recipe!
  createTimeline(data: TimelineCreateInput!): Timeline!
  createEquipment(data: EquipmentCreateInput!): Equipment!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  createEvent(data: EventCreateInput!): Event!
  createJam(data: JamCreateInput!): Jam!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateTimeline(data: TimelineUpdateInput!, where: TimelineWhereUniqueInput!): Timeline
  updateEquipment(data: EquipmentUpdateInput!, where: EquipmentWhereUniqueInput!): Equipment
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateJam(data: JamUpdateInput!, where: JamWhereUniqueInput!): Jam
  deleteUser(where: UserWhereUniqueInput!): User
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteTimeline(where: TimelineWhereUniqueInput!): Timeline
  deleteEquipment(where: EquipmentWhereUniqueInput!): Equipment
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteJam(where: JamWhereUniqueInput!): Jam
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  upsertTimeline(where: TimelineWhereUniqueInput!, create: TimelineCreateInput!, update: TimelineUpdateInput!): Timeline!
  upsertEquipment(where: EquipmentWhereUniqueInput!, create: EquipmentCreateInput!, update: EquipmentUpdateInput!): Equipment!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertJam(where: JamWhereUniqueInput!, create: JamCreateInput!, update: JamUpdateInput!): Jam!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyRecipes(data: RecipeUpdateInput!, where: RecipeWhereInput): BatchPayload!
  updateManyTimelines(data: TimelineUpdateInput!, where: TimelineWhereInput): BatchPayload!
  updateManyEquipments(data: EquipmentUpdateInput!, where: EquipmentWhereInput): BatchPayload!
  updateManyIngredients(data: IngredientUpdateInput!, where: IngredientWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyJams(data: JamUpdateInput!, where: JamWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
  deleteManyTimelines(where: TimelineWhereInput): BatchPayload!
  deleteManyEquipments(where: EquipmentWhereInput): BatchPayload!
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyJams(where: JamWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  timelines(where: TimelineWhereInput, orderBy: TimelineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Timeline]!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment]!
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  jams(where: JamWhereInput, orderBy: JamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Jam]!
  user(where: UserWhereUniqueInput!): User
  recipe(where: RecipeWhereUniqueInput!): Recipe
  timeline(where: TimelineWhereUniqueInput!): Timeline
  equipment(where: EquipmentWhereUniqueInput!): Equipment
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  event(where: EventWhereUniqueInput!): Event
  jam(where: JamWhereUniqueInput!): Jam
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  timelinesConnection(where: TimelineWhereInput, orderBy: TimelineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimelineConnection!
  equipmentsConnection(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EquipmentConnection!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  jamsConnection(where: JamWhereInput, orderBy: JamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JamConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Recipe implements Node {
  id: ID!
  equipment(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment!]
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient!]
  name: String!
  yield: Int
}

"""A connection to a list of items."""
type RecipeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreateInput {
  name: String!
  yield: Int
  equipment: EquipmentCreateManyInput
  ingredients: IngredientCreateManyInput
}

input RecipeCreateManyInput {
  create: [RecipeCreateInput!]
  connect: [RecipeWhereUniqueInput!]
}

input RecipeCreateOneInput {
  create: RecipeCreateInput
  connect: RecipeWhereUniqueInput
}

"""An edge in a connection."""
type RecipeEdge {
  """The item at the end of the edge."""
  node: Recipe!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  yield_ASC
  yield_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RecipePreviousValues {
  id: ID!
  name: String!
  yield: Int
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
}

input RecipeUpdateDataInput {
  name: String
  yield: Int
  equipment: EquipmentUpdateManyInput
  ingredients: IngredientUpdateManyInput
}

input RecipeUpdateInput {
  name: String
  yield: Int
  equipment: EquipmentUpdateManyInput
  ingredients: IngredientUpdateManyInput
}

input RecipeUpdateManyInput {
  create: [RecipeCreateInput!]
  connect: [RecipeWhereUniqueInput!]
  disconnect: [RecipeWhereUniqueInput!]
  delete: [RecipeWhereUniqueInput!]
  update: [RecipeUpdateWithWhereUniqueNestedInput!]
  upsert: [RecipeUpsertWithWhereUniqueNestedInput!]
}

input RecipeUpdateOneInput {
  create: RecipeCreateInput
  connect: RecipeWhereUniqueInput
  delete: Boolean
  update: RecipeUpdateDataInput
  upsert: RecipeUpsertNestedInput
}

input RecipeUpdateWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput!
  data: RecipeUpdateDataInput!
}

input RecipeUpsertNestedInput {
  update: RecipeUpdateDataInput!
  create: RecipeCreateInput!
}

input RecipeUpsertWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput!
  update: RecipeUpdateDataInput!
  create: RecipeCreateInput!
}

input RecipeWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  yield: Int

  """All values that are not equal to given value."""
  yield_not: Int

  """All values that are contained in given list."""
  yield_in: [Int!]

  """All values that are not contained in given list."""
  yield_not_in: [Int!]

  """All values less than the given value."""
  yield_lt: Int

  """All values less than or equal the given value."""
  yield_lte: Int

  """All values greater than the given value."""
  yield_gt: Int

  """All values greater than or equal the given value."""
  yield_gte: Int
  equipment_every: EquipmentWhereInput
  equipment_some: EquipmentWhereInput
  equipment_none: EquipmentWhereInput
  ingredients_every: IngredientWhereInput
  ingredients_some: IngredientWhereInput
  ingredients_none: IngredientWhereInput
}

input RecipeWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
  timeline(where: TimelineSubscriptionWhereInput): TimelineSubscriptionPayload
  equipment(where: EquipmentSubscriptionWhereInput): EquipmentSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  jam(where: JamSubscriptionWhereInput): JamSubscriptionPayload
}

type Timeline implements Node {
  id: ID!
  owner(where: UserWhereInput): User!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
}

"""A connection to a list of items."""
type TimelineConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TimelineEdge]!
  aggregate: AggregateTimeline!
}

input TimelineCreateInput {
  owner: UserCreateOneWithoutTimelineInput!
  recipes: RecipeCreateManyInput
  events: EventCreateManyWithoutTimelineInput
}

input TimelineCreateOneWithoutEventsInput {
  create: TimelineCreateWithoutEventsInput
  connect: TimelineWhereUniqueInput
}

input TimelineCreateOneWithoutOwnerInput {
  create: TimelineCreateWithoutOwnerInput
  connect: TimelineWhereUniqueInput
}

input TimelineCreateWithoutEventsInput {
  owner: UserCreateOneWithoutTimelineInput!
  recipes: RecipeCreateManyInput
}

input TimelineCreateWithoutOwnerInput {
  recipes: RecipeCreateManyInput
  events: EventCreateManyWithoutTimelineInput
}

"""An edge in a connection."""
type TimelineEdge {
  """The item at the end of the edge."""
  node: Timeline!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TimelineOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TimelinePreviousValues {
  id: ID!
}

type TimelineSubscriptionPayload {
  mutation: MutationType!
  node: Timeline
  updatedFields: [String!]
  previousValues: TimelinePreviousValues
}

input TimelineSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TimelineSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimelineSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimelineSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TimelineWhereInput
}

input TimelineUpdateInput {
  owner: UserUpdateOneWithoutTimelineInput
  recipes: RecipeUpdateManyInput
  events: EventUpdateManyWithoutTimelineInput
}

input TimelineUpdateOneWithoutEventsInput {
  create: TimelineCreateWithoutEventsInput
  connect: TimelineWhereUniqueInput
  delete: Boolean
  update: TimelineUpdateWithoutEventsDataInput
  upsert: TimelineUpsertWithoutEventsInput
}

input TimelineUpdateOneWithoutOwnerInput {
  create: TimelineCreateWithoutOwnerInput
  connect: TimelineWhereUniqueInput
  delete: Boolean
  update: TimelineUpdateWithoutOwnerDataInput
  upsert: TimelineUpsertWithoutOwnerInput
}

input TimelineUpdateWithoutEventsDataInput {
  owner: UserUpdateOneWithoutTimelineInput
  recipes: RecipeUpdateManyInput
}

input TimelineUpdateWithoutOwnerDataInput {
  recipes: RecipeUpdateManyInput
  events: EventUpdateManyWithoutTimelineInput
}

input TimelineUpsertWithoutEventsInput {
  update: TimelineUpdateWithoutEventsDataInput!
  create: TimelineCreateWithoutEventsInput!
}

input TimelineUpsertWithoutOwnerInput {
  update: TimelineUpdateWithoutOwnerDataInput!
  create: TimelineCreateWithoutOwnerInput!
}

input TimelineWhereInput {
  """Logical AND on all given filters."""
  AND: [TimelineWhereInput!]

  """Logical OR on all given filters."""
  OR: [TimelineWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TimelineWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  owner: UserWhereInput
  recipes_every: RecipeWhereInput
  recipes_some: RecipeWhereInput
  recipes_none: RecipeWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
}

input TimelineWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  timeline(where: TimelineWhereInput): Timeline!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  timeline: TimelineCreateOneWithoutOwnerInput!
}

input UserCreateOneWithoutTimelineInput {
  create: UserCreateWithoutTimelineInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTimelineInput {
  email: String!
  password: String!
  name: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  timeline: TimelineUpdateOneWithoutOwnerInput
}

input UserUpdateOneWithoutTimelineInput {
  create: UserCreateWithoutTimelineInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTimelineDataInput
  upsert: UserUpsertWithoutTimelineInput
}

input UserUpdateWithoutTimelineDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutTimelineInput {
  update: UserUpdateWithoutTimelineDataInput!
  create: UserCreateWithoutTimelineInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  timeline: TimelineWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RecipeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'yield_ASC' |
  'yield_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EquipmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'washable_ASC' |
  'washable_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type IngredientOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'scale_ASC' |
  'scale_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EventOrderByInput =   'id_ASC' |
  'id_DESC' |
  'date_ASC' |
  'date_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TimelineOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type JamOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface JamCreateInput {
  recipe: RecipeCreateOneInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  timeline?: TimelineWhereInput
}

export interface EventCreateInput {
  date: String
  timeline: TimelineCreateOneWithoutEventsInput
  jam: JamCreateOneInput
}

export interface EventWhereInput {
  AND?: EventWhereInput[] | EventWhereInput
  OR?: EventWhereInput[] | EventWhereInput
  NOT?: EventWhereInput[] | EventWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  date?: String
  date_not?: String
  date_in?: String[] | String
  date_not_in?: String[] | String
  date_lt?: String
  date_lte?: String
  date_gt?: String
  date_gte?: String
  date_contains?: String
  date_not_contains?: String
  date_starts_with?: String
  date_not_starts_with?: String
  date_ends_with?: String
  date_not_ends_with?: String
  timeline?: TimelineWhereInput
  jam?: JamWhereInput
}

export interface JamUpdateDataInput {
  recipe?: RecipeUpdateOneInput
}

export interface IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  data: IngredientUpdateDataInput
}

export interface JamUpdateOneInput {
  create?: JamCreateInput
  connect?: JamWhereUniqueInput
  delete?: Boolean
  update?: JamUpdateDataInput
  upsert?: JamUpsertNestedInput
}

export interface TimelineCreateOneWithoutEventsInput {
  create?: TimelineCreateWithoutEventsInput
  connect?: TimelineWhereUniqueInput
}

export interface EventUpdateWithoutTimelineDataInput {
  date?: String
  jam?: JamUpdateOneInput
}

export interface JamSubscriptionWhereInput {
  AND?: JamSubscriptionWhereInput[] | JamSubscriptionWhereInput
  OR?: JamSubscriptionWhereInput[] | JamSubscriptionWhereInput
  NOT?: JamSubscriptionWhereInput[] | JamSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: JamWhereInput
}

export interface EventUpdateWithWhereUniqueWithoutTimelineInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutTimelineDataInput
}

export interface EventSubscriptionWhereInput {
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EventWhereInput
}

export interface EventUpdateManyWithoutTimelineInput {
  create?: EventCreateWithoutTimelineInput[] | EventCreateWithoutTimelineInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutTimelineInput[] | EventUpdateWithWhereUniqueWithoutTimelineInput
  upsert?: EventUpsertWithWhereUniqueWithoutTimelineInput[] | EventUpsertWithWhereUniqueWithoutTimelineInput
}

export interface EquipmentSubscriptionWhereInput {
  AND?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput
  OR?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput
  NOT?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EquipmentWhereInput
}

export interface RecipeUpsertWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput
  update: RecipeUpdateDataInput
  create: RecipeCreateInput
}

export interface TimelineSubscriptionWhereInput {
  AND?: TimelineSubscriptionWhereInput[] | TimelineSubscriptionWhereInput
  OR?: TimelineSubscriptionWhereInput[] | TimelineSubscriptionWhereInput
  NOT?: TimelineSubscriptionWhereInput[] | TimelineSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TimelineWhereInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  timeline: TimelineCreateOneWithoutOwnerInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface TimelineCreateOneWithoutOwnerInput {
  create?: TimelineCreateWithoutOwnerInput
  connect?: TimelineWhereUniqueInput
}

export interface RecipeWhereInput {
  AND?: RecipeWhereInput[] | RecipeWhereInput
  OR?: RecipeWhereInput[] | RecipeWhereInput
  NOT?: RecipeWhereInput[] | RecipeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  yield?: Int
  yield_not?: Int
  yield_in?: Int[] | Int
  yield_not_in?: Int[] | Int
  yield_lt?: Int
  yield_lte?: Int
  yield_gt?: Int
  yield_gte?: Int
  equipment_every?: EquipmentWhereInput
  equipment_some?: EquipmentWhereInput
  equipment_none?: EquipmentWhereInput
  ingredients_every?: IngredientWhereInput
  ingredients_some?: IngredientWhereInput
  ingredients_none?: IngredientWhereInput
}

export interface TimelineCreateWithoutOwnerInput {
  recipes?: RecipeCreateManyInput
  events?: EventCreateManyWithoutTimelineInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface RecipeCreateManyInput {
  create?: RecipeCreateInput[] | RecipeCreateInput
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
}

export interface TimelineWhereUniqueInput {
  id?: ID_Input
}

export interface RecipeCreateInput {
  name: String
  yield?: Int
  equipment?: EquipmentCreateManyInput
  ingredients?: IngredientCreateManyInput
}

export interface IngredientWhereUniqueInput {
  id?: ID_Input
}

export interface EquipmentCreateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
}

export interface JamWhereUniqueInput {
  id?: ID_Input
}

export interface EquipmentCreateInput {
  name: String
  washable?: Boolean
}

export interface TimelineUpdateWithoutEventsDataInput {
  owner?: UserUpdateOneWithoutTimelineInput
  recipes?: RecipeUpdateManyInput
}

export interface IngredientCreateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
}

export interface EventUpdateInput {
  date?: String
  timeline?: TimelineUpdateOneWithoutEventsInput
  jam?: JamUpdateOneInput
}

export interface IngredientCreateInput {
  name: String
  quantity: Float
  scale?: Float
}

export interface EquipmentUpdateInput {
  name?: String
  washable?: Boolean
}

export interface EventCreateManyWithoutTimelineInput {
  create?: EventCreateWithoutTimelineInput[] | EventCreateWithoutTimelineInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface UserUpdateWithoutTimelineDataInput {
  email?: String
  password?: String
  name?: String
}

export interface EventCreateWithoutTimelineInput {
  date: String
  jam: JamCreateOneInput
}

export interface TimelineUpdateInput {
  owner?: UserUpdateOneWithoutTimelineInput
  recipes?: RecipeUpdateManyInput
  events?: EventUpdateManyWithoutTimelineInput
}

export interface JamCreateOneInput {
  create?: JamCreateInput
  connect?: JamWhereUniqueInput
}

export interface TimelineUpsertWithoutOwnerInput {
  update: TimelineUpdateWithoutOwnerDataInput
  create: TimelineCreateWithoutOwnerInput
}

export interface IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  update: IngredientUpdateDataInput
  create: IngredientCreateInput
}

export interface JamUpsertNestedInput {
  update: JamUpdateDataInput
  create: JamCreateInput
}

export interface RecipeCreateOneInput {
  create?: RecipeCreateInput
  connect?: RecipeWhereUniqueInput
}

export interface RecipeUpdateOneInput {
  create?: RecipeCreateInput
  connect?: RecipeWhereUniqueInput
  delete?: Boolean
  update?: RecipeUpdateDataInput
  upsert?: RecipeUpsertNestedInput
}

export interface TimelineCreateInput {
  owner: UserCreateOneWithoutTimelineInput
  recipes?: RecipeCreateManyInput
  events?: EventCreateManyWithoutTimelineInput
}

export interface IngredientWhereInput {
  AND?: IngredientWhereInput[] | IngredientWhereInput
  OR?: IngredientWhereInput[] | IngredientWhereInput
  NOT?: IngredientWhereInput[] | IngredientWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  quantity?: Float
  quantity_not?: Float
  quantity_in?: Float[] | Float
  quantity_not_in?: Float[] | Float
  quantity_lt?: Float
  quantity_lte?: Float
  quantity_gt?: Float
  quantity_gte?: Float
  scale?: Float
  scale_not?: Float
  scale_in?: Float[] | Float
  scale_not_in?: Float[] | Float
  scale_lt?: Float
  scale_lte?: Float
  scale_gt?: Float
  scale_gte?: Float
}

export interface UserCreateOneWithoutTimelineInput {
  create?: UserCreateWithoutTimelineInput
  connect?: UserWhereUniqueInput
}

export interface EquipmentWhereInput {
  AND?: EquipmentWhereInput[] | EquipmentWhereInput
  OR?: EquipmentWhereInput[] | EquipmentWhereInput
  NOT?: EquipmentWhereInput[] | EquipmentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  washable?: Boolean
  washable_not?: Boolean
}

export interface UserCreateWithoutTimelineInput {
  email: String
  password: String
  name: String
}

export interface JamUpdateInput {
  recipe?: RecipeUpdateOneInput
}

export interface JamWhereInput {
  AND?: JamWhereInput[] | JamWhereInput
  OR?: JamWhereInput[] | JamWhereInput
  NOT?: JamWhereInput[] | JamWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  recipe?: RecipeWhereInput
}

export interface RecipeWhereUniqueInput {
  id?: ID_Input
}

export interface IngredientUpdateDataInput {
  name?: String
  quantity?: Float
  scale?: Float
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface TimelineCreateWithoutEventsInput {
  owner: UserCreateOneWithoutTimelineInput
  recipes?: RecipeCreateManyInput
}

export interface TimelineUpdateOneWithoutEventsInput {
  create?: TimelineCreateWithoutEventsInput
  connect?: TimelineWhereUniqueInput
  delete?: Boolean
  update?: TimelineUpdateWithoutEventsDataInput
  upsert?: TimelineUpsertWithoutEventsInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  timeline?: TimelineUpdateOneWithoutOwnerInput
}

export interface UserUpsertWithoutTimelineInput {
  update: UserUpdateWithoutTimelineDataInput
  create: UserCreateWithoutTimelineInput
}

export interface TimelineUpdateOneWithoutOwnerInput {
  create?: TimelineCreateWithoutOwnerInput
  connect?: TimelineWhereUniqueInput
  delete?: Boolean
  update?: TimelineUpdateWithoutOwnerDataInput
  upsert?: TimelineUpsertWithoutOwnerInput
}

export interface RecipeUpdateInput {
  name?: String
  yield?: Int
  equipment?: EquipmentUpdateManyInput
  ingredients?: IngredientUpdateManyInput
}

export interface TimelineUpdateWithoutOwnerDataInput {
  recipes?: RecipeUpdateManyInput
  events?: EventUpdateManyWithoutTimelineInput
}

export interface RecipeUpsertNestedInput {
  update: RecipeUpdateDataInput
  create: RecipeCreateInput
}

export interface RecipeUpdateManyInput {
  create?: RecipeCreateInput[] | RecipeCreateInput
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  disconnect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  delete?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  update?: RecipeUpdateWithWhereUniqueNestedInput[] | RecipeUpdateWithWhereUniqueNestedInput
  upsert?: RecipeUpsertWithWhereUniqueNestedInput[] | RecipeUpsertWithWhereUniqueNestedInput
}

export interface IngredientSubscriptionWhereInput {
  AND?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  OR?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  NOT?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: IngredientWhereInput
}

export interface RecipeUpdateWithWhereUniqueNestedInput {
  where: RecipeWhereUniqueInput
  data: RecipeUpdateDataInput
}

export interface TimelineWhereInput {
  AND?: TimelineWhereInput[] | TimelineWhereInput
  OR?: TimelineWhereInput[] | TimelineWhereInput
  NOT?: TimelineWhereInput[] | TimelineWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  owner?: UserWhereInput
  recipes_every?: RecipeWhereInput
  recipes_some?: RecipeWhereInput
  recipes_none?: RecipeWhereInput
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
}

export interface RecipeUpdateDataInput {
  name?: String
  yield?: Int
  equipment?: EquipmentUpdateManyInput
  ingredients?: IngredientUpdateManyInput
}

export interface TimelineUpsertWithoutEventsInput {
  update: TimelineUpdateWithoutEventsDataInput
  create: TimelineCreateWithoutEventsInput
}

export interface EquipmentUpdateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  disconnect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  delete?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  update?: EquipmentUpdateWithWhereUniqueNestedInput[] | EquipmentUpdateWithWhereUniqueNestedInput
  upsert?: EquipmentUpsertWithWhereUniqueNestedInput[] | EquipmentUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateOneWithoutTimelineInput {
  create?: UserCreateWithoutTimelineInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutTimelineDataInput
  upsert?: UserUpsertWithoutTimelineInput
}

export interface IngredientUpdateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  disconnect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  delete?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  update?: IngredientUpdateWithWhereUniqueNestedInput[] | IngredientUpdateWithWhereUniqueNestedInput
  upsert?: IngredientUpsertWithWhereUniqueNestedInput[] | IngredientUpsertWithWhereUniqueNestedInput
}

export interface EquipmentUpsertWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  update: EquipmentUpdateDataInput
  create: EquipmentCreateInput
}

export interface EquipmentUpdateDataInput {
  name?: String
  washable?: Boolean
}

export interface EquipmentUpdateWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  data: EquipmentUpdateDataInput
}

export interface RecipeSubscriptionWhereInput {
  AND?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  OR?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  NOT?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RecipeWhereInput
}

export interface EventUpsertWithWhereUniqueWithoutTimelineInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutTimelineDataInput
  create: EventCreateWithoutTimelineInput
}

export interface IngredientUpdateInput {
  name?: String
  quantity?: Float
  scale?: Float
}

export interface EquipmentWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface JamPreviousValues {
  id: ID_Output
}

export interface Jam extends Node {
  id: ID_Output
  recipe: Recipe
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  timeline: Timeline
}

export interface BatchPayload {
  count: Long
}

export interface AggregateJam {
  count: Int
}

export interface JamSubscriptionPayload {
  mutation: MutationType
  node?: Jam
  updatedFields?: String[]
  previousValues?: JamPreviousValues
}

export interface Recipe extends Node {
  id: ID_Output
  equipment?: Equipment[]
  ingredients?: Ingredient[]
  name: String
  yield?: Int
}

/*
 * An edge in a connection.

 */
export interface JamEdge {
  node: Jam
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface JamConnection {
  pageInfo: PageInfo
  edges: JamEdge[]
  aggregate: AggregateJam
}

export interface AggregateEvent {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface Event extends Node {
  id: ID_Output
  timeline: Timeline
  date: String
  jam: Jam
}

/*
 * An edge in a connection.

 */
export interface IngredientEdge {
  node: Ingredient
  cursor: String
}

export interface Timeline extends Node {
  id: ID_Output
  owner: User
  recipes?: Recipe[]
  events?: Event[]
}

export interface AggregateEquipment {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EquipmentConnection {
  pageInfo: PageInfo
  edges: EquipmentEdge[]
  aggregate: AggregateEquipment
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

/*
 * An edge in a connection.

 */
export interface TimelineEdge {
  node: Timeline
  cursor: String
}

export interface EventPreviousValues {
  id: ID_Output
  date: String
}

export interface AggregateRecipe {
  count: Int
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType
  node?: Recipe
  updatedFields?: String[]
  previousValues?: RecipePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface RecipeConnection {
  pageInfo: PageInfo
  edges: RecipeEdge[]
  aggregate: AggregateRecipe
}

export interface RecipePreviousValues {
  id: ID_Output
  name: String
  yield?: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Ingredient extends Node {
  id: ID_Output
  name: String
  quantity: Float
  scale?: Float
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface TimelineSubscriptionPayload {
  mutation: MutationType
  node?: Timeline
  updatedFields?: String[]
  previousValues?: TimelinePreviousValues
}

export interface AggregateIngredient {
  count: Int
}

export interface TimelinePreviousValues {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface EquipmentEdge {
  node: Equipment
  cursor: String
}

export interface Equipment extends Node {
  id: ID_Output
  name: String
  washable: Boolean
}

/*
 * A connection to a list of items.

 */
export interface TimelineConnection {
  pageInfo: PageInfo
  edges: TimelineEdge[]
  aggregate: AggregateTimeline
}

export interface EquipmentSubscriptionPayload {
  mutation: MutationType
  node?: Equipment
  updatedFields?: String[]
  previousValues?: EquipmentPreviousValues
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface IngredientPreviousValues {
  id: ID_Output
  name: String
  quantity: Float
  scale?: Float
}

export interface IngredientSubscriptionPayload {
  mutation: MutationType
  node?: Ingredient
  updatedFields?: String[]
  previousValues?: IngredientPreviousValues
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

export interface EquipmentPreviousValues {
  id: ID_Output
  name: String
  washable: Boolean
}

/*
 * A connection to a list of items.

 */
export interface IngredientConnection {
  pageInfo: PageInfo
  edges: IngredientEdge[]
  aggregate: AggregateIngredient
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface RecipeEdge {
  node: Recipe
  cursor: String
}

export interface AggregateTimeline {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean