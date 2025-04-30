
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model contact
 * 
 */
export type contact = $Result.DefaultSelection<Prisma.$contactPayload>
/**
 * Model feedbacks
 * 
 */
export type feedbacks = $Result.DefaultSelection<Prisma.$feedbacksPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model personal
 * 
 */
export type personal = $Result.DefaultSelection<Prisma.$personalPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model universities
 * 
 */
export type universities = $Result.DefaultSelection<Prisma.$universitiesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contact.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contact.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contact`: Exposes CRUD operations for the **contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.contactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbacks`: Exposes CRUD operations for the **feedbacks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedbacks.findMany()
    * ```
    */
  get feedbacks(): Prisma.feedbacksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal`: Exposes CRUD operations for the **personal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personals
    * const personals = await prisma.personal.findMany()
    * ```
    */
  get personal(): Prisma.personalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universities`: Exposes CRUD operations for the **universities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universities
    * const universities = await prisma.universities.findMany()
    * ```
    */
  get universities(): Prisma.universitiesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    contact: 'contact',
    feedbacks: 'feedbacks',
    jobs: 'jobs',
    personal: 'personal',
    projects: 'projects',
    universities: 'universities'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contact" | "feedbacks" | "jobs" | "personal" | "projects" | "universities"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      contact: {
        payload: Prisma.$contactPayload<ExtArgs>
        fields: Prisma.contactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findFirst: {
            args: Prisma.contactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findMany: {
            args: Prisma.contactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          create: {
            args: Prisma.contactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          createMany: {
            args: Prisma.contactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          delete: {
            args: Prisma.contactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          update: {
            args: Prisma.contactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          deleteMany: {
            args: Prisma.contactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          upsert: {
            args: Prisma.contactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.contactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      feedbacks: {
        payload: Prisma.$feedbacksPayload<ExtArgs>
        fields: Prisma.feedbacksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbacksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbacksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          findFirst: {
            args: Prisma.feedbacksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbacksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          findMany: {
            args: Prisma.feedbacksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>[]
          }
          create: {
            args: Prisma.feedbacksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          createMany: {
            args: Prisma.feedbacksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.feedbacksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>[]
          }
          delete: {
            args: Prisma.feedbacksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          update: {
            args: Prisma.feedbacksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          deleteMany: {
            args: Prisma.feedbacksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbacksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.feedbacksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>[]
          }
          upsert: {
            args: Prisma.feedbacksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbacksPayload>
          }
          aggregate: {
            args: Prisma.FeedbacksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbacks>
          }
          groupBy: {
            args: Prisma.feedbacksGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbacksCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbacksCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      personal: {
        payload: Prisma.$personalPayload<ExtArgs>
        fields: Prisma.personalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          findFirst: {
            args: Prisma.personalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          findMany: {
            args: Prisma.personalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>[]
          }
          create: {
            args: Prisma.personalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          createMany: {
            args: Prisma.personalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>[]
          }
          delete: {
            args: Prisma.personalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          update: {
            args: Prisma.personalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          deleteMany: {
            args: Prisma.personalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>[]
          }
          upsert: {
            args: Prisma.personalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalPayload>
          }
          aggregate: {
            args: Prisma.PersonalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal>
          }
          groupBy: {
            args: Prisma.personalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalGroupByOutputType>[]
          }
          count: {
            args: Prisma.personalCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      universities: {
        payload: Prisma.$universitiesPayload<ExtArgs>
        fields: Prisma.universitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.universitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.universitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>
          }
          findFirst: {
            args: Prisma.universitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.universitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>
          }
          findMany: {
            args: Prisma.universitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>[]
          }
          create: {
            args: Prisma.universitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>
          }
          createMany: {
            args: Prisma.universitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.universitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>[]
          }
          delete: {
            args: Prisma.universitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>
          }
          update: {
            args: Prisma.universitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>
          }
          deleteMany: {
            args: Prisma.universitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.universitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.universitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>[]
          }
          upsert: {
            args: Prisma.universitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universitiesPayload>
          }
          aggregate: {
            args: Prisma.UniversitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversities>
          }
          groupBy: {
            args: Prisma.universitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.universitiesCountArgs<ExtArgs>
            result: $Utils.Optional<UniversitiesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contact?: contactOmit
    feedbacks?: feedbacksOmit
    jobs?: jobsOmit
    personal?: personalOmit
    projects?: projectsOmit
    universities?: universitiesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    whatsApp: string | null
    telegram: string | null
    linkedIn: string | null
    phone: string | null
    email: string | null
    cv: string | null
    website: string | null
    github: string | null
    codewars: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    whatsApp: string | null
    telegram: string | null
    linkedIn: string | null
    phone: string | null
    email: string | null
    cv: string | null
    website: string | null
    github: string | null
    codewars: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    whatsApp: number
    telegram: number
    linkedIn: number
    phone: number
    email: number
    cv: number
    website: number
    github: number
    codewars: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    whatsApp?: true
    telegram?: true
    linkedIn?: true
    phone?: true
    email?: true
    cv?: true
    website?: true
    github?: true
    codewars?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    whatsApp?: true
    telegram?: true
    linkedIn?: true
    phone?: true
    email?: true
    cv?: true
    website?: true
    github?: true
    codewars?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    whatsApp?: true
    telegram?: true
    linkedIn?: true
    phone?: true
    email?: true
    cv?: true
    website?: true
    github?: true
    codewars?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact to aggregate.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type contactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
    orderBy?: contactOrderByWithAggregationInput | contactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: contactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    whatsApp: string
    telegram: string
    linkedIn: string
    phone: string
    email: string
    cv: string
    website: string
    github: string
    codewars: string
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends contactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type contactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsApp?: boolean
    telegram?: boolean
    linkedIn?: boolean
    phone?: boolean
    email?: boolean
    cv?: boolean
    website?: boolean
    github?: boolean
    codewars?: boolean
  }, ExtArgs["result"]["contact"]>

  export type contactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsApp?: boolean
    telegram?: boolean
    linkedIn?: boolean
    phone?: boolean
    email?: boolean
    cv?: boolean
    website?: boolean
    github?: boolean
    codewars?: boolean
  }, ExtArgs["result"]["contact"]>

  export type contactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whatsApp?: boolean
    telegram?: boolean
    linkedIn?: boolean
    phone?: boolean
    email?: boolean
    cv?: boolean
    website?: boolean
    github?: boolean
    codewars?: boolean
  }, ExtArgs["result"]["contact"]>

  export type contactSelectScalar = {
    id?: boolean
    whatsApp?: boolean
    telegram?: boolean
    linkedIn?: boolean
    phone?: boolean
    email?: boolean
    cv?: boolean
    website?: boolean
    github?: boolean
    codewars?: boolean
  }

  export type contactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "whatsApp" | "telegram" | "linkedIn" | "phone" | "email" | "cv" | "website" | "github" | "codewars", ExtArgs["result"]["contact"]>

  export type $contactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      whatsApp: string
      telegram: string
      linkedIn: string
      phone: string
      email: string
      cv: string
      website: string
      github: string
      codewars: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type contactGetPayload<S extends boolean | null | undefined | contactDefaultArgs> = $Result.GetResult<Prisma.$contactPayload, S>

  type contactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface contactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact'], meta: { name: 'contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {contactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactFindUniqueArgs>(args: SelectSubset<T, contactFindUniqueArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactFindUniqueOrThrowArgs>(args: SelectSubset<T, contactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactFindFirstArgs>(args?: SelectSubset<T, contactFindFirstArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactFindFirstOrThrowArgs>(args?: SelectSubset<T, contactFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactFindManyArgs>(args?: SelectSubset<T, contactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {contactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends contactCreateArgs>(args: SelectSubset<T, contactCreateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {contactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactCreateManyArgs>(args?: SelectSubset<T, contactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {contactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contactCreateManyAndReturnArgs>(args?: SelectSubset<T, contactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {contactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends contactDeleteArgs>(args: SelectSubset<T, contactDeleteArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {contactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactUpdateArgs>(args: SelectSubset<T, contactUpdateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {contactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactDeleteManyArgs>(args?: SelectSubset<T, contactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactUpdateManyArgs>(args: SelectSubset<T, contactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {contactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contactUpdateManyAndReturnArgs>(args: SelectSubset<T, contactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {contactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends contactUpsertArgs>(args: SelectSubset<T, contactUpsertArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactCountArgs>(
      args?: Subset<T, contactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactGroupByArgs['orderBy'] }
        : { orderBy?: contactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact model
   */
  readonly fields: contactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contact model
   */
  interface contactFieldRefs {
    readonly id: FieldRef<"contact", 'Int'>
    readonly whatsApp: FieldRef<"contact", 'String'>
    readonly telegram: FieldRef<"contact", 'String'>
    readonly linkedIn: FieldRef<"contact", 'String'>
    readonly phone: FieldRef<"contact", 'String'>
    readonly email: FieldRef<"contact", 'String'>
    readonly cv: FieldRef<"contact", 'String'>
    readonly website: FieldRef<"contact", 'String'>
    readonly github: FieldRef<"contact", 'String'>
    readonly codewars: FieldRef<"contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contact findUnique
   */
  export type contactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findUniqueOrThrow
   */
  export type contactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findFirst
   */
  export type contactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findFirstOrThrow
   */
  export type contactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findMany
   */
  export type contactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact create
   */
  export type contactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data needed to create a contact.
     */
    data: XOR<contactCreateInput, contactUncheckedCreateInput>
  }

  /**
   * contact createMany
   */
  export type contactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact createManyAndReturn
   */
  export type contactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact update
   */
  export type contactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data needed to update a contact.
     */
    data: XOR<contactUpdateInput, contactUncheckedUpdateInput>
    /**
     * Choose, which contact to update.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact updateMany
   */
  export type contactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contact updateManyAndReturn
   */
  export type contactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contact upsert
   */
  export type contactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The filter to search for the contact to update in case it exists.
     */
    where: contactWhereUniqueInput
    /**
     * In case the contact found by the `where` argument doesn't exist, create a new contact with this data.
     */
    create: XOR<contactCreateInput, contactUncheckedCreateInput>
    /**
     * In case the contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactUpdateInput, contactUncheckedUpdateInput>
  }

  /**
   * contact delete
   */
  export type contactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter which contact to delete.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact deleteMany
   */
  export type contactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to delete.
     */
    limit?: number
  }

  /**
   * contact without action
   */
  export type contactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
  }


  /**
   * Model feedbacks
   */

  export type AggregateFeedbacks = {
    _count: FeedbacksCountAggregateOutputType | null
    _avg: FeedbacksAvgAggregateOutputType | null
    _sum: FeedbacksSumAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  export type FeedbacksAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbacksSumAggregateOutputType = {
    id: number | null
  }

  export type FeedbacksMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    description: string | null
    position: string | null
    companyTitle: string | null
    logo: string | null
  }

  export type FeedbacksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    description: string | null
    position: string | null
    companyTitle: string | null
    logo: string | null
  }

  export type FeedbacksCountAggregateOutputType = {
    id: number
    name: number
    date: number
    description: number
    position: number
    companyTitle: number
    logo: number
    _all: number
  }


  export type FeedbacksAvgAggregateInputType = {
    id?: true
  }

  export type FeedbacksSumAggregateInputType = {
    id?: true
  }

  export type FeedbacksMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    description?: true
    position?: true
    companyTitle?: true
    logo?: true
  }

  export type FeedbacksMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    description?: true
    position?: true
    companyTitle?: true
    logo?: true
  }

  export type FeedbacksCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    description?: true
    position?: true
    companyTitle?: true
    logo?: true
    _all?: true
  }

  export type FeedbacksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to aggregate.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbacksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbacksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbacksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbacksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbacksMaxAggregateInputType
  }

  export type GetFeedbacksAggregateType<T extends FeedbacksAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbacks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbacks[P]>
      : GetScalarType<T[P], AggregateFeedbacks[P]>
  }




  export type feedbacksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbacksWhereInput
    orderBy?: feedbacksOrderByWithAggregationInput | feedbacksOrderByWithAggregationInput[]
    by: FeedbacksScalarFieldEnum[] | FeedbacksScalarFieldEnum
    having?: feedbacksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbacksCountAggregateInputType | true
    _avg?: FeedbacksAvgAggregateInputType
    _sum?: FeedbacksSumAggregateInputType
    _min?: FeedbacksMinAggregateInputType
    _max?: FeedbacksMaxAggregateInputType
  }

  export type FeedbacksGroupByOutputType = {
    id: number
    name: string
    date: Date
    description: string
    position: string
    companyTitle: string
    logo: string
    _count: FeedbacksCountAggregateOutputType | null
    _avg: FeedbacksAvgAggregateOutputType | null
    _sum: FeedbacksSumAggregateOutputType | null
    _min: FeedbacksMinAggregateOutputType | null
    _max: FeedbacksMaxAggregateOutputType | null
  }

  type GetFeedbacksGroupByPayload<T extends feedbacksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbacksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbacksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbacksGroupByOutputType[P]>
        }
      >
    >


  export type feedbacksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    position?: boolean
    companyTitle?: boolean
    logo?: boolean
  }, ExtArgs["result"]["feedbacks"]>

  export type feedbacksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    position?: boolean
    companyTitle?: boolean
    logo?: boolean
  }, ExtArgs["result"]["feedbacks"]>

  export type feedbacksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    position?: boolean
    companyTitle?: boolean
    logo?: boolean
  }, ExtArgs["result"]["feedbacks"]>

  export type feedbacksSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    position?: boolean
    companyTitle?: boolean
    logo?: boolean
  }

  export type feedbacksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "description" | "position" | "companyTitle" | "logo", ExtArgs["result"]["feedbacks"]>

  export type $feedbacksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedbacks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date: Date
      description: string
      position: string
      companyTitle: string
      logo: string
    }, ExtArgs["result"]["feedbacks"]>
    composites: {}
  }

  type feedbacksGetPayload<S extends boolean | null | undefined | feedbacksDefaultArgs> = $Result.GetResult<Prisma.$feedbacksPayload, S>

  type feedbacksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbacksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbacksCountAggregateInputType | true
    }

  export interface feedbacksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedbacks'], meta: { name: 'feedbacks' } }
    /**
     * Find zero or one Feedbacks that matches the filter.
     * @param {feedbacksFindUniqueArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbacksFindUniqueArgs>(args: SelectSubset<T, feedbacksFindUniqueArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedbacks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbacksFindUniqueOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbacksFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbacksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindFirstArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbacksFindFirstArgs>(args?: SelectSubset<T, feedbacksFindFirstArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedbacks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindFirstOrThrowArgs} args - Arguments to find a Feedbacks
     * @example
     * // Get one Feedbacks
     * const feedbacks = await prisma.feedbacks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbacksFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbacksFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedbacks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbacksWithIdOnly = await prisma.feedbacks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends feedbacksFindManyArgs>(args?: SelectSubset<T, feedbacksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedbacks.
     * @param {feedbacksCreateArgs} args - Arguments to create a Feedbacks.
     * @example
     * // Create one Feedbacks
     * const Feedbacks = await prisma.feedbacks.create({
     *   data: {
     *     // ... data to create a Feedbacks
     *   }
     * })
     * 
     */
    create<T extends feedbacksCreateArgs>(args: SelectSubset<T, feedbacksCreateArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbacksCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedbacks = await prisma.feedbacks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbacksCreateManyArgs>(args?: SelectSubset<T, feedbacksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {feedbacksCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedbacks = await prisma.feedbacks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbacksWithIdOnly = await prisma.feedbacks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends feedbacksCreateManyAndReturnArgs>(args?: SelectSubset<T, feedbacksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedbacks.
     * @param {feedbacksDeleteArgs} args - Arguments to delete one Feedbacks.
     * @example
     * // Delete one Feedbacks
     * const Feedbacks = await prisma.feedbacks.delete({
     *   where: {
     *     // ... filter to delete one Feedbacks
     *   }
     * })
     * 
     */
    delete<T extends feedbacksDeleteArgs>(args: SelectSubset<T, feedbacksDeleteArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedbacks.
     * @param {feedbacksUpdateArgs} args - Arguments to update one Feedbacks.
     * @example
     * // Update one Feedbacks
     * const feedbacks = await prisma.feedbacks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbacksUpdateArgs>(args: SelectSubset<T, feedbacksUpdateArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbacksDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedbacks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbacksDeleteManyArgs>(args?: SelectSubset<T, feedbacksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedbacks = await prisma.feedbacks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbacksUpdateManyArgs>(args: SelectSubset<T, feedbacksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {feedbacksUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedbacks = await prisma.feedbacks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbacksWithIdOnly = await prisma.feedbacks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends feedbacksUpdateManyAndReturnArgs>(args: SelectSubset<T, feedbacksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedbacks.
     * @param {feedbacksUpsertArgs} args - Arguments to update or create a Feedbacks.
     * @example
     * // Update or create a Feedbacks
     * const feedbacks = await prisma.feedbacks.upsert({
     *   create: {
     *     // ... data to create a Feedbacks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedbacks we want to update
     *   }
     * })
     */
    upsert<T extends feedbacksUpsertArgs>(args: SelectSubset<T, feedbacksUpsertArgs<ExtArgs>>): Prisma__feedbacksClient<$Result.GetResult<Prisma.$feedbacksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedbacks.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbacksCountArgs>(
      args?: Subset<T, feedbacksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbacksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbacksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbacksAggregateArgs>(args: Subset<T, FeedbacksAggregateArgs>): Prisma.PrismaPromise<GetFeedbacksAggregateType<T>>

    /**
     * Group by Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbacksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends feedbacksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbacksGroupByArgs['orderBy'] }
        : { orderBy?: feedbacksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, feedbacksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbacksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedbacks model
   */
  readonly fields: feedbacksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedbacks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbacksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the feedbacks model
   */
  interface feedbacksFieldRefs {
    readonly id: FieldRef<"feedbacks", 'Int'>
    readonly name: FieldRef<"feedbacks", 'String'>
    readonly date: FieldRef<"feedbacks", 'DateTime'>
    readonly description: FieldRef<"feedbacks", 'String'>
    readonly position: FieldRef<"feedbacks", 'String'>
    readonly companyTitle: FieldRef<"feedbacks", 'String'>
    readonly logo: FieldRef<"feedbacks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * feedbacks findUnique
   */
  export type feedbacksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks findUniqueOrThrow
   */
  export type feedbacksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks findFirst
   */
  export type feedbacksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks findFirstOrThrow
   */
  export type feedbacksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks findMany
   */
  export type feedbacksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbacksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbacksOrderByWithRelationInput | feedbacksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbacksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    distinct?: FeedbacksScalarFieldEnum | FeedbacksScalarFieldEnum[]
  }

  /**
   * feedbacks create
   */
  export type feedbacksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * The data needed to create a feedbacks.
     */
    data: XOR<feedbacksCreateInput, feedbacksUncheckedCreateInput>
  }

  /**
   * feedbacks createMany
   */
  export type feedbacksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbacksCreateManyInput | feedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedbacks createManyAndReturn
   */
  export type feedbacksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * The data used to create many feedbacks.
     */
    data: feedbacksCreateManyInput | feedbacksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedbacks update
   */
  export type feedbacksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * The data needed to update a feedbacks.
     */
    data: XOR<feedbacksUpdateInput, feedbacksUncheckedUpdateInput>
    /**
     * Choose, which feedbacks to update.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks updateMany
   */
  export type feedbacksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbacksWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedbacks updateManyAndReturn
   */
  export type feedbacksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbacksUpdateManyMutationInput, feedbacksUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbacksWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedbacks upsert
   */
  export type feedbacksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * The filter to search for the feedbacks to update in case it exists.
     */
    where: feedbacksWhereUniqueInput
    /**
     * In case the feedbacks found by the `where` argument doesn't exist, create a new feedbacks with this data.
     */
    create: XOR<feedbacksCreateInput, feedbacksUncheckedCreateInput>
    /**
     * In case the feedbacks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbacksUpdateInput, feedbacksUncheckedUpdateInput>
  }

  /**
   * feedbacks delete
   */
  export type feedbacksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
    /**
     * Filter which feedbacks to delete.
     */
    where: feedbacksWhereUniqueInput
  }

  /**
   * feedbacks deleteMany
   */
  export type feedbacksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbacksWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedbacks without action
   */
  export type feedbacksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedbacks
     */
    select?: feedbacksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedbacks
     */
    omit?: feedbacksOmit<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    software_id: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    software_id: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    software_id: number | null
    endAt: string | null
    companyTitle: string | null
    startAt: string | null
    description: string | null
    jobTitle: string | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    software_id: number | null
    endAt: string | null
    companyTitle: string | null
    startAt: string | null
    description: string | null
    jobTitle: string | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    software_id: number
    endAt: number
    companyTitle: number
    startAt: number
    description: number
    jobTitle: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    software_id?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    software_id?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    software_id?: true
    endAt?: true
    companyTitle?: true
    startAt?: true
    description?: true
    jobTitle?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    software_id?: true
    endAt?: true
    companyTitle?: true
    startAt?: true
    description?: true
    jobTitle?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    software_id?: true
    endAt?: true
    companyTitle?: true
    startAt?: true
    description?: true
    jobTitle?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    software_id: number
    endAt: string
    companyTitle: string
    startAt: string
    description: string
    jobTitle: string
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    software_id?: boolean
    endAt?: boolean
    companyTitle?: boolean
    startAt?: boolean
    description?: boolean
    jobTitle?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    software_id?: boolean
    endAt?: boolean
    companyTitle?: boolean
    startAt?: boolean
    description?: boolean
    jobTitle?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    software_id?: boolean
    endAt?: boolean
    companyTitle?: boolean
    startAt?: boolean
    description?: boolean
    jobTitle?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectScalar = {
    id?: boolean
    software_id?: boolean
    endAt?: boolean
    companyTitle?: boolean
    startAt?: boolean
    description?: boolean
    jobTitle?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "software_id" | "endAt" | "companyTitle" | "startAt" | "description" | "jobTitle", ExtArgs["result"]["jobs"]>

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      software_id: number
      endAt: string
      companyTitle: string
      startAt: string
      description: string
      jobTitle: string
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {jobsCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jobsCreateManyAndReturnArgs>(args?: SelectSubset<T, jobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {jobsUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends jobsUpdateManyAndReturnArgs>(args: SelectSubset<T, jobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'Int'>
    readonly software_id: FieldRef<"jobs", 'Int'>
    readonly endAt: FieldRef<"jobs", 'String'>
    readonly companyTitle: FieldRef<"jobs", 'String'>
    readonly startAt: FieldRef<"jobs", 'String'>
    readonly description: FieldRef<"jobs", 'String'>
    readonly jobTitle: FieldRef<"jobs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs createManyAndReturn
   */
  export type jobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs updateManyAndReturn
   */
  export type jobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
  }


  /**
   * Model personal
   */

  export type AggregatePersonal = {
    _count: PersonalCountAggregateOutputType | null
    _avg: PersonalAvgAggregateOutputType | null
    _sum: PersonalSumAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  export type PersonalAvgAggregateOutputType = {
    id: number | null
    age: number | null
    yearExperince: number | null
  }

  export type PersonalSumAggregateOutputType = {
    id: number | null
    age: number | null
    yearExperince: number | null
  }

  export type PersonalMinAggregateOutputType = {
    id: number | null
    username: string | null
    surname: string | null
    age: number | null
    city: string | null
    country: string | null
    yearExperince: number | null
    description: string | null
  }

  export type PersonalMaxAggregateOutputType = {
    id: number | null
    username: string | null
    surname: string | null
    age: number | null
    city: string | null
    country: string | null
    yearExperince: number | null
    description: string | null
  }

  export type PersonalCountAggregateOutputType = {
    id: number
    username: number
    surname: number
    age: number
    city: number
    country: number
    yearExperince: number
    description: number
    _all: number
  }


  export type PersonalAvgAggregateInputType = {
    id?: true
    age?: true
    yearExperince?: true
  }

  export type PersonalSumAggregateInputType = {
    id?: true
    age?: true
    yearExperince?: true
  }

  export type PersonalMinAggregateInputType = {
    id?: true
    username?: true
    surname?: true
    age?: true
    city?: true
    country?: true
    yearExperince?: true
    description?: true
  }

  export type PersonalMaxAggregateInputType = {
    id?: true
    username?: true
    surname?: true
    age?: true
    city?: true
    country?: true
    yearExperince?: true
    description?: true
  }

  export type PersonalCountAggregateInputType = {
    id?: true
    username?: true
    surname?: true
    age?: true
    city?: true
    country?: true
    yearExperince?: true
    description?: true
    _all?: true
  }

  export type PersonalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personal to aggregate.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personals
    **/
    _count?: true | PersonalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalMaxAggregateInputType
  }

  export type GetPersonalAggregateType<T extends PersonalAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal[P]>
      : GetScalarType<T[P], AggregatePersonal[P]>
  }




  export type personalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personalWhereInput
    orderBy?: personalOrderByWithAggregationInput | personalOrderByWithAggregationInput[]
    by: PersonalScalarFieldEnum[] | PersonalScalarFieldEnum
    having?: personalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalCountAggregateInputType | true
    _avg?: PersonalAvgAggregateInputType
    _sum?: PersonalSumAggregateInputType
    _min?: PersonalMinAggregateInputType
    _max?: PersonalMaxAggregateInputType
  }

  export type PersonalGroupByOutputType = {
    id: number
    username: string
    surname: string
    age: number
    city: string
    country: string
    yearExperince: number
    description: string
    _count: PersonalCountAggregateOutputType | null
    _avg: PersonalAvgAggregateOutputType | null
    _sum: PersonalSumAggregateOutputType | null
    _min: PersonalMinAggregateOutputType | null
    _max: PersonalMaxAggregateOutputType | null
  }

  type GetPersonalGroupByPayload<T extends personalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalGroupByOutputType[P]>
        }
      >
    >


  export type personalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    surname?: boolean
    age?: boolean
    city?: boolean
    country?: boolean
    yearExperince?: boolean
    description?: boolean
  }, ExtArgs["result"]["personal"]>

  export type personalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    surname?: boolean
    age?: boolean
    city?: boolean
    country?: boolean
    yearExperince?: boolean
    description?: boolean
  }, ExtArgs["result"]["personal"]>

  export type personalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    surname?: boolean
    age?: boolean
    city?: boolean
    country?: boolean
    yearExperince?: boolean
    description?: boolean
  }, ExtArgs["result"]["personal"]>

  export type personalSelectScalar = {
    id?: boolean
    username?: boolean
    surname?: boolean
    age?: boolean
    city?: boolean
    country?: boolean
    yearExperince?: boolean
    description?: boolean
  }

  export type personalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "surname" | "age" | "city" | "country" | "yearExperince" | "description", ExtArgs["result"]["personal"]>

  export type $personalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "personal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      surname: string
      age: number
      city: string
      country: string
      yearExperince: number
      description: string
    }, ExtArgs["result"]["personal"]>
    composites: {}
  }

  type personalGetPayload<S extends boolean | null | undefined | personalDefaultArgs> = $Result.GetResult<Prisma.$personalPayload, S>

  type personalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalCountAggregateInputType | true
    }

  export interface personalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['personal'], meta: { name: 'personal' } }
    /**
     * Find zero or one Personal that matches the filter.
     * @param {personalFindUniqueArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personalFindUniqueArgs>(args: SelectSubset<T, personalFindUniqueArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personalFindUniqueOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personalFindUniqueOrThrowArgs>(args: SelectSubset<T, personalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalFindFirstArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personalFindFirstArgs>(args?: SelectSubset<T, personalFindFirstArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalFindFirstOrThrowArgs} args - Arguments to find a Personal
     * @example
     * // Get one Personal
     * const personal = await prisma.personal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personalFindFirstOrThrowArgs>(args?: SelectSubset<T, personalFindFirstOrThrowArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personals
     * const personals = await prisma.personal.findMany()
     * 
     * // Get first 10 Personals
     * const personals = await prisma.personal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalWithIdOnly = await prisma.personal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personalFindManyArgs>(args?: SelectSubset<T, personalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal.
     * @param {personalCreateArgs} args - Arguments to create a Personal.
     * @example
     * // Create one Personal
     * const Personal = await prisma.personal.create({
     *   data: {
     *     // ... data to create a Personal
     *   }
     * })
     * 
     */
    create<T extends personalCreateArgs>(args: SelectSubset<T, personalCreateArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personals.
     * @param {personalCreateManyArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personalCreateManyArgs>(args?: SelectSubset<T, personalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personals and returns the data saved in the database.
     * @param {personalCreateManyAndReturnArgs} args - Arguments to create many Personals.
     * @example
     * // Create many Personals
     * const personal = await prisma.personal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personalCreateManyAndReturnArgs>(args?: SelectSubset<T, personalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personal.
     * @param {personalDeleteArgs} args - Arguments to delete one Personal.
     * @example
     * // Delete one Personal
     * const Personal = await prisma.personal.delete({
     *   where: {
     *     // ... filter to delete one Personal
     *   }
     * })
     * 
     */
    delete<T extends personalDeleteArgs>(args: SelectSubset<T, personalDeleteArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal.
     * @param {personalUpdateArgs} args - Arguments to update one Personal.
     * @example
     * // Update one Personal
     * const personal = await prisma.personal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personalUpdateArgs>(args: SelectSubset<T, personalUpdateArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personals.
     * @param {personalDeleteManyArgs} args - Arguments to filter Personals to delete.
     * @example
     * // Delete a few Personals
     * const { count } = await prisma.personal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personalDeleteManyArgs>(args?: SelectSubset<T, personalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personalUpdateManyArgs>(args: SelectSubset<T, personalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personals and returns the data updated in the database.
     * @param {personalUpdateManyAndReturnArgs} args - Arguments to update many Personals.
     * @example
     * // Update many Personals
     * const personal = await prisma.personal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personals and only return the `id`
     * const personalWithIdOnly = await prisma.personal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends personalUpdateManyAndReturnArgs>(args: SelectSubset<T, personalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personal.
     * @param {personalUpsertArgs} args - Arguments to update or create a Personal.
     * @example
     * // Update or create a Personal
     * const personal = await prisma.personal.upsert({
     *   create: {
     *     // ... data to create a Personal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal we want to update
     *   }
     * })
     */
    upsert<T extends personalUpsertArgs>(args: SelectSubset<T, personalUpsertArgs<ExtArgs>>): Prisma__personalClient<$Result.GetResult<Prisma.$personalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalCountArgs} args - Arguments to filter Personals to count.
     * @example
     * // Count the number of Personals
     * const count = await prisma.personal.count({
     *   where: {
     *     // ... the filter for the Personals we want to count
     *   }
     * })
    **/
    count<T extends personalCountArgs>(
      args?: Subset<T, personalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalAggregateArgs>(args: Subset<T, PersonalAggregateArgs>): Prisma.PrismaPromise<GetPersonalAggregateType<T>>

    /**
     * Group by Personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personalGroupByArgs['orderBy'] }
        : { orderBy?: personalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the personal model
   */
  readonly fields: personalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for personal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the personal model
   */
  interface personalFieldRefs {
    readonly id: FieldRef<"personal", 'Int'>
    readonly username: FieldRef<"personal", 'String'>
    readonly surname: FieldRef<"personal", 'String'>
    readonly age: FieldRef<"personal", 'Int'>
    readonly city: FieldRef<"personal", 'String'>
    readonly country: FieldRef<"personal", 'String'>
    readonly yearExperince: FieldRef<"personal", 'Int'>
    readonly description: FieldRef<"personal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * personal findUnique
   */
  export type personalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal findUniqueOrThrow
   */
  export type personalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal findFirst
   */
  export type personalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personals.
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * personal findFirstOrThrow
   */
  export type personalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personal to fetch.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personals.
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personals.
     */
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * personal findMany
   */
  export type personalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter, which personals to fetch.
     */
    where?: personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personals to fetch.
     */
    orderBy?: personalOrderByWithRelationInput | personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personals.
     */
    cursor?: personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personals.
     */
    skip?: number
    distinct?: PersonalScalarFieldEnum | PersonalScalarFieldEnum[]
  }

  /**
   * personal create
   */
  export type personalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data needed to create a personal.
     */
    data: XOR<personalCreateInput, personalUncheckedCreateInput>
  }

  /**
   * personal createMany
   */
  export type personalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personals.
     */
    data: personalCreateManyInput | personalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personal createManyAndReturn
   */
  export type personalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data used to create many personals.
     */
    data: personalCreateManyInput | personalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personal update
   */
  export type personalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data needed to update a personal.
     */
    data: XOR<personalUpdateInput, personalUncheckedUpdateInput>
    /**
     * Choose, which personal to update.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal updateMany
   */
  export type personalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personals.
     */
    data: XOR<personalUpdateManyMutationInput, personalUncheckedUpdateManyInput>
    /**
     * Filter which personals to update
     */
    where?: personalWhereInput
    /**
     * Limit how many personals to update.
     */
    limit?: number
  }

  /**
   * personal updateManyAndReturn
   */
  export type personalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The data used to update personals.
     */
    data: XOR<personalUpdateManyMutationInput, personalUncheckedUpdateManyInput>
    /**
     * Filter which personals to update
     */
    where?: personalWhereInput
    /**
     * Limit how many personals to update.
     */
    limit?: number
  }

  /**
   * personal upsert
   */
  export type personalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * The filter to search for the personal to update in case it exists.
     */
    where: personalWhereUniqueInput
    /**
     * In case the personal found by the `where` argument doesn't exist, create a new personal with this data.
     */
    create: XOR<personalCreateInput, personalUncheckedCreateInput>
    /**
     * In case the personal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personalUpdateInput, personalUncheckedUpdateInput>
  }

  /**
   * personal delete
   */
  export type personalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
    /**
     * Filter which personal to delete.
     */
    where: personalWhereUniqueInput
  }

  /**
   * personal deleteMany
   */
  export type personalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personals to delete
     */
    where?: personalWhereInput
    /**
     * Limit how many personals to delete.
     */
    limit?: number
  }

  /**
   * personal without action
   */
  export type personalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal
     */
    select?: personalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal
     */
    omit?: personalOmit<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    title: string | null
    startAt: Date | null
    endAt: Date | null
    description: string | null
    link: string | null
    logo: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    startAt: Date | null
    endAt: Date | null
    description: string | null
    link: string | null
    logo: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    startAt: number
    endAt: number
    description: number
    link: number
    logo: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    startAt?: true
    endAt?: true
    description?: true
    link?: true
    logo?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    startAt?: true
    endAt?: true
    description?: true
    link?: true
    logo?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    startAt?: true
    endAt?: true
    description?: true
    link?: true
    logo?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    title: string
    startAt: Date
    endAt: Date
    description: string
    link: string
    logo: string
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startAt?: boolean
    endAt?: boolean
    description?: boolean
    link?: boolean
    logo?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startAt?: boolean
    endAt?: boolean
    description?: boolean
    link?: boolean
    logo?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startAt?: boolean
    endAt?: boolean
    description?: boolean
    link?: boolean
    logo?: boolean
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    title?: boolean
    startAt?: boolean
    endAt?: boolean
    description?: boolean
    link?: boolean
    logo?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "startAt" | "endAt" | "description" | "link" | "logo", ExtArgs["result"]["projects"]>

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      startAt: Date
      endAt: Date
      description: string
      link: string
      logo: string
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'Int'>
    readonly title: FieldRef<"projects", 'String'>
    readonly startAt: FieldRef<"projects", 'DateTime'>
    readonly endAt: FieldRef<"projects", 'DateTime'>
    readonly description: FieldRef<"projects", 'String'>
    readonly link: FieldRef<"projects", 'String'>
    readonly logo: FieldRef<"projects", 'String'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
  }


  /**
   * Model universities
   */

  export type AggregateUniversities = {
    _count: UniversitiesCountAggregateOutputType | null
    _avg: UniversitiesAvgAggregateOutputType | null
    _sum: UniversitiesSumAggregateOutputType | null
    _min: UniversitiesMinAggregateOutputType | null
    _max: UniversitiesMaxAggregateOutputType | null
  }

  export type UniversitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type UniversitiesSumAggregateOutputType = {
    id: number | null
  }

  export type UniversitiesMinAggregateOutputType = {
    id: number | null
    companyTitle: string | null
    companyLogo: string | null
    startAt: string | null
    endAt: string | null
    title: string | null
    link: string | null
    certificate: string | null
    description: string | null
  }

  export type UniversitiesMaxAggregateOutputType = {
    id: number | null
    companyTitle: string | null
    companyLogo: string | null
    startAt: string | null
    endAt: string | null
    title: string | null
    link: string | null
    certificate: string | null
    description: string | null
  }

  export type UniversitiesCountAggregateOutputType = {
    id: number
    companyTitle: number
    companyLogo: number
    startAt: number
    endAt: number
    title: number
    link: number
    certificate: number
    description: number
    _all: number
  }


  export type UniversitiesAvgAggregateInputType = {
    id?: true
  }

  export type UniversitiesSumAggregateInputType = {
    id?: true
  }

  export type UniversitiesMinAggregateInputType = {
    id?: true
    companyTitle?: true
    companyLogo?: true
    startAt?: true
    endAt?: true
    title?: true
    link?: true
    certificate?: true
    description?: true
  }

  export type UniversitiesMaxAggregateInputType = {
    id?: true
    companyTitle?: true
    companyLogo?: true
    startAt?: true
    endAt?: true
    title?: true
    link?: true
    certificate?: true
    description?: true
  }

  export type UniversitiesCountAggregateInputType = {
    id?: true
    companyTitle?: true
    companyLogo?: true
    startAt?: true
    endAt?: true
    title?: true
    link?: true
    certificate?: true
    description?: true
    _all?: true
  }

  export type UniversitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which universities to aggregate.
     */
    where?: universitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universities to fetch.
     */
    orderBy?: universitiesOrderByWithRelationInput | universitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: universitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned universities
    **/
    _count?: true | UniversitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniversitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniversitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversitiesMaxAggregateInputType
  }

  export type GetUniversitiesAggregateType<T extends UniversitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversities[P]>
      : GetScalarType<T[P], AggregateUniversities[P]>
  }




  export type universitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: universitiesWhereInput
    orderBy?: universitiesOrderByWithAggregationInput | universitiesOrderByWithAggregationInput[]
    by: UniversitiesScalarFieldEnum[] | UniversitiesScalarFieldEnum
    having?: universitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversitiesCountAggregateInputType | true
    _avg?: UniversitiesAvgAggregateInputType
    _sum?: UniversitiesSumAggregateInputType
    _min?: UniversitiesMinAggregateInputType
    _max?: UniversitiesMaxAggregateInputType
  }

  export type UniversitiesGroupByOutputType = {
    id: number
    companyTitle: string | null
    companyLogo: string | null
    startAt: string | null
    endAt: string | null
    title: string | null
    link: string | null
    certificate: string | null
    description: string | null
    _count: UniversitiesCountAggregateOutputType | null
    _avg: UniversitiesAvgAggregateOutputType | null
    _sum: UniversitiesSumAggregateOutputType | null
    _min: UniversitiesMinAggregateOutputType | null
    _max: UniversitiesMaxAggregateOutputType | null
  }

  type GetUniversitiesGroupByPayload<T extends universitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversitiesGroupByOutputType[P]>
            : GetScalarType<T[P], UniversitiesGroupByOutputType[P]>
        }
      >
    >


  export type universitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyTitle?: boolean
    companyLogo?: boolean
    startAt?: boolean
    endAt?: boolean
    title?: boolean
    link?: boolean
    certificate?: boolean
    description?: boolean
  }, ExtArgs["result"]["universities"]>

  export type universitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyTitle?: boolean
    companyLogo?: boolean
    startAt?: boolean
    endAt?: boolean
    title?: boolean
    link?: boolean
    certificate?: boolean
    description?: boolean
  }, ExtArgs["result"]["universities"]>

  export type universitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyTitle?: boolean
    companyLogo?: boolean
    startAt?: boolean
    endAt?: boolean
    title?: boolean
    link?: boolean
    certificate?: boolean
    description?: boolean
  }, ExtArgs["result"]["universities"]>

  export type universitiesSelectScalar = {
    id?: boolean
    companyTitle?: boolean
    companyLogo?: boolean
    startAt?: boolean
    endAt?: boolean
    title?: boolean
    link?: boolean
    certificate?: boolean
    description?: boolean
  }

  export type universitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyTitle" | "companyLogo" | "startAt" | "endAt" | "title" | "link" | "certificate" | "description", ExtArgs["result"]["universities"]>

  export type $universitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "universities"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyTitle: string | null
      companyLogo: string | null
      startAt: string | null
      endAt: string | null
      title: string | null
      link: string | null
      certificate: string | null
      description: string | null
    }, ExtArgs["result"]["universities"]>
    composites: {}
  }

  type universitiesGetPayload<S extends boolean | null | undefined | universitiesDefaultArgs> = $Result.GetResult<Prisma.$universitiesPayload, S>

  type universitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<universitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversitiesCountAggregateInputType | true
    }

  export interface universitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['universities'], meta: { name: 'universities' } }
    /**
     * Find zero or one Universities that matches the filter.
     * @param {universitiesFindUniqueArgs} args - Arguments to find a Universities
     * @example
     * // Get one Universities
     * const universities = await prisma.universities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends universitiesFindUniqueArgs>(args: SelectSubset<T, universitiesFindUniqueArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Universities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {universitiesFindUniqueOrThrowArgs} args - Arguments to find a Universities
     * @example
     * // Get one Universities
     * const universities = await prisma.universities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends universitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, universitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universitiesFindFirstArgs} args - Arguments to find a Universities
     * @example
     * // Get one Universities
     * const universities = await prisma.universities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends universitiesFindFirstArgs>(args?: SelectSubset<T, universitiesFindFirstArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universitiesFindFirstOrThrowArgs} args - Arguments to find a Universities
     * @example
     * // Get one Universities
     * const universities = await prisma.universities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends universitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, universitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universities
     * const universities = await prisma.universities.findMany()
     * 
     * // Get first 10 Universities
     * const universities = await prisma.universities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universitiesWithIdOnly = await prisma.universities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends universitiesFindManyArgs>(args?: SelectSubset<T, universitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Universities.
     * @param {universitiesCreateArgs} args - Arguments to create a Universities.
     * @example
     * // Create one Universities
     * const Universities = await prisma.universities.create({
     *   data: {
     *     // ... data to create a Universities
     *   }
     * })
     * 
     */
    create<T extends universitiesCreateArgs>(args: SelectSubset<T, universitiesCreateArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universities.
     * @param {universitiesCreateManyArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const universities = await prisma.universities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends universitiesCreateManyArgs>(args?: SelectSubset<T, universitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Universities and returns the data saved in the database.
     * @param {universitiesCreateManyAndReturnArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const universities = await prisma.universities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Universities and only return the `id`
     * const universitiesWithIdOnly = await prisma.universities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends universitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, universitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Universities.
     * @param {universitiesDeleteArgs} args - Arguments to delete one Universities.
     * @example
     * // Delete one Universities
     * const Universities = await prisma.universities.delete({
     *   where: {
     *     // ... filter to delete one Universities
     *   }
     * })
     * 
     */
    delete<T extends universitiesDeleteArgs>(args: SelectSubset<T, universitiesDeleteArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Universities.
     * @param {universitiesUpdateArgs} args - Arguments to update one Universities.
     * @example
     * // Update one Universities
     * const universities = await prisma.universities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends universitiesUpdateArgs>(args: SelectSubset<T, universitiesUpdateArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universities.
     * @param {universitiesDeleteManyArgs} args - Arguments to filter Universities to delete.
     * @example
     * // Delete a few Universities
     * const { count } = await prisma.universities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends universitiesDeleteManyArgs>(args?: SelectSubset<T, universitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universities
     * const universities = await prisma.universities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends universitiesUpdateManyArgs>(args: SelectSubset<T, universitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities and returns the data updated in the database.
     * @param {universitiesUpdateManyAndReturnArgs} args - Arguments to update many Universities.
     * @example
     * // Update many Universities
     * const universities = await prisma.universities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Universities and only return the `id`
     * const universitiesWithIdOnly = await prisma.universities.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends universitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, universitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Universities.
     * @param {universitiesUpsertArgs} args - Arguments to update or create a Universities.
     * @example
     * // Update or create a Universities
     * const universities = await prisma.universities.upsert({
     *   create: {
     *     // ... data to create a Universities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Universities we want to update
     *   }
     * })
     */
    upsert<T extends universitiesUpsertArgs>(args: SelectSubset<T, universitiesUpsertArgs<ExtArgs>>): Prisma__universitiesClient<$Result.GetResult<Prisma.$universitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universitiesCountArgs} args - Arguments to filter Universities to count.
     * @example
     * // Count the number of Universities
     * const count = await prisma.universities.count({
     *   where: {
     *     // ... the filter for the Universities we want to count
     *   }
     * })
    **/
    count<T extends universitiesCountArgs>(
      args?: Subset<T, universitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UniversitiesAggregateArgs>(args: Subset<T, UniversitiesAggregateArgs>): Prisma.PrismaPromise<GetUniversitiesAggregateType<T>>

    /**
     * Group by Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends universitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: universitiesGroupByArgs['orderBy'] }
        : { orderBy?: universitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, universitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the universities model
   */
  readonly fields: universitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for universities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__universitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the universities model
   */
  interface universitiesFieldRefs {
    readonly id: FieldRef<"universities", 'Int'>
    readonly companyTitle: FieldRef<"universities", 'String'>
    readonly companyLogo: FieldRef<"universities", 'String'>
    readonly startAt: FieldRef<"universities", 'String'>
    readonly endAt: FieldRef<"universities", 'String'>
    readonly title: FieldRef<"universities", 'String'>
    readonly link: FieldRef<"universities", 'String'>
    readonly certificate: FieldRef<"universities", 'String'>
    readonly description: FieldRef<"universities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * universities findUnique
   */
  export type universitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * Filter, which universities to fetch.
     */
    where: universitiesWhereUniqueInput
  }

  /**
   * universities findUniqueOrThrow
   */
  export type universitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * Filter, which universities to fetch.
     */
    where: universitiesWhereUniqueInput
  }

  /**
   * universities findFirst
   */
  export type universitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * Filter, which universities to fetch.
     */
    where?: universitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universities to fetch.
     */
    orderBy?: universitiesOrderByWithRelationInput | universitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for universities.
     */
    cursor?: universitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of universities.
     */
    distinct?: UniversitiesScalarFieldEnum | UniversitiesScalarFieldEnum[]
  }

  /**
   * universities findFirstOrThrow
   */
  export type universitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * Filter, which universities to fetch.
     */
    where?: universitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universities to fetch.
     */
    orderBy?: universitiesOrderByWithRelationInput | universitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for universities.
     */
    cursor?: universitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of universities.
     */
    distinct?: UniversitiesScalarFieldEnum | UniversitiesScalarFieldEnum[]
  }

  /**
   * universities findMany
   */
  export type universitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * Filter, which universities to fetch.
     */
    where?: universitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universities to fetch.
     */
    orderBy?: universitiesOrderByWithRelationInput | universitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing universities.
     */
    cursor?: universitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universities.
     */
    skip?: number
    distinct?: UniversitiesScalarFieldEnum | UniversitiesScalarFieldEnum[]
  }

  /**
   * universities create
   */
  export type universitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * The data needed to create a universities.
     */
    data?: XOR<universitiesCreateInput, universitiesUncheckedCreateInput>
  }

  /**
   * universities createMany
   */
  export type universitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many universities.
     */
    data: universitiesCreateManyInput | universitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * universities createManyAndReturn
   */
  export type universitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * The data used to create many universities.
     */
    data: universitiesCreateManyInput | universitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * universities update
   */
  export type universitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * The data needed to update a universities.
     */
    data: XOR<universitiesUpdateInput, universitiesUncheckedUpdateInput>
    /**
     * Choose, which universities to update.
     */
    where: universitiesWhereUniqueInput
  }

  /**
   * universities updateMany
   */
  export type universitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update universities.
     */
    data: XOR<universitiesUpdateManyMutationInput, universitiesUncheckedUpdateManyInput>
    /**
     * Filter which universities to update
     */
    where?: universitiesWhereInput
    /**
     * Limit how many universities to update.
     */
    limit?: number
  }

  /**
   * universities updateManyAndReturn
   */
  export type universitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * The data used to update universities.
     */
    data: XOR<universitiesUpdateManyMutationInput, universitiesUncheckedUpdateManyInput>
    /**
     * Filter which universities to update
     */
    where?: universitiesWhereInput
    /**
     * Limit how many universities to update.
     */
    limit?: number
  }

  /**
   * universities upsert
   */
  export type universitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * The filter to search for the universities to update in case it exists.
     */
    where: universitiesWhereUniqueInput
    /**
     * In case the universities found by the `where` argument doesn't exist, create a new universities with this data.
     */
    create: XOR<universitiesCreateInput, universitiesUncheckedCreateInput>
    /**
     * In case the universities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<universitiesUpdateInput, universitiesUncheckedUpdateInput>
  }

  /**
   * universities delete
   */
  export type universitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
    /**
     * Filter which universities to delete.
     */
    where: universitiesWhereUniqueInput
  }

  /**
   * universities deleteMany
   */
  export type universitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which universities to delete
     */
    where?: universitiesWhereInput
    /**
     * Limit how many universities to delete.
     */
    limit?: number
  }

  /**
   * universities without action
   */
  export type universitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universities
     */
    select?: universitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universities
     */
    omit?: universitiesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactScalarFieldEnum: {
    id: 'id',
    whatsApp: 'whatsApp',
    telegram: 'telegram',
    linkedIn: 'linkedIn',
    phone: 'phone',
    email: 'email',
    cv: 'cv',
    website: 'website',
    github: 'github',
    codewars: 'codewars'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const FeedbacksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    description: 'description',
    position: 'position',
    companyTitle: 'companyTitle',
    logo: 'logo'
  };

  export type FeedbacksScalarFieldEnum = (typeof FeedbacksScalarFieldEnum)[keyof typeof FeedbacksScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    software_id: 'software_id',
    endAt: 'endAt',
    companyTitle: 'companyTitle',
    startAt: 'startAt',
    description: 'description',
    jobTitle: 'jobTitle'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const PersonalScalarFieldEnum: {
    id: 'id',
    username: 'username',
    surname: 'surname',
    age: 'age',
    city: 'city',
    country: 'country',
    yearExperince: 'yearExperince',
    description: 'description'
  };

  export type PersonalScalarFieldEnum = (typeof PersonalScalarFieldEnum)[keyof typeof PersonalScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startAt: 'startAt',
    endAt: 'endAt',
    description: 'description',
    link: 'link',
    logo: 'logo'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const UniversitiesScalarFieldEnum: {
    id: 'id',
    companyTitle: 'companyTitle',
    companyLogo: 'companyLogo',
    startAt: 'startAt',
    endAt: 'endAt',
    title: 'title',
    link: 'link',
    certificate: 'certificate',
    description: 'description'
  };

  export type UniversitiesScalarFieldEnum = (typeof UniversitiesScalarFieldEnum)[keyof typeof UniversitiesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type contactWhereInput = {
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    id?: IntFilter<"contact"> | number
    whatsApp?: StringFilter<"contact"> | string
    telegram?: StringFilter<"contact"> | string
    linkedIn?: StringFilter<"contact"> | string
    phone?: StringFilter<"contact"> | string
    email?: StringFilter<"contact"> | string
    cv?: StringFilter<"contact"> | string
    website?: StringFilter<"contact"> | string
    github?: StringFilter<"contact"> | string
    codewars?: StringFilter<"contact"> | string
  }

  export type contactOrderByWithRelationInput = {
    id?: SortOrder
    whatsApp?: SortOrder
    telegram?: SortOrder
    linkedIn?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv?: SortOrder
    website?: SortOrder
    github?: SortOrder
    codewars?: SortOrder
  }

  export type contactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    whatsApp?: StringFilter<"contact"> | string
    telegram?: StringFilter<"contact"> | string
    linkedIn?: StringFilter<"contact"> | string
    phone?: StringFilter<"contact"> | string
    email?: StringFilter<"contact"> | string
    cv?: StringFilter<"contact"> | string
    website?: StringFilter<"contact"> | string
    github?: StringFilter<"contact"> | string
    codewars?: StringFilter<"contact"> | string
  }, "id">

  export type contactOrderByWithAggregationInput = {
    id?: SortOrder
    whatsApp?: SortOrder
    telegram?: SortOrder
    linkedIn?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv?: SortOrder
    website?: SortOrder
    github?: SortOrder
    codewars?: SortOrder
    _count?: contactCountOrderByAggregateInput
    _avg?: contactAvgOrderByAggregateInput
    _max?: contactMaxOrderByAggregateInput
    _min?: contactMinOrderByAggregateInput
    _sum?: contactSumOrderByAggregateInput
  }

  export type contactScalarWhereWithAggregatesInput = {
    AND?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    OR?: contactScalarWhereWithAggregatesInput[]
    NOT?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contact"> | number
    whatsApp?: StringWithAggregatesFilter<"contact"> | string
    telegram?: StringWithAggregatesFilter<"contact"> | string
    linkedIn?: StringWithAggregatesFilter<"contact"> | string
    phone?: StringWithAggregatesFilter<"contact"> | string
    email?: StringWithAggregatesFilter<"contact"> | string
    cv?: StringWithAggregatesFilter<"contact"> | string
    website?: StringWithAggregatesFilter<"contact"> | string
    github?: StringWithAggregatesFilter<"contact"> | string
    codewars?: StringWithAggregatesFilter<"contact"> | string
  }

  export type feedbacksWhereInput = {
    AND?: feedbacksWhereInput | feedbacksWhereInput[]
    OR?: feedbacksWhereInput[]
    NOT?: feedbacksWhereInput | feedbacksWhereInput[]
    id?: IntFilter<"feedbacks"> | number
    name?: StringFilter<"feedbacks"> | string
    date?: DateTimeFilter<"feedbacks"> | Date | string
    description?: StringFilter<"feedbacks"> | string
    position?: StringFilter<"feedbacks"> | string
    companyTitle?: StringFilter<"feedbacks"> | string
    logo?: StringFilter<"feedbacks"> | string
  }

  export type feedbacksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    position?: SortOrder
    companyTitle?: SortOrder
    logo?: SortOrder
  }

  export type feedbacksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: feedbacksWhereInput | feedbacksWhereInput[]
    OR?: feedbacksWhereInput[]
    NOT?: feedbacksWhereInput | feedbacksWhereInput[]
    name?: StringFilter<"feedbacks"> | string
    date?: DateTimeFilter<"feedbacks"> | Date | string
    description?: StringFilter<"feedbacks"> | string
    position?: StringFilter<"feedbacks"> | string
    companyTitle?: StringFilter<"feedbacks"> | string
    logo?: StringFilter<"feedbacks"> | string
  }, "id">

  export type feedbacksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    position?: SortOrder
    companyTitle?: SortOrder
    logo?: SortOrder
    _count?: feedbacksCountOrderByAggregateInput
    _avg?: feedbacksAvgOrderByAggregateInput
    _max?: feedbacksMaxOrderByAggregateInput
    _min?: feedbacksMinOrderByAggregateInput
    _sum?: feedbacksSumOrderByAggregateInput
  }

  export type feedbacksScalarWhereWithAggregatesInput = {
    AND?: feedbacksScalarWhereWithAggregatesInput | feedbacksScalarWhereWithAggregatesInput[]
    OR?: feedbacksScalarWhereWithAggregatesInput[]
    NOT?: feedbacksScalarWhereWithAggregatesInput | feedbacksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"feedbacks"> | number
    name?: StringWithAggregatesFilter<"feedbacks"> | string
    date?: DateTimeWithAggregatesFilter<"feedbacks"> | Date | string
    description?: StringWithAggregatesFilter<"feedbacks"> | string
    position?: StringWithAggregatesFilter<"feedbacks"> | string
    companyTitle?: StringWithAggregatesFilter<"feedbacks"> | string
    logo?: StringWithAggregatesFilter<"feedbacks"> | string
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: IntFilter<"jobs"> | number
    software_id?: IntFilter<"jobs"> | number
    endAt?: StringFilter<"jobs"> | string
    companyTitle?: StringFilter<"jobs"> | string
    startAt?: StringFilter<"jobs"> | string
    description?: StringFilter<"jobs"> | string
    jobTitle?: StringFilter<"jobs"> | string
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    software_id?: SortOrder
    endAt?: SortOrder
    companyTitle?: SortOrder
    startAt?: SortOrder
    description?: SortOrder
    jobTitle?: SortOrder
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    software_id?: IntFilter<"jobs"> | number
    endAt?: StringFilter<"jobs"> | string
    companyTitle?: StringFilter<"jobs"> | string
    startAt?: StringFilter<"jobs"> | string
    description?: StringFilter<"jobs"> | string
    jobTitle?: StringFilter<"jobs"> | string
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    software_id?: SortOrder
    endAt?: SortOrder
    companyTitle?: SortOrder
    startAt?: SortOrder
    description?: SortOrder
    jobTitle?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobs"> | number
    software_id?: IntWithAggregatesFilter<"jobs"> | number
    endAt?: StringWithAggregatesFilter<"jobs"> | string
    companyTitle?: StringWithAggregatesFilter<"jobs"> | string
    startAt?: StringWithAggregatesFilter<"jobs"> | string
    description?: StringWithAggregatesFilter<"jobs"> | string
    jobTitle?: StringWithAggregatesFilter<"jobs"> | string
  }

  export type personalWhereInput = {
    AND?: personalWhereInput | personalWhereInput[]
    OR?: personalWhereInput[]
    NOT?: personalWhereInput | personalWhereInput[]
    id?: IntFilter<"personal"> | number
    username?: StringFilter<"personal"> | string
    surname?: StringFilter<"personal"> | string
    age?: IntFilter<"personal"> | number
    city?: StringFilter<"personal"> | string
    country?: StringFilter<"personal"> | string
    yearExperince?: IntFilter<"personal"> | number
    description?: StringFilter<"personal"> | string
  }

  export type personalOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    city?: SortOrder
    country?: SortOrder
    yearExperince?: SortOrder
    description?: SortOrder
  }

  export type personalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: personalWhereInput | personalWhereInput[]
    OR?: personalWhereInput[]
    NOT?: personalWhereInput | personalWhereInput[]
    username?: StringFilter<"personal"> | string
    surname?: StringFilter<"personal"> | string
    age?: IntFilter<"personal"> | number
    city?: StringFilter<"personal"> | string
    country?: StringFilter<"personal"> | string
    yearExperince?: IntFilter<"personal"> | number
    description?: StringFilter<"personal"> | string
  }, "id">

  export type personalOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    city?: SortOrder
    country?: SortOrder
    yearExperince?: SortOrder
    description?: SortOrder
    _count?: personalCountOrderByAggregateInput
    _avg?: personalAvgOrderByAggregateInput
    _max?: personalMaxOrderByAggregateInput
    _min?: personalMinOrderByAggregateInput
    _sum?: personalSumOrderByAggregateInput
  }

  export type personalScalarWhereWithAggregatesInput = {
    AND?: personalScalarWhereWithAggregatesInput | personalScalarWhereWithAggregatesInput[]
    OR?: personalScalarWhereWithAggregatesInput[]
    NOT?: personalScalarWhereWithAggregatesInput | personalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"personal"> | number
    username?: StringWithAggregatesFilter<"personal"> | string
    surname?: StringWithAggregatesFilter<"personal"> | string
    age?: IntWithAggregatesFilter<"personal"> | number
    city?: StringWithAggregatesFilter<"personal"> | string
    country?: StringWithAggregatesFilter<"personal"> | string
    yearExperince?: IntWithAggregatesFilter<"personal"> | number
    description?: StringWithAggregatesFilter<"personal"> | string
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: IntFilter<"projects"> | number
    title?: StringFilter<"projects"> | string
    startAt?: DateTimeFilter<"projects"> | Date | string
    endAt?: DateTimeFilter<"projects"> | Date | string
    description?: StringFilter<"projects"> | string
    link?: StringFilter<"projects"> | string
    logo?: StringFilter<"projects"> | string
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    description?: SortOrder
    link?: SortOrder
    logo?: SortOrder
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    title?: StringFilter<"projects"> | string
    startAt?: DateTimeFilter<"projects"> | Date | string
    endAt?: DateTimeFilter<"projects"> | Date | string
    description?: StringFilter<"projects"> | string
    link?: StringFilter<"projects"> | string
    logo?: StringFilter<"projects"> | string
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    description?: SortOrder
    link?: SortOrder
    logo?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"projects"> | number
    title?: StringWithAggregatesFilter<"projects"> | string
    startAt?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    description?: StringWithAggregatesFilter<"projects"> | string
    link?: StringWithAggregatesFilter<"projects"> | string
    logo?: StringWithAggregatesFilter<"projects"> | string
  }

  export type universitiesWhereInput = {
    AND?: universitiesWhereInput | universitiesWhereInput[]
    OR?: universitiesWhereInput[]
    NOT?: universitiesWhereInput | universitiesWhereInput[]
    id?: IntFilter<"universities"> | number
    companyTitle?: StringNullableFilter<"universities"> | string | null
    companyLogo?: StringNullableFilter<"universities"> | string | null
    startAt?: StringNullableFilter<"universities"> | string | null
    endAt?: StringNullableFilter<"universities"> | string | null
    title?: StringNullableFilter<"universities"> | string | null
    link?: StringNullableFilter<"universities"> | string | null
    certificate?: StringNullableFilter<"universities"> | string | null
    description?: StringNullableFilter<"universities"> | string | null
  }

  export type universitiesOrderByWithRelationInput = {
    id?: SortOrder
    companyTitle?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    startAt?: SortOrderInput | SortOrder
    endAt?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    certificate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type universitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: universitiesWhereInput | universitiesWhereInput[]
    OR?: universitiesWhereInput[]
    NOT?: universitiesWhereInput | universitiesWhereInput[]
    companyTitle?: StringNullableFilter<"universities"> | string | null
    companyLogo?: StringNullableFilter<"universities"> | string | null
    startAt?: StringNullableFilter<"universities"> | string | null
    endAt?: StringNullableFilter<"universities"> | string | null
    title?: StringNullableFilter<"universities"> | string | null
    link?: StringNullableFilter<"universities"> | string | null
    certificate?: StringNullableFilter<"universities"> | string | null
    description?: StringNullableFilter<"universities"> | string | null
  }, "id">

  export type universitiesOrderByWithAggregationInput = {
    id?: SortOrder
    companyTitle?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    startAt?: SortOrderInput | SortOrder
    endAt?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    certificate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: universitiesCountOrderByAggregateInput
    _avg?: universitiesAvgOrderByAggregateInput
    _max?: universitiesMaxOrderByAggregateInput
    _min?: universitiesMinOrderByAggregateInput
    _sum?: universitiesSumOrderByAggregateInput
  }

  export type universitiesScalarWhereWithAggregatesInput = {
    AND?: universitiesScalarWhereWithAggregatesInput | universitiesScalarWhereWithAggregatesInput[]
    OR?: universitiesScalarWhereWithAggregatesInput[]
    NOT?: universitiesScalarWhereWithAggregatesInput | universitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"universities"> | number
    companyTitle?: StringNullableWithAggregatesFilter<"universities"> | string | null
    companyLogo?: StringNullableWithAggregatesFilter<"universities"> | string | null
    startAt?: StringNullableWithAggregatesFilter<"universities"> | string | null
    endAt?: StringNullableWithAggregatesFilter<"universities"> | string | null
    title?: StringNullableWithAggregatesFilter<"universities"> | string | null
    link?: StringNullableWithAggregatesFilter<"universities"> | string | null
    certificate?: StringNullableWithAggregatesFilter<"universities"> | string | null
    description?: StringNullableWithAggregatesFilter<"universities"> | string | null
  }

  export type contactCreateInput = {
    whatsApp: string
    telegram: string
    linkedIn: string
    phone: string
    email: string
    cv: string
    website: string
    github: string
    codewars?: string
  }

  export type contactUncheckedCreateInput = {
    id?: number
    whatsApp: string
    telegram: string
    linkedIn: string
    phone: string
    email: string
    cv: string
    website: string
    github: string
    codewars?: string
  }

  export type contactUpdateInput = {
    whatsApp?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    linkedIn?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    codewars?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsApp?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    linkedIn?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    codewars?: StringFieldUpdateOperationsInput | string
  }

  export type contactCreateManyInput = {
    id?: number
    whatsApp: string
    telegram: string
    linkedIn: string
    phone: string
    email: string
    cv: string
    website: string
    github: string
    codewars?: string
  }

  export type contactUpdateManyMutationInput = {
    whatsApp?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    linkedIn?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    codewars?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    whatsApp?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    linkedIn?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    codewars?: StringFieldUpdateOperationsInput | string
  }

  export type feedbacksCreateInput = {
    name: string
    date: Date | string
    description: string
    position: string
    companyTitle: string
    logo: string
  }

  export type feedbacksUncheckedCreateInput = {
    id?: number
    name: string
    date: Date | string
    description: string
    position: string
    companyTitle: string
    logo: string
  }

  export type feedbacksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type feedbacksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type feedbacksCreateManyInput = {
    id?: number
    name: string
    date: Date | string
    description: string
    position: string
    companyTitle: string
    logo: string
  }

  export type feedbacksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type feedbacksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type jobsCreateInput = {
    software_id: number
    endAt: string
    companyTitle: string
    startAt: string
    description: string
    jobTitle: string
  }

  export type jobsUncheckedCreateInput = {
    id?: number
    software_id: number
    endAt: string
    companyTitle: string
    startAt: string
    description: string
    jobTitle: string
  }

  export type jobsUpdateInput = {
    software_id?: IntFieldUpdateOperationsInput | number
    endAt?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    startAt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
  }

  export type jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    software_id?: IntFieldUpdateOperationsInput | number
    endAt?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    startAt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
  }

  export type jobsCreateManyInput = {
    id?: number
    software_id: number
    endAt: string
    companyTitle: string
    startAt: string
    description: string
    jobTitle: string
  }

  export type jobsUpdateManyMutationInput = {
    software_id?: IntFieldUpdateOperationsInput | number
    endAt?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    startAt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    software_id?: IntFieldUpdateOperationsInput | number
    endAt?: StringFieldUpdateOperationsInput | string
    companyTitle?: StringFieldUpdateOperationsInput | string
    startAt?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
  }

  export type personalCreateInput = {
    username: string
    surname: string
    age: number
    city: string
    country: string
    yearExperince: number
    description: string
  }

  export type personalUncheckedCreateInput = {
    id?: number
    username: string
    surname: string
    age: number
    city: string
    country: string
    yearExperince: number
    description: string
  }

  export type personalUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    yearExperince?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type personalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    yearExperince?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type personalCreateManyInput = {
    id?: number
    username: string
    surname: string
    age: number
    city: string
    country: string
    yearExperince: number
    description: string
  }

  export type personalUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    yearExperince?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type personalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    yearExperince?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type projectsCreateInput = {
    title: string
    startAt: Date | string
    endAt: Date | string
    description: string
    link: string
    logo: string
  }

  export type projectsUncheckedCreateInput = {
    id?: number
    title: string
    startAt: Date | string
    endAt: Date | string
    description: string
    link: string
    logo: string
  }

  export type projectsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type projectsCreateManyInput = {
    id?: number
    title: string
    startAt: Date | string
    endAt: Date | string
    description: string
    link: string
    logo: string
  }

  export type projectsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
  }

  export type universitiesCreateInput = {
    companyTitle?: string | null
    companyLogo?: string | null
    startAt?: string | null
    endAt?: string | null
    title?: string | null
    link?: string | null
    certificate?: string | null
    description?: string | null
  }

  export type universitiesUncheckedCreateInput = {
    id?: number
    companyTitle?: string | null
    companyLogo?: string | null
    startAt?: string | null
    endAt?: string | null
    title?: string | null
    link?: string | null
    certificate?: string | null
    description?: string | null
  }

  export type universitiesUpdateInput = {
    companyTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: NullableStringFieldUpdateOperationsInput | string | null
    endAt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type universitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: NullableStringFieldUpdateOperationsInput | string | null
    endAt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type universitiesCreateManyInput = {
    id?: number
    companyTitle?: string | null
    companyLogo?: string | null
    startAt?: string | null
    endAt?: string | null
    title?: string | null
    link?: string | null
    certificate?: string | null
    description?: string | null
  }

  export type universitiesUpdateManyMutationInput = {
    companyTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: NullableStringFieldUpdateOperationsInput | string | null
    endAt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type universitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: NullableStringFieldUpdateOperationsInput | string | null
    endAt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    certificate?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type contactCountOrderByAggregateInput = {
    id?: SortOrder
    whatsApp?: SortOrder
    telegram?: SortOrder
    linkedIn?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv?: SortOrder
    website?: SortOrder
    github?: SortOrder
    codewars?: SortOrder
  }

  export type contactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactMaxOrderByAggregateInput = {
    id?: SortOrder
    whatsApp?: SortOrder
    telegram?: SortOrder
    linkedIn?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv?: SortOrder
    website?: SortOrder
    github?: SortOrder
    codewars?: SortOrder
  }

  export type contactMinOrderByAggregateInput = {
    id?: SortOrder
    whatsApp?: SortOrder
    telegram?: SortOrder
    linkedIn?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv?: SortOrder
    website?: SortOrder
    github?: SortOrder
    codewars?: SortOrder
  }

  export type contactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type feedbacksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    position?: SortOrder
    companyTitle?: SortOrder
    logo?: SortOrder
  }

  export type feedbacksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type feedbacksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    position?: SortOrder
    companyTitle?: SortOrder
    logo?: SortOrder
  }

  export type feedbacksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    position?: SortOrder
    companyTitle?: SortOrder
    logo?: SortOrder
  }

  export type feedbacksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    software_id?: SortOrder
    endAt?: SortOrder
    companyTitle?: SortOrder
    startAt?: SortOrder
    description?: SortOrder
    jobTitle?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    software_id?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    software_id?: SortOrder
    endAt?: SortOrder
    companyTitle?: SortOrder
    startAt?: SortOrder
    description?: SortOrder
    jobTitle?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    software_id?: SortOrder
    endAt?: SortOrder
    companyTitle?: SortOrder
    startAt?: SortOrder
    description?: SortOrder
    jobTitle?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    software_id?: SortOrder
  }

  export type personalCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    city?: SortOrder
    country?: SortOrder
    yearExperince?: SortOrder
    description?: SortOrder
  }

  export type personalAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    yearExperince?: SortOrder
  }

  export type personalMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    city?: SortOrder
    country?: SortOrder
    yearExperince?: SortOrder
    description?: SortOrder
  }

  export type personalMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    city?: SortOrder
    country?: SortOrder
    yearExperince?: SortOrder
    description?: SortOrder
  }

  export type personalSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    yearExperince?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    description?: SortOrder
    link?: SortOrder
    logo?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    description?: SortOrder
    link?: SortOrder
    logo?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    description?: SortOrder
    link?: SortOrder
    logo?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type universitiesCountOrderByAggregateInput = {
    id?: SortOrder
    companyTitle?: SortOrder
    companyLogo?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    title?: SortOrder
    link?: SortOrder
    certificate?: SortOrder
    description?: SortOrder
  }

  export type universitiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type universitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    companyTitle?: SortOrder
    companyLogo?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    title?: SortOrder
    link?: SortOrder
    certificate?: SortOrder
    description?: SortOrder
  }

  export type universitiesMinOrderByAggregateInput = {
    id?: SortOrder
    companyTitle?: SortOrder
    companyLogo?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    title?: SortOrder
    link?: SortOrder
    certificate?: SortOrder
    description?: SortOrder
  }

  export type universitiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}