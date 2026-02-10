/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Plan
 *
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>;
/**
 * Model Usuario
 *
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>;
/**
 * Model Libro
 *
 */
export type Libro = $Result.DefaultSelection<Prisma.$LibroPayload>;
/**
 * Model NotaLibro
 *
 */
export type NotaLibro = $Result.DefaultSelection<Prisma.$NotaLibroPayload>;
/**
 * Model RecomendacionIA
 *
 */
export type RecomendacionIA =
  $Result.DefaultSelection<Prisma.$RecomendacionIAPayload>;
/**
 * Model Logro
 *
 */
export type Logro = $Result.DefaultSelection<Prisma.$LogroPayload>;
/**
 * Model LogroUsuario
 *
 */
export type LogroUsuario =
  $Result.DefaultSelection<Prisma.$LogroUsuarioPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoLectura: {
    pendiente: 'pendiente';
    en_lectura: 'en_lectura';
    leido: 'leido';
  };

  export type EstadoLectura =
    (typeof EstadoLectura)[keyof typeof EstadoLectura];
}

export type EstadoLectura = $Enums.EstadoLectura;

export const EstadoLectura: typeof $Enums.EstadoLectura;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Plans
 * const plans = await prisma.plan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Plans
   * const plans = await prisma.plan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Plans
   * const plans = await prisma.plan.findMany()
   * ```
   */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libro`: Exposes CRUD operations for the **Libro** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Libros
   * const libros = await prisma.libro.findMany()
   * ```
   */
  get libro(): Prisma.LibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notaLibro`: Exposes CRUD operations for the **NotaLibro** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more NotaLibros
   * const notaLibros = await prisma.notaLibro.findMany()
   * ```
   */
  get notaLibro(): Prisma.NotaLibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recomendacionIA`: Exposes CRUD operations for the **RecomendacionIA** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RecomendacionIAS
   * const recomendacionIAS = await prisma.recomendacionIA.findMany()
   * ```
   */
  get recomendacionIA(): Prisma.RecomendacionIADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logro`: Exposes CRUD operations for the **Logro** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Logroes
   * const logroes = await prisma.logro.findMany()
   * ```
   */
  get logro(): Prisma.LogroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logroUsuario`: Exposes CRUD operations for the **LogroUsuario** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more LogroUsuarios
   * const logroUsuarios = await prisma.logroUsuario.findMany()
   * ```
   */
  get logroUsuario(): Prisma.LogroUsuarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Plan: 'Plan';
    Usuario: 'Usuario';
    Libro: 'Libro';
    NotaLibro: 'NotaLibro';
    RecomendacionIA: 'RecomendacionIA';
    Logro: 'Logro';
    LogroUsuario: 'LogroUsuario';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'plan'
        | 'usuario'
        | 'libro'
        | 'notaLibro'
        | 'recomendacionIA'
        | 'logro'
        | 'logroUsuario';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>;
        fields: Prisma.PlanFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>;
          };
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>;
          };
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[];
          };
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>;
          };
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[];
          };
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>;
          };
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>;
          };
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[];
          };
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>;
          };
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePlan>;
          };
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PlanGroupByOutputType>[];
          };
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>;
            result: $Utils.Optional<PlanCountAggregateOutputType> | number;
          };
        };
      };
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>;
        fields: Prisma.UsuarioFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>;
          };
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>;
          };
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
          };
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>;
          };
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
          };
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>;
          };
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>;
          };
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
          };
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>;
          };
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsuario>;
          };
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsuarioGroupByOutputType>[];
          };
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>;
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number;
          };
        };
      };
      Libro: {
        payload: Prisma.$LibroPayload<ExtArgs>;
        fields: Prisma.LibroFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LibroFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LibroFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>;
          };
          findFirst: {
            args: Prisma.LibroFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LibroFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>;
          };
          findMany: {
            args: Prisma.LibroFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[];
          };
          create: {
            args: Prisma.LibroCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>;
          };
          createMany: {
            args: Prisma.LibroCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LibroCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[];
          };
          delete: {
            args: Prisma.LibroDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>;
          };
          update: {
            args: Prisma.LibroUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>;
          };
          deleteMany: {
            args: Prisma.LibroDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LibroUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LibroUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[];
          };
          upsert: {
            args: Prisma.LibroUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>;
          };
          aggregate: {
            args: Prisma.LibroAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLibro>;
          };
          groupBy: {
            args: Prisma.LibroGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LibroGroupByOutputType>[];
          };
          count: {
            args: Prisma.LibroCountArgs<ExtArgs>;
            result: $Utils.Optional<LibroCountAggregateOutputType> | number;
          };
        };
      };
      NotaLibro: {
        payload: Prisma.$NotaLibroPayload<ExtArgs>;
        fields: Prisma.NotaLibroFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NotaLibroFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NotaLibroFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>;
          };
          findFirst: {
            args: Prisma.NotaLibroFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NotaLibroFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>;
          };
          findMany: {
            args: Prisma.NotaLibroFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>[];
          };
          create: {
            args: Prisma.NotaLibroCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>;
          };
          createMany: {
            args: Prisma.NotaLibroCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NotaLibroCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>[];
          };
          delete: {
            args: Prisma.NotaLibroDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>;
          };
          update: {
            args: Prisma.NotaLibroUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>;
          };
          deleteMany: {
            args: Prisma.NotaLibroDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NotaLibroUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NotaLibroUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>[];
          };
          upsert: {
            args: Prisma.NotaLibroUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotaLibroPayload>;
          };
          aggregate: {
            args: Prisma.NotaLibroAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotaLibro>;
          };
          groupBy: {
            args: Prisma.NotaLibroGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotaLibroGroupByOutputType>[];
          };
          count: {
            args: Prisma.NotaLibroCountArgs<ExtArgs>;
            result: $Utils.Optional<NotaLibroCountAggregateOutputType> | number;
          };
        };
      };
      RecomendacionIA: {
        payload: Prisma.$RecomendacionIAPayload<ExtArgs>;
        fields: Prisma.RecomendacionIAFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RecomendacionIAFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RecomendacionIAFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>;
          };
          findFirst: {
            args: Prisma.RecomendacionIAFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RecomendacionIAFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>;
          };
          findMany: {
            args: Prisma.RecomendacionIAFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>[];
          };
          create: {
            args: Prisma.RecomendacionIACreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>;
          };
          createMany: {
            args: Prisma.RecomendacionIACreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RecomendacionIACreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>[];
          };
          delete: {
            args: Prisma.RecomendacionIADeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>;
          };
          update: {
            args: Prisma.RecomendacionIAUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>;
          };
          deleteMany: {
            args: Prisma.RecomendacionIADeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RecomendacionIAUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RecomendacionIAUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>[];
          };
          upsert: {
            args: Prisma.RecomendacionIAUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RecomendacionIAPayload>;
          };
          aggregate: {
            args: Prisma.RecomendacionIAAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRecomendacionIA>;
          };
          groupBy: {
            args: Prisma.RecomendacionIAGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RecomendacionIAGroupByOutputType>[];
          };
          count: {
            args: Prisma.RecomendacionIACountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RecomendacionIACountAggregateOutputType>
              | number;
          };
        };
      };
      Logro: {
        payload: Prisma.$LogroPayload<ExtArgs>;
        fields: Prisma.LogroFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LogroFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LogroFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>;
          };
          findFirst: {
            args: Prisma.LogroFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LogroFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>;
          };
          findMany: {
            args: Prisma.LogroFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>[];
          };
          create: {
            args: Prisma.LogroCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>;
          };
          createMany: {
            args: Prisma.LogroCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LogroCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>[];
          };
          delete: {
            args: Prisma.LogroDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>;
          };
          update: {
            args: Prisma.LogroUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>;
          };
          deleteMany: {
            args: Prisma.LogroDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LogroUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LogroUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>[];
          };
          upsert: {
            args: Prisma.LogroUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroPayload>;
          };
          aggregate: {
            args: Prisma.LogroAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLogro>;
          };
          groupBy: {
            args: Prisma.LogroGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LogroGroupByOutputType>[];
          };
          count: {
            args: Prisma.LogroCountArgs<ExtArgs>;
            result: $Utils.Optional<LogroCountAggregateOutputType> | number;
          };
        };
      };
      LogroUsuario: {
        payload: Prisma.$LogroUsuarioPayload<ExtArgs>;
        fields: Prisma.LogroUsuarioFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LogroUsuarioFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LogroUsuarioFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>;
          };
          findFirst: {
            args: Prisma.LogroUsuarioFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LogroUsuarioFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>;
          };
          findMany: {
            args: Prisma.LogroUsuarioFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>[];
          };
          create: {
            args: Prisma.LogroUsuarioCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>;
          };
          createMany: {
            args: Prisma.LogroUsuarioCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LogroUsuarioCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>[];
          };
          delete: {
            args: Prisma.LogroUsuarioDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>;
          };
          update: {
            args: Prisma.LogroUsuarioUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>;
          };
          deleteMany: {
            args: Prisma.LogroUsuarioDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LogroUsuarioUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LogroUsuarioUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>[];
          };
          upsert: {
            args: Prisma.LogroUsuarioUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LogroUsuarioPayload>;
          };
          aggregate: {
            args: Prisma.LogroUsuarioAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLogroUsuario>;
          };
          groupBy: {
            args: Prisma.LogroUsuarioGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LogroUsuarioGroupByOutputType>[];
          };
          count: {
            args: Prisma.LogroUsuarioCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<LogroUsuarioCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    plan?: PlanOmit;
    usuario?: UsuarioOmit;
    libro?: LibroOmit;
    notaLibro?: NotaLibroOmit;
    recomendacionIA?: RecomendacionIAOmit;
    logro?: LogroOmit;
    logroUsuario?: LogroUsuarioOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    usuarios: number;
  };

  export type PlanCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuarios?: boolean | PlanCountOutputTypeCountUsuariosArgs;
  };

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountUsuariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsuarioWhereInput;
  };

  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    libros: number;
    notas: number;
    recomendaciones: number;
    logros: number;
  };

  export type UsuarioCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    libros?: boolean | UsuarioCountOutputTypeCountLibrosArgs;
    notas?: boolean | UsuarioCountOutputTypeCountNotasArgs;
    recomendaciones?: boolean | UsuarioCountOutputTypeCountRecomendacionesArgs;
    logros?: boolean | UsuarioCountOutputTypeCountLogrosArgs;
  };

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLibrosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LibroWhereInput;
  };

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotaLibroWhereInput;
  };

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRecomendacionesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecomendacionIAWhereInput;
  };

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogrosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LogroUsuarioWhereInput;
  };

  /**
   * Count Type LibroCountOutputType
   */

  export type LibroCountOutputType = {
    notas: number;
  };

  export type LibroCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    notas?: boolean | LibroCountOutputTypeCountNotasArgs;
  };

  // Custom InputTypes
  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LibroCountOutputType
     */
    select?: LibroCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountNotasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotaLibroWhereInput;
  };

  /**
   * Count Type LogroCountOutputType
   */

  export type LogroCountOutputType = {
    usuarios: number;
  };

  export type LogroCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuarios?: boolean | LogroCountOutputTypeCountUsuariosArgs;
  };

  // Custom InputTypes
  /**
   * LogroCountOutputType without action
   */
  export type LogroCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroCountOutputType
     */
    select?: LogroCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LogroCountOutputType without action
   */
  export type LogroCountOutputTypeCountUsuariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LogroUsuarioWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null;
    _avg: PlanAvgAggregateOutputType | null;
    _sum: PlanSumAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
  };

  export type PlanAvgAggregateOutputType = {
    planId: number | null;
    limiteLibros: number | null;
    limiteIaMensual: number | null;
    precio: Decimal | null;
  };

  export type PlanSumAggregateOutputType = {
    planId: number | null;
    limiteLibros: number | null;
    limiteIaMensual: number | null;
    precio: Decimal | null;
  };

  export type PlanMinAggregateOutputType = {
    planId: number | null;
    nombre: string | null;
    limiteLibros: number | null;
    limiteIaMensual: number | null;
    precio: Decimal | null;
  };

  export type PlanMaxAggregateOutputType = {
    planId: number | null;
    nombre: string | null;
    limiteLibros: number | null;
    limiteIaMensual: number | null;
    precio: Decimal | null;
  };

  export type PlanCountAggregateOutputType = {
    planId: number;
    nombre: number;
    limiteLibros: number;
    limiteIaMensual: number;
    precio: number;
    _all: number;
  };

  export type PlanAvgAggregateInputType = {
    planId?: true;
    limiteLibros?: true;
    limiteIaMensual?: true;
    precio?: true;
  };

  export type PlanSumAggregateInputType = {
    planId?: true;
    limiteLibros?: true;
    limiteIaMensual?: true;
    precio?: true;
  };

  export type PlanMinAggregateInputType = {
    planId?: true;
    nombre?: true;
    limiteLibros?: true;
    limiteIaMensual?: true;
    precio?: true;
  };

  export type PlanMaxAggregateInputType = {
    planId?: true;
    nombre?: true;
    limiteLibros?: true;
    limiteIaMensual?: true;
    precio?: true;
  };

  export type PlanCountAggregateInputType = {
    planId?: true;
    nombre?: true;
    limiteLibros?: true;
    limiteIaMensual?: true;
    precio?: true;
    _all?: true;
  };

  export type PlanAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Plans
     **/
    _count?: true | PlanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PlanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PlanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PlanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PlanMaxAggregateInputType;
  };

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
    [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>;
  };

  export type PlanGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlanWhereInput;
    orderBy?:
      | PlanOrderByWithAggregationInput
      | PlanOrderByWithAggregationInput[];
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum;
    having?: PlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanCountAggregateInputType | true;
    _avg?: PlanAvgAggregateInputType;
    _sum?: PlanSumAggregateInputType;
    _min?: PlanMinAggregateInputType;
    _max?: PlanMaxAggregateInputType;
  };

  export type PlanGroupByOutputType = {
    planId: number;
    nombre: string;
    limiteLibros: number | null;
    limiteIaMensual: number | null;
    precio: Decimal;
    _count: PlanCountAggregateOutputType | null;
    _avg: PlanAvgAggregateOutputType | null;
    _sum: PlanSumAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
  };

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PlanGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
          : GetScalarType<T[P], PlanGroupByOutputType[P]>;
      }
    >
  >;

  export type PlanSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      planId?: boolean;
      nombre?: boolean;
      limiteLibros?: boolean;
      limiteIaMensual?: boolean;
      precio?: boolean;
      usuarios?: boolean | Plan$usuariosArgs<ExtArgs>;
      _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['plan']
  >;

  export type PlanSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      planId?: boolean;
      nombre?: boolean;
      limiteLibros?: boolean;
      limiteIaMensual?: boolean;
      precio?: boolean;
    },
    ExtArgs['result']['plan']
  >;

  export type PlanSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      planId?: boolean;
      nombre?: boolean;
      limiteLibros?: boolean;
      limiteIaMensual?: boolean;
      precio?: boolean;
    },
    ExtArgs['result']['plan']
  >;

  export type PlanSelectScalar = {
    planId?: boolean;
    nombre?: boolean;
    limiteLibros?: boolean;
    limiteIaMensual?: boolean;
    precio?: boolean;
  };

  export type PlanOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'planId' | 'nombre' | 'limiteLibros' | 'limiteIaMensual' | 'precio',
    ExtArgs['result']['plan']
  >;
  export type PlanInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuarios?: boolean | Plan$usuariosArgs<ExtArgs>;
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PlanIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type PlanIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $PlanPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Plan';
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        planId: number;
        nombre: string;
        limiteLibros: number | null;
        limiteIaMensual: number | null;
        precio: Prisma.Decimal;
      },
      ExtArgs['result']['plan']
    >;
    composites: {};
  };

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> =
    $Result.GetResult<Prisma.$PlanPayload, S>;

  type PlanCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanCountAggregateInputType | true;
  };

  export interface PlanDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Plan'];
      meta: { name: 'Plan' };
    };
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(
      args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(
      args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     *
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     *
     * // Only select the `planId`
     * const planWithPlanIdOnly = await prisma.plan.findMany({ select: { planId: true } })
     *
     */
    findMany<T extends PlanFindManyArgs>(
      args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     *
     */
    create<T extends PlanCreateArgs>(
      args: SelectSubset<T, PlanCreateArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlanCreateManyArgs>(
      args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Plans and only return the `planId`
     * const planWithPlanIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { planId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     *
     */
    delete<T extends PlanDeleteArgs>(
      args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlanUpdateArgs>(
      args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlanDeleteManyArgs>(
      args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlanUpdateManyArgs>(
      args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Plans and only return the `planId`
     * const planWithPlanIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { planId: true },
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
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(
      args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      $Result.GetResult<
        Prisma.$PlanPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
     **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(
      args: Subset<T, PlanAggregateArgs>,
    ): Prisma.PrismaPromise<GetPlanAggregateType<T>>;

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPlanGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Plan model
     */
    readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    usuarios<T extends Plan$usuariosArgs<ExtArgs> = {}>(
      args?: Subset<T, Plan$usuariosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UsuarioPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly planId: FieldRef<'Plan', 'Int'>;
    readonly nombre: FieldRef<'Plan', 'String'>;
    readonly limiteLibros: FieldRef<'Plan', 'Int'>;
    readonly limiteIaMensual: FieldRef<'Plan', 'Int'>;
    readonly precio: FieldRef<'Plan', 'Decimal'>;
  }

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput;
  };

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput;
  };

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[];
  };

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[];
  };

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Plans.
     */
    skip?: number;
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[];
  };

  /**
   * Plan create
   */
  export type PlanCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>;
  };

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Plan update
   */
  export type PlanUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>;
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput;
  };

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>;
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput;
    /**
     * Limit how many Plans to update.
     */
    limit?: number;
  };

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>;
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput;
    /**
     * Limit how many Plans to update.
     */
    limit?: number;
  };

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput;
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>;
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>;
  };

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput;
  };

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput;
    /**
     * Limit how many Plans to delete.
     */
    limit?: number;
  };

  /**
   * Plan.usuarios
   */
  export type Plan$usuariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    where?: UsuarioWhereInput;
    orderBy?:
      | UsuarioOrderByWithRelationInput
      | UsuarioOrderByWithRelationInput[];
    cursor?: UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[];
  };

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null;
  };

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
  };

  export type UsuarioAvgAggregateOutputType = {
    usuarioId: number | null;
    planId: number | null;
    puntosXp: number | null;
    nivel: number | null;
    rachaLecturaDias: number | null;
  };

  export type UsuarioSumAggregateOutputType = {
    usuarioId: number | null;
    planId: number | null;
    puntosXp: number | null;
    nivel: number | null;
    rachaLecturaDias: number | null;
  };

  export type UsuarioMinAggregateOutputType = {
    usuarioId: number | null;
    nombre: string | null;
    email: string | null;
    passwordHash: string | null;
    firebaseUid: string | null;
    planId: number | null;
    puntosXp: number | null;
    nivel: number | null;
    rachaLecturaDias: number | null;
    ultimaLectura: Date | null;
    fechaRegistro: Date | null;
  };

  export type UsuarioMaxAggregateOutputType = {
    usuarioId: number | null;
    nombre: string | null;
    email: string | null;
    passwordHash: string | null;
    firebaseUid: string | null;
    planId: number | null;
    puntosXp: number | null;
    nivel: number | null;
    rachaLecturaDias: number | null;
    ultimaLectura: Date | null;
    fechaRegistro: Date | null;
  };

  export type UsuarioCountAggregateOutputType = {
    usuarioId: number;
    nombre: number;
    email: number;
    passwordHash: number;
    firebaseUid: number;
    planId: number;
    puntosXp: number;
    nivel: number;
    rachaLecturaDias: number;
    ultimaLectura: number;
    fechaRegistro: number;
    _all: number;
  };

  export type UsuarioAvgAggregateInputType = {
    usuarioId?: true;
    planId?: true;
    puntosXp?: true;
    nivel?: true;
    rachaLecturaDias?: true;
  };

  export type UsuarioSumAggregateInputType = {
    usuarioId?: true;
    planId?: true;
    puntosXp?: true;
    nivel?: true;
    rachaLecturaDias?: true;
  };

  export type UsuarioMinAggregateInputType = {
    usuarioId?: true;
    nombre?: true;
    email?: true;
    passwordHash?: true;
    firebaseUid?: true;
    planId?: true;
    puntosXp?: true;
    nivel?: true;
    rachaLecturaDias?: true;
    ultimaLectura?: true;
    fechaRegistro?: true;
  };

  export type UsuarioMaxAggregateInputType = {
    usuarioId?: true;
    nombre?: true;
    email?: true;
    passwordHash?: true;
    firebaseUid?: true;
    planId?: true;
    puntosXp?: true;
    nivel?: true;
    rachaLecturaDias?: true;
    ultimaLectura?: true;
    fechaRegistro?: true;
  };

  export type UsuarioCountAggregateInputType = {
    usuarioId?: true;
    nombre?: true;
    email?: true;
    passwordHash?: true;
    firebaseUid?: true;
    planId?: true;
    puntosXp?: true;
    nivel?: true;
    rachaLecturaDias?: true;
    ultimaLectura?: true;
    fechaRegistro?: true;
    _all?: true;
  };

  export type UsuarioAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?:
      | UsuarioOrderByWithRelationInput
      | UsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Usuarios
     **/
    _count?: true | UsuarioCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UsuarioAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UsuarioSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsuarioMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsuarioMaxAggregateInputType;
  };

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>;
  };

  export type UsuarioGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UsuarioWhereInput;
    orderBy?:
      | UsuarioOrderByWithAggregationInput
      | UsuarioOrderByWithAggregationInput[];
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum;
    having?: UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
  };

  export type UsuarioGroupByOutputType = {
    usuarioId: number;
    nombre: string;
    email: string;
    passwordHash: string | null;
    firebaseUid: string | null;
    planId: number;
    puntosXp: number;
    nivel: number;
    rachaLecturaDias: number;
    ultimaLectura: Date | null;
    fechaRegistro: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
  };

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
          [P in keyof T & keyof UsuarioGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
        }
      >
    >;

  export type UsuarioSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      usuarioId?: boolean;
      nombre?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      firebaseUid?: boolean;
      planId?: boolean;
      puntosXp?: boolean;
      nivel?: boolean;
      rachaLecturaDias?: boolean;
      ultimaLectura?: boolean;
      fechaRegistro?: boolean;
      plan?: boolean | PlanDefaultArgs<ExtArgs>;
      libros?: boolean | Usuario$librosArgs<ExtArgs>;
      notas?: boolean | Usuario$notasArgs<ExtArgs>;
      recomendaciones?: boolean | Usuario$recomendacionesArgs<ExtArgs>;
      logros?: boolean | Usuario$logrosArgs<ExtArgs>;
      _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['usuario']
  >;

  export type UsuarioSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      usuarioId?: boolean;
      nombre?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      firebaseUid?: boolean;
      planId?: boolean;
      puntosXp?: boolean;
      nivel?: boolean;
      rachaLecturaDias?: boolean;
      ultimaLectura?: boolean;
      fechaRegistro?: boolean;
      plan?: boolean | PlanDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['usuario']
  >;

  export type UsuarioSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      usuarioId?: boolean;
      nombre?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      firebaseUid?: boolean;
      planId?: boolean;
      puntosXp?: boolean;
      nivel?: boolean;
      rachaLecturaDias?: boolean;
      ultimaLectura?: boolean;
      fechaRegistro?: boolean;
      plan?: boolean | PlanDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['usuario']
  >;

  export type UsuarioSelectScalar = {
    usuarioId?: boolean;
    nombre?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    firebaseUid?: boolean;
    planId?: boolean;
    puntosXp?: boolean;
    nivel?: boolean;
    rachaLecturaDias?: boolean;
    ultimaLectura?: boolean;
    fechaRegistro?: boolean;
  };

  export type UsuarioOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'usuarioId'
    | 'nombre'
    | 'email'
    | 'passwordHash'
    | 'firebaseUid'
    | 'planId'
    | 'puntosXp'
    | 'nivel'
    | 'rachaLecturaDias'
    | 'ultimaLectura'
    | 'fechaRegistro',
    ExtArgs['result']['usuario']
  >;
  export type UsuarioInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>;
    libros?: boolean | Usuario$librosArgs<ExtArgs>;
    notas?: boolean | Usuario$notasArgs<ExtArgs>;
    recomendaciones?: boolean | Usuario$recomendacionesArgs<ExtArgs>;
    logros?: boolean | Usuario$logrosArgs<ExtArgs>;
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UsuarioIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>;
  };
  export type UsuarioIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>;
  };

  export type $UsuarioPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Usuario';
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>;
      libros: Prisma.$LibroPayload<ExtArgs>[];
      notas: Prisma.$NotaLibroPayload<ExtArgs>[];
      recomendaciones: Prisma.$RecomendacionIAPayload<ExtArgs>[];
      logros: Prisma.$LogroUsuarioPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        usuarioId: number;
        nombre: string;
        email: string;
        passwordHash: string | null;
        firebaseUid: string | null;
        planId: number;
        puntosXp: number;
        nivel: number;
        rachaLecturaDias: number;
        ultimaLectura: Date | null;
        fechaRegistro: Date;
      },
      ExtArgs['result']['usuario']
    >;
    composites: {};
  };

  type UsuarioGetPayload<
    S extends boolean | null | undefined | UsuarioDefaultArgs,
  > = $Result.GetResult<Prisma.$UsuarioPayload, S>;

  type UsuarioCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
  };

  export interface UsuarioDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
      meta: { name: 'Usuario' };
    };
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     *
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     *
     * // Only select the `usuarioId`
     * const usuarioWithUsuarioIdOnly = await prisma.usuario.findMany({ select: { usuarioId: true } })
     *
     */
    findMany<T extends UsuarioFindManyArgs>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     *
     */
    create<T extends UsuarioCreateArgs>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UsuarioCreateManyArgs>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Usuarios and only return the `usuarioId`
     * const usuarioWithUsuarioIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { usuarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     *
     */
    delete<T extends UsuarioDeleteArgs>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UsuarioUpdateArgs>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UsuarioUpdateManyArgs>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Usuarios and only return the `usuarioId`
     * const usuarioWithUsuarioIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { usuarioId: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      $Result.GetResult<
        Prisma.$UsuarioPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
     **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(
      args: Subset<T, UsuarioAggregateArgs>,
    ): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUsuarioGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Usuario model
     */
    readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PlanDefaultArgs<ExtArgs>>,
    ): Prisma__PlanClient<
      | $Result.GetResult<
          Prisma.$PlanPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    libros<T extends Usuario$librosArgs<ExtArgs> = {}>(
      args?: Subset<T, Usuario$librosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LibroPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    notas<T extends Usuario$notasArgs<ExtArgs> = {}>(
      args?: Subset<T, Usuario$notasArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotaLibroPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    recomendaciones<T extends Usuario$recomendacionesArgs<ExtArgs> = {}>(
      args?: Subset<T, Usuario$recomendacionesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RecomendacionIAPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    logros<T extends Usuario$logrosArgs<ExtArgs> = {}>(
      args?: Subset<T, Usuario$logrosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LogroUsuarioPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly usuarioId: FieldRef<'Usuario', 'Int'>;
    readonly nombre: FieldRef<'Usuario', 'String'>;
    readonly email: FieldRef<'Usuario', 'String'>;
    readonly passwordHash: FieldRef<'Usuario', 'String'>;
    readonly firebaseUid: FieldRef<'Usuario', 'String'>;
    readonly planId: FieldRef<'Usuario', 'Int'>;
    readonly puntosXp: FieldRef<'Usuario', 'Int'>;
    readonly nivel: FieldRef<'Usuario', 'Int'>;
    readonly rachaLecturaDias: FieldRef<'Usuario', 'Int'>;
    readonly ultimaLectura: FieldRef<'Usuario', 'DateTime'>;
    readonly fechaRegistro: FieldRef<'Usuario', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput;
  };

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput;
  };

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?:
      | UsuarioOrderByWithRelationInput
      | UsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[];
  };

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?:
      | UsuarioOrderByWithRelationInput
      | UsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[];
  };

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Usuarios to fetch.
     */
    orderBy?:
      | UsuarioOrderByWithRelationInput
      | UsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Usuarios.
     */
    skip?: number;
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[];
  };

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>;
  };

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>;
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput;
  };

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>;
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput;
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number;
  };

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>;
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput;
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput;
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>;
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>;
  };

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput;
  };

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput;
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number;
  };

  /**
   * Usuario.libros
   */
  export type Usuario$librosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    where?: LibroWhereInput;
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[];
    cursor?: LibroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[];
  };

  /**
   * Usuario.notas
   */
  export type Usuario$notasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    where?: NotaLibroWhereInput;
    orderBy?:
      | NotaLibroOrderByWithRelationInput
      | NotaLibroOrderByWithRelationInput[];
    cursor?: NotaLibroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotaLibroScalarFieldEnum | NotaLibroScalarFieldEnum[];
  };

  /**
   * Usuario.recomendaciones
   */
  export type Usuario$recomendacionesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    where?: RecomendacionIAWhereInput;
    orderBy?:
      | RecomendacionIAOrderByWithRelationInput
      | RecomendacionIAOrderByWithRelationInput[];
    cursor?: RecomendacionIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | RecomendacionIAScalarFieldEnum
      | RecomendacionIAScalarFieldEnum[];
  };

  /**
   * Usuario.logros
   */
  export type Usuario$logrosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    where?: LogroUsuarioWhereInput;
    orderBy?:
      | LogroUsuarioOrderByWithRelationInput
      | LogroUsuarioOrderByWithRelationInput[];
    cursor?: LogroUsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LogroUsuarioScalarFieldEnum | LogroUsuarioScalarFieldEnum[];
  };

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null;
  };

  /**
   * Model Libro
   */

  export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null;
    _avg: LibroAvgAggregateOutputType | null;
    _sum: LibroSumAggregateOutputType | null;
    _min: LibroMinAggregateOutputType | null;
    _max: LibroMaxAggregateOutputType | null;
  };

  export type LibroAvgAggregateOutputType = {
    libroId: number | null;
    usuarioId: number | null;
    paginasTotales: number | null;
    paginasLeidas: number | null;
  };

  export type LibroSumAggregateOutputType = {
    libroId: number | null;
    usuarioId: number | null;
    paginasTotales: number | null;
    paginasLeidas: number | null;
  };

  export type LibroMinAggregateOutputType = {
    libroId: number | null;
    usuarioId: number | null;
    isbn: string | null;
    titulo: string | null;
    autor: string | null;
    descripcion: string | null;
    imagenUrl: string | null;
    genero: string | null;
    paginasTotales: number | null;
    paginasLeidas: number | null;
    esAdquirido: boolean | null;
    estadoLectura: $Enums.EstadoLectura | null;
    estaPrestado: boolean | null;
    prestadoANombre: string | null;
    fechaPrestamo: Date | null;
    fechaAgregado: Date | null;
  };

  export type LibroMaxAggregateOutputType = {
    libroId: number | null;
    usuarioId: number | null;
    isbn: string | null;
    titulo: string | null;
    autor: string | null;
    descripcion: string | null;
    imagenUrl: string | null;
    genero: string | null;
    paginasTotales: number | null;
    paginasLeidas: number | null;
    esAdquirido: boolean | null;
    estadoLectura: $Enums.EstadoLectura | null;
    estaPrestado: boolean | null;
    prestadoANombre: string | null;
    fechaPrestamo: Date | null;
    fechaAgregado: Date | null;
  };

  export type LibroCountAggregateOutputType = {
    libroId: number;
    usuarioId: number;
    isbn: number;
    titulo: number;
    autor: number;
    descripcion: number;
    imagenUrl: number;
    genero: number;
    paginasTotales: number;
    paginasLeidas: number;
    esAdquirido: number;
    estadoLectura: number;
    estaPrestado: number;
    prestadoANombre: number;
    fechaPrestamo: number;
    fechaAgregado: number;
    _all: number;
  };

  export type LibroAvgAggregateInputType = {
    libroId?: true;
    usuarioId?: true;
    paginasTotales?: true;
    paginasLeidas?: true;
  };

  export type LibroSumAggregateInputType = {
    libroId?: true;
    usuarioId?: true;
    paginasTotales?: true;
    paginasLeidas?: true;
  };

  export type LibroMinAggregateInputType = {
    libroId?: true;
    usuarioId?: true;
    isbn?: true;
    titulo?: true;
    autor?: true;
    descripcion?: true;
    imagenUrl?: true;
    genero?: true;
    paginasTotales?: true;
    paginasLeidas?: true;
    esAdquirido?: true;
    estadoLectura?: true;
    estaPrestado?: true;
    prestadoANombre?: true;
    fechaPrestamo?: true;
    fechaAgregado?: true;
  };

  export type LibroMaxAggregateInputType = {
    libroId?: true;
    usuarioId?: true;
    isbn?: true;
    titulo?: true;
    autor?: true;
    descripcion?: true;
    imagenUrl?: true;
    genero?: true;
    paginasTotales?: true;
    paginasLeidas?: true;
    esAdquirido?: true;
    estadoLectura?: true;
    estaPrestado?: true;
    prestadoANombre?: true;
    fechaPrestamo?: true;
    fechaAgregado?: true;
  };

  export type LibroCountAggregateInputType = {
    libroId?: true;
    usuarioId?: true;
    isbn?: true;
    titulo?: true;
    autor?: true;
    descripcion?: true;
    imagenUrl?: true;
    genero?: true;
    paginasTotales?: true;
    paginasLeidas?: true;
    esAdquirido?: true;
    estadoLectura?: true;
    estaPrestado?: true;
    prestadoANombre?: true;
    fechaPrestamo?: true;
    fechaAgregado?: true;
    _all?: true;
  };

  export type LibroAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Libro to aggregate.
     */
    where?: LibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Libros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Libros
     **/
    _count?: true | LibroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LibroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LibroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LibroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LibroMaxAggregateInputType;
  };

  export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
    [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibro[P]>
      : GetScalarType<T[P], AggregateLibro[P]>;
  };

  export type LibroGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LibroWhereInput;
    orderBy?:
      | LibroOrderByWithAggregationInput
      | LibroOrderByWithAggregationInput[];
    by: LibroScalarFieldEnum[] | LibroScalarFieldEnum;
    having?: LibroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LibroCountAggregateInputType | true;
    _avg?: LibroAvgAggregateInputType;
    _sum?: LibroSumAggregateInputType;
    _min?: LibroMinAggregateInputType;
    _max?: LibroMaxAggregateInputType;
  };

  export type LibroGroupByOutputType = {
    libroId: number;
    usuarioId: number;
    isbn: string | null;
    titulo: string;
    autor: string | null;
    descripcion: string | null;
    imagenUrl: string | null;
    genero: string | null;
    paginasTotales: number | null;
    paginasLeidas: number;
    esAdquirido: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado: boolean;
    prestadoANombre: string | null;
    fechaPrestamo: Date | null;
    fechaAgregado: Date;
    _count: LibroCountAggregateOutputType | null;
    _avg: LibroAvgAggregateOutputType | null;
    _sum: LibroSumAggregateOutputType | null;
    _min: LibroMinAggregateOutputType | null;
    _max: LibroMaxAggregateOutputType | null;
  };

  type GetLibroGroupByPayload<T extends LibroGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LibroGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LibroGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroGroupByOutputType[P]>
            : GetScalarType<T[P], LibroGroupByOutputType[P]>;
        }
      >
    >;

  export type LibroSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      libroId?: boolean;
      usuarioId?: boolean;
      isbn?: boolean;
      titulo?: boolean;
      autor?: boolean;
      descripcion?: boolean;
      imagenUrl?: boolean;
      genero?: boolean;
      paginasTotales?: boolean;
      paginasLeidas?: boolean;
      esAdquirido?: boolean;
      estadoLectura?: boolean;
      estaPrestado?: boolean;
      prestadoANombre?: boolean;
      fechaPrestamo?: boolean;
      fechaAgregado?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
      notas?: boolean | Libro$notasArgs<ExtArgs>;
      _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['libro']
  >;

  export type LibroSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      libroId?: boolean;
      usuarioId?: boolean;
      isbn?: boolean;
      titulo?: boolean;
      autor?: boolean;
      descripcion?: boolean;
      imagenUrl?: boolean;
      genero?: boolean;
      paginasTotales?: boolean;
      paginasLeidas?: boolean;
      esAdquirido?: boolean;
      estadoLectura?: boolean;
      estaPrestado?: boolean;
      prestadoANombre?: boolean;
      fechaPrestamo?: boolean;
      fechaAgregado?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['libro']
  >;

  export type LibroSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      libroId?: boolean;
      usuarioId?: boolean;
      isbn?: boolean;
      titulo?: boolean;
      autor?: boolean;
      descripcion?: boolean;
      imagenUrl?: boolean;
      genero?: boolean;
      paginasTotales?: boolean;
      paginasLeidas?: boolean;
      esAdquirido?: boolean;
      estadoLectura?: boolean;
      estaPrestado?: boolean;
      prestadoANombre?: boolean;
      fechaPrestamo?: boolean;
      fechaAgregado?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['libro']
  >;

  export type LibroSelectScalar = {
    libroId?: boolean;
    usuarioId?: boolean;
    isbn?: boolean;
    titulo?: boolean;
    autor?: boolean;
    descripcion?: boolean;
    imagenUrl?: boolean;
    genero?: boolean;
    paginasTotales?: boolean;
    paginasLeidas?: boolean;
    esAdquirido?: boolean;
    estadoLectura?: boolean;
    estaPrestado?: boolean;
    prestadoANombre?: boolean;
    fechaPrestamo?: boolean;
    fechaAgregado?: boolean;
  };

  export type LibroOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'libroId'
    | 'usuarioId'
    | 'isbn'
    | 'titulo'
    | 'autor'
    | 'descripcion'
    | 'imagenUrl'
    | 'genero'
    | 'paginasTotales'
    | 'paginasLeidas'
    | 'esAdquirido'
    | 'estadoLectura'
    | 'estaPrestado'
    | 'prestadoANombre'
    | 'fechaPrestamo'
    | 'fechaAgregado',
    ExtArgs['result']['libro']
  >;
  export type LibroInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    notas?: boolean | Libro$notasArgs<ExtArgs>;
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type LibroIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };
  export type LibroIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };

  export type $LibroPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Libro';
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>;
      notas: Prisma.$NotaLibroPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        libroId: number;
        usuarioId: number;
        isbn: string | null;
        titulo: string;
        autor: string | null;
        descripcion: string | null;
        imagenUrl: string | null;
        genero: string | null;
        paginasTotales: number | null;
        paginasLeidas: number;
        esAdquirido: boolean;
        estadoLectura: $Enums.EstadoLectura;
        estaPrestado: boolean;
        prestadoANombre: string | null;
        fechaPrestamo: Date | null;
        fechaAgregado: Date;
      },
      ExtArgs['result']['libro']
    >;
    composites: {};
  };

  type LibroGetPayload<
    S extends boolean | null | undefined | LibroDefaultArgs,
  > = $Result.GetResult<Prisma.$LibroPayload, S>;

  type LibroCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LibroCountAggregateInputType | true;
  };

  export interface LibroDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Libro'];
      meta: { name: 'Libro' };
    };
    /**
     * Find zero or one Libro that matches the filter.
     * @param {LibroFindUniqueArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibroFindUniqueArgs>(
      args: SelectSubset<T, LibroFindUniqueArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Libro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibroFindUniqueOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibroFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LibroFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Libro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibroFindFirstArgs>(
      args?: SelectSubset<T, LibroFindFirstArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Libro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibroFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LibroFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libro.findMany()
     *
     * // Get first 10 Libros
     * const libros = await prisma.libro.findMany({ take: 10 })
     *
     * // Only select the `libroId`
     * const libroWithLibroIdOnly = await prisma.libro.findMany({ select: { libroId: true } })
     *
     */
    findMany<T extends LibroFindManyArgs>(
      args?: SelectSubset<T, LibroFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Libro.
     * @param {LibroCreateArgs} args - Arguments to create a Libro.
     * @example
     * // Create one Libro
     * const Libro = await prisma.libro.create({
     *   data: {
     *     // ... data to create a Libro
     *   }
     * })
     *
     */
    create<T extends LibroCreateArgs>(
      args: SelectSubset<T, LibroCreateArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Libros.
     * @param {LibroCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LibroCreateManyArgs>(
      args?: SelectSubset<T, LibroCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Libros and returns the data saved in the database.
     * @param {LibroCreateManyAndReturnArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Libros and only return the `libroId`
     * const libroWithLibroIdOnly = await prisma.libro.createManyAndReturn({
     *   select: { libroId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LibroCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LibroCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Libro.
     * @param {LibroDeleteArgs} args - Arguments to delete one Libro.
     * @example
     * // Delete one Libro
     * const Libro = await prisma.libro.delete({
     *   where: {
     *     // ... filter to delete one Libro
     *   }
     * })
     *
     */
    delete<T extends LibroDeleteArgs>(
      args: SelectSubset<T, LibroDeleteArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Libro.
     * @param {LibroUpdateArgs} args - Arguments to update one Libro.
     * @example
     * // Update one Libro
     * const libro = await prisma.libro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LibroUpdateArgs>(
      args: SelectSubset<T, LibroUpdateArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Libros.
     * @param {LibroDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LibroDeleteManyArgs>(
      args?: SelectSubset<T, LibroDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LibroUpdateManyArgs>(
      args: SelectSubset<T, LibroUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Libros and returns the data updated in the database.
     * @param {LibroUpdateManyAndReturnArgs} args - Arguments to update many Libros.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Libros and only return the `libroId`
     * const libroWithLibroIdOnly = await prisma.libro.updateManyAndReturn({
     *   select: { libroId: true },
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
    updateManyAndReturn<T extends LibroUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LibroUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Libro.
     * @param {LibroUpsertArgs} args - Arguments to update or create a Libro.
     * @example
     * // Update or create a Libro
     * const libro = await prisma.libro.upsert({
     *   create: {
     *     // ... data to create a Libro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libro we want to update
     *   }
     * })
     */
    upsert<T extends LibroUpsertArgs>(
      args: SelectSubset<T, LibroUpsertArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      $Result.GetResult<
        Prisma.$LibroPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libro.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
     **/
    count<T extends LibroCountArgs>(
      args?: Subset<T, LibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibroAggregateArgs>(
      args: Subset<T, LibroAggregateArgs>,
    ): Prisma.PrismaPromise<GetLibroAggregateType<T>>;

    /**
     * Group by Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroGroupByArgs} args - Group by arguments.
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
      T extends LibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibroGroupByArgs['orderBy'] }
        : { orderBy?: LibroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LibroGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetLibroGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Libro model
     */
    readonly fields: LibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Libro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibroClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      | $Result.GetResult<
          Prisma.$UsuarioPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    notas<T extends Libro$notasArgs<ExtArgs> = {}>(
      args?: Subset<T, Libro$notasArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotaLibroPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Libro model
   */
  interface LibroFieldRefs {
    readonly libroId: FieldRef<'Libro', 'Int'>;
    readonly usuarioId: FieldRef<'Libro', 'Int'>;
    readonly isbn: FieldRef<'Libro', 'String'>;
    readonly titulo: FieldRef<'Libro', 'String'>;
    readonly autor: FieldRef<'Libro', 'String'>;
    readonly descripcion: FieldRef<'Libro', 'String'>;
    readonly imagenUrl: FieldRef<'Libro', 'String'>;
    readonly genero: FieldRef<'Libro', 'String'>;
    readonly paginasTotales: FieldRef<'Libro', 'Int'>;
    readonly paginasLeidas: FieldRef<'Libro', 'Int'>;
    readonly esAdquirido: FieldRef<'Libro', 'Boolean'>;
    readonly estadoLectura: FieldRef<'Libro', 'EstadoLectura'>;
    readonly estaPrestado: FieldRef<'Libro', 'Boolean'>;
    readonly prestadoANombre: FieldRef<'Libro', 'String'>;
    readonly fechaPrestamo: FieldRef<'Libro', 'DateTime'>;
    readonly fechaAgregado: FieldRef<'Libro', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Libro findUnique
   */
  export type LibroFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput;
  };

  /**
   * Libro findUniqueOrThrow
   */
  export type LibroFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput;
  };

  /**
   * Libro findFirst
   */
  export type LibroFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Libros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[];
  };

  /**
   * Libro findFirstOrThrow
   */
  export type LibroFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Libros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[];
  };

  /**
   * Libro findMany
   */
  export type LibroFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * Filter, which Libros to fetch.
     */
    where?: LibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Libros.
     */
    cursor?: LibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Libros.
     */
    skip?: number;
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[];
  };

  /**
   * Libro create
   */
  export type LibroCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * The data needed to create a Libro.
     */
    data: XOR<LibroCreateInput, LibroUncheckedCreateInput>;
  };

  /**
   * Libro createMany
   */
  export type LibroCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Libro createManyAndReturn
   */
  export type LibroCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Libro update
   */
  export type LibroUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * The data needed to update a Libro.
     */
    data: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>;
    /**
     * Choose, which Libro to update.
     */
    where: LibroWhereUniqueInput;
  };

  /**
   * Libro updateMany
   */
  export type LibroUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>;
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput;
    /**
     * Limit how many Libros to update.
     */
    limit?: number;
  };

  /**
   * Libro updateManyAndReturn
   */
  export type LibroUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>;
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput;
    /**
     * Limit how many Libros to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Libro upsert
   */
  export type LibroUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * The filter to search for the Libro to update in case it exists.
     */
    where: LibroWhereUniqueInput;
    /**
     * In case the Libro found by the `where` argument doesn't exist, create a new Libro with this data.
     */
    create: XOR<LibroCreateInput, LibroUncheckedCreateInput>;
    /**
     * In case the Libro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>;
  };

  /**
   * Libro delete
   */
  export type LibroDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
    /**
     * Filter which Libro to delete.
     */
    where: LibroWhereUniqueInput;
  };

  /**
   * Libro deleteMany
   */
  export type LibroDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Libros to delete
     */
    where?: LibroWhereInput;
    /**
     * Limit how many Libros to delete.
     */
    limit?: number;
  };

  /**
   * Libro.notas
   */
  export type Libro$notasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    where?: NotaLibroWhereInput;
    orderBy?:
      | NotaLibroOrderByWithRelationInput
      | NotaLibroOrderByWithRelationInput[];
    cursor?: NotaLibroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotaLibroScalarFieldEnum | NotaLibroScalarFieldEnum[];
  };

  /**
   * Libro without action
   */
  export type LibroDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibroInclude<ExtArgs> | null;
  };

  /**
   * Model NotaLibro
   */

  export type AggregateNotaLibro = {
    _count: NotaLibroCountAggregateOutputType | null;
    _avg: NotaLibroAvgAggregateOutputType | null;
    _sum: NotaLibroSumAggregateOutputType | null;
    _min: NotaLibroMinAggregateOutputType | null;
    _max: NotaLibroMaxAggregateOutputType | null;
  };

  export type NotaLibroAvgAggregateOutputType = {
    notaId: number | null;
    libroId: number | null;
    usuarioId: number | null;
    paginaReferencia: number | null;
  };

  export type NotaLibroSumAggregateOutputType = {
    notaId: number | null;
    libroId: number | null;
    usuarioId: number | null;
    paginaReferencia: number | null;
  };

  export type NotaLibroMinAggregateOutputType = {
    notaId: number | null;
    libroId: number | null;
    usuarioId: number | null;
    contenido: string | null;
    paginaReferencia: number | null;
    esCitaDestacada: boolean | null;
    fechaCreacion: Date | null;
  };

  export type NotaLibroMaxAggregateOutputType = {
    notaId: number | null;
    libroId: number | null;
    usuarioId: number | null;
    contenido: string | null;
    paginaReferencia: number | null;
    esCitaDestacada: boolean | null;
    fechaCreacion: Date | null;
  };

  export type NotaLibroCountAggregateOutputType = {
    notaId: number;
    libroId: number;
    usuarioId: number;
    contenido: number;
    paginaReferencia: number;
    esCitaDestacada: number;
    fechaCreacion: number;
    _all: number;
  };

  export type NotaLibroAvgAggregateInputType = {
    notaId?: true;
    libroId?: true;
    usuarioId?: true;
    paginaReferencia?: true;
  };

  export type NotaLibroSumAggregateInputType = {
    notaId?: true;
    libroId?: true;
    usuarioId?: true;
    paginaReferencia?: true;
  };

  export type NotaLibroMinAggregateInputType = {
    notaId?: true;
    libroId?: true;
    usuarioId?: true;
    contenido?: true;
    paginaReferencia?: true;
    esCitaDestacada?: true;
    fechaCreacion?: true;
  };

  export type NotaLibroMaxAggregateInputType = {
    notaId?: true;
    libroId?: true;
    usuarioId?: true;
    contenido?: true;
    paginaReferencia?: true;
    esCitaDestacada?: true;
    fechaCreacion?: true;
  };

  export type NotaLibroCountAggregateInputType = {
    notaId?: true;
    libroId?: true;
    usuarioId?: true;
    contenido?: true;
    paginaReferencia?: true;
    esCitaDestacada?: true;
    fechaCreacion?: true;
    _all?: true;
  };

  export type NotaLibroAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NotaLibro to aggregate.
     */
    where?: NotaLibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotaLibros to fetch.
     */
    orderBy?:
      | NotaLibroOrderByWithRelationInput
      | NotaLibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotaLibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotaLibros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotaLibros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NotaLibros
     **/
    _count?: true | NotaLibroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NotaLibroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NotaLibroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotaLibroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotaLibroMaxAggregateInputType;
  };

  export type GetNotaLibroAggregateType<T extends NotaLibroAggregateArgs> = {
    [P in keyof T & keyof AggregateNotaLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotaLibro[P]>
      : GetScalarType<T[P], AggregateNotaLibro[P]>;
  };

  export type NotaLibroGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotaLibroWhereInput;
    orderBy?:
      | NotaLibroOrderByWithAggregationInput
      | NotaLibroOrderByWithAggregationInput[];
    by: NotaLibroScalarFieldEnum[] | NotaLibroScalarFieldEnum;
    having?: NotaLibroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotaLibroCountAggregateInputType | true;
    _avg?: NotaLibroAvgAggregateInputType;
    _sum?: NotaLibroSumAggregateInputType;
    _min?: NotaLibroMinAggregateInputType;
    _max?: NotaLibroMaxAggregateInputType;
  };

  export type NotaLibroGroupByOutputType = {
    notaId: number;
    libroId: number;
    usuarioId: number;
    contenido: string;
    paginaReferencia: number | null;
    esCitaDestacada: boolean;
    fechaCreacion: Date;
    _count: NotaLibroCountAggregateOutputType | null;
    _avg: NotaLibroAvgAggregateOutputType | null;
    _sum: NotaLibroSumAggregateOutputType | null;
    _min: NotaLibroMinAggregateOutputType | null;
    _max: NotaLibroMaxAggregateOutputType | null;
  };

  type GetNotaLibroGroupByPayload<T extends NotaLibroGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotaLibroGroupByOutputType, T['by']> & {
          [P in keyof T & keyof NotaLibroGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaLibroGroupByOutputType[P]>
            : GetScalarType<T[P], NotaLibroGroupByOutputType[P]>;
        }
      >
    >;

  export type NotaLibroSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      notaId?: boolean;
      libroId?: boolean;
      usuarioId?: boolean;
      contenido?: boolean;
      paginaReferencia?: boolean;
      esCitaDestacada?: boolean;
      fechaCreacion?: boolean;
      libro?: boolean | LibroDefaultArgs<ExtArgs>;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['notaLibro']
  >;

  export type NotaLibroSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      notaId?: boolean;
      libroId?: boolean;
      usuarioId?: boolean;
      contenido?: boolean;
      paginaReferencia?: boolean;
      esCitaDestacada?: boolean;
      fechaCreacion?: boolean;
      libro?: boolean | LibroDefaultArgs<ExtArgs>;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['notaLibro']
  >;

  export type NotaLibroSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      notaId?: boolean;
      libroId?: boolean;
      usuarioId?: boolean;
      contenido?: boolean;
      paginaReferencia?: boolean;
      esCitaDestacada?: boolean;
      fechaCreacion?: boolean;
      libro?: boolean | LibroDefaultArgs<ExtArgs>;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['notaLibro']
  >;

  export type NotaLibroSelectScalar = {
    notaId?: boolean;
    libroId?: boolean;
    usuarioId?: boolean;
    contenido?: boolean;
    paginaReferencia?: boolean;
    esCitaDestacada?: boolean;
    fechaCreacion?: boolean;
  };

  export type NotaLibroOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'notaId'
    | 'libroId'
    | 'usuarioId'
    | 'contenido'
    | 'paginaReferencia'
    | 'esCitaDestacada'
    | 'fechaCreacion',
    ExtArgs['result']['notaLibro']
  >;
  export type NotaLibroInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>;
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };
  export type NotaLibroIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>;
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };
  export type NotaLibroIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    libro?: boolean | LibroDefaultArgs<ExtArgs>;
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };

  export type $NotaLibroPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'NotaLibro';
    objects: {
      libro: Prisma.$LibroPayload<ExtArgs>;
      usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        notaId: number;
        libroId: number;
        usuarioId: number;
        contenido: string;
        paginaReferencia: number | null;
        esCitaDestacada: boolean;
        fechaCreacion: Date;
      },
      ExtArgs['result']['notaLibro']
    >;
    composites: {};
  };

  type NotaLibroGetPayload<
    S extends boolean | null | undefined | NotaLibroDefaultArgs,
  > = $Result.GetResult<Prisma.$NotaLibroPayload, S>;

  type NotaLibroCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotaLibroFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: NotaLibroCountAggregateInputType | true;
  };

  export interface NotaLibroDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['NotaLibro'];
      meta: { name: 'NotaLibro' };
    };
    /**
     * Find zero or one NotaLibro that matches the filter.
     * @param {NotaLibroFindUniqueArgs} args - Arguments to find a NotaLibro
     * @example
     * // Get one NotaLibro
     * const notaLibro = await prisma.notaLibro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotaLibroFindUniqueArgs>(
      args: SelectSubset<T, NotaLibroFindUniqueArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one NotaLibro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotaLibroFindUniqueOrThrowArgs} args - Arguments to find a NotaLibro
     * @example
     * // Get one NotaLibro
     * const notaLibro = await prisma.notaLibro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotaLibroFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotaLibroFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NotaLibro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaLibroFindFirstArgs} args - Arguments to find a NotaLibro
     * @example
     * // Get one NotaLibro
     * const notaLibro = await prisma.notaLibro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotaLibroFindFirstArgs>(
      args?: SelectSubset<T, NotaLibroFindFirstArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NotaLibro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaLibroFindFirstOrThrowArgs} args - Arguments to find a NotaLibro
     * @example
     * // Get one NotaLibro
     * const notaLibro = await prisma.notaLibro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotaLibroFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotaLibroFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more NotaLibros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaLibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotaLibros
     * const notaLibros = await prisma.notaLibro.findMany()
     *
     * // Get first 10 NotaLibros
     * const notaLibros = await prisma.notaLibro.findMany({ take: 10 })
     *
     * // Only select the `notaId`
     * const notaLibroWithNotaIdOnly = await prisma.notaLibro.findMany({ select: { notaId: true } })
     *
     */
    findMany<T extends NotaLibroFindManyArgs>(
      args?: SelectSubset<T, NotaLibroFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a NotaLibro.
     * @param {NotaLibroCreateArgs} args - Arguments to create a NotaLibro.
     * @example
     * // Create one NotaLibro
     * const NotaLibro = await prisma.notaLibro.create({
     *   data: {
     *     // ... data to create a NotaLibro
     *   }
     * })
     *
     */
    create<T extends NotaLibroCreateArgs>(
      args: SelectSubset<T, NotaLibroCreateArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many NotaLibros.
     * @param {NotaLibroCreateManyArgs} args - Arguments to create many NotaLibros.
     * @example
     * // Create many NotaLibros
     * const notaLibro = await prisma.notaLibro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotaLibroCreateManyArgs>(
      args?: SelectSubset<T, NotaLibroCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many NotaLibros and returns the data saved in the database.
     * @param {NotaLibroCreateManyAndReturnArgs} args - Arguments to create many NotaLibros.
     * @example
     * // Create many NotaLibros
     * const notaLibro = await prisma.notaLibro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NotaLibros and only return the `notaId`
     * const notaLibroWithNotaIdOnly = await prisma.notaLibro.createManyAndReturn({
     *   select: { notaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotaLibroCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotaLibroCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a NotaLibro.
     * @param {NotaLibroDeleteArgs} args - Arguments to delete one NotaLibro.
     * @example
     * // Delete one NotaLibro
     * const NotaLibro = await prisma.notaLibro.delete({
     *   where: {
     *     // ... filter to delete one NotaLibro
     *   }
     * })
     *
     */
    delete<T extends NotaLibroDeleteArgs>(
      args: SelectSubset<T, NotaLibroDeleteArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one NotaLibro.
     * @param {NotaLibroUpdateArgs} args - Arguments to update one NotaLibro.
     * @example
     * // Update one NotaLibro
     * const notaLibro = await prisma.notaLibro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotaLibroUpdateArgs>(
      args: SelectSubset<T, NotaLibroUpdateArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more NotaLibros.
     * @param {NotaLibroDeleteManyArgs} args - Arguments to filter NotaLibros to delete.
     * @example
     * // Delete a few NotaLibros
     * const { count } = await prisma.notaLibro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotaLibroDeleteManyArgs>(
      args?: SelectSubset<T, NotaLibroDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NotaLibros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaLibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotaLibros
     * const notaLibro = await prisma.notaLibro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotaLibroUpdateManyArgs>(
      args: SelectSubset<T, NotaLibroUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NotaLibros and returns the data updated in the database.
     * @param {NotaLibroUpdateManyAndReturnArgs} args - Arguments to update many NotaLibros.
     * @example
     * // Update many NotaLibros
     * const notaLibro = await prisma.notaLibro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NotaLibros and only return the `notaId`
     * const notaLibroWithNotaIdOnly = await prisma.notaLibro.updateManyAndReturn({
     *   select: { notaId: true },
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
    updateManyAndReturn<T extends NotaLibroUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotaLibroUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one NotaLibro.
     * @param {NotaLibroUpsertArgs} args - Arguments to update or create a NotaLibro.
     * @example
     * // Update or create a NotaLibro
     * const notaLibro = await prisma.notaLibro.upsert({
     *   create: {
     *     // ... data to create a NotaLibro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotaLibro we want to update
     *   }
     * })
     */
    upsert<T extends NotaLibroUpsertArgs>(
      args: SelectSubset<T, NotaLibroUpsertArgs<ExtArgs>>,
    ): Prisma__NotaLibroClient<
      $Result.GetResult<
        Prisma.$NotaLibroPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of NotaLibros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaLibroCountArgs} args - Arguments to filter NotaLibros to count.
     * @example
     * // Count the number of NotaLibros
     * const count = await prisma.notaLibro.count({
     *   where: {
     *     // ... the filter for the NotaLibros we want to count
     *   }
     * })
     **/
    count<T extends NotaLibroCountArgs>(
      args?: Subset<T, NotaLibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaLibroCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a NotaLibro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaLibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotaLibroAggregateArgs>(
      args: Subset<T, NotaLibroAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotaLibroAggregateType<T>>;

    /**
     * Group by NotaLibro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaLibroGroupByArgs} args - Group by arguments.
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
      T extends NotaLibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaLibroGroupByArgs['orderBy'] }
        : { orderBy?: NotaLibroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NotaLibroGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNotaLibroGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NotaLibro model
     */
    readonly fields: NotaLibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotaLibro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotaLibroClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    libro<T extends LibroDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LibroDefaultArgs<ExtArgs>>,
    ): Prisma__LibroClient<
      | $Result.GetResult<
          Prisma.$LibroPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      | $Result.GetResult<
          Prisma.$UsuarioPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the NotaLibro model
   */
  interface NotaLibroFieldRefs {
    readonly notaId: FieldRef<'NotaLibro', 'Int'>;
    readonly libroId: FieldRef<'NotaLibro', 'Int'>;
    readonly usuarioId: FieldRef<'NotaLibro', 'Int'>;
    readonly contenido: FieldRef<'NotaLibro', 'String'>;
    readonly paginaReferencia: FieldRef<'NotaLibro', 'Int'>;
    readonly esCitaDestacada: FieldRef<'NotaLibro', 'Boolean'>;
    readonly fechaCreacion: FieldRef<'NotaLibro', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * NotaLibro findUnique
   */
  export type NotaLibroFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * Filter, which NotaLibro to fetch.
     */
    where: NotaLibroWhereUniqueInput;
  };

  /**
   * NotaLibro findUniqueOrThrow
   */
  export type NotaLibroFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * Filter, which NotaLibro to fetch.
     */
    where: NotaLibroWhereUniqueInput;
  };

  /**
   * NotaLibro findFirst
   */
  export type NotaLibroFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * Filter, which NotaLibro to fetch.
     */
    where?: NotaLibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotaLibros to fetch.
     */
    orderBy?:
      | NotaLibroOrderByWithRelationInput
      | NotaLibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NotaLibros.
     */
    cursor?: NotaLibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotaLibros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotaLibros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NotaLibros.
     */
    distinct?: NotaLibroScalarFieldEnum | NotaLibroScalarFieldEnum[];
  };

  /**
   * NotaLibro findFirstOrThrow
   */
  export type NotaLibroFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * Filter, which NotaLibro to fetch.
     */
    where?: NotaLibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotaLibros to fetch.
     */
    orderBy?:
      | NotaLibroOrderByWithRelationInput
      | NotaLibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NotaLibros.
     */
    cursor?: NotaLibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotaLibros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotaLibros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NotaLibros.
     */
    distinct?: NotaLibroScalarFieldEnum | NotaLibroScalarFieldEnum[];
  };

  /**
   * NotaLibro findMany
   */
  export type NotaLibroFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * Filter, which NotaLibros to fetch.
     */
    where?: NotaLibroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NotaLibros to fetch.
     */
    orderBy?:
      | NotaLibroOrderByWithRelationInput
      | NotaLibroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NotaLibros.
     */
    cursor?: NotaLibroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NotaLibros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NotaLibros.
     */
    skip?: number;
    distinct?: NotaLibroScalarFieldEnum | NotaLibroScalarFieldEnum[];
  };

  /**
   * NotaLibro create
   */
  export type NotaLibroCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * The data needed to create a NotaLibro.
     */
    data: XOR<NotaLibroCreateInput, NotaLibroUncheckedCreateInput>;
  };

  /**
   * NotaLibro createMany
   */
  export type NotaLibroCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many NotaLibros.
     */
    data: NotaLibroCreateManyInput | NotaLibroCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * NotaLibro createManyAndReturn
   */
  export type NotaLibroCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * The data used to create many NotaLibros.
     */
    data: NotaLibroCreateManyInput | NotaLibroCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NotaLibro update
   */
  export type NotaLibroUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * The data needed to update a NotaLibro.
     */
    data: XOR<NotaLibroUpdateInput, NotaLibroUncheckedUpdateInput>;
    /**
     * Choose, which NotaLibro to update.
     */
    where: NotaLibroWhereUniqueInput;
  };

  /**
   * NotaLibro updateMany
   */
  export type NotaLibroUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update NotaLibros.
     */
    data: XOR<
      NotaLibroUpdateManyMutationInput,
      NotaLibroUncheckedUpdateManyInput
    >;
    /**
     * Filter which NotaLibros to update
     */
    where?: NotaLibroWhereInput;
    /**
     * Limit how many NotaLibros to update.
     */
    limit?: number;
  };

  /**
   * NotaLibro updateManyAndReturn
   */
  export type NotaLibroUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * The data used to update NotaLibros.
     */
    data: XOR<
      NotaLibroUpdateManyMutationInput,
      NotaLibroUncheckedUpdateManyInput
    >;
    /**
     * Filter which NotaLibros to update
     */
    where?: NotaLibroWhereInput;
    /**
     * Limit how many NotaLibros to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NotaLibro upsert
   */
  export type NotaLibroUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * The filter to search for the NotaLibro to update in case it exists.
     */
    where: NotaLibroWhereUniqueInput;
    /**
     * In case the NotaLibro found by the `where` argument doesn't exist, create a new NotaLibro with this data.
     */
    create: XOR<NotaLibroCreateInput, NotaLibroUncheckedCreateInput>;
    /**
     * In case the NotaLibro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotaLibroUpdateInput, NotaLibroUncheckedUpdateInput>;
  };

  /**
   * NotaLibro delete
   */
  export type NotaLibroDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
    /**
     * Filter which NotaLibro to delete.
     */
    where: NotaLibroWhereUniqueInput;
  };

  /**
   * NotaLibro deleteMany
   */
  export type NotaLibroDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NotaLibros to delete
     */
    where?: NotaLibroWhereInput;
    /**
     * Limit how many NotaLibros to delete.
     */
    limit?: number;
  };

  /**
   * NotaLibro without action
   */
  export type NotaLibroDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NotaLibro
     */
    select?: NotaLibroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NotaLibro
     */
    omit?: NotaLibroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaLibroInclude<ExtArgs> | null;
  };

  /**
   * Model RecomendacionIA
   */

  export type AggregateRecomendacionIA = {
    _count: RecomendacionIACountAggregateOutputType | null;
    _avg: RecomendacionIAAvgAggregateOutputType | null;
    _sum: RecomendacionIASumAggregateOutputType | null;
    _min: RecomendacionIAMinAggregateOutputType | null;
    _max: RecomendacionIAMaxAggregateOutputType | null;
  };

  export type RecomendacionIAAvgAggregateOutputType = {
    recomendacionId: number | null;
    usuarioId: number | null;
  };

  export type RecomendacionIASumAggregateOutputType = {
    recomendacionId: number | null;
    usuarioId: number | null;
  };

  export type RecomendacionIAMinAggregateOutputType = {
    recomendacionId: number | null;
    usuarioId: number | null;
    promptEnviado: string | null;
    modeloIa: string | null;
    fechaConsulta: Date | null;
  };

  export type RecomendacionIAMaxAggregateOutputType = {
    recomendacionId: number | null;
    usuarioId: number | null;
    promptEnviado: string | null;
    modeloIa: string | null;
    fechaConsulta: Date | null;
  };

  export type RecomendacionIACountAggregateOutputType = {
    recomendacionId: number;
    usuarioId: number;
    promptEnviado: number;
    respuestaIaJson: number;
    modeloIa: number;
    fechaConsulta: number;
    _all: number;
  };

  export type RecomendacionIAAvgAggregateInputType = {
    recomendacionId?: true;
    usuarioId?: true;
  };

  export type RecomendacionIASumAggregateInputType = {
    recomendacionId?: true;
    usuarioId?: true;
  };

  export type RecomendacionIAMinAggregateInputType = {
    recomendacionId?: true;
    usuarioId?: true;
    promptEnviado?: true;
    modeloIa?: true;
    fechaConsulta?: true;
  };

  export type RecomendacionIAMaxAggregateInputType = {
    recomendacionId?: true;
    usuarioId?: true;
    promptEnviado?: true;
    modeloIa?: true;
    fechaConsulta?: true;
  };

  export type RecomendacionIACountAggregateInputType = {
    recomendacionId?: true;
    usuarioId?: true;
    promptEnviado?: true;
    respuestaIaJson?: true;
    modeloIa?: true;
    fechaConsulta?: true;
    _all?: true;
  };

  export type RecomendacionIAAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RecomendacionIA to aggregate.
     */
    where?: RecomendacionIAWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecomendacionIAS to fetch.
     */
    orderBy?:
      | RecomendacionIAOrderByWithRelationInput
      | RecomendacionIAOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RecomendacionIAWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecomendacionIAS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecomendacionIAS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RecomendacionIAS
     **/
    _count?: true | RecomendacionIACountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RecomendacionIAAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RecomendacionIASumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RecomendacionIAMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RecomendacionIAMaxAggregateInputType;
  };

  export type GetRecomendacionIAAggregateType<
    T extends RecomendacionIAAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRecomendacionIA]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecomendacionIA[P]>
      : GetScalarType<T[P], AggregateRecomendacionIA[P]>;
  };

  export type RecomendacionIAGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RecomendacionIAWhereInput;
    orderBy?:
      | RecomendacionIAOrderByWithAggregationInput
      | RecomendacionIAOrderByWithAggregationInput[];
    by: RecomendacionIAScalarFieldEnum[] | RecomendacionIAScalarFieldEnum;
    having?: RecomendacionIAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecomendacionIACountAggregateInputType | true;
    _avg?: RecomendacionIAAvgAggregateInputType;
    _sum?: RecomendacionIASumAggregateInputType;
    _min?: RecomendacionIAMinAggregateInputType;
    _max?: RecomendacionIAMaxAggregateInputType;
  };

  export type RecomendacionIAGroupByOutputType = {
    recomendacionId: number;
    usuarioId: number;
    promptEnviado: string;
    respuestaIaJson: JsonValue | null;
    modeloIa: string | null;
    fechaConsulta: Date;
    _count: RecomendacionIACountAggregateOutputType | null;
    _avg: RecomendacionIAAvgAggregateOutputType | null;
    _sum: RecomendacionIASumAggregateOutputType | null;
    _min: RecomendacionIAMinAggregateOutputType | null;
    _max: RecomendacionIAMaxAggregateOutputType | null;
  };

  type GetRecomendacionIAGroupByPayload<T extends RecomendacionIAGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RecomendacionIAGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof RecomendacionIAGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecomendacionIAGroupByOutputType[P]>
            : GetScalarType<T[P], RecomendacionIAGroupByOutputType[P]>;
        }
      >
    >;

  export type RecomendacionIASelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      recomendacionId?: boolean;
      usuarioId?: boolean;
      promptEnviado?: boolean;
      respuestaIaJson?: boolean;
      modeloIa?: boolean;
      fechaConsulta?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['recomendacionIA']
  >;

  export type RecomendacionIASelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      recomendacionId?: boolean;
      usuarioId?: boolean;
      promptEnviado?: boolean;
      respuestaIaJson?: boolean;
      modeloIa?: boolean;
      fechaConsulta?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['recomendacionIA']
  >;

  export type RecomendacionIASelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      recomendacionId?: boolean;
      usuarioId?: boolean;
      promptEnviado?: boolean;
      respuestaIaJson?: boolean;
      modeloIa?: boolean;
      fechaConsulta?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['recomendacionIA']
  >;

  export type RecomendacionIASelectScalar = {
    recomendacionId?: boolean;
    usuarioId?: boolean;
    promptEnviado?: boolean;
    respuestaIaJson?: boolean;
    modeloIa?: boolean;
    fechaConsulta?: boolean;
  };

  export type RecomendacionIAOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'recomendacionId'
    | 'usuarioId'
    | 'promptEnviado'
    | 'respuestaIaJson'
    | 'modeloIa'
    | 'fechaConsulta',
    ExtArgs['result']['recomendacionIA']
  >;
  export type RecomendacionIAInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };
  export type RecomendacionIAIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };
  export type RecomendacionIAIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
  };

  export type $RecomendacionIAPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'RecomendacionIA';
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        recomendacionId: number;
        usuarioId: number;
        promptEnviado: string;
        respuestaIaJson: Prisma.JsonValue | null;
        modeloIa: string | null;
        fechaConsulta: Date;
      },
      ExtArgs['result']['recomendacionIA']
    >;
    composites: {};
  };

  type RecomendacionIAGetPayload<
    S extends boolean | null | undefined | RecomendacionIADefaultArgs,
  > = $Result.GetResult<Prisma.$RecomendacionIAPayload, S>;

  type RecomendacionIACountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RecomendacionIAFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RecomendacionIACountAggregateInputType | true;
  };

  export interface RecomendacionIADelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['RecomendacionIA'];
      meta: { name: 'RecomendacionIA' };
    };
    /**
     * Find zero or one RecomendacionIA that matches the filter.
     * @param {RecomendacionIAFindUniqueArgs} args - Arguments to find a RecomendacionIA
     * @example
     * // Get one RecomendacionIA
     * const recomendacionIA = await prisma.recomendacionIA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecomendacionIAFindUniqueArgs>(
      args: SelectSubset<T, RecomendacionIAFindUniqueArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RecomendacionIA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecomendacionIAFindUniqueOrThrowArgs} args - Arguments to find a RecomendacionIA
     * @example
     * // Get one RecomendacionIA
     * const recomendacionIA = await prisma.recomendacionIA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecomendacionIAFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RecomendacionIAFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RecomendacionIA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionIAFindFirstArgs} args - Arguments to find a RecomendacionIA
     * @example
     * // Get one RecomendacionIA
     * const recomendacionIA = await prisma.recomendacionIA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecomendacionIAFindFirstArgs>(
      args?: SelectSubset<T, RecomendacionIAFindFirstArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RecomendacionIA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionIAFindFirstOrThrowArgs} args - Arguments to find a RecomendacionIA
     * @example
     * // Get one RecomendacionIA
     * const recomendacionIA = await prisma.recomendacionIA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecomendacionIAFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecomendacionIAFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RecomendacionIAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionIAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecomendacionIAS
     * const recomendacionIAS = await prisma.recomendacionIA.findMany()
     *
     * // Get first 10 RecomendacionIAS
     * const recomendacionIAS = await prisma.recomendacionIA.findMany({ take: 10 })
     *
     * // Only select the `recomendacionId`
     * const recomendacionIAWithRecomendacionIdOnly = await prisma.recomendacionIA.findMany({ select: { recomendacionId: true } })
     *
     */
    findMany<T extends RecomendacionIAFindManyArgs>(
      args?: SelectSubset<T, RecomendacionIAFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RecomendacionIA.
     * @param {RecomendacionIACreateArgs} args - Arguments to create a RecomendacionIA.
     * @example
     * // Create one RecomendacionIA
     * const RecomendacionIA = await prisma.recomendacionIA.create({
     *   data: {
     *     // ... data to create a RecomendacionIA
     *   }
     * })
     *
     */
    create<T extends RecomendacionIACreateArgs>(
      args: SelectSubset<T, RecomendacionIACreateArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RecomendacionIAS.
     * @param {RecomendacionIACreateManyArgs} args - Arguments to create many RecomendacionIAS.
     * @example
     * // Create many RecomendacionIAS
     * const recomendacionIA = await prisma.recomendacionIA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecomendacionIACreateManyArgs>(
      args?: SelectSubset<T, RecomendacionIACreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RecomendacionIAS and returns the data saved in the database.
     * @param {RecomendacionIACreateManyAndReturnArgs} args - Arguments to create many RecomendacionIAS.
     * @example
     * // Create many RecomendacionIAS
     * const recomendacionIA = await prisma.recomendacionIA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RecomendacionIAS and only return the `recomendacionId`
     * const recomendacionIAWithRecomendacionIdOnly = await prisma.recomendacionIA.createManyAndReturn({
     *   select: { recomendacionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecomendacionIACreateManyAndReturnArgs>(
      args?: SelectSubset<T, RecomendacionIACreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RecomendacionIA.
     * @param {RecomendacionIADeleteArgs} args - Arguments to delete one RecomendacionIA.
     * @example
     * // Delete one RecomendacionIA
     * const RecomendacionIA = await prisma.recomendacionIA.delete({
     *   where: {
     *     // ... filter to delete one RecomendacionIA
     *   }
     * })
     *
     */
    delete<T extends RecomendacionIADeleteArgs>(
      args: SelectSubset<T, RecomendacionIADeleteArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RecomendacionIA.
     * @param {RecomendacionIAUpdateArgs} args - Arguments to update one RecomendacionIA.
     * @example
     * // Update one RecomendacionIA
     * const recomendacionIA = await prisma.recomendacionIA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecomendacionIAUpdateArgs>(
      args: SelectSubset<T, RecomendacionIAUpdateArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RecomendacionIAS.
     * @param {RecomendacionIADeleteManyArgs} args - Arguments to filter RecomendacionIAS to delete.
     * @example
     * // Delete a few RecomendacionIAS
     * const { count } = await prisma.recomendacionIA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecomendacionIADeleteManyArgs>(
      args?: SelectSubset<T, RecomendacionIADeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RecomendacionIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionIAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecomendacionIAS
     * const recomendacionIA = await prisma.recomendacionIA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecomendacionIAUpdateManyArgs>(
      args: SelectSubset<T, RecomendacionIAUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RecomendacionIAS and returns the data updated in the database.
     * @param {RecomendacionIAUpdateManyAndReturnArgs} args - Arguments to update many RecomendacionIAS.
     * @example
     * // Update many RecomendacionIAS
     * const recomendacionIA = await prisma.recomendacionIA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RecomendacionIAS and only return the `recomendacionId`
     * const recomendacionIAWithRecomendacionIdOnly = await prisma.recomendacionIA.updateManyAndReturn({
     *   select: { recomendacionId: true },
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
    updateManyAndReturn<T extends RecomendacionIAUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RecomendacionIAUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RecomendacionIA.
     * @param {RecomendacionIAUpsertArgs} args - Arguments to update or create a RecomendacionIA.
     * @example
     * // Update or create a RecomendacionIA
     * const recomendacionIA = await prisma.recomendacionIA.upsert({
     *   create: {
     *     // ... data to create a RecomendacionIA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecomendacionIA we want to update
     *   }
     * })
     */
    upsert<T extends RecomendacionIAUpsertArgs>(
      args: SelectSubset<T, RecomendacionIAUpsertArgs<ExtArgs>>,
    ): Prisma__RecomendacionIAClient<
      $Result.GetResult<
        Prisma.$RecomendacionIAPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RecomendacionIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionIACountArgs} args - Arguments to filter RecomendacionIAS to count.
     * @example
     * // Count the number of RecomendacionIAS
     * const count = await prisma.recomendacionIA.count({
     *   where: {
     *     // ... the filter for the RecomendacionIAS we want to count
     *   }
     * })
     **/
    count<T extends RecomendacionIACountArgs>(
      args?: Subset<T, RecomendacionIACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecomendacionIACountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RecomendacionIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionIAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecomendacionIAAggregateArgs>(
      args: Subset<T, RecomendacionIAAggregateArgs>,
    ): Prisma.PrismaPromise<GetRecomendacionIAAggregateType<T>>;

    /**
     * Group by RecomendacionIA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionIAGroupByArgs} args - Group by arguments.
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
      T extends RecomendacionIAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecomendacionIAGroupByArgs['orderBy'] }
        : { orderBy?: RecomendacionIAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RecomendacionIAGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRecomendacionIAGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RecomendacionIA model
     */
    readonly fields: RecomendacionIAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecomendacionIA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecomendacionIAClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      | $Result.GetResult<
          Prisma.$UsuarioPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RecomendacionIA model
   */
  interface RecomendacionIAFieldRefs {
    readonly recomendacionId: FieldRef<'RecomendacionIA', 'Int'>;
    readonly usuarioId: FieldRef<'RecomendacionIA', 'Int'>;
    readonly promptEnviado: FieldRef<'RecomendacionIA', 'String'>;
    readonly respuestaIaJson: FieldRef<'RecomendacionIA', 'Json'>;
    readonly modeloIa: FieldRef<'RecomendacionIA', 'String'>;
    readonly fechaConsulta: FieldRef<'RecomendacionIA', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * RecomendacionIA findUnique
   */
  export type RecomendacionIAFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * Filter, which RecomendacionIA to fetch.
     */
    where: RecomendacionIAWhereUniqueInput;
  };

  /**
   * RecomendacionIA findUniqueOrThrow
   */
  export type RecomendacionIAFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * Filter, which RecomendacionIA to fetch.
     */
    where: RecomendacionIAWhereUniqueInput;
  };

  /**
   * RecomendacionIA findFirst
   */
  export type RecomendacionIAFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * Filter, which RecomendacionIA to fetch.
     */
    where?: RecomendacionIAWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecomendacionIAS to fetch.
     */
    orderBy?:
      | RecomendacionIAOrderByWithRelationInput
      | RecomendacionIAOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecomendacionIAS.
     */
    cursor?: RecomendacionIAWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecomendacionIAS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecomendacionIAS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecomendacionIAS.
     */
    distinct?:
      | RecomendacionIAScalarFieldEnum
      | RecomendacionIAScalarFieldEnum[];
  };

  /**
   * RecomendacionIA findFirstOrThrow
   */
  export type RecomendacionIAFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * Filter, which RecomendacionIA to fetch.
     */
    where?: RecomendacionIAWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecomendacionIAS to fetch.
     */
    orderBy?:
      | RecomendacionIAOrderByWithRelationInput
      | RecomendacionIAOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecomendacionIAS.
     */
    cursor?: RecomendacionIAWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecomendacionIAS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecomendacionIAS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecomendacionIAS.
     */
    distinct?:
      | RecomendacionIAScalarFieldEnum
      | RecomendacionIAScalarFieldEnum[];
  };

  /**
   * RecomendacionIA findMany
   */
  export type RecomendacionIAFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * Filter, which RecomendacionIAS to fetch.
     */
    where?: RecomendacionIAWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecomendacionIAS to fetch.
     */
    orderBy?:
      | RecomendacionIAOrderByWithRelationInput
      | RecomendacionIAOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RecomendacionIAS.
     */
    cursor?: RecomendacionIAWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecomendacionIAS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecomendacionIAS.
     */
    skip?: number;
    distinct?:
      | RecomendacionIAScalarFieldEnum
      | RecomendacionIAScalarFieldEnum[];
  };

  /**
   * RecomendacionIA create
   */
  export type RecomendacionIACreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * The data needed to create a RecomendacionIA.
     */
    data: XOR<RecomendacionIACreateInput, RecomendacionIAUncheckedCreateInput>;
  };

  /**
   * RecomendacionIA createMany
   */
  export type RecomendacionIACreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RecomendacionIAS.
     */
    data: RecomendacionIACreateManyInput | RecomendacionIACreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RecomendacionIA createManyAndReturn
   */
  export type RecomendacionIACreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * The data used to create many RecomendacionIAS.
     */
    data: RecomendacionIACreateManyInput | RecomendacionIACreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RecomendacionIA update
   */
  export type RecomendacionIAUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * The data needed to update a RecomendacionIA.
     */
    data: XOR<RecomendacionIAUpdateInput, RecomendacionIAUncheckedUpdateInput>;
    /**
     * Choose, which RecomendacionIA to update.
     */
    where: RecomendacionIAWhereUniqueInput;
  };

  /**
   * RecomendacionIA updateMany
   */
  export type RecomendacionIAUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RecomendacionIAS.
     */
    data: XOR<
      RecomendacionIAUpdateManyMutationInput,
      RecomendacionIAUncheckedUpdateManyInput
    >;
    /**
     * Filter which RecomendacionIAS to update
     */
    where?: RecomendacionIAWhereInput;
    /**
     * Limit how many RecomendacionIAS to update.
     */
    limit?: number;
  };

  /**
   * RecomendacionIA updateManyAndReturn
   */
  export type RecomendacionIAUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * The data used to update RecomendacionIAS.
     */
    data: XOR<
      RecomendacionIAUpdateManyMutationInput,
      RecomendacionIAUncheckedUpdateManyInput
    >;
    /**
     * Filter which RecomendacionIAS to update
     */
    where?: RecomendacionIAWhereInput;
    /**
     * Limit how many RecomendacionIAS to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RecomendacionIA upsert
   */
  export type RecomendacionIAUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * The filter to search for the RecomendacionIA to update in case it exists.
     */
    where: RecomendacionIAWhereUniqueInput;
    /**
     * In case the RecomendacionIA found by the `where` argument doesn't exist, create a new RecomendacionIA with this data.
     */
    create: XOR<
      RecomendacionIACreateInput,
      RecomendacionIAUncheckedCreateInput
    >;
    /**
     * In case the RecomendacionIA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      RecomendacionIAUpdateInput,
      RecomendacionIAUncheckedUpdateInput
    >;
  };

  /**
   * RecomendacionIA delete
   */
  export type RecomendacionIADeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
    /**
     * Filter which RecomendacionIA to delete.
     */
    where: RecomendacionIAWhereUniqueInput;
  };

  /**
   * RecomendacionIA deleteMany
   */
  export type RecomendacionIADeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RecomendacionIAS to delete
     */
    where?: RecomendacionIAWhereInput;
    /**
     * Limit how many RecomendacionIAS to delete.
     */
    limit?: number;
  };

  /**
   * RecomendacionIA without action
   */
  export type RecomendacionIADefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RecomendacionIA
     */
    select?: RecomendacionIASelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecomendacionIA
     */
    omit?: RecomendacionIAOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecomendacionIAInclude<ExtArgs> | null;
  };

  /**
   * Model Logro
   */

  export type AggregateLogro = {
    _count: LogroCountAggregateOutputType | null;
    _avg: LogroAvgAggregateOutputType | null;
    _sum: LogroSumAggregateOutputType | null;
    _min: LogroMinAggregateOutputType | null;
    _max: LogroMaxAggregateOutputType | null;
  };

  export type LogroAvgAggregateOutputType = {
    logroId: number | null;
    puntosRecompensa: number | null;
  };

  export type LogroSumAggregateOutputType = {
    logroId: number | null;
    puntosRecompensa: number | null;
  };

  export type LogroMinAggregateOutputType = {
    logroId: number | null;
    nombre: string | null;
    descripcion: string | null;
    puntosRecompensa: number | null;
  };

  export type LogroMaxAggregateOutputType = {
    logroId: number | null;
    nombre: string | null;
    descripcion: string | null;
    puntosRecompensa: number | null;
  };

  export type LogroCountAggregateOutputType = {
    logroId: number;
    nombre: number;
    descripcion: number;
    puntosRecompensa: number;
    _all: number;
  };

  export type LogroAvgAggregateInputType = {
    logroId?: true;
    puntosRecompensa?: true;
  };

  export type LogroSumAggregateInputType = {
    logroId?: true;
    puntosRecompensa?: true;
  };

  export type LogroMinAggregateInputType = {
    logroId?: true;
    nombre?: true;
    descripcion?: true;
    puntosRecompensa?: true;
  };

  export type LogroMaxAggregateInputType = {
    logroId?: true;
    nombre?: true;
    descripcion?: true;
    puntosRecompensa?: true;
  };

  export type LogroCountAggregateInputType = {
    logroId?: true;
    nombre?: true;
    descripcion?: true;
    puntosRecompensa?: true;
    _all?: true;
  };

  export type LogroAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Logro to aggregate.
     */
    where?: LogroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logroes to fetch.
     */
    orderBy?: LogroOrderByWithRelationInput | LogroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LogroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logroes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Logroes
     **/
    _count?: true | LogroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LogroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LogroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LogroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LogroMaxAggregateInputType;
  };

  export type GetLogroAggregateType<T extends LogroAggregateArgs> = {
    [P in keyof T & keyof AggregateLogro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogro[P]>
      : GetScalarType<T[P], AggregateLogro[P]>;
  };

  export type LogroGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LogroWhereInput;
    orderBy?:
      | LogroOrderByWithAggregationInput
      | LogroOrderByWithAggregationInput[];
    by: LogroScalarFieldEnum[] | LogroScalarFieldEnum;
    having?: LogroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LogroCountAggregateInputType | true;
    _avg?: LogroAvgAggregateInputType;
    _sum?: LogroSumAggregateInputType;
    _min?: LogroMinAggregateInputType;
    _max?: LogroMaxAggregateInputType;
  };

  export type LogroGroupByOutputType = {
    logroId: number;
    nombre: string | null;
    descripcion: string | null;
    puntosRecompensa: number | null;
    _count: LogroCountAggregateOutputType | null;
    _avg: LogroAvgAggregateOutputType | null;
    _sum: LogroSumAggregateOutputType | null;
    _min: LogroMinAggregateOutputType | null;
    _max: LogroMaxAggregateOutputType | null;
  };

  type GetLogroGroupByPayload<T extends LogroGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LogroGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LogroGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogroGroupByOutputType[P]>
            : GetScalarType<T[P], LogroGroupByOutputType[P]>;
        }
      >
    >;

  export type LogroSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      logroId?: boolean;
      nombre?: boolean;
      descripcion?: boolean;
      puntosRecompensa?: boolean;
      usuarios?: boolean | Logro$usuariosArgs<ExtArgs>;
      _count?: boolean | LogroCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['logro']
  >;

  export type LogroSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      logroId?: boolean;
      nombre?: boolean;
      descripcion?: boolean;
      puntosRecompensa?: boolean;
    },
    ExtArgs['result']['logro']
  >;

  export type LogroSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      logroId?: boolean;
      nombre?: boolean;
      descripcion?: boolean;
      puntosRecompensa?: boolean;
    },
    ExtArgs['result']['logro']
  >;

  export type LogroSelectScalar = {
    logroId?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    puntosRecompensa?: boolean;
  };

  export type LogroOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'logroId' | 'nombre' | 'descripcion' | 'puntosRecompensa',
    ExtArgs['result']['logro']
  >;
  export type LogroInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuarios?: boolean | Logro$usuariosArgs<ExtArgs>;
    _count?: boolean | LogroCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type LogroIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type LogroIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $LogroPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Logro';
    objects: {
      usuarios: Prisma.$LogroUsuarioPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        logroId: number;
        nombre: string | null;
        descripcion: string | null;
        puntosRecompensa: number | null;
      },
      ExtArgs['result']['logro']
    >;
    composites: {};
  };

  type LogroGetPayload<
    S extends boolean | null | undefined | LogroDefaultArgs,
  > = $Result.GetResult<Prisma.$LogroPayload, S>;

  type LogroCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LogroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LogroCountAggregateInputType | true;
  };

  export interface LogroDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Logro'];
      meta: { name: 'Logro' };
    };
    /**
     * Find zero or one Logro that matches the filter.
     * @param {LogroFindUniqueArgs} args - Arguments to find a Logro
     * @example
     * // Get one Logro
     * const logro = await prisma.logro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogroFindUniqueArgs>(
      args: SelectSubset<T, LogroFindUniqueArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Logro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogroFindUniqueOrThrowArgs} args - Arguments to find a Logro
     * @example
     * // Get one Logro
     * const logro = await prisma.logro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogroFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LogroFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Logro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroFindFirstArgs} args - Arguments to find a Logro
     * @example
     * // Get one Logro
     * const logro = await prisma.logro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogroFindFirstArgs>(
      args?: SelectSubset<T, LogroFindFirstArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Logro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroFindFirstOrThrowArgs} args - Arguments to find a Logro
     * @example
     * // Get one Logro
     * const logro = await prisma.logro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogroFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LogroFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Logroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logroes
     * const logroes = await prisma.logro.findMany()
     *
     * // Get first 10 Logroes
     * const logroes = await prisma.logro.findMany({ take: 10 })
     *
     * // Only select the `logroId`
     * const logroWithLogroIdOnly = await prisma.logro.findMany({ select: { logroId: true } })
     *
     */
    findMany<T extends LogroFindManyArgs>(
      args?: SelectSubset<T, LogroFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Logro.
     * @param {LogroCreateArgs} args - Arguments to create a Logro.
     * @example
     * // Create one Logro
     * const Logro = await prisma.logro.create({
     *   data: {
     *     // ... data to create a Logro
     *   }
     * })
     *
     */
    create<T extends LogroCreateArgs>(
      args: SelectSubset<T, LogroCreateArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Logroes.
     * @param {LogroCreateManyArgs} args - Arguments to create many Logroes.
     * @example
     * // Create many Logroes
     * const logro = await prisma.logro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LogroCreateManyArgs>(
      args?: SelectSubset<T, LogroCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Logroes and returns the data saved in the database.
     * @param {LogroCreateManyAndReturnArgs} args - Arguments to create many Logroes.
     * @example
     * // Create many Logroes
     * const logro = await prisma.logro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Logroes and only return the `logroId`
     * const logroWithLogroIdOnly = await prisma.logro.createManyAndReturn({
     *   select: { logroId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LogroCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LogroCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Logro.
     * @param {LogroDeleteArgs} args - Arguments to delete one Logro.
     * @example
     * // Delete one Logro
     * const Logro = await prisma.logro.delete({
     *   where: {
     *     // ... filter to delete one Logro
     *   }
     * })
     *
     */
    delete<T extends LogroDeleteArgs>(
      args: SelectSubset<T, LogroDeleteArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Logro.
     * @param {LogroUpdateArgs} args - Arguments to update one Logro.
     * @example
     * // Update one Logro
     * const logro = await prisma.logro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LogroUpdateArgs>(
      args: SelectSubset<T, LogroUpdateArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Logroes.
     * @param {LogroDeleteManyArgs} args - Arguments to filter Logroes to delete.
     * @example
     * // Delete a few Logroes
     * const { count } = await prisma.logro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LogroDeleteManyArgs>(
      args?: SelectSubset<T, LogroDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Logroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logroes
     * const logro = await prisma.logro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LogroUpdateManyArgs>(
      args: SelectSubset<T, LogroUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Logroes and returns the data updated in the database.
     * @param {LogroUpdateManyAndReturnArgs} args - Arguments to update many Logroes.
     * @example
     * // Update many Logroes
     * const logro = await prisma.logro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Logroes and only return the `logroId`
     * const logroWithLogroIdOnly = await prisma.logro.updateManyAndReturn({
     *   select: { logroId: true },
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
    updateManyAndReturn<T extends LogroUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LogroUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Logro.
     * @param {LogroUpsertArgs} args - Arguments to update or create a Logro.
     * @example
     * // Update or create a Logro
     * const logro = await prisma.logro.upsert({
     *   create: {
     *     // ... data to create a Logro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logro we want to update
     *   }
     * })
     */
    upsert<T extends LogroUpsertArgs>(
      args: SelectSubset<T, LogroUpsertArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      $Result.GetResult<
        Prisma.$LogroPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Logroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroCountArgs} args - Arguments to filter Logroes to count.
     * @example
     * // Count the number of Logroes
     * const count = await prisma.logro.count({
     *   where: {
     *     // ... the filter for the Logroes we want to count
     *   }
     * })
     **/
    count<T extends LogroCountArgs>(
      args?: Subset<T, LogroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogroCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Logro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogroAggregateArgs>(
      args: Subset<T, LogroAggregateArgs>,
    ): Prisma.PrismaPromise<GetLogroAggregateType<T>>;

    /**
     * Group by Logro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroGroupByArgs} args - Group by arguments.
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
      T extends LogroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogroGroupByArgs['orderBy'] }
        : { orderBy?: LogroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LogroGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetLogroGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Logro model
     */
    readonly fields: LogroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogroClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    usuarios<T extends Logro$usuariosArgs<ExtArgs> = {}>(
      args?: Subset<T, Logro$usuariosArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LogroUsuarioPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Logro model
   */
  interface LogroFieldRefs {
    readonly logroId: FieldRef<'Logro', 'Int'>;
    readonly nombre: FieldRef<'Logro', 'String'>;
    readonly descripcion: FieldRef<'Logro', 'String'>;
    readonly puntosRecompensa: FieldRef<'Logro', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Logro findUnique
   */
  export type LogroFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * Filter, which Logro to fetch.
     */
    where: LogroWhereUniqueInput;
  };

  /**
   * Logro findUniqueOrThrow
   */
  export type LogroFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * Filter, which Logro to fetch.
     */
    where: LogroWhereUniqueInput;
  };

  /**
   * Logro findFirst
   */
  export type LogroFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * Filter, which Logro to fetch.
     */
    where?: LogroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logroes to fetch.
     */
    orderBy?: LogroOrderByWithRelationInput | LogroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Logroes.
     */
    cursor?: LogroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logroes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Logroes.
     */
    distinct?: LogroScalarFieldEnum | LogroScalarFieldEnum[];
  };

  /**
   * Logro findFirstOrThrow
   */
  export type LogroFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * Filter, which Logro to fetch.
     */
    where?: LogroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logroes to fetch.
     */
    orderBy?: LogroOrderByWithRelationInput | LogroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Logroes.
     */
    cursor?: LogroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logroes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Logroes.
     */
    distinct?: LogroScalarFieldEnum | LogroScalarFieldEnum[];
  };

  /**
   * Logro findMany
   */
  export type LogroFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * Filter, which Logroes to fetch.
     */
    where?: LogroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logroes to fetch.
     */
    orderBy?: LogroOrderByWithRelationInput | LogroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Logroes.
     */
    cursor?: LogroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logroes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logroes.
     */
    skip?: number;
    distinct?: LogroScalarFieldEnum | LogroScalarFieldEnum[];
  };

  /**
   * Logro create
   */
  export type LogroCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * The data needed to create a Logro.
     */
    data?: XOR<LogroCreateInput, LogroUncheckedCreateInput>;
  };

  /**
   * Logro createMany
   */
  export type LogroCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Logroes.
     */
    data: LogroCreateManyInput | LogroCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Logro createManyAndReturn
   */
  export type LogroCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * The data used to create many Logroes.
     */
    data: LogroCreateManyInput | LogroCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Logro update
   */
  export type LogroUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * The data needed to update a Logro.
     */
    data: XOR<LogroUpdateInput, LogroUncheckedUpdateInput>;
    /**
     * Choose, which Logro to update.
     */
    where: LogroWhereUniqueInput;
  };

  /**
   * Logro updateMany
   */
  export type LogroUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Logroes.
     */
    data: XOR<LogroUpdateManyMutationInput, LogroUncheckedUpdateManyInput>;
    /**
     * Filter which Logroes to update
     */
    where?: LogroWhereInput;
    /**
     * Limit how many Logroes to update.
     */
    limit?: number;
  };

  /**
   * Logro updateManyAndReturn
   */
  export type LogroUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * The data used to update Logroes.
     */
    data: XOR<LogroUpdateManyMutationInput, LogroUncheckedUpdateManyInput>;
    /**
     * Filter which Logroes to update
     */
    where?: LogroWhereInput;
    /**
     * Limit how many Logroes to update.
     */
    limit?: number;
  };

  /**
   * Logro upsert
   */
  export type LogroUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * The filter to search for the Logro to update in case it exists.
     */
    where: LogroWhereUniqueInput;
    /**
     * In case the Logro found by the `where` argument doesn't exist, create a new Logro with this data.
     */
    create: XOR<LogroCreateInput, LogroUncheckedCreateInput>;
    /**
     * In case the Logro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogroUpdateInput, LogroUncheckedUpdateInput>;
  };

  /**
   * Logro delete
   */
  export type LogroDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
    /**
     * Filter which Logro to delete.
     */
    where: LogroWhereUniqueInput;
  };

  /**
   * Logro deleteMany
   */
  export type LogroDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Logroes to delete
     */
    where?: LogroWhereInput;
    /**
     * Limit how many Logroes to delete.
     */
    limit?: number;
  };

  /**
   * Logro.usuarios
   */
  export type Logro$usuariosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    where?: LogroUsuarioWhereInput;
    orderBy?:
      | LogroUsuarioOrderByWithRelationInput
      | LogroUsuarioOrderByWithRelationInput[];
    cursor?: LogroUsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LogroUsuarioScalarFieldEnum | LogroUsuarioScalarFieldEnum[];
  };

  /**
   * Logro without action
   */
  export type LogroDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Logro
     */
    select?: LogroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logro
     */
    omit?: LogroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroInclude<ExtArgs> | null;
  };

  /**
   * Model LogroUsuario
   */

  export type AggregateLogroUsuario = {
    _count: LogroUsuarioCountAggregateOutputType | null;
    _avg: LogroUsuarioAvgAggregateOutputType | null;
    _sum: LogroUsuarioSumAggregateOutputType | null;
    _min: LogroUsuarioMinAggregateOutputType | null;
    _max: LogroUsuarioMaxAggregateOutputType | null;
  };

  export type LogroUsuarioAvgAggregateOutputType = {
    usuarioId: number | null;
    logroId: number | null;
  };

  export type LogroUsuarioSumAggregateOutputType = {
    usuarioId: number | null;
    logroId: number | null;
  };

  export type LogroUsuarioMinAggregateOutputType = {
    usuarioId: number | null;
    logroId: number | null;
    fechaObtencion: Date | null;
  };

  export type LogroUsuarioMaxAggregateOutputType = {
    usuarioId: number | null;
    logroId: number | null;
    fechaObtencion: Date | null;
  };

  export type LogroUsuarioCountAggregateOutputType = {
    usuarioId: number;
    logroId: number;
    fechaObtencion: number;
    _all: number;
  };

  export type LogroUsuarioAvgAggregateInputType = {
    usuarioId?: true;
    logroId?: true;
  };

  export type LogroUsuarioSumAggregateInputType = {
    usuarioId?: true;
    logroId?: true;
  };

  export type LogroUsuarioMinAggregateInputType = {
    usuarioId?: true;
    logroId?: true;
    fechaObtencion?: true;
  };

  export type LogroUsuarioMaxAggregateInputType = {
    usuarioId?: true;
    logroId?: true;
    fechaObtencion?: true;
  };

  export type LogroUsuarioCountAggregateInputType = {
    usuarioId?: true;
    logroId?: true;
    fechaObtencion?: true;
    _all?: true;
  };

  export type LogroUsuarioAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LogroUsuario to aggregate.
     */
    where?: LogroUsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogroUsuarios to fetch.
     */
    orderBy?:
      | LogroUsuarioOrderByWithRelationInput
      | LogroUsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LogroUsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogroUsuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogroUsuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LogroUsuarios
     **/
    _count?: true | LogroUsuarioCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LogroUsuarioAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LogroUsuarioSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LogroUsuarioMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LogroUsuarioMaxAggregateInputType;
  };

  export type GetLogroUsuarioAggregateType<
    T extends LogroUsuarioAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateLogroUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogroUsuario[P]>
      : GetScalarType<T[P], AggregateLogroUsuario[P]>;
  };

  export type LogroUsuarioGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LogroUsuarioWhereInput;
    orderBy?:
      | LogroUsuarioOrderByWithAggregationInput
      | LogroUsuarioOrderByWithAggregationInput[];
    by: LogroUsuarioScalarFieldEnum[] | LogroUsuarioScalarFieldEnum;
    having?: LogroUsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LogroUsuarioCountAggregateInputType | true;
    _avg?: LogroUsuarioAvgAggregateInputType;
    _sum?: LogroUsuarioSumAggregateInputType;
    _min?: LogroUsuarioMinAggregateInputType;
    _max?: LogroUsuarioMaxAggregateInputType;
  };

  export type LogroUsuarioGroupByOutputType = {
    usuarioId: number;
    logroId: number;
    fechaObtencion: Date;
    _count: LogroUsuarioCountAggregateOutputType | null;
    _avg: LogroUsuarioAvgAggregateOutputType | null;
    _sum: LogroUsuarioSumAggregateOutputType | null;
    _min: LogroUsuarioMinAggregateOutputType | null;
    _max: LogroUsuarioMaxAggregateOutputType | null;
  };

  type GetLogroUsuarioGroupByPayload<T extends LogroUsuarioGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LogroUsuarioGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof LogroUsuarioGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogroUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], LogroUsuarioGroupByOutputType[P]>;
        }
      >
    >;

  export type LogroUsuarioSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      usuarioId?: boolean;
      logroId?: boolean;
      fechaObtencion?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
      logro?: boolean | LogroDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['logroUsuario']
  >;

  export type LogroUsuarioSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      usuarioId?: boolean;
      logroId?: boolean;
      fechaObtencion?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
      logro?: boolean | LogroDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['logroUsuario']
  >;

  export type LogroUsuarioSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      usuarioId?: boolean;
      logroId?: boolean;
      fechaObtencion?: boolean;
      usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
      logro?: boolean | LogroDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['logroUsuario']
  >;

  export type LogroUsuarioSelectScalar = {
    usuarioId?: boolean;
    logroId?: boolean;
    fechaObtencion?: boolean;
  };

  export type LogroUsuarioOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'usuarioId' | 'logroId' | 'fechaObtencion',
    ExtArgs['result']['logroUsuario']
  >;
  export type LogroUsuarioInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    logro?: boolean | LogroDefaultArgs<ExtArgs>;
  };
  export type LogroUsuarioIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    logro?: boolean | LogroDefaultArgs<ExtArgs>;
  };
  export type LogroUsuarioIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>;
    logro?: boolean | LogroDefaultArgs<ExtArgs>;
  };

  export type $LogroUsuarioPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'LogroUsuario';
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>;
      logro: Prisma.$LogroPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        usuarioId: number;
        logroId: number;
        fechaObtencion: Date;
      },
      ExtArgs['result']['logroUsuario']
    >;
    composites: {};
  };

  type LogroUsuarioGetPayload<
    S extends boolean | null | undefined | LogroUsuarioDefaultArgs,
  > = $Result.GetResult<Prisma.$LogroUsuarioPayload, S>;

  type LogroUsuarioCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    LogroUsuarioFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: LogroUsuarioCountAggregateInputType | true;
  };

  export interface LogroUsuarioDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['LogroUsuario'];
      meta: { name: 'LogroUsuario' };
    };
    /**
     * Find zero or one LogroUsuario that matches the filter.
     * @param {LogroUsuarioFindUniqueArgs} args - Arguments to find a LogroUsuario
     * @example
     * // Get one LogroUsuario
     * const logroUsuario = await prisma.logroUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogroUsuarioFindUniqueArgs>(
      args: SelectSubset<T, LogroUsuarioFindUniqueArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one LogroUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogroUsuarioFindUniqueOrThrowArgs} args - Arguments to find a LogroUsuario
     * @example
     * // Get one LogroUsuario
     * const logroUsuario = await prisma.logroUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogroUsuarioFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LogroUsuarioFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LogroUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUsuarioFindFirstArgs} args - Arguments to find a LogroUsuario
     * @example
     * // Get one LogroUsuario
     * const logroUsuario = await prisma.logroUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogroUsuarioFindFirstArgs>(
      args?: SelectSubset<T, LogroUsuarioFindFirstArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LogroUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUsuarioFindFirstOrThrowArgs} args - Arguments to find a LogroUsuario
     * @example
     * // Get one LogroUsuario
     * const logroUsuario = await prisma.logroUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogroUsuarioFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LogroUsuarioFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more LogroUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogroUsuarios
     * const logroUsuarios = await prisma.logroUsuario.findMany()
     *
     * // Get first 10 LogroUsuarios
     * const logroUsuarios = await prisma.logroUsuario.findMany({ take: 10 })
     *
     * // Only select the `usuarioId`
     * const logroUsuarioWithUsuarioIdOnly = await prisma.logroUsuario.findMany({ select: { usuarioId: true } })
     *
     */
    findMany<T extends LogroUsuarioFindManyArgs>(
      args?: SelectSubset<T, LogroUsuarioFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a LogroUsuario.
     * @param {LogroUsuarioCreateArgs} args - Arguments to create a LogroUsuario.
     * @example
     * // Create one LogroUsuario
     * const LogroUsuario = await prisma.logroUsuario.create({
     *   data: {
     *     // ... data to create a LogroUsuario
     *   }
     * })
     *
     */
    create<T extends LogroUsuarioCreateArgs>(
      args: SelectSubset<T, LogroUsuarioCreateArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many LogroUsuarios.
     * @param {LogroUsuarioCreateManyArgs} args - Arguments to create many LogroUsuarios.
     * @example
     * // Create many LogroUsuarios
     * const logroUsuario = await prisma.logroUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LogroUsuarioCreateManyArgs>(
      args?: SelectSubset<T, LogroUsuarioCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many LogroUsuarios and returns the data saved in the database.
     * @param {LogroUsuarioCreateManyAndReturnArgs} args - Arguments to create many LogroUsuarios.
     * @example
     * // Create many LogroUsuarios
     * const logroUsuario = await prisma.logroUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LogroUsuarios and only return the `usuarioId`
     * const logroUsuarioWithUsuarioIdOnly = await prisma.logroUsuario.createManyAndReturn({
     *   select: { usuarioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LogroUsuarioCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LogroUsuarioCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a LogroUsuario.
     * @param {LogroUsuarioDeleteArgs} args - Arguments to delete one LogroUsuario.
     * @example
     * // Delete one LogroUsuario
     * const LogroUsuario = await prisma.logroUsuario.delete({
     *   where: {
     *     // ... filter to delete one LogroUsuario
     *   }
     * })
     *
     */
    delete<T extends LogroUsuarioDeleteArgs>(
      args: SelectSubset<T, LogroUsuarioDeleteArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one LogroUsuario.
     * @param {LogroUsuarioUpdateArgs} args - Arguments to update one LogroUsuario.
     * @example
     * // Update one LogroUsuario
     * const logroUsuario = await prisma.logroUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LogroUsuarioUpdateArgs>(
      args: SelectSubset<T, LogroUsuarioUpdateArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more LogroUsuarios.
     * @param {LogroUsuarioDeleteManyArgs} args - Arguments to filter LogroUsuarios to delete.
     * @example
     * // Delete a few LogroUsuarios
     * const { count } = await prisma.logroUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LogroUsuarioDeleteManyArgs>(
      args?: SelectSubset<T, LogroUsuarioDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LogroUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogroUsuarios
     * const logroUsuario = await prisma.logroUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LogroUsuarioUpdateManyArgs>(
      args: SelectSubset<T, LogroUsuarioUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LogroUsuarios and returns the data updated in the database.
     * @param {LogroUsuarioUpdateManyAndReturnArgs} args - Arguments to update many LogroUsuarios.
     * @example
     * // Update many LogroUsuarios
     * const logroUsuario = await prisma.logroUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LogroUsuarios and only return the `usuarioId`
     * const logroUsuarioWithUsuarioIdOnly = await prisma.logroUsuario.updateManyAndReturn({
     *   select: { usuarioId: true },
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
    updateManyAndReturn<T extends LogroUsuarioUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LogroUsuarioUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one LogroUsuario.
     * @param {LogroUsuarioUpsertArgs} args - Arguments to update or create a LogroUsuario.
     * @example
     * // Update or create a LogroUsuario
     * const logroUsuario = await prisma.logroUsuario.upsert({
     *   create: {
     *     // ... data to create a LogroUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogroUsuario we want to update
     *   }
     * })
     */
    upsert<T extends LogroUsuarioUpsertArgs>(
      args: SelectSubset<T, LogroUsuarioUpsertArgs<ExtArgs>>,
    ): Prisma__LogroUsuarioClient<
      $Result.GetResult<
        Prisma.$LogroUsuarioPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of LogroUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUsuarioCountArgs} args - Arguments to filter LogroUsuarios to count.
     * @example
     * // Count the number of LogroUsuarios
     * const count = await prisma.logroUsuario.count({
     *   where: {
     *     // ... the filter for the LogroUsuarios we want to count
     *   }
     * })
     **/
    count<T extends LogroUsuarioCountArgs>(
      args?: Subset<T, LogroUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogroUsuarioCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a LogroUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogroUsuarioAggregateArgs>(
      args: Subset<T, LogroUsuarioAggregateArgs>,
    ): Prisma.PrismaPromise<GetLogroUsuarioAggregateType<T>>;

    /**
     * Group by LogroUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogroUsuarioGroupByArgs} args - Group by arguments.
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
      T extends LogroUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogroUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: LogroUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LogroUsuarioGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetLogroUsuarioGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LogroUsuario model
     */
    readonly fields: LogroUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogroUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogroUsuarioClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>,
    ): Prisma__UsuarioClient<
      | $Result.GetResult<
          Prisma.$UsuarioPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    logro<T extends LogroDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LogroDefaultArgs<ExtArgs>>,
    ): Prisma__LogroClient<
      | $Result.GetResult<
          Prisma.$LogroPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the LogroUsuario model
   */
  interface LogroUsuarioFieldRefs {
    readonly usuarioId: FieldRef<'LogroUsuario', 'Int'>;
    readonly logroId: FieldRef<'LogroUsuario', 'Int'>;
    readonly fechaObtencion: FieldRef<'LogroUsuario', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * LogroUsuario findUnique
   */
  export type LogroUsuarioFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which LogroUsuario to fetch.
     */
    where: LogroUsuarioWhereUniqueInput;
  };

  /**
   * LogroUsuario findUniqueOrThrow
   */
  export type LogroUsuarioFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which LogroUsuario to fetch.
     */
    where: LogroUsuarioWhereUniqueInput;
  };

  /**
   * LogroUsuario findFirst
   */
  export type LogroUsuarioFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which LogroUsuario to fetch.
     */
    where?: LogroUsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogroUsuarios to fetch.
     */
    orderBy?:
      | LogroUsuarioOrderByWithRelationInput
      | LogroUsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LogroUsuarios.
     */
    cursor?: LogroUsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogroUsuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogroUsuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogroUsuarios.
     */
    distinct?: LogroUsuarioScalarFieldEnum | LogroUsuarioScalarFieldEnum[];
  };

  /**
   * LogroUsuario findFirstOrThrow
   */
  export type LogroUsuarioFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which LogroUsuario to fetch.
     */
    where?: LogroUsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogroUsuarios to fetch.
     */
    orderBy?:
      | LogroUsuarioOrderByWithRelationInput
      | LogroUsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LogroUsuarios.
     */
    cursor?: LogroUsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogroUsuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogroUsuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogroUsuarios.
     */
    distinct?: LogroUsuarioScalarFieldEnum | LogroUsuarioScalarFieldEnum[];
  };

  /**
   * LogroUsuario findMany
   */
  export type LogroUsuarioFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * Filter, which LogroUsuarios to fetch.
     */
    where?: LogroUsuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogroUsuarios to fetch.
     */
    orderBy?:
      | LogroUsuarioOrderByWithRelationInput
      | LogroUsuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LogroUsuarios.
     */
    cursor?: LogroUsuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogroUsuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogroUsuarios.
     */
    skip?: number;
    distinct?: LogroUsuarioScalarFieldEnum | LogroUsuarioScalarFieldEnum[];
  };

  /**
   * LogroUsuario create
   */
  export type LogroUsuarioCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * The data needed to create a LogroUsuario.
     */
    data: XOR<LogroUsuarioCreateInput, LogroUsuarioUncheckedCreateInput>;
  };

  /**
   * LogroUsuario createMany
   */
  export type LogroUsuarioCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many LogroUsuarios.
     */
    data: LogroUsuarioCreateManyInput | LogroUsuarioCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LogroUsuario createManyAndReturn
   */
  export type LogroUsuarioCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * The data used to create many LogroUsuarios.
     */
    data: LogroUsuarioCreateManyInput | LogroUsuarioCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LogroUsuario update
   */
  export type LogroUsuarioUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * The data needed to update a LogroUsuario.
     */
    data: XOR<LogroUsuarioUpdateInput, LogroUsuarioUncheckedUpdateInput>;
    /**
     * Choose, which LogroUsuario to update.
     */
    where: LogroUsuarioWhereUniqueInput;
  };

  /**
   * LogroUsuario updateMany
   */
  export type LogroUsuarioUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update LogroUsuarios.
     */
    data: XOR<
      LogroUsuarioUpdateManyMutationInput,
      LogroUsuarioUncheckedUpdateManyInput
    >;
    /**
     * Filter which LogroUsuarios to update
     */
    where?: LogroUsuarioWhereInput;
    /**
     * Limit how many LogroUsuarios to update.
     */
    limit?: number;
  };

  /**
   * LogroUsuario updateManyAndReturn
   */
  export type LogroUsuarioUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * The data used to update LogroUsuarios.
     */
    data: XOR<
      LogroUsuarioUpdateManyMutationInput,
      LogroUsuarioUncheckedUpdateManyInput
    >;
    /**
     * Filter which LogroUsuarios to update
     */
    where?: LogroUsuarioWhereInput;
    /**
     * Limit how many LogroUsuarios to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LogroUsuario upsert
   */
  export type LogroUsuarioUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * The filter to search for the LogroUsuario to update in case it exists.
     */
    where: LogroUsuarioWhereUniqueInput;
    /**
     * In case the LogroUsuario found by the `where` argument doesn't exist, create a new LogroUsuario with this data.
     */
    create: XOR<LogroUsuarioCreateInput, LogroUsuarioUncheckedCreateInput>;
    /**
     * In case the LogroUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogroUsuarioUpdateInput, LogroUsuarioUncheckedUpdateInput>;
  };

  /**
   * LogroUsuario delete
   */
  export type LogroUsuarioDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
    /**
     * Filter which LogroUsuario to delete.
     */
    where: LogroUsuarioWhereUniqueInput;
  };

  /**
   * LogroUsuario deleteMany
   */
  export type LogroUsuarioDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LogroUsuarios to delete
     */
    where?: LogroUsuarioWhereInput;
    /**
     * Limit how many LogroUsuarios to delete.
     */
    limit?: number;
  };

  /**
   * LogroUsuario without action
   */
  export type LogroUsuarioDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LogroUsuario
     */
    select?: LogroUsuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogroUsuario
     */
    omit?: LogroUsuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogroUsuarioInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const PlanScalarFieldEnum: {
    planId: 'planId';
    nombre: 'nombre';
    limiteLibros: 'limiteLibros';
    limiteIaMensual: 'limiteIaMensual';
    precio: 'precio';
  };

  export type PlanScalarFieldEnum =
    (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum];

  export const UsuarioScalarFieldEnum: {
    usuarioId: 'usuarioId';
    nombre: 'nombre';
    email: 'email';
    passwordHash: 'passwordHash';
    firebaseUid: 'firebaseUid';
    planId: 'planId';
    puntosXp: 'puntosXp';
    nivel: 'nivel';
    rachaLecturaDias: 'rachaLecturaDias';
    ultimaLectura: 'ultimaLectura';
    fechaRegistro: 'fechaRegistro';
  };

  export type UsuarioScalarFieldEnum =
    (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];

  export const LibroScalarFieldEnum: {
    libroId: 'libroId';
    usuarioId: 'usuarioId';
    isbn: 'isbn';
    titulo: 'titulo';
    autor: 'autor';
    descripcion: 'descripcion';
    imagenUrl: 'imagenUrl';
    genero: 'genero';
    paginasTotales: 'paginasTotales';
    paginasLeidas: 'paginasLeidas';
    esAdquirido: 'esAdquirido';
    estadoLectura: 'estadoLectura';
    estaPrestado: 'estaPrestado';
    prestadoANombre: 'prestadoANombre';
    fechaPrestamo: 'fechaPrestamo';
    fechaAgregado: 'fechaAgregado';
  };

  export type LibroScalarFieldEnum =
    (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum];

  export const NotaLibroScalarFieldEnum: {
    notaId: 'notaId';
    libroId: 'libroId';
    usuarioId: 'usuarioId';
    contenido: 'contenido';
    paginaReferencia: 'paginaReferencia';
    esCitaDestacada: 'esCitaDestacada';
    fechaCreacion: 'fechaCreacion';
  };

  export type NotaLibroScalarFieldEnum =
    (typeof NotaLibroScalarFieldEnum)[keyof typeof NotaLibroScalarFieldEnum];

  export const RecomendacionIAScalarFieldEnum: {
    recomendacionId: 'recomendacionId';
    usuarioId: 'usuarioId';
    promptEnviado: 'promptEnviado';
    respuestaIaJson: 'respuestaIaJson';
    modeloIa: 'modeloIa';
    fechaConsulta: 'fechaConsulta';
  };

  export type RecomendacionIAScalarFieldEnum =
    (typeof RecomendacionIAScalarFieldEnum)[keyof typeof RecomendacionIAScalarFieldEnum];

  export const LogroScalarFieldEnum: {
    logroId: 'logroId';
    nombre: 'nombre';
    descripcion: 'descripcion';
    puntosRecompensa: 'puntosRecompensa';
  };

  export type LogroScalarFieldEnum =
    (typeof LogroScalarFieldEnum)[keyof typeof LogroScalarFieldEnum];

  export const LogroUsuarioScalarFieldEnum: {
    usuarioId: 'usuarioId';
    logroId: 'logroId';
    fechaObtencion: 'fechaObtencion';
  };

  export type LogroUsuarioScalarFieldEnum =
    (typeof LogroUsuarioScalarFieldEnum)[keyof typeof LogroUsuarioScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'EstadoLectura'
   */
  export type EnumEstadoLecturaFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EstadoLectura'
  >;

  /**
   * Reference to a field of type 'EstadoLectura[]'
   */
  export type ListEnumEstadoLecturaFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'EstadoLectura[]'>;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[];
    OR?: PlanWhereInput[];
    NOT?: PlanWhereInput | PlanWhereInput[];
    planId?: IntFilter<'Plan'> | number;
    nombre?: StringFilter<'Plan'> | string;
    limiteLibros?: IntNullableFilter<'Plan'> | number | null;
    limiteIaMensual?: IntNullableFilter<'Plan'> | number | null;
    precio?: DecimalFilter<'Plan'> | Decimal | DecimalJsLike | number | string;
    usuarios?: UsuarioListRelationFilter;
  };

  export type PlanOrderByWithRelationInput = {
    planId?: SortOrder;
    nombre?: SortOrder;
    limiteLibros?: SortOrderInput | SortOrder;
    limiteIaMensual?: SortOrderInput | SortOrder;
    precio?: SortOrder;
    usuarios?: UsuarioOrderByRelationAggregateInput;
  };

  export type PlanWhereUniqueInput = Prisma.AtLeast<
    {
      planId?: number;
      AND?: PlanWhereInput | PlanWhereInput[];
      OR?: PlanWhereInput[];
      NOT?: PlanWhereInput | PlanWhereInput[];
      nombre?: StringFilter<'Plan'> | string;
      limiteLibros?: IntNullableFilter<'Plan'> | number | null;
      limiteIaMensual?: IntNullableFilter<'Plan'> | number | null;
      precio?:
        | DecimalFilter<'Plan'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      usuarios?: UsuarioListRelationFilter;
    },
    'planId'
  >;

  export type PlanOrderByWithAggregationInput = {
    planId?: SortOrder;
    nombre?: SortOrder;
    limiteLibros?: SortOrderInput | SortOrder;
    limiteIaMensual?: SortOrderInput | SortOrder;
    precio?: SortOrder;
    _count?: PlanCountOrderByAggregateInput;
    _avg?: PlanAvgOrderByAggregateInput;
    _max?: PlanMaxOrderByAggregateInput;
    _min?: PlanMinOrderByAggregateInput;
    _sum?: PlanSumOrderByAggregateInput;
  };

  export type PlanScalarWhereWithAggregatesInput = {
    AND?:
      | PlanScalarWhereWithAggregatesInput
      | PlanScalarWhereWithAggregatesInput[];
    OR?: PlanScalarWhereWithAggregatesInput[];
    NOT?:
      | PlanScalarWhereWithAggregatesInput
      | PlanScalarWhereWithAggregatesInput[];
    planId?: IntWithAggregatesFilter<'Plan'> | number;
    nombre?: StringWithAggregatesFilter<'Plan'> | string;
    limiteLibros?: IntNullableWithAggregatesFilter<'Plan'> | number | null;
    limiteIaMensual?: IntNullableWithAggregatesFilter<'Plan'> | number | null;
    precio?:
      | DecimalWithAggregatesFilter<'Plan'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[];
    OR?: UsuarioWhereInput[];
    NOT?: UsuarioWhereInput | UsuarioWhereInput[];
    usuarioId?: IntFilter<'Usuario'> | number;
    nombre?: StringFilter<'Usuario'> | string;
    email?: StringFilter<'Usuario'> | string;
    passwordHash?: StringNullableFilter<'Usuario'> | string | null;
    firebaseUid?: StringNullableFilter<'Usuario'> | string | null;
    planId?: IntFilter<'Usuario'> | number;
    puntosXp?: IntFilter<'Usuario'> | number;
    nivel?: IntFilter<'Usuario'> | number;
    rachaLecturaDias?: IntFilter<'Usuario'> | number;
    ultimaLectura?: DateTimeNullableFilter<'Usuario'> | Date | string | null;
    fechaRegistro?: DateTimeFilter<'Usuario'> | Date | string;
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>;
    libros?: LibroListRelationFilter;
    notas?: NotaLibroListRelationFilter;
    recomendaciones?: RecomendacionIAListRelationFilter;
    logros?: LogroUsuarioListRelationFilter;
  };

  export type UsuarioOrderByWithRelationInput = {
    usuarioId?: SortOrder;
    nombre?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    firebaseUid?: SortOrderInput | SortOrder;
    planId?: SortOrder;
    puntosXp?: SortOrder;
    nivel?: SortOrder;
    rachaLecturaDias?: SortOrder;
    ultimaLectura?: SortOrderInput | SortOrder;
    fechaRegistro?: SortOrder;
    plan?: PlanOrderByWithRelationInput;
    libros?: LibroOrderByRelationAggregateInput;
    notas?: NotaLibroOrderByRelationAggregateInput;
    recomendaciones?: RecomendacionIAOrderByRelationAggregateInput;
    logros?: LogroUsuarioOrderByRelationAggregateInput;
  };

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<
    {
      usuarioId?: number;
      email?: string;
      firebaseUid?: string;
      AND?: UsuarioWhereInput | UsuarioWhereInput[];
      OR?: UsuarioWhereInput[];
      NOT?: UsuarioWhereInput | UsuarioWhereInput[];
      nombre?: StringFilter<'Usuario'> | string;
      passwordHash?: StringNullableFilter<'Usuario'> | string | null;
      planId?: IntFilter<'Usuario'> | number;
      puntosXp?: IntFilter<'Usuario'> | number;
      nivel?: IntFilter<'Usuario'> | number;
      rachaLecturaDias?: IntFilter<'Usuario'> | number;
      ultimaLectura?: DateTimeNullableFilter<'Usuario'> | Date | string | null;
      fechaRegistro?: DateTimeFilter<'Usuario'> | Date | string;
      plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>;
      libros?: LibroListRelationFilter;
      notas?: NotaLibroListRelationFilter;
      recomendaciones?: RecomendacionIAListRelationFilter;
      logros?: LogroUsuarioListRelationFilter;
    },
    'usuarioId' | 'email' | 'firebaseUid'
  >;

  export type UsuarioOrderByWithAggregationInput = {
    usuarioId?: SortOrder;
    nombre?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    firebaseUid?: SortOrderInput | SortOrder;
    planId?: SortOrder;
    puntosXp?: SortOrder;
    nivel?: SortOrder;
    rachaLecturaDias?: SortOrder;
    ultimaLectura?: SortOrderInput | SortOrder;
    fechaRegistro?: SortOrder;
    _count?: UsuarioCountOrderByAggregateInput;
    _avg?: UsuarioAvgOrderByAggregateInput;
    _max?: UsuarioMaxOrderByAggregateInput;
    _min?: UsuarioMinOrderByAggregateInput;
    _sum?: UsuarioSumOrderByAggregateInput;
  };

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?:
      | UsuarioScalarWhereWithAggregatesInput
      | UsuarioScalarWhereWithAggregatesInput[];
    OR?: UsuarioScalarWhereWithAggregatesInput[];
    NOT?:
      | UsuarioScalarWhereWithAggregatesInput
      | UsuarioScalarWhereWithAggregatesInput[];
    usuarioId?: IntWithAggregatesFilter<'Usuario'> | number;
    nombre?: StringWithAggregatesFilter<'Usuario'> | string;
    email?: StringWithAggregatesFilter<'Usuario'> | string;
    passwordHash?:
      | StringNullableWithAggregatesFilter<'Usuario'>
      | string
      | null;
    firebaseUid?: StringNullableWithAggregatesFilter<'Usuario'> | string | null;
    planId?: IntWithAggregatesFilter<'Usuario'> | number;
    puntosXp?: IntWithAggregatesFilter<'Usuario'> | number;
    nivel?: IntWithAggregatesFilter<'Usuario'> | number;
    rachaLecturaDias?: IntWithAggregatesFilter<'Usuario'> | number;
    ultimaLectura?:
      | DateTimeNullableWithAggregatesFilter<'Usuario'>
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeWithAggregatesFilter<'Usuario'> | Date | string;
  };

  export type LibroWhereInput = {
    AND?: LibroWhereInput | LibroWhereInput[];
    OR?: LibroWhereInput[];
    NOT?: LibroWhereInput | LibroWhereInput[];
    libroId?: IntFilter<'Libro'> | number;
    usuarioId?: IntFilter<'Libro'> | number;
    isbn?: StringNullableFilter<'Libro'> | string | null;
    titulo?: StringFilter<'Libro'> | string;
    autor?: StringNullableFilter<'Libro'> | string | null;
    descripcion?: StringNullableFilter<'Libro'> | string | null;
    imagenUrl?: StringNullableFilter<'Libro'> | string | null;
    genero?: StringNullableFilter<'Libro'> | string | null;
    paginasTotales?: IntNullableFilter<'Libro'> | number | null;
    paginasLeidas?: IntFilter<'Libro'> | number;
    esAdquirido?: BoolFilter<'Libro'> | boolean;
    estadoLectura?: EnumEstadoLecturaFilter<'Libro'> | $Enums.EstadoLectura;
    estaPrestado?: BoolFilter<'Libro'> | boolean;
    prestadoANombre?: StringNullableFilter<'Libro'> | string | null;
    fechaPrestamo?: DateTimeNullableFilter<'Libro'> | Date | string | null;
    fechaAgregado?: DateTimeFilter<'Libro'> | Date | string;
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
    notas?: NotaLibroListRelationFilter;
  };

  export type LibroOrderByWithRelationInput = {
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    isbn?: SortOrderInput | SortOrder;
    titulo?: SortOrder;
    autor?: SortOrderInput | SortOrder;
    descripcion?: SortOrderInput | SortOrder;
    imagenUrl?: SortOrderInput | SortOrder;
    genero?: SortOrderInput | SortOrder;
    paginasTotales?: SortOrderInput | SortOrder;
    paginasLeidas?: SortOrder;
    esAdquirido?: SortOrder;
    estadoLectura?: SortOrder;
    estaPrestado?: SortOrder;
    prestadoANombre?: SortOrderInput | SortOrder;
    fechaPrestamo?: SortOrderInput | SortOrder;
    fechaAgregado?: SortOrder;
    usuario?: UsuarioOrderByWithRelationInput;
    notas?: NotaLibroOrderByRelationAggregateInput;
  };

  export type LibroWhereUniqueInput = Prisma.AtLeast<
    {
      libroId?: number;
      AND?: LibroWhereInput | LibroWhereInput[];
      OR?: LibroWhereInput[];
      NOT?: LibroWhereInput | LibroWhereInput[];
      usuarioId?: IntFilter<'Libro'> | number;
      isbn?: StringNullableFilter<'Libro'> | string | null;
      titulo?: StringFilter<'Libro'> | string;
      autor?: StringNullableFilter<'Libro'> | string | null;
      descripcion?: StringNullableFilter<'Libro'> | string | null;
      imagenUrl?: StringNullableFilter<'Libro'> | string | null;
      genero?: StringNullableFilter<'Libro'> | string | null;
      paginasTotales?: IntNullableFilter<'Libro'> | number | null;
      paginasLeidas?: IntFilter<'Libro'> | number;
      esAdquirido?: BoolFilter<'Libro'> | boolean;
      estadoLectura?: EnumEstadoLecturaFilter<'Libro'> | $Enums.EstadoLectura;
      estaPrestado?: BoolFilter<'Libro'> | boolean;
      prestadoANombre?: StringNullableFilter<'Libro'> | string | null;
      fechaPrestamo?: DateTimeNullableFilter<'Libro'> | Date | string | null;
      fechaAgregado?: DateTimeFilter<'Libro'> | Date | string;
      usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
      notas?: NotaLibroListRelationFilter;
    },
    'libroId'
  >;

  export type LibroOrderByWithAggregationInput = {
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    isbn?: SortOrderInput | SortOrder;
    titulo?: SortOrder;
    autor?: SortOrderInput | SortOrder;
    descripcion?: SortOrderInput | SortOrder;
    imagenUrl?: SortOrderInput | SortOrder;
    genero?: SortOrderInput | SortOrder;
    paginasTotales?: SortOrderInput | SortOrder;
    paginasLeidas?: SortOrder;
    esAdquirido?: SortOrder;
    estadoLectura?: SortOrder;
    estaPrestado?: SortOrder;
    prestadoANombre?: SortOrderInput | SortOrder;
    fechaPrestamo?: SortOrderInput | SortOrder;
    fechaAgregado?: SortOrder;
    _count?: LibroCountOrderByAggregateInput;
    _avg?: LibroAvgOrderByAggregateInput;
    _max?: LibroMaxOrderByAggregateInput;
    _min?: LibroMinOrderByAggregateInput;
    _sum?: LibroSumOrderByAggregateInput;
  };

  export type LibroScalarWhereWithAggregatesInput = {
    AND?:
      | LibroScalarWhereWithAggregatesInput
      | LibroScalarWhereWithAggregatesInput[];
    OR?: LibroScalarWhereWithAggregatesInput[];
    NOT?:
      | LibroScalarWhereWithAggregatesInput
      | LibroScalarWhereWithAggregatesInput[];
    libroId?: IntWithAggregatesFilter<'Libro'> | number;
    usuarioId?: IntWithAggregatesFilter<'Libro'> | number;
    isbn?: StringNullableWithAggregatesFilter<'Libro'> | string | null;
    titulo?: StringWithAggregatesFilter<'Libro'> | string;
    autor?: StringNullableWithAggregatesFilter<'Libro'> | string | null;
    descripcion?: StringNullableWithAggregatesFilter<'Libro'> | string | null;
    imagenUrl?: StringNullableWithAggregatesFilter<'Libro'> | string | null;
    genero?: StringNullableWithAggregatesFilter<'Libro'> | string | null;
    paginasTotales?: IntNullableWithAggregatesFilter<'Libro'> | number | null;
    paginasLeidas?: IntWithAggregatesFilter<'Libro'> | number;
    esAdquirido?: BoolWithAggregatesFilter<'Libro'> | boolean;
    estadoLectura?:
      | EnumEstadoLecturaWithAggregatesFilter<'Libro'>
      | $Enums.EstadoLectura;
    estaPrestado?: BoolWithAggregatesFilter<'Libro'> | boolean;
    prestadoANombre?:
      | StringNullableWithAggregatesFilter<'Libro'>
      | string
      | null;
    fechaPrestamo?:
      | DateTimeNullableWithAggregatesFilter<'Libro'>
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeWithAggregatesFilter<'Libro'> | Date | string;
  };

  export type NotaLibroWhereInput = {
    AND?: NotaLibroWhereInput | NotaLibroWhereInput[];
    OR?: NotaLibroWhereInput[];
    NOT?: NotaLibroWhereInput | NotaLibroWhereInput[];
    notaId?: IntFilter<'NotaLibro'> | number;
    libroId?: IntFilter<'NotaLibro'> | number;
    usuarioId?: IntFilter<'NotaLibro'> | number;
    contenido?: StringFilter<'NotaLibro'> | string;
    paginaReferencia?: IntNullableFilter<'NotaLibro'> | number | null;
    esCitaDestacada?: BoolFilter<'NotaLibro'> | boolean;
    fechaCreacion?: DateTimeFilter<'NotaLibro'> | Date | string;
    libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>;
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
  };

  export type NotaLibroOrderByWithRelationInput = {
    notaId?: SortOrder;
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    contenido?: SortOrder;
    paginaReferencia?: SortOrderInput | SortOrder;
    esCitaDestacada?: SortOrder;
    fechaCreacion?: SortOrder;
    libro?: LibroOrderByWithRelationInput;
    usuario?: UsuarioOrderByWithRelationInput;
  };

  export type NotaLibroWhereUniqueInput = Prisma.AtLeast<
    {
      notaId?: number;
      AND?: NotaLibroWhereInput | NotaLibroWhereInput[];
      OR?: NotaLibroWhereInput[];
      NOT?: NotaLibroWhereInput | NotaLibroWhereInput[];
      libroId?: IntFilter<'NotaLibro'> | number;
      usuarioId?: IntFilter<'NotaLibro'> | number;
      contenido?: StringFilter<'NotaLibro'> | string;
      paginaReferencia?: IntNullableFilter<'NotaLibro'> | number | null;
      esCitaDestacada?: BoolFilter<'NotaLibro'> | boolean;
      fechaCreacion?: DateTimeFilter<'NotaLibro'> | Date | string;
      libro?: XOR<LibroScalarRelationFilter, LibroWhereInput>;
      usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
    },
    'notaId'
  >;

  export type NotaLibroOrderByWithAggregationInput = {
    notaId?: SortOrder;
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    contenido?: SortOrder;
    paginaReferencia?: SortOrderInput | SortOrder;
    esCitaDestacada?: SortOrder;
    fechaCreacion?: SortOrder;
    _count?: NotaLibroCountOrderByAggregateInput;
    _avg?: NotaLibroAvgOrderByAggregateInput;
    _max?: NotaLibroMaxOrderByAggregateInput;
    _min?: NotaLibroMinOrderByAggregateInput;
    _sum?: NotaLibroSumOrderByAggregateInput;
  };

  export type NotaLibroScalarWhereWithAggregatesInput = {
    AND?:
      | NotaLibroScalarWhereWithAggregatesInput
      | NotaLibroScalarWhereWithAggregatesInput[];
    OR?: NotaLibroScalarWhereWithAggregatesInput[];
    NOT?:
      | NotaLibroScalarWhereWithAggregatesInput
      | NotaLibroScalarWhereWithAggregatesInput[];
    notaId?: IntWithAggregatesFilter<'NotaLibro'> | number;
    libroId?: IntWithAggregatesFilter<'NotaLibro'> | number;
    usuarioId?: IntWithAggregatesFilter<'NotaLibro'> | number;
    contenido?: StringWithAggregatesFilter<'NotaLibro'> | string;
    paginaReferencia?:
      | IntNullableWithAggregatesFilter<'NotaLibro'>
      | number
      | null;
    esCitaDestacada?: BoolWithAggregatesFilter<'NotaLibro'> | boolean;
    fechaCreacion?: DateTimeWithAggregatesFilter<'NotaLibro'> | Date | string;
  };

  export type RecomendacionIAWhereInput = {
    AND?: RecomendacionIAWhereInput | RecomendacionIAWhereInput[];
    OR?: RecomendacionIAWhereInput[];
    NOT?: RecomendacionIAWhereInput | RecomendacionIAWhereInput[];
    recomendacionId?: IntFilter<'RecomendacionIA'> | number;
    usuarioId?: IntFilter<'RecomendacionIA'> | number;
    promptEnviado?: StringFilter<'RecomendacionIA'> | string;
    respuestaIaJson?: JsonNullableFilter<'RecomendacionIA'>;
    modeloIa?: StringNullableFilter<'RecomendacionIA'> | string | null;
    fechaConsulta?: DateTimeFilter<'RecomendacionIA'> | Date | string;
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
  };

  export type RecomendacionIAOrderByWithRelationInput = {
    recomendacionId?: SortOrder;
    usuarioId?: SortOrder;
    promptEnviado?: SortOrder;
    respuestaIaJson?: SortOrderInput | SortOrder;
    modeloIa?: SortOrderInput | SortOrder;
    fechaConsulta?: SortOrder;
    usuario?: UsuarioOrderByWithRelationInput;
  };

  export type RecomendacionIAWhereUniqueInput = Prisma.AtLeast<
    {
      recomendacionId?: number;
      AND?: RecomendacionIAWhereInput | RecomendacionIAWhereInput[];
      OR?: RecomendacionIAWhereInput[];
      NOT?: RecomendacionIAWhereInput | RecomendacionIAWhereInput[];
      usuarioId?: IntFilter<'RecomendacionIA'> | number;
      promptEnviado?: StringFilter<'RecomendacionIA'> | string;
      respuestaIaJson?: JsonNullableFilter<'RecomendacionIA'>;
      modeloIa?: StringNullableFilter<'RecomendacionIA'> | string | null;
      fechaConsulta?: DateTimeFilter<'RecomendacionIA'> | Date | string;
      usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
    },
    'recomendacionId'
  >;

  export type RecomendacionIAOrderByWithAggregationInput = {
    recomendacionId?: SortOrder;
    usuarioId?: SortOrder;
    promptEnviado?: SortOrder;
    respuestaIaJson?: SortOrderInput | SortOrder;
    modeloIa?: SortOrderInput | SortOrder;
    fechaConsulta?: SortOrder;
    _count?: RecomendacionIACountOrderByAggregateInput;
    _avg?: RecomendacionIAAvgOrderByAggregateInput;
    _max?: RecomendacionIAMaxOrderByAggregateInput;
    _min?: RecomendacionIAMinOrderByAggregateInput;
    _sum?: RecomendacionIASumOrderByAggregateInput;
  };

  export type RecomendacionIAScalarWhereWithAggregatesInput = {
    AND?:
      | RecomendacionIAScalarWhereWithAggregatesInput
      | RecomendacionIAScalarWhereWithAggregatesInput[];
    OR?: RecomendacionIAScalarWhereWithAggregatesInput[];
    NOT?:
      | RecomendacionIAScalarWhereWithAggregatesInput
      | RecomendacionIAScalarWhereWithAggregatesInput[];
    recomendacionId?: IntWithAggregatesFilter<'RecomendacionIA'> | number;
    usuarioId?: IntWithAggregatesFilter<'RecomendacionIA'> | number;
    promptEnviado?: StringWithAggregatesFilter<'RecomendacionIA'> | string;
    respuestaIaJson?: JsonNullableWithAggregatesFilter<'RecomendacionIA'>;
    modeloIa?:
      | StringNullableWithAggregatesFilter<'RecomendacionIA'>
      | string
      | null;
    fechaConsulta?:
      | DateTimeWithAggregatesFilter<'RecomendacionIA'>
      | Date
      | string;
  };

  export type LogroWhereInput = {
    AND?: LogroWhereInput | LogroWhereInput[];
    OR?: LogroWhereInput[];
    NOT?: LogroWhereInput | LogroWhereInput[];
    logroId?: IntFilter<'Logro'> | number;
    nombre?: StringNullableFilter<'Logro'> | string | null;
    descripcion?: StringNullableFilter<'Logro'> | string | null;
    puntosRecompensa?: IntNullableFilter<'Logro'> | number | null;
    usuarios?: LogroUsuarioListRelationFilter;
  };

  export type LogroOrderByWithRelationInput = {
    logroId?: SortOrder;
    nombre?: SortOrderInput | SortOrder;
    descripcion?: SortOrderInput | SortOrder;
    puntosRecompensa?: SortOrderInput | SortOrder;
    usuarios?: LogroUsuarioOrderByRelationAggregateInput;
  };

  export type LogroWhereUniqueInput = Prisma.AtLeast<
    {
      logroId?: number;
      AND?: LogroWhereInput | LogroWhereInput[];
      OR?: LogroWhereInput[];
      NOT?: LogroWhereInput | LogroWhereInput[];
      nombre?: StringNullableFilter<'Logro'> | string | null;
      descripcion?: StringNullableFilter<'Logro'> | string | null;
      puntosRecompensa?: IntNullableFilter<'Logro'> | number | null;
      usuarios?: LogroUsuarioListRelationFilter;
    },
    'logroId'
  >;

  export type LogroOrderByWithAggregationInput = {
    logroId?: SortOrder;
    nombre?: SortOrderInput | SortOrder;
    descripcion?: SortOrderInput | SortOrder;
    puntosRecompensa?: SortOrderInput | SortOrder;
    _count?: LogroCountOrderByAggregateInput;
    _avg?: LogroAvgOrderByAggregateInput;
    _max?: LogroMaxOrderByAggregateInput;
    _min?: LogroMinOrderByAggregateInput;
    _sum?: LogroSumOrderByAggregateInput;
  };

  export type LogroScalarWhereWithAggregatesInput = {
    AND?:
      | LogroScalarWhereWithAggregatesInput
      | LogroScalarWhereWithAggregatesInput[];
    OR?: LogroScalarWhereWithAggregatesInput[];
    NOT?:
      | LogroScalarWhereWithAggregatesInput
      | LogroScalarWhereWithAggregatesInput[];
    logroId?: IntWithAggregatesFilter<'Logro'> | number;
    nombre?: StringNullableWithAggregatesFilter<'Logro'> | string | null;
    descripcion?: StringNullableWithAggregatesFilter<'Logro'> | string | null;
    puntosRecompensa?: IntNullableWithAggregatesFilter<'Logro'> | number | null;
  };

  export type LogroUsuarioWhereInput = {
    AND?: LogroUsuarioWhereInput | LogroUsuarioWhereInput[];
    OR?: LogroUsuarioWhereInput[];
    NOT?: LogroUsuarioWhereInput | LogroUsuarioWhereInput[];
    usuarioId?: IntFilter<'LogroUsuario'> | number;
    logroId?: IntFilter<'LogroUsuario'> | number;
    fechaObtencion?: DateTimeFilter<'LogroUsuario'> | Date | string;
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
    logro?: XOR<LogroScalarRelationFilter, LogroWhereInput>;
  };

  export type LogroUsuarioOrderByWithRelationInput = {
    usuarioId?: SortOrder;
    logroId?: SortOrder;
    fechaObtencion?: SortOrder;
    usuario?: UsuarioOrderByWithRelationInput;
    logro?: LogroOrderByWithRelationInput;
  };

  export type LogroUsuarioWhereUniqueInput = Prisma.AtLeast<
    {
      usuarioId_logroId?: LogroUsuarioUsuarioIdLogroIdCompoundUniqueInput;
      AND?: LogroUsuarioWhereInput | LogroUsuarioWhereInput[];
      OR?: LogroUsuarioWhereInput[];
      NOT?: LogroUsuarioWhereInput | LogroUsuarioWhereInput[];
      usuarioId?: IntFilter<'LogroUsuario'> | number;
      logroId?: IntFilter<'LogroUsuario'> | number;
      fechaObtencion?: DateTimeFilter<'LogroUsuario'> | Date | string;
      usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>;
      logro?: XOR<LogroScalarRelationFilter, LogroWhereInput>;
    },
    'usuarioId_logroId'
  >;

  export type LogroUsuarioOrderByWithAggregationInput = {
    usuarioId?: SortOrder;
    logroId?: SortOrder;
    fechaObtencion?: SortOrder;
    _count?: LogroUsuarioCountOrderByAggregateInput;
    _avg?: LogroUsuarioAvgOrderByAggregateInput;
    _max?: LogroUsuarioMaxOrderByAggregateInput;
    _min?: LogroUsuarioMinOrderByAggregateInput;
    _sum?: LogroUsuarioSumOrderByAggregateInput;
  };

  export type LogroUsuarioScalarWhereWithAggregatesInput = {
    AND?:
      | LogroUsuarioScalarWhereWithAggregatesInput
      | LogroUsuarioScalarWhereWithAggregatesInput[];
    OR?: LogroUsuarioScalarWhereWithAggregatesInput[];
    NOT?:
      | LogroUsuarioScalarWhereWithAggregatesInput
      | LogroUsuarioScalarWhereWithAggregatesInput[];
    usuarioId?: IntWithAggregatesFilter<'LogroUsuario'> | number;
    logroId?: IntWithAggregatesFilter<'LogroUsuario'> | number;
    fechaObtencion?:
      | DateTimeWithAggregatesFilter<'LogroUsuario'>
      | Date
      | string;
  };

  export type PlanCreateInput = {
    nombre: string;
    limiteLibros?: number | null;
    limiteIaMensual?: number | null;
    precio?: Decimal | DecimalJsLike | number | string;
    usuarios?: UsuarioCreateNestedManyWithoutPlanInput;
  };

  export type PlanUncheckedCreateInput = {
    planId?: number;
    nombre: string;
    limiteLibros?: number | null;
    limiteIaMensual?: number | null;
    precio?: Decimal | DecimalJsLike | number | string;
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPlanInput;
  };

  export type PlanUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    limiteLibros?: NullableIntFieldUpdateOperationsInput | number | null;
    limiteIaMensual?: NullableIntFieldUpdateOperationsInput | number | null;
    precio?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    usuarios?: UsuarioUpdateManyWithoutPlanNestedInput;
  };

  export type PlanUncheckedUpdateInput = {
    planId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    limiteLibros?: NullableIntFieldUpdateOperationsInput | number | null;
    limiteIaMensual?: NullableIntFieldUpdateOperationsInput | number | null;
    precio?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    usuarios?: UsuarioUncheckedUpdateManyWithoutPlanNestedInput;
  };

  export type PlanCreateManyInput = {
    planId?: number;
    nombre: string;
    limiteLibros?: number | null;
    limiteIaMensual?: number | null;
    precio?: Decimal | DecimalJsLike | number | string;
  };

  export type PlanUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    limiteLibros?: NullableIntFieldUpdateOperationsInput | number | null;
    limiteIaMensual?: NullableIntFieldUpdateOperationsInput | number | null;
    precio?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type PlanUncheckedUpdateManyInput = {
    planId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    limiteLibros?: NullableIntFieldUpdateOperationsInput | number | null;
    limiteIaMensual?: NullableIntFieldUpdateOperationsInput | number | null;
    precio?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type UsuarioCreateInput = {
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    plan?: PlanCreateNestedOneWithoutUsuariosInput;
    libros?: LibroCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIACreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioUncheckedCreateInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    planId?: number;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    libros?: LibroUncheckedCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroUncheckedCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIAUncheckedCreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioUncheckedCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: PlanUpdateOneRequiredWithoutUsuariosNestedInput;
    libros?: LibroUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: IntFieldUpdateOperationsInput | number;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    libros?: LibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUncheckedUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioCreateManyInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    planId?: number;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
  };

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UsuarioUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: IntFieldUpdateOperationsInput | number;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LibroCreateInput = {
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
    usuario: UsuarioCreateNestedOneWithoutLibrosInput;
    notas?: NotaLibroCreateNestedManyWithoutLibroInput;
  };

  export type LibroUncheckedCreateInput = {
    libroId?: number;
    usuarioId: number;
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
    notas?: NotaLibroUncheckedCreateNestedManyWithoutLibroInput;
  };

  export type LibroUpdateInput = {
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: UsuarioUpdateOneRequiredWithoutLibrosNestedInput;
    notas?: NotaLibroUpdateManyWithoutLibroNestedInput;
  };

  export type LibroUncheckedUpdateInput = {
    libroId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: NotaLibroUncheckedUpdateManyWithoutLibroNestedInput;
  };

  export type LibroCreateManyInput = {
    libroId?: number;
    usuarioId: number;
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
  };

  export type LibroUpdateManyMutationInput = {
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LibroUncheckedUpdateManyInput = {
    libroId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotaLibroCreateInput = {
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
    libro: LibroCreateNestedOneWithoutNotasInput;
    usuario: UsuarioCreateNestedOneWithoutNotasInput;
  };

  export type NotaLibroUncheckedCreateInput = {
    notaId?: number;
    libroId: number;
    usuarioId: number;
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
  };

  export type NotaLibroUpdateInput = {
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
    libro?: LibroUpdateOneRequiredWithoutNotasNestedInput;
    usuario?: UsuarioUpdateOneRequiredWithoutNotasNestedInput;
  };

  export type NotaLibroUncheckedUpdateInput = {
    notaId?: IntFieldUpdateOperationsInput | number;
    libroId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotaLibroCreateManyInput = {
    notaId?: number;
    libroId: number;
    usuarioId: number;
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
  };

  export type NotaLibroUpdateManyMutationInput = {
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotaLibroUncheckedUpdateManyInput = {
    notaId?: IntFieldUpdateOperationsInput | number;
    libroId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecomendacionIACreateInput = {
    promptEnviado: string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: string | null;
    fechaConsulta?: Date | string;
    usuario: UsuarioCreateNestedOneWithoutRecomendacionesInput;
  };

  export type RecomendacionIAUncheckedCreateInput = {
    recomendacionId?: number;
    usuarioId: number;
    promptEnviado: string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: string | null;
    fechaConsulta?: Date | string;
  };

  export type RecomendacionIAUpdateInput = {
    promptEnviado?: StringFieldUpdateOperationsInput | string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaConsulta?: DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: UsuarioUpdateOneRequiredWithoutRecomendacionesNestedInput;
  };

  export type RecomendacionIAUncheckedUpdateInput = {
    recomendacionId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    promptEnviado?: StringFieldUpdateOperationsInput | string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaConsulta?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecomendacionIACreateManyInput = {
    recomendacionId?: number;
    usuarioId: number;
    promptEnviado: string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: string | null;
    fechaConsulta?: Date | string;
  };

  export type RecomendacionIAUpdateManyMutationInput = {
    promptEnviado?: StringFieldUpdateOperationsInput | string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaConsulta?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecomendacionIAUncheckedUpdateManyInput = {
    recomendacionId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    promptEnviado?: StringFieldUpdateOperationsInput | string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaConsulta?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LogroCreateInput = {
    nombre?: string | null;
    descripcion?: string | null;
    puntosRecompensa?: number | null;
    usuarios?: LogroUsuarioCreateNestedManyWithoutLogroInput;
  };

  export type LogroUncheckedCreateInput = {
    logroId?: number;
    nombre?: string | null;
    descripcion?: string | null;
    puntosRecompensa?: number | null;
    usuarios?: LogroUsuarioUncheckedCreateNestedManyWithoutLogroInput;
  };

  export type LogroUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosRecompensa?: NullableIntFieldUpdateOperationsInput | number | null;
    usuarios?: LogroUsuarioUpdateManyWithoutLogroNestedInput;
  };

  export type LogroUncheckedUpdateInput = {
    logroId?: IntFieldUpdateOperationsInput | number;
    nombre?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosRecompensa?: NullableIntFieldUpdateOperationsInput | number | null;
    usuarios?: LogroUsuarioUncheckedUpdateManyWithoutLogroNestedInput;
  };

  export type LogroCreateManyInput = {
    logroId?: number;
    nombre?: string | null;
    descripcion?: string | null;
    puntosRecompensa?: number | null;
  };

  export type LogroUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosRecompensa?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type LogroUncheckedUpdateManyInput = {
    logroId?: IntFieldUpdateOperationsInput | number;
    nombre?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosRecompensa?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type LogroUsuarioCreateInput = {
    fechaObtencion?: Date | string;
    usuario: UsuarioCreateNestedOneWithoutLogrosInput;
    logro: LogroCreateNestedOneWithoutUsuariosInput;
  };

  export type LogroUsuarioUncheckedCreateInput = {
    usuarioId: number;
    logroId: number;
    fechaObtencion?: Date | string;
  };

  export type LogroUsuarioUpdateInput = {
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: UsuarioUpdateOneRequiredWithoutLogrosNestedInput;
    logro?: LogroUpdateOneRequiredWithoutUsuariosNestedInput;
  };

  export type LogroUsuarioUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    logroId?: IntFieldUpdateOperationsInput | number;
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LogroUsuarioCreateManyInput = {
    usuarioId: number;
    logroId: number;
    fechaObtencion?: Date | string;
  };

  export type LogroUsuarioUpdateManyMutationInput = {
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LogroUsuarioUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    logroId?: IntFieldUpdateOperationsInput | number;
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput;
    some?: UsuarioWhereInput;
    none?: UsuarioWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PlanCountOrderByAggregateInput = {
    planId?: SortOrder;
    nombre?: SortOrder;
    limiteLibros?: SortOrder;
    limiteIaMensual?: SortOrder;
    precio?: SortOrder;
  };

  export type PlanAvgOrderByAggregateInput = {
    planId?: SortOrder;
    limiteLibros?: SortOrder;
    limiteIaMensual?: SortOrder;
    precio?: SortOrder;
  };

  export type PlanMaxOrderByAggregateInput = {
    planId?: SortOrder;
    nombre?: SortOrder;
    limiteLibros?: SortOrder;
    limiteIaMensual?: SortOrder;
    precio?: SortOrder;
  };

  export type PlanMinOrderByAggregateInput = {
    planId?: SortOrder;
    nombre?: SortOrder;
    limiteLibros?: SortOrder;
    limiteIaMensual?: SortOrder;
    precio?: SortOrder;
  };

  export type PlanSumOrderByAggregateInput = {
    planId?: SortOrder;
    limiteLibros?: SortOrder;
    limiteIaMensual?: SortOrder;
    precio?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput;
    isNot?: PlanWhereInput;
  };

  export type LibroListRelationFilter = {
    every?: LibroWhereInput;
    some?: LibroWhereInput;
    none?: LibroWhereInput;
  };

  export type NotaLibroListRelationFilter = {
    every?: NotaLibroWhereInput;
    some?: NotaLibroWhereInput;
    none?: NotaLibroWhereInput;
  };

  export type RecomendacionIAListRelationFilter = {
    every?: RecomendacionIAWhereInput;
    some?: RecomendacionIAWhereInput;
    none?: RecomendacionIAWhereInput;
  };

  export type LogroUsuarioListRelationFilter = {
    every?: LogroUsuarioWhereInput;
    some?: LogroUsuarioWhereInput;
    none?: LogroUsuarioWhereInput;
  };

  export type LibroOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NotaLibroOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RecomendacionIAOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LogroUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UsuarioCountOrderByAggregateInput = {
    usuarioId?: SortOrder;
    nombre?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    firebaseUid?: SortOrder;
    planId?: SortOrder;
    puntosXp?: SortOrder;
    nivel?: SortOrder;
    rachaLecturaDias?: SortOrder;
    ultimaLectura?: SortOrder;
    fechaRegistro?: SortOrder;
  };

  export type UsuarioAvgOrderByAggregateInput = {
    usuarioId?: SortOrder;
    planId?: SortOrder;
    puntosXp?: SortOrder;
    nivel?: SortOrder;
    rachaLecturaDias?: SortOrder;
  };

  export type UsuarioMaxOrderByAggregateInput = {
    usuarioId?: SortOrder;
    nombre?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    firebaseUid?: SortOrder;
    planId?: SortOrder;
    puntosXp?: SortOrder;
    nivel?: SortOrder;
    rachaLecturaDias?: SortOrder;
    ultimaLectura?: SortOrder;
    fechaRegistro?: SortOrder;
  };

  export type UsuarioMinOrderByAggregateInput = {
    usuarioId?: SortOrder;
    nombre?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    firebaseUid?: SortOrder;
    planId?: SortOrder;
    puntosXp?: SortOrder;
    nivel?: SortOrder;
    rachaLecturaDias?: SortOrder;
    ultimaLectura?: SortOrder;
    fechaRegistro?: SortOrder;
  };

  export type UsuarioSumOrderByAggregateInput = {
    usuarioId?: SortOrder;
    planId?: SortOrder;
    puntosXp?: SortOrder;
    nivel?: SortOrder;
    rachaLecturaDias?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EnumEstadoLecturaFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EstadoLectura
      | EnumEstadoLecturaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    not?: NestedEnumEstadoLecturaFilter<$PrismaModel> | $Enums.EstadoLectura;
  };

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput;
    isNot?: UsuarioWhereInput;
  };

  export type LibroCountOrderByAggregateInput = {
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    isbn?: SortOrder;
    titulo?: SortOrder;
    autor?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrder;
    genero?: SortOrder;
    paginasTotales?: SortOrder;
    paginasLeidas?: SortOrder;
    esAdquirido?: SortOrder;
    estadoLectura?: SortOrder;
    estaPrestado?: SortOrder;
    prestadoANombre?: SortOrder;
    fechaPrestamo?: SortOrder;
    fechaAgregado?: SortOrder;
  };

  export type LibroAvgOrderByAggregateInput = {
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    paginasTotales?: SortOrder;
    paginasLeidas?: SortOrder;
  };

  export type LibroMaxOrderByAggregateInput = {
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    isbn?: SortOrder;
    titulo?: SortOrder;
    autor?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrder;
    genero?: SortOrder;
    paginasTotales?: SortOrder;
    paginasLeidas?: SortOrder;
    esAdquirido?: SortOrder;
    estadoLectura?: SortOrder;
    estaPrestado?: SortOrder;
    prestadoANombre?: SortOrder;
    fechaPrestamo?: SortOrder;
    fechaAgregado?: SortOrder;
  };

  export type LibroMinOrderByAggregateInput = {
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    isbn?: SortOrder;
    titulo?: SortOrder;
    autor?: SortOrder;
    descripcion?: SortOrder;
    imagenUrl?: SortOrder;
    genero?: SortOrder;
    paginasTotales?: SortOrder;
    paginasLeidas?: SortOrder;
    esAdquirido?: SortOrder;
    estadoLectura?: SortOrder;
    estaPrestado?: SortOrder;
    prestadoANombre?: SortOrder;
    fechaPrestamo?: SortOrder;
    fechaAgregado?: SortOrder;
  };

  export type LibroSumOrderByAggregateInput = {
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    paginasTotales?: SortOrder;
    paginasLeidas?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumEstadoLecturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EstadoLectura
      | EnumEstadoLecturaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEstadoLecturaWithAggregatesFilter<$PrismaModel>
      | $Enums.EstadoLectura;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEstadoLecturaFilter<$PrismaModel>;
    _max?: NestedEnumEstadoLecturaFilter<$PrismaModel>;
  };

  export type LibroScalarRelationFilter = {
    is?: LibroWhereInput;
    isNot?: LibroWhereInput;
  };

  export type NotaLibroCountOrderByAggregateInput = {
    notaId?: SortOrder;
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    contenido?: SortOrder;
    paginaReferencia?: SortOrder;
    esCitaDestacada?: SortOrder;
    fechaCreacion?: SortOrder;
  };

  export type NotaLibroAvgOrderByAggregateInput = {
    notaId?: SortOrder;
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    paginaReferencia?: SortOrder;
  };

  export type NotaLibroMaxOrderByAggregateInput = {
    notaId?: SortOrder;
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    contenido?: SortOrder;
    paginaReferencia?: SortOrder;
    esCitaDestacada?: SortOrder;
    fechaCreacion?: SortOrder;
  };

  export type NotaLibroMinOrderByAggregateInput = {
    notaId?: SortOrder;
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    contenido?: SortOrder;
    paginaReferencia?: SortOrder;
    esCitaDestacada?: SortOrder;
    fechaCreacion?: SortOrder;
  };

  export type NotaLibroSumOrderByAggregateInput = {
    notaId?: SortOrder;
    libroId?: SortOrder;
    usuarioId?: SortOrder;
    paginaReferencia?: SortOrder;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type RecomendacionIACountOrderByAggregateInput = {
    recomendacionId?: SortOrder;
    usuarioId?: SortOrder;
    promptEnviado?: SortOrder;
    respuestaIaJson?: SortOrder;
    modeloIa?: SortOrder;
    fechaConsulta?: SortOrder;
  };

  export type RecomendacionIAAvgOrderByAggregateInput = {
    recomendacionId?: SortOrder;
    usuarioId?: SortOrder;
  };

  export type RecomendacionIAMaxOrderByAggregateInput = {
    recomendacionId?: SortOrder;
    usuarioId?: SortOrder;
    promptEnviado?: SortOrder;
    modeloIa?: SortOrder;
    fechaConsulta?: SortOrder;
  };

  export type RecomendacionIAMinOrderByAggregateInput = {
    recomendacionId?: SortOrder;
    usuarioId?: SortOrder;
    promptEnviado?: SortOrder;
    modeloIa?: SortOrder;
    fechaConsulta?: SortOrder;
  };

  export type RecomendacionIASumOrderByAggregateInput = {
    recomendacionId?: SortOrder;
    usuarioId?: SortOrder;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          'path'
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type LogroCountOrderByAggregateInput = {
    logroId?: SortOrder;
    nombre?: SortOrder;
    descripcion?: SortOrder;
    puntosRecompensa?: SortOrder;
  };

  export type LogroAvgOrderByAggregateInput = {
    logroId?: SortOrder;
    puntosRecompensa?: SortOrder;
  };

  export type LogroMaxOrderByAggregateInput = {
    logroId?: SortOrder;
    nombre?: SortOrder;
    descripcion?: SortOrder;
    puntosRecompensa?: SortOrder;
  };

  export type LogroMinOrderByAggregateInput = {
    logroId?: SortOrder;
    nombre?: SortOrder;
    descripcion?: SortOrder;
    puntosRecompensa?: SortOrder;
  };

  export type LogroSumOrderByAggregateInput = {
    logroId?: SortOrder;
    puntosRecompensa?: SortOrder;
  };

  export type LogroScalarRelationFilter = {
    is?: LogroWhereInput;
    isNot?: LogroWhereInput;
  };

  export type LogroUsuarioUsuarioIdLogroIdCompoundUniqueInput = {
    usuarioId: number;
    logroId: number;
  };

  export type LogroUsuarioCountOrderByAggregateInput = {
    usuarioId?: SortOrder;
    logroId?: SortOrder;
    fechaObtencion?: SortOrder;
  };

  export type LogroUsuarioAvgOrderByAggregateInput = {
    usuarioId?: SortOrder;
    logroId?: SortOrder;
  };

  export type LogroUsuarioMaxOrderByAggregateInput = {
    usuarioId?: SortOrder;
    logroId?: SortOrder;
    fechaObtencion?: SortOrder;
  };

  export type LogroUsuarioMinOrderByAggregateInput = {
    usuarioId?: SortOrder;
    logroId?: SortOrder;
    fechaObtencion?: SortOrder;
  };

  export type LogroUsuarioSumOrderByAggregateInput = {
    usuarioId?: SortOrder;
    logroId?: SortOrder;
  };

  export type UsuarioCreateNestedManyWithoutPlanInput = {
    create?:
      | XOR<
          UsuarioCreateWithoutPlanInput,
          UsuarioUncheckedCreateWithoutPlanInput
        >
      | UsuarioCreateWithoutPlanInput[]
      | UsuarioUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | UsuarioCreateOrConnectWithoutPlanInput
      | UsuarioCreateOrConnectWithoutPlanInput[];
    createMany?: UsuarioCreateManyPlanInputEnvelope;
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
  };

  export type UsuarioUncheckedCreateNestedManyWithoutPlanInput = {
    create?:
      | XOR<
          UsuarioCreateWithoutPlanInput,
          UsuarioUncheckedCreateWithoutPlanInput
        >
      | UsuarioCreateWithoutPlanInput[]
      | UsuarioUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | UsuarioCreateOrConnectWithoutPlanInput
      | UsuarioCreateOrConnectWithoutPlanInput[];
    createMany?: UsuarioCreateManyPlanInputEnvelope;
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type UsuarioUpdateManyWithoutPlanNestedInput = {
    create?:
      | XOR<
          UsuarioCreateWithoutPlanInput,
          UsuarioUncheckedCreateWithoutPlanInput
        >
      | UsuarioCreateWithoutPlanInput[]
      | UsuarioUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | UsuarioCreateOrConnectWithoutPlanInput
      | UsuarioCreateOrConnectWithoutPlanInput[];
    upsert?:
      | UsuarioUpsertWithWhereUniqueWithoutPlanInput
      | UsuarioUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: UsuarioCreateManyPlanInputEnvelope;
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    update?:
      | UsuarioUpdateWithWhereUniqueWithoutPlanInput
      | UsuarioUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?:
      | UsuarioUpdateManyWithWhereWithoutPlanInput
      | UsuarioUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UsuarioUncheckedUpdateManyWithoutPlanNestedInput = {
    create?:
      | XOR<
          UsuarioCreateWithoutPlanInput,
          UsuarioUncheckedCreateWithoutPlanInput
        >
      | UsuarioCreateWithoutPlanInput[]
      | UsuarioUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | UsuarioCreateOrConnectWithoutPlanInput
      | UsuarioCreateOrConnectWithoutPlanInput[];
    upsert?:
      | UsuarioUpsertWithWhereUniqueWithoutPlanInput
      | UsuarioUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: UsuarioCreateManyPlanInputEnvelope;
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[];
    update?:
      | UsuarioUpdateWithWhereUniqueWithoutPlanInput
      | UsuarioUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?:
      | UsuarioUpdateManyWithWhereWithoutPlanInput
      | UsuarioUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[];
  };

  export type PlanCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<
      PlanCreateWithoutUsuariosInput,
      PlanUncheckedCreateWithoutUsuariosInput
    >;
    connectOrCreate?: PlanCreateOrConnectWithoutUsuariosInput;
    connect?: PlanWhereUniqueInput;
  };

  export type LibroCreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          LibroCreateWithoutUsuarioInput,
          LibroUncheckedCreateWithoutUsuarioInput
        >
      | LibroCreateWithoutUsuarioInput[]
      | LibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LibroCreateOrConnectWithoutUsuarioInput
      | LibroCreateOrConnectWithoutUsuarioInput[];
    createMany?: LibroCreateManyUsuarioInputEnvelope;
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
  };

  export type NotaLibroCreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutUsuarioInput,
          NotaLibroUncheckedCreateWithoutUsuarioInput
        >
      | NotaLibroCreateWithoutUsuarioInput[]
      | NotaLibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutUsuarioInput
      | NotaLibroCreateOrConnectWithoutUsuarioInput[];
    createMany?: NotaLibroCreateManyUsuarioInputEnvelope;
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
  };

  export type RecomendacionIACreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          RecomendacionIACreateWithoutUsuarioInput,
          RecomendacionIAUncheckedCreateWithoutUsuarioInput
        >
      | RecomendacionIACreateWithoutUsuarioInput[]
      | RecomendacionIAUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | RecomendacionIACreateOrConnectWithoutUsuarioInput
      | RecomendacionIACreateOrConnectWithoutUsuarioInput[];
    createMany?: RecomendacionIACreateManyUsuarioInputEnvelope;
    connect?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
  };

  export type LogroUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutUsuarioInput,
          LogroUsuarioUncheckedCreateWithoutUsuarioInput
        >
      | LogroUsuarioCreateWithoutUsuarioInput[]
      | LogroUsuarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: LogroUsuarioCreateManyUsuarioInputEnvelope;
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
  };

  export type LibroUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          LibroCreateWithoutUsuarioInput,
          LibroUncheckedCreateWithoutUsuarioInput
        >
      | LibroCreateWithoutUsuarioInput[]
      | LibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LibroCreateOrConnectWithoutUsuarioInput
      | LibroCreateOrConnectWithoutUsuarioInput[];
    createMany?: LibroCreateManyUsuarioInputEnvelope;
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
  };

  export type NotaLibroUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutUsuarioInput,
          NotaLibroUncheckedCreateWithoutUsuarioInput
        >
      | NotaLibroCreateWithoutUsuarioInput[]
      | NotaLibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutUsuarioInput
      | NotaLibroCreateOrConnectWithoutUsuarioInput[];
    createMany?: NotaLibroCreateManyUsuarioInputEnvelope;
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
  };

  export type RecomendacionIAUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          RecomendacionIACreateWithoutUsuarioInput,
          RecomendacionIAUncheckedCreateWithoutUsuarioInput
        >
      | RecomendacionIACreateWithoutUsuarioInput[]
      | RecomendacionIAUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | RecomendacionIACreateOrConnectWithoutUsuarioInput
      | RecomendacionIACreateOrConnectWithoutUsuarioInput[];
    createMany?: RecomendacionIACreateManyUsuarioInputEnvelope;
    connect?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
  };

  export type LogroUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutUsuarioInput,
          LogroUsuarioUncheckedCreateWithoutUsuarioInput
        >
      | LogroUsuarioCreateWithoutUsuarioInput[]
      | LogroUsuarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: LogroUsuarioCreateManyUsuarioInputEnvelope;
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PlanUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<
      PlanCreateWithoutUsuariosInput,
      PlanUncheckedCreateWithoutUsuariosInput
    >;
    connectOrCreate?: PlanCreateOrConnectWithoutUsuariosInput;
    upsert?: PlanUpsertWithoutUsuariosInput;
    connect?: PlanWhereUniqueInput;
    update?: XOR<
      XOR<
        PlanUpdateToOneWithWhereWithoutUsuariosInput,
        PlanUpdateWithoutUsuariosInput
      >,
      PlanUncheckedUpdateWithoutUsuariosInput
    >;
  };

  export type LibroUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          LibroCreateWithoutUsuarioInput,
          LibroUncheckedCreateWithoutUsuarioInput
        >
      | LibroCreateWithoutUsuarioInput[]
      | LibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LibroCreateOrConnectWithoutUsuarioInput
      | LibroCreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | LibroUpsertWithWhereUniqueWithoutUsuarioInput
      | LibroUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: LibroCreateManyUsuarioInputEnvelope;
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    update?:
      | LibroUpdateWithWhereUniqueWithoutUsuarioInput
      | LibroUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | LibroUpdateManyWithWhereWithoutUsuarioInput
      | LibroUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[];
  };

  export type NotaLibroUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutUsuarioInput,
          NotaLibroUncheckedCreateWithoutUsuarioInput
        >
      | NotaLibroCreateWithoutUsuarioInput[]
      | NotaLibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutUsuarioInput
      | NotaLibroCreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | NotaLibroUpsertWithWhereUniqueWithoutUsuarioInput
      | NotaLibroUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: NotaLibroCreateManyUsuarioInputEnvelope;
    set?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    disconnect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    delete?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    update?:
      | NotaLibroUpdateWithWhereUniqueWithoutUsuarioInput
      | NotaLibroUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | NotaLibroUpdateManyWithWhereWithoutUsuarioInput
      | NotaLibroUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: NotaLibroScalarWhereInput | NotaLibroScalarWhereInput[];
  };

  export type RecomendacionIAUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          RecomendacionIACreateWithoutUsuarioInput,
          RecomendacionIAUncheckedCreateWithoutUsuarioInput
        >
      | RecomendacionIACreateWithoutUsuarioInput[]
      | RecomendacionIAUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | RecomendacionIACreateOrConnectWithoutUsuarioInput
      | RecomendacionIACreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | RecomendacionIAUpsertWithWhereUniqueWithoutUsuarioInput
      | RecomendacionIAUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: RecomendacionIACreateManyUsuarioInputEnvelope;
    set?: RecomendacionIAWhereUniqueInput | RecomendacionIAWhereUniqueInput[];
    disconnect?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
    delete?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
    connect?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
    update?:
      | RecomendacionIAUpdateWithWhereUniqueWithoutUsuarioInput
      | RecomendacionIAUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | RecomendacionIAUpdateManyWithWhereWithoutUsuarioInput
      | RecomendacionIAUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?:
      | RecomendacionIAScalarWhereInput
      | RecomendacionIAScalarWhereInput[];
  };

  export type LogroUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutUsuarioInput,
          LogroUsuarioUncheckedCreateWithoutUsuarioInput
        >
      | LogroUsuarioCreateWithoutUsuarioInput[]
      | LogroUsuarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | LogroUsuarioUpsertWithWhereUniqueWithoutUsuarioInput
      | LogroUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: LogroUsuarioCreateManyUsuarioInputEnvelope;
    set?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    disconnect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    delete?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    update?:
      | LogroUsuarioUpdateWithWhereUniqueWithoutUsuarioInput
      | LogroUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | LogroUsuarioUpdateManyWithWhereWithoutUsuarioInput
      | LogroUsuarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: LogroUsuarioScalarWhereInput | LogroUsuarioScalarWhereInput[];
  };

  export type LibroUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          LibroCreateWithoutUsuarioInput,
          LibroUncheckedCreateWithoutUsuarioInput
        >
      | LibroCreateWithoutUsuarioInput[]
      | LibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LibroCreateOrConnectWithoutUsuarioInput
      | LibroCreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | LibroUpsertWithWhereUniqueWithoutUsuarioInput
      | LibroUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: LibroCreateManyUsuarioInputEnvelope;
    set?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    disconnect?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    delete?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    connect?: LibroWhereUniqueInput | LibroWhereUniqueInput[];
    update?:
      | LibroUpdateWithWhereUniqueWithoutUsuarioInput
      | LibroUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | LibroUpdateManyWithWhereWithoutUsuarioInput
      | LibroUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: LibroScalarWhereInput | LibroScalarWhereInput[];
  };

  export type NotaLibroUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutUsuarioInput,
          NotaLibroUncheckedCreateWithoutUsuarioInput
        >
      | NotaLibroCreateWithoutUsuarioInput[]
      | NotaLibroUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutUsuarioInput
      | NotaLibroCreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | NotaLibroUpsertWithWhereUniqueWithoutUsuarioInput
      | NotaLibroUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: NotaLibroCreateManyUsuarioInputEnvelope;
    set?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    disconnect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    delete?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    update?:
      | NotaLibroUpdateWithWhereUniqueWithoutUsuarioInput
      | NotaLibroUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | NotaLibroUpdateManyWithWhereWithoutUsuarioInput
      | NotaLibroUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: NotaLibroScalarWhereInput | NotaLibroScalarWhereInput[];
  };

  export type RecomendacionIAUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          RecomendacionIACreateWithoutUsuarioInput,
          RecomendacionIAUncheckedCreateWithoutUsuarioInput
        >
      | RecomendacionIACreateWithoutUsuarioInput[]
      | RecomendacionIAUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | RecomendacionIACreateOrConnectWithoutUsuarioInput
      | RecomendacionIACreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | RecomendacionIAUpsertWithWhereUniqueWithoutUsuarioInput
      | RecomendacionIAUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: RecomendacionIACreateManyUsuarioInputEnvelope;
    set?: RecomendacionIAWhereUniqueInput | RecomendacionIAWhereUniqueInput[];
    disconnect?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
    delete?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
    connect?:
      | RecomendacionIAWhereUniqueInput
      | RecomendacionIAWhereUniqueInput[];
    update?:
      | RecomendacionIAUpdateWithWhereUniqueWithoutUsuarioInput
      | RecomendacionIAUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | RecomendacionIAUpdateManyWithWhereWithoutUsuarioInput
      | RecomendacionIAUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?:
      | RecomendacionIAScalarWhereInput
      | RecomendacionIAScalarWhereInput[];
  };

  export type LogroUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutUsuarioInput,
          LogroUsuarioUncheckedCreateWithoutUsuarioInput
        >
      | LogroUsuarioCreateWithoutUsuarioInput[]
      | LogroUsuarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput
      | LogroUsuarioCreateOrConnectWithoutUsuarioInput[];
    upsert?:
      | LogroUsuarioUpsertWithWhereUniqueWithoutUsuarioInput
      | LogroUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: LogroUsuarioCreateManyUsuarioInputEnvelope;
    set?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    disconnect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    delete?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    update?:
      | LogroUsuarioUpdateWithWhereUniqueWithoutUsuarioInput
      | LogroUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?:
      | LogroUsuarioUpdateManyWithWhereWithoutUsuarioInput
      | LogroUsuarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: LogroUsuarioScalarWhereInput | LogroUsuarioScalarWhereInput[];
  };

  export type UsuarioCreateNestedOneWithoutLibrosInput = {
    create?: XOR<
      UsuarioCreateWithoutLibrosInput,
      UsuarioUncheckedCreateWithoutLibrosInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutLibrosInput;
    connect?: UsuarioWhereUniqueInput;
  };

  export type NotaLibroCreateNestedManyWithoutLibroInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutLibroInput,
          NotaLibroUncheckedCreateWithoutLibroInput
        >
      | NotaLibroCreateWithoutLibroInput[]
      | NotaLibroUncheckedCreateWithoutLibroInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutLibroInput
      | NotaLibroCreateOrConnectWithoutLibroInput[];
    createMany?: NotaLibroCreateManyLibroInputEnvelope;
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
  };

  export type NotaLibroUncheckedCreateNestedManyWithoutLibroInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutLibroInput,
          NotaLibroUncheckedCreateWithoutLibroInput
        >
      | NotaLibroCreateWithoutLibroInput[]
      | NotaLibroUncheckedCreateWithoutLibroInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutLibroInput
      | NotaLibroCreateOrConnectWithoutLibroInput[];
    createMany?: NotaLibroCreateManyLibroInputEnvelope;
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EnumEstadoLecturaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoLectura;
  };

  export type UsuarioUpdateOneRequiredWithoutLibrosNestedInput = {
    create?: XOR<
      UsuarioCreateWithoutLibrosInput,
      UsuarioUncheckedCreateWithoutLibrosInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutLibrosInput;
    upsert?: UsuarioUpsertWithoutLibrosInput;
    connect?: UsuarioWhereUniqueInput;
    update?: XOR<
      XOR<
        UsuarioUpdateToOneWithWhereWithoutLibrosInput,
        UsuarioUpdateWithoutLibrosInput
      >,
      UsuarioUncheckedUpdateWithoutLibrosInput
    >;
  };

  export type NotaLibroUpdateManyWithoutLibroNestedInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutLibroInput,
          NotaLibroUncheckedCreateWithoutLibroInput
        >
      | NotaLibroCreateWithoutLibroInput[]
      | NotaLibroUncheckedCreateWithoutLibroInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutLibroInput
      | NotaLibroCreateOrConnectWithoutLibroInput[];
    upsert?:
      | NotaLibroUpsertWithWhereUniqueWithoutLibroInput
      | NotaLibroUpsertWithWhereUniqueWithoutLibroInput[];
    createMany?: NotaLibroCreateManyLibroInputEnvelope;
    set?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    disconnect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    delete?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    update?:
      | NotaLibroUpdateWithWhereUniqueWithoutLibroInput
      | NotaLibroUpdateWithWhereUniqueWithoutLibroInput[];
    updateMany?:
      | NotaLibroUpdateManyWithWhereWithoutLibroInput
      | NotaLibroUpdateManyWithWhereWithoutLibroInput[];
    deleteMany?: NotaLibroScalarWhereInput | NotaLibroScalarWhereInput[];
  };

  export type NotaLibroUncheckedUpdateManyWithoutLibroNestedInput = {
    create?:
      | XOR<
          NotaLibroCreateWithoutLibroInput,
          NotaLibroUncheckedCreateWithoutLibroInput
        >
      | NotaLibroCreateWithoutLibroInput[]
      | NotaLibroUncheckedCreateWithoutLibroInput[];
    connectOrCreate?:
      | NotaLibroCreateOrConnectWithoutLibroInput
      | NotaLibroCreateOrConnectWithoutLibroInput[];
    upsert?:
      | NotaLibroUpsertWithWhereUniqueWithoutLibroInput
      | NotaLibroUpsertWithWhereUniqueWithoutLibroInput[];
    createMany?: NotaLibroCreateManyLibroInputEnvelope;
    set?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    disconnect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    delete?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    connect?: NotaLibroWhereUniqueInput | NotaLibroWhereUniqueInput[];
    update?:
      | NotaLibroUpdateWithWhereUniqueWithoutLibroInput
      | NotaLibroUpdateWithWhereUniqueWithoutLibroInput[];
    updateMany?:
      | NotaLibroUpdateManyWithWhereWithoutLibroInput
      | NotaLibroUpdateManyWithWhereWithoutLibroInput[];
    deleteMany?: NotaLibroScalarWhereInput | NotaLibroScalarWhereInput[];
  };

  export type LibroCreateNestedOneWithoutNotasInput = {
    create?: XOR<
      LibroCreateWithoutNotasInput,
      LibroUncheckedCreateWithoutNotasInput
    >;
    connectOrCreate?: LibroCreateOrConnectWithoutNotasInput;
    connect?: LibroWhereUniqueInput;
  };

  export type UsuarioCreateNestedOneWithoutNotasInput = {
    create?: XOR<
      UsuarioCreateWithoutNotasInput,
      UsuarioUncheckedCreateWithoutNotasInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotasInput;
    connect?: UsuarioWhereUniqueInput;
  };

  export type LibroUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<
      LibroCreateWithoutNotasInput,
      LibroUncheckedCreateWithoutNotasInput
    >;
    connectOrCreate?: LibroCreateOrConnectWithoutNotasInput;
    upsert?: LibroUpsertWithoutNotasInput;
    connect?: LibroWhereUniqueInput;
    update?: XOR<
      XOR<
        LibroUpdateToOneWithWhereWithoutNotasInput,
        LibroUpdateWithoutNotasInput
      >,
      LibroUncheckedUpdateWithoutNotasInput
    >;
  };

  export type UsuarioUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<
      UsuarioCreateWithoutNotasInput,
      UsuarioUncheckedCreateWithoutNotasInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotasInput;
    upsert?: UsuarioUpsertWithoutNotasInput;
    connect?: UsuarioWhereUniqueInput;
    update?: XOR<
      XOR<
        UsuarioUpdateToOneWithWhereWithoutNotasInput,
        UsuarioUpdateWithoutNotasInput
      >,
      UsuarioUncheckedUpdateWithoutNotasInput
    >;
  };

  export type UsuarioCreateNestedOneWithoutRecomendacionesInput = {
    create?: XOR<
      UsuarioCreateWithoutRecomendacionesInput,
      UsuarioUncheckedCreateWithoutRecomendacionesInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecomendacionesInput;
    connect?: UsuarioWhereUniqueInput;
  };

  export type UsuarioUpdateOneRequiredWithoutRecomendacionesNestedInput = {
    create?: XOR<
      UsuarioCreateWithoutRecomendacionesInput,
      UsuarioUncheckedCreateWithoutRecomendacionesInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecomendacionesInput;
    upsert?: UsuarioUpsertWithoutRecomendacionesInput;
    connect?: UsuarioWhereUniqueInput;
    update?: XOR<
      XOR<
        UsuarioUpdateToOneWithWhereWithoutRecomendacionesInput,
        UsuarioUpdateWithoutRecomendacionesInput
      >,
      UsuarioUncheckedUpdateWithoutRecomendacionesInput
    >;
  };

  export type LogroUsuarioCreateNestedManyWithoutLogroInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutLogroInput,
          LogroUsuarioUncheckedCreateWithoutLogroInput
        >
      | LogroUsuarioCreateWithoutLogroInput[]
      | LogroUsuarioUncheckedCreateWithoutLogroInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutLogroInput
      | LogroUsuarioCreateOrConnectWithoutLogroInput[];
    createMany?: LogroUsuarioCreateManyLogroInputEnvelope;
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
  };

  export type LogroUsuarioUncheckedCreateNestedManyWithoutLogroInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutLogroInput,
          LogroUsuarioUncheckedCreateWithoutLogroInput
        >
      | LogroUsuarioCreateWithoutLogroInput[]
      | LogroUsuarioUncheckedCreateWithoutLogroInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutLogroInput
      | LogroUsuarioCreateOrConnectWithoutLogroInput[];
    createMany?: LogroUsuarioCreateManyLogroInputEnvelope;
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
  };

  export type LogroUsuarioUpdateManyWithoutLogroNestedInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutLogroInput,
          LogroUsuarioUncheckedCreateWithoutLogroInput
        >
      | LogroUsuarioCreateWithoutLogroInput[]
      | LogroUsuarioUncheckedCreateWithoutLogroInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutLogroInput
      | LogroUsuarioCreateOrConnectWithoutLogroInput[];
    upsert?:
      | LogroUsuarioUpsertWithWhereUniqueWithoutLogroInput
      | LogroUsuarioUpsertWithWhereUniqueWithoutLogroInput[];
    createMany?: LogroUsuarioCreateManyLogroInputEnvelope;
    set?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    disconnect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    delete?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    update?:
      | LogroUsuarioUpdateWithWhereUniqueWithoutLogroInput
      | LogroUsuarioUpdateWithWhereUniqueWithoutLogroInput[];
    updateMany?:
      | LogroUsuarioUpdateManyWithWhereWithoutLogroInput
      | LogroUsuarioUpdateManyWithWhereWithoutLogroInput[];
    deleteMany?: LogroUsuarioScalarWhereInput | LogroUsuarioScalarWhereInput[];
  };

  export type LogroUsuarioUncheckedUpdateManyWithoutLogroNestedInput = {
    create?:
      | XOR<
          LogroUsuarioCreateWithoutLogroInput,
          LogroUsuarioUncheckedCreateWithoutLogroInput
        >
      | LogroUsuarioCreateWithoutLogroInput[]
      | LogroUsuarioUncheckedCreateWithoutLogroInput[];
    connectOrCreate?:
      | LogroUsuarioCreateOrConnectWithoutLogroInput
      | LogroUsuarioCreateOrConnectWithoutLogroInput[];
    upsert?:
      | LogroUsuarioUpsertWithWhereUniqueWithoutLogroInput
      | LogroUsuarioUpsertWithWhereUniqueWithoutLogroInput[];
    createMany?: LogroUsuarioCreateManyLogroInputEnvelope;
    set?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    disconnect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    delete?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    connect?: LogroUsuarioWhereUniqueInput | LogroUsuarioWhereUniqueInput[];
    update?:
      | LogroUsuarioUpdateWithWhereUniqueWithoutLogroInput
      | LogroUsuarioUpdateWithWhereUniqueWithoutLogroInput[];
    updateMany?:
      | LogroUsuarioUpdateManyWithWhereWithoutLogroInput
      | LogroUsuarioUpdateManyWithWhereWithoutLogroInput[];
    deleteMany?: LogroUsuarioScalarWhereInput | LogroUsuarioScalarWhereInput[];
  };

  export type UsuarioCreateNestedOneWithoutLogrosInput = {
    create?: XOR<
      UsuarioCreateWithoutLogrosInput,
      UsuarioUncheckedCreateWithoutLogrosInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogrosInput;
    connect?: UsuarioWhereUniqueInput;
  };

  export type LogroCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<
      LogroCreateWithoutUsuariosInput,
      LogroUncheckedCreateWithoutUsuariosInput
    >;
    connectOrCreate?: LogroCreateOrConnectWithoutUsuariosInput;
    connect?: LogroWhereUniqueInput;
  };

  export type UsuarioUpdateOneRequiredWithoutLogrosNestedInput = {
    create?: XOR<
      UsuarioCreateWithoutLogrosInput,
      UsuarioUncheckedCreateWithoutLogrosInput
    >;
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogrosInput;
    upsert?: UsuarioUpsertWithoutLogrosInput;
    connect?: UsuarioWhereUniqueInput;
    update?: XOR<
      XOR<
        UsuarioUpdateToOneWithWhereWithoutLogrosInput,
        UsuarioUpdateWithoutLogrosInput
      >,
      UsuarioUncheckedUpdateWithoutLogrosInput
    >;
  };

  export type LogroUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<
      LogroCreateWithoutUsuariosInput,
      LogroUncheckedCreateWithoutUsuariosInput
    >;
    connectOrCreate?: LogroCreateOrConnectWithoutUsuariosInput;
    upsert?: LogroUpsertWithoutUsuariosInput;
    connect?: LogroWhereUniqueInput;
    update?: XOR<
      XOR<
        LogroUpdateToOneWithWhereWithoutUsuariosInput,
        LogroUpdateWithoutUsuariosInput
      >,
      LogroUncheckedUpdateWithoutUsuariosInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumEstadoLecturaFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.EstadoLectura
      | EnumEstadoLecturaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    not?: NestedEnumEstadoLecturaFilter<$PrismaModel> | $Enums.EstadoLectura;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumEstadoLecturaWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.EstadoLectura
      | EnumEstadoLecturaFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.EstadoLectura[]
      | ListEnumEstadoLecturaFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEstadoLecturaWithAggregatesFilter<$PrismaModel>
      | $Enums.EstadoLectura;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEstadoLecturaFilter<$PrismaModel>;
    _max?: NestedEnumEstadoLecturaFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type UsuarioCreateWithoutPlanInput = {
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    libros?: LibroCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIACreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioUncheckedCreateWithoutPlanInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    libros?: LibroUncheckedCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroUncheckedCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIAUncheckedCreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioUncheckedCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioCreateOrConnectWithoutPlanInput = {
    where: UsuarioWhereUniqueInput;
    create: XOR<
      UsuarioCreateWithoutPlanInput,
      UsuarioUncheckedCreateWithoutPlanInput
    >;
  };

  export type UsuarioCreateManyPlanInputEnvelope = {
    data: UsuarioCreateManyPlanInput | UsuarioCreateManyPlanInput[];
    skipDuplicates?: boolean;
  };

  export type UsuarioUpsertWithWhereUniqueWithoutPlanInput = {
    where: UsuarioWhereUniqueInput;
    update: XOR<
      UsuarioUpdateWithoutPlanInput,
      UsuarioUncheckedUpdateWithoutPlanInput
    >;
    create: XOR<
      UsuarioCreateWithoutPlanInput,
      UsuarioUncheckedCreateWithoutPlanInput
    >;
  };

  export type UsuarioUpdateWithWhereUniqueWithoutPlanInput = {
    where: UsuarioWhereUniqueInput;
    data: XOR<
      UsuarioUpdateWithoutPlanInput,
      UsuarioUncheckedUpdateWithoutPlanInput
    >;
  };

  export type UsuarioUpdateManyWithWhereWithoutPlanInput = {
    where: UsuarioScalarWhereInput;
    data: XOR<
      UsuarioUpdateManyMutationInput,
      UsuarioUncheckedUpdateManyWithoutPlanInput
    >;
  };

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[];
    OR?: UsuarioScalarWhereInput[];
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[];
    usuarioId?: IntFilter<'Usuario'> | number;
    nombre?: StringFilter<'Usuario'> | string;
    email?: StringFilter<'Usuario'> | string;
    passwordHash?: StringNullableFilter<'Usuario'> | string | null;
    firebaseUid?: StringNullableFilter<'Usuario'> | string | null;
    planId?: IntFilter<'Usuario'> | number;
    puntosXp?: IntFilter<'Usuario'> | number;
    nivel?: IntFilter<'Usuario'> | number;
    rachaLecturaDias?: IntFilter<'Usuario'> | number;
    ultimaLectura?: DateTimeNullableFilter<'Usuario'> | Date | string | null;
    fechaRegistro?: DateTimeFilter<'Usuario'> | Date | string;
  };

  export type PlanCreateWithoutUsuariosInput = {
    nombre: string;
    limiteLibros?: number | null;
    limiteIaMensual?: number | null;
    precio?: Decimal | DecimalJsLike | number | string;
  };

  export type PlanUncheckedCreateWithoutUsuariosInput = {
    planId?: number;
    nombre: string;
    limiteLibros?: number | null;
    limiteIaMensual?: number | null;
    precio?: Decimal | DecimalJsLike | number | string;
  };

  export type PlanCreateOrConnectWithoutUsuariosInput = {
    where: PlanWhereUniqueInput;
    create: XOR<
      PlanCreateWithoutUsuariosInput,
      PlanUncheckedCreateWithoutUsuariosInput
    >;
  };

  export type LibroCreateWithoutUsuarioInput = {
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
    notas?: NotaLibroCreateNestedManyWithoutLibroInput;
  };

  export type LibroUncheckedCreateWithoutUsuarioInput = {
    libroId?: number;
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
    notas?: NotaLibroUncheckedCreateNestedManyWithoutLibroInput;
  };

  export type LibroCreateOrConnectWithoutUsuarioInput = {
    where: LibroWhereUniqueInput;
    create: XOR<
      LibroCreateWithoutUsuarioInput,
      LibroUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type LibroCreateManyUsuarioInputEnvelope = {
    data: LibroCreateManyUsuarioInput | LibroCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
  };

  export type NotaLibroCreateWithoutUsuarioInput = {
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
    libro: LibroCreateNestedOneWithoutNotasInput;
  };

  export type NotaLibroUncheckedCreateWithoutUsuarioInput = {
    notaId?: number;
    libroId: number;
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
  };

  export type NotaLibroCreateOrConnectWithoutUsuarioInput = {
    where: NotaLibroWhereUniqueInput;
    create: XOR<
      NotaLibroCreateWithoutUsuarioInput,
      NotaLibroUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type NotaLibroCreateManyUsuarioInputEnvelope = {
    data: NotaLibroCreateManyUsuarioInput | NotaLibroCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
  };

  export type RecomendacionIACreateWithoutUsuarioInput = {
    promptEnviado: string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: string | null;
    fechaConsulta?: Date | string;
  };

  export type RecomendacionIAUncheckedCreateWithoutUsuarioInput = {
    recomendacionId?: number;
    promptEnviado: string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: string | null;
    fechaConsulta?: Date | string;
  };

  export type RecomendacionIACreateOrConnectWithoutUsuarioInput = {
    where: RecomendacionIAWhereUniqueInput;
    create: XOR<
      RecomendacionIACreateWithoutUsuarioInput,
      RecomendacionIAUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type RecomendacionIACreateManyUsuarioInputEnvelope = {
    data:
      | RecomendacionIACreateManyUsuarioInput
      | RecomendacionIACreateManyUsuarioInput[];
    skipDuplicates?: boolean;
  };

  export type LogroUsuarioCreateWithoutUsuarioInput = {
    fechaObtencion?: Date | string;
    logro: LogroCreateNestedOneWithoutUsuariosInput;
  };

  export type LogroUsuarioUncheckedCreateWithoutUsuarioInput = {
    logroId: number;
    fechaObtencion?: Date | string;
  };

  export type LogroUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: LogroUsuarioWhereUniqueInput;
    create: XOR<
      LogroUsuarioCreateWithoutUsuarioInput,
      LogroUsuarioUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type LogroUsuarioCreateManyUsuarioInputEnvelope = {
    data:
      | LogroUsuarioCreateManyUsuarioInput
      | LogroUsuarioCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
  };

  export type PlanUpsertWithoutUsuariosInput = {
    update: XOR<
      PlanUpdateWithoutUsuariosInput,
      PlanUncheckedUpdateWithoutUsuariosInput
    >;
    create: XOR<
      PlanCreateWithoutUsuariosInput,
      PlanUncheckedCreateWithoutUsuariosInput
    >;
    where?: PlanWhereInput;
  };

  export type PlanUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PlanWhereInput;
    data: XOR<
      PlanUpdateWithoutUsuariosInput,
      PlanUncheckedUpdateWithoutUsuariosInput
    >;
  };

  export type PlanUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    limiteLibros?: NullableIntFieldUpdateOperationsInput | number | null;
    limiteIaMensual?: NullableIntFieldUpdateOperationsInput | number | null;
    precio?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type PlanUncheckedUpdateWithoutUsuariosInput = {
    planId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    limiteLibros?: NullableIntFieldUpdateOperationsInput | number | null;
    limiteIaMensual?: NullableIntFieldUpdateOperationsInput | number | null;
    precio?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type LibroUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LibroWhereUniqueInput;
    update: XOR<
      LibroUpdateWithoutUsuarioInput,
      LibroUncheckedUpdateWithoutUsuarioInput
    >;
    create: XOR<
      LibroCreateWithoutUsuarioInput,
      LibroUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type LibroUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LibroWhereUniqueInput;
    data: XOR<
      LibroUpdateWithoutUsuarioInput,
      LibroUncheckedUpdateWithoutUsuarioInput
    >;
  };

  export type LibroUpdateManyWithWhereWithoutUsuarioInput = {
    where: LibroScalarWhereInput;
    data: XOR<
      LibroUpdateManyMutationInput,
      LibroUncheckedUpdateManyWithoutUsuarioInput
    >;
  };

  export type LibroScalarWhereInput = {
    AND?: LibroScalarWhereInput | LibroScalarWhereInput[];
    OR?: LibroScalarWhereInput[];
    NOT?: LibroScalarWhereInput | LibroScalarWhereInput[];
    libroId?: IntFilter<'Libro'> | number;
    usuarioId?: IntFilter<'Libro'> | number;
    isbn?: StringNullableFilter<'Libro'> | string | null;
    titulo?: StringFilter<'Libro'> | string;
    autor?: StringNullableFilter<'Libro'> | string | null;
    descripcion?: StringNullableFilter<'Libro'> | string | null;
    imagenUrl?: StringNullableFilter<'Libro'> | string | null;
    genero?: StringNullableFilter<'Libro'> | string | null;
    paginasTotales?: IntNullableFilter<'Libro'> | number | null;
    paginasLeidas?: IntFilter<'Libro'> | number;
    esAdquirido?: BoolFilter<'Libro'> | boolean;
    estadoLectura?: EnumEstadoLecturaFilter<'Libro'> | $Enums.EstadoLectura;
    estaPrestado?: BoolFilter<'Libro'> | boolean;
    prestadoANombre?: StringNullableFilter<'Libro'> | string | null;
    fechaPrestamo?: DateTimeNullableFilter<'Libro'> | Date | string | null;
    fechaAgregado?: DateTimeFilter<'Libro'> | Date | string;
  };

  export type NotaLibroUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotaLibroWhereUniqueInput;
    update: XOR<
      NotaLibroUpdateWithoutUsuarioInput,
      NotaLibroUncheckedUpdateWithoutUsuarioInput
    >;
    create: XOR<
      NotaLibroCreateWithoutUsuarioInput,
      NotaLibroUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type NotaLibroUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotaLibroWhereUniqueInput;
    data: XOR<
      NotaLibroUpdateWithoutUsuarioInput,
      NotaLibroUncheckedUpdateWithoutUsuarioInput
    >;
  };

  export type NotaLibroUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotaLibroScalarWhereInput;
    data: XOR<
      NotaLibroUpdateManyMutationInput,
      NotaLibroUncheckedUpdateManyWithoutUsuarioInput
    >;
  };

  export type NotaLibroScalarWhereInput = {
    AND?: NotaLibroScalarWhereInput | NotaLibroScalarWhereInput[];
    OR?: NotaLibroScalarWhereInput[];
    NOT?: NotaLibroScalarWhereInput | NotaLibroScalarWhereInput[];
    notaId?: IntFilter<'NotaLibro'> | number;
    libroId?: IntFilter<'NotaLibro'> | number;
    usuarioId?: IntFilter<'NotaLibro'> | number;
    contenido?: StringFilter<'NotaLibro'> | string;
    paginaReferencia?: IntNullableFilter<'NotaLibro'> | number | null;
    esCitaDestacada?: BoolFilter<'NotaLibro'> | boolean;
    fechaCreacion?: DateTimeFilter<'NotaLibro'> | Date | string;
  };

  export type RecomendacionIAUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RecomendacionIAWhereUniqueInput;
    update: XOR<
      RecomendacionIAUpdateWithoutUsuarioInput,
      RecomendacionIAUncheckedUpdateWithoutUsuarioInput
    >;
    create: XOR<
      RecomendacionIACreateWithoutUsuarioInput,
      RecomendacionIAUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type RecomendacionIAUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RecomendacionIAWhereUniqueInput;
    data: XOR<
      RecomendacionIAUpdateWithoutUsuarioInput,
      RecomendacionIAUncheckedUpdateWithoutUsuarioInput
    >;
  };

  export type RecomendacionIAUpdateManyWithWhereWithoutUsuarioInput = {
    where: RecomendacionIAScalarWhereInput;
    data: XOR<
      RecomendacionIAUpdateManyMutationInput,
      RecomendacionIAUncheckedUpdateManyWithoutUsuarioInput
    >;
  };

  export type RecomendacionIAScalarWhereInput = {
    AND?: RecomendacionIAScalarWhereInput | RecomendacionIAScalarWhereInput[];
    OR?: RecomendacionIAScalarWhereInput[];
    NOT?: RecomendacionIAScalarWhereInput | RecomendacionIAScalarWhereInput[];
    recomendacionId?: IntFilter<'RecomendacionIA'> | number;
    usuarioId?: IntFilter<'RecomendacionIA'> | number;
    promptEnviado?: StringFilter<'RecomendacionIA'> | string;
    respuestaIaJson?: JsonNullableFilter<'RecomendacionIA'>;
    modeloIa?: StringNullableFilter<'RecomendacionIA'> | string | null;
    fechaConsulta?: DateTimeFilter<'RecomendacionIA'> | Date | string;
  };

  export type LogroUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LogroUsuarioWhereUniqueInput;
    update: XOR<
      LogroUsuarioUpdateWithoutUsuarioInput,
      LogroUsuarioUncheckedUpdateWithoutUsuarioInput
    >;
    create: XOR<
      LogroUsuarioCreateWithoutUsuarioInput,
      LogroUsuarioUncheckedCreateWithoutUsuarioInput
    >;
  };

  export type LogroUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LogroUsuarioWhereUniqueInput;
    data: XOR<
      LogroUsuarioUpdateWithoutUsuarioInput,
      LogroUsuarioUncheckedUpdateWithoutUsuarioInput
    >;
  };

  export type LogroUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: LogroUsuarioScalarWhereInput;
    data: XOR<
      LogroUsuarioUpdateManyMutationInput,
      LogroUsuarioUncheckedUpdateManyWithoutUsuarioInput
    >;
  };

  export type LogroUsuarioScalarWhereInput = {
    AND?: LogroUsuarioScalarWhereInput | LogroUsuarioScalarWhereInput[];
    OR?: LogroUsuarioScalarWhereInput[];
    NOT?: LogroUsuarioScalarWhereInput | LogroUsuarioScalarWhereInput[];
    usuarioId?: IntFilter<'LogroUsuario'> | number;
    logroId?: IntFilter<'LogroUsuario'> | number;
    fechaObtencion?: DateTimeFilter<'LogroUsuario'> | Date | string;
  };

  export type UsuarioCreateWithoutLibrosInput = {
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    plan?: PlanCreateNestedOneWithoutUsuariosInput;
    notas?: NotaLibroCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIACreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioUncheckedCreateWithoutLibrosInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    planId?: number;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    notas?: NotaLibroUncheckedCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIAUncheckedCreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioUncheckedCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioCreateOrConnectWithoutLibrosInput = {
    where: UsuarioWhereUniqueInput;
    create: XOR<
      UsuarioCreateWithoutLibrosInput,
      UsuarioUncheckedCreateWithoutLibrosInput
    >;
  };

  export type NotaLibroCreateWithoutLibroInput = {
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
    usuario: UsuarioCreateNestedOneWithoutNotasInput;
  };

  export type NotaLibroUncheckedCreateWithoutLibroInput = {
    notaId?: number;
    usuarioId: number;
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
  };

  export type NotaLibroCreateOrConnectWithoutLibroInput = {
    where: NotaLibroWhereUniqueInput;
    create: XOR<
      NotaLibroCreateWithoutLibroInput,
      NotaLibroUncheckedCreateWithoutLibroInput
    >;
  };

  export type NotaLibroCreateManyLibroInputEnvelope = {
    data: NotaLibroCreateManyLibroInput | NotaLibroCreateManyLibroInput[];
    skipDuplicates?: boolean;
  };

  export type UsuarioUpsertWithoutLibrosInput = {
    update: XOR<
      UsuarioUpdateWithoutLibrosInput,
      UsuarioUncheckedUpdateWithoutLibrosInput
    >;
    create: XOR<
      UsuarioCreateWithoutLibrosInput,
      UsuarioUncheckedCreateWithoutLibrosInput
    >;
    where?: UsuarioWhereInput;
  };

  export type UsuarioUpdateToOneWithWhereWithoutLibrosInput = {
    where?: UsuarioWhereInput;
    data: XOR<
      UsuarioUpdateWithoutLibrosInput,
      UsuarioUncheckedUpdateWithoutLibrosInput
    >;
  };

  export type UsuarioUpdateWithoutLibrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: PlanUpdateOneRequiredWithoutUsuariosNestedInput;
    notas?: NotaLibroUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioUncheckedUpdateWithoutLibrosInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: IntFieldUpdateOperationsInput | number;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: NotaLibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUncheckedUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput;
  };

  export type NotaLibroUpsertWithWhereUniqueWithoutLibroInput = {
    where: NotaLibroWhereUniqueInput;
    update: XOR<
      NotaLibroUpdateWithoutLibroInput,
      NotaLibroUncheckedUpdateWithoutLibroInput
    >;
    create: XOR<
      NotaLibroCreateWithoutLibroInput,
      NotaLibroUncheckedCreateWithoutLibroInput
    >;
  };

  export type NotaLibroUpdateWithWhereUniqueWithoutLibroInput = {
    where: NotaLibroWhereUniqueInput;
    data: XOR<
      NotaLibroUpdateWithoutLibroInput,
      NotaLibroUncheckedUpdateWithoutLibroInput
    >;
  };

  export type NotaLibroUpdateManyWithWhereWithoutLibroInput = {
    where: NotaLibroScalarWhereInput;
    data: XOR<
      NotaLibroUpdateManyMutationInput,
      NotaLibroUncheckedUpdateManyWithoutLibroInput
    >;
  };

  export type LibroCreateWithoutNotasInput = {
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
    usuario: UsuarioCreateNestedOneWithoutLibrosInput;
  };

  export type LibroUncheckedCreateWithoutNotasInput = {
    libroId?: number;
    usuarioId: number;
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
  };

  export type LibroCreateOrConnectWithoutNotasInput = {
    where: LibroWhereUniqueInput;
    create: XOR<
      LibroCreateWithoutNotasInput,
      LibroUncheckedCreateWithoutNotasInput
    >;
  };

  export type UsuarioCreateWithoutNotasInput = {
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    plan?: PlanCreateNestedOneWithoutUsuariosInput;
    libros?: LibroCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIACreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioUncheckedCreateWithoutNotasInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    planId?: number;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    libros?: LibroUncheckedCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIAUncheckedCreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioUncheckedCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioCreateOrConnectWithoutNotasInput = {
    where: UsuarioWhereUniqueInput;
    create: XOR<
      UsuarioCreateWithoutNotasInput,
      UsuarioUncheckedCreateWithoutNotasInput
    >;
  };

  export type LibroUpsertWithoutNotasInput = {
    update: XOR<
      LibroUpdateWithoutNotasInput,
      LibroUncheckedUpdateWithoutNotasInput
    >;
    create: XOR<
      LibroCreateWithoutNotasInput,
      LibroUncheckedCreateWithoutNotasInput
    >;
    where?: LibroWhereInput;
  };

  export type LibroUpdateToOneWithWhereWithoutNotasInput = {
    where?: LibroWhereInput;
    data: XOR<
      LibroUpdateWithoutNotasInput,
      LibroUncheckedUpdateWithoutNotasInput
    >;
  };

  export type LibroUpdateWithoutNotasInput = {
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: UsuarioUpdateOneRequiredWithoutLibrosNestedInput;
  };

  export type LibroUncheckedUpdateWithoutNotasInput = {
    libroId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UsuarioUpsertWithoutNotasInput = {
    update: XOR<
      UsuarioUpdateWithoutNotasInput,
      UsuarioUncheckedUpdateWithoutNotasInput
    >;
    create: XOR<
      UsuarioCreateWithoutNotasInput,
      UsuarioUncheckedCreateWithoutNotasInput
    >;
    where?: UsuarioWhereInput;
  };

  export type UsuarioUpdateToOneWithWhereWithoutNotasInput = {
    where?: UsuarioWhereInput;
    data: XOR<
      UsuarioUpdateWithoutNotasInput,
      UsuarioUncheckedUpdateWithoutNotasInput
    >;
  };

  export type UsuarioUpdateWithoutNotasInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: PlanUpdateOneRequiredWithoutUsuariosNestedInput;
    libros?: LibroUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioUncheckedUpdateWithoutNotasInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: IntFieldUpdateOperationsInput | number;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    libros?: LibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUncheckedUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioCreateWithoutRecomendacionesInput = {
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    plan?: PlanCreateNestedOneWithoutUsuariosInput;
    libros?: LibroCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroCreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioUncheckedCreateWithoutRecomendacionesInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    planId?: number;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    libros?: LibroUncheckedCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroUncheckedCreateNestedManyWithoutUsuarioInput;
    logros?: LogroUsuarioUncheckedCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioCreateOrConnectWithoutRecomendacionesInput = {
    where: UsuarioWhereUniqueInput;
    create: XOR<
      UsuarioCreateWithoutRecomendacionesInput,
      UsuarioUncheckedCreateWithoutRecomendacionesInput
    >;
  };

  export type UsuarioUpsertWithoutRecomendacionesInput = {
    update: XOR<
      UsuarioUpdateWithoutRecomendacionesInput,
      UsuarioUncheckedUpdateWithoutRecomendacionesInput
    >;
    create: XOR<
      UsuarioCreateWithoutRecomendacionesInput,
      UsuarioUncheckedCreateWithoutRecomendacionesInput
    >;
    where?: UsuarioWhereInput;
  };

  export type UsuarioUpdateToOneWithWhereWithoutRecomendacionesInput = {
    where?: UsuarioWhereInput;
    data: XOR<
      UsuarioUpdateWithoutRecomendacionesInput,
      UsuarioUncheckedUpdateWithoutRecomendacionesInput
    >;
  };

  export type UsuarioUpdateWithoutRecomendacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: PlanUpdateOneRequiredWithoutUsuariosNestedInput;
    libros?: LibroUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioUncheckedUpdateWithoutRecomendacionesInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: IntFieldUpdateOperationsInput | number;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    libros?: LibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput;
  };

  export type LogroUsuarioCreateWithoutLogroInput = {
    fechaObtencion?: Date | string;
    usuario: UsuarioCreateNestedOneWithoutLogrosInput;
  };

  export type LogroUsuarioUncheckedCreateWithoutLogroInput = {
    usuarioId: number;
    fechaObtencion?: Date | string;
  };

  export type LogroUsuarioCreateOrConnectWithoutLogroInput = {
    where: LogroUsuarioWhereUniqueInput;
    create: XOR<
      LogroUsuarioCreateWithoutLogroInput,
      LogroUsuarioUncheckedCreateWithoutLogroInput
    >;
  };

  export type LogroUsuarioCreateManyLogroInputEnvelope = {
    data: LogroUsuarioCreateManyLogroInput | LogroUsuarioCreateManyLogroInput[];
    skipDuplicates?: boolean;
  };

  export type LogroUsuarioUpsertWithWhereUniqueWithoutLogroInput = {
    where: LogroUsuarioWhereUniqueInput;
    update: XOR<
      LogroUsuarioUpdateWithoutLogroInput,
      LogroUsuarioUncheckedUpdateWithoutLogroInput
    >;
    create: XOR<
      LogroUsuarioCreateWithoutLogroInput,
      LogroUsuarioUncheckedCreateWithoutLogroInput
    >;
  };

  export type LogroUsuarioUpdateWithWhereUniqueWithoutLogroInput = {
    where: LogroUsuarioWhereUniqueInput;
    data: XOR<
      LogroUsuarioUpdateWithoutLogroInput,
      LogroUsuarioUncheckedUpdateWithoutLogroInput
    >;
  };

  export type LogroUsuarioUpdateManyWithWhereWithoutLogroInput = {
    where: LogroUsuarioScalarWhereInput;
    data: XOR<
      LogroUsuarioUpdateManyMutationInput,
      LogroUsuarioUncheckedUpdateManyWithoutLogroInput
    >;
  };

  export type UsuarioCreateWithoutLogrosInput = {
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    plan?: PlanCreateNestedOneWithoutUsuariosInput;
    libros?: LibroCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIACreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioUncheckedCreateWithoutLogrosInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    planId?: number;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
    libros?: LibroUncheckedCreateNestedManyWithoutUsuarioInput;
    notas?: NotaLibroUncheckedCreateNestedManyWithoutUsuarioInput;
    recomendaciones?: RecomendacionIAUncheckedCreateNestedManyWithoutUsuarioInput;
  };

  export type UsuarioCreateOrConnectWithoutLogrosInput = {
    where: UsuarioWhereUniqueInput;
    create: XOR<
      UsuarioCreateWithoutLogrosInput,
      UsuarioUncheckedCreateWithoutLogrosInput
    >;
  };

  export type LogroCreateWithoutUsuariosInput = {
    nombre?: string | null;
    descripcion?: string | null;
    puntosRecompensa?: number | null;
  };

  export type LogroUncheckedCreateWithoutUsuariosInput = {
    logroId?: number;
    nombre?: string | null;
    descripcion?: string | null;
    puntosRecompensa?: number | null;
  };

  export type LogroCreateOrConnectWithoutUsuariosInput = {
    where: LogroWhereUniqueInput;
    create: XOR<
      LogroCreateWithoutUsuariosInput,
      LogroUncheckedCreateWithoutUsuariosInput
    >;
  };

  export type UsuarioUpsertWithoutLogrosInput = {
    update: XOR<
      UsuarioUpdateWithoutLogrosInput,
      UsuarioUncheckedUpdateWithoutLogrosInput
    >;
    create: XOR<
      UsuarioCreateWithoutLogrosInput,
      UsuarioUncheckedCreateWithoutLogrosInput
    >;
    where?: UsuarioWhereInput;
  };

  export type UsuarioUpdateToOneWithWhereWithoutLogrosInput = {
    where?: UsuarioWhereInput;
    data: XOR<
      UsuarioUpdateWithoutLogrosInput,
      UsuarioUncheckedUpdateWithoutLogrosInput
    >;
  };

  export type UsuarioUpdateWithoutLogrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: PlanUpdateOneRequiredWithoutUsuariosNestedInput;
    libros?: LibroUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioUncheckedUpdateWithoutLogrosInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    planId?: IntFieldUpdateOperationsInput | number;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    libros?: LibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUncheckedUpdateManyWithoutUsuarioNestedInput;
  };

  export type LogroUpsertWithoutUsuariosInput = {
    update: XOR<
      LogroUpdateWithoutUsuariosInput,
      LogroUncheckedUpdateWithoutUsuariosInput
    >;
    create: XOR<
      LogroCreateWithoutUsuariosInput,
      LogroUncheckedCreateWithoutUsuariosInput
    >;
    where?: LogroWhereInput;
  };

  export type LogroUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: LogroWhereInput;
    data: XOR<
      LogroUpdateWithoutUsuariosInput,
      LogroUncheckedUpdateWithoutUsuariosInput
    >;
  };

  export type LogroUpdateWithoutUsuariosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosRecompensa?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type LogroUncheckedUpdateWithoutUsuariosInput = {
    logroId?: IntFieldUpdateOperationsInput | number;
    nombre?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosRecompensa?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type UsuarioCreateManyPlanInput = {
    usuarioId?: number;
    nombre: string;
    email: string;
    passwordHash?: string | null;
    firebaseUid?: string | null;
    puntosXp?: number;
    nivel?: number;
    rachaLecturaDias?: number;
    ultimaLectura?: Date | string | null;
    fechaRegistro?: Date | string;
  };

  export type UsuarioUpdateWithoutPlanInput = {
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    libros?: LibroUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioUncheckedUpdateWithoutPlanInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
    libros?: LibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    notas?: NotaLibroUncheckedUpdateManyWithoutUsuarioNestedInput;
    recomendaciones?: RecomendacionIAUncheckedUpdateManyWithoutUsuarioNestedInput;
    logros?: LogroUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput;
  };

  export type UsuarioUncheckedUpdateManyWithoutPlanInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    nombre?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    firebaseUid?: NullableStringFieldUpdateOperationsInput | string | null;
    puntosXp?: IntFieldUpdateOperationsInput | number;
    nivel?: IntFieldUpdateOperationsInput | number;
    rachaLecturaDias?: IntFieldUpdateOperationsInput | number;
    ultimaLectura?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LibroCreateManyUsuarioInput = {
    libroId?: number;
    isbn?: string | null;
    titulo: string;
    autor?: string | null;
    descripcion?: string | null;
    imagenUrl?: string | null;
    genero?: string | null;
    paginasTotales?: number | null;
    paginasLeidas?: number;
    esAdquirido?: boolean;
    estadoLectura: $Enums.EstadoLectura;
    estaPrestado?: boolean;
    prestadoANombre?: string | null;
    fechaPrestamo?: Date | string | null;
    fechaAgregado?: Date | string;
  };

  export type NotaLibroCreateManyUsuarioInput = {
    notaId?: number;
    libroId: number;
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
  };

  export type RecomendacionIACreateManyUsuarioInput = {
    recomendacionId?: number;
    promptEnviado: string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: string | null;
    fechaConsulta?: Date | string;
  };

  export type LogroUsuarioCreateManyUsuarioInput = {
    logroId: number;
    fechaObtencion?: Date | string;
  };

  export type LibroUpdateWithoutUsuarioInput = {
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: NotaLibroUpdateManyWithoutLibroNestedInput;
  };

  export type LibroUncheckedUpdateWithoutUsuarioInput = {
    libroId?: IntFieldUpdateOperationsInput | number;
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: NotaLibroUncheckedUpdateManyWithoutLibroNestedInput;
  };

  export type LibroUncheckedUpdateManyWithoutUsuarioInput = {
    libroId?: IntFieldUpdateOperationsInput | number;
    isbn?: NullableStringFieldUpdateOperationsInput | string | null;
    titulo?: StringFieldUpdateOperationsInput | string;
    autor?: NullableStringFieldUpdateOperationsInput | string | null;
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null;
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    genero?: NullableStringFieldUpdateOperationsInput | string | null;
    paginasTotales?: NullableIntFieldUpdateOperationsInput | number | null;
    paginasLeidas?: IntFieldUpdateOperationsInput | number;
    esAdquirido?: BoolFieldUpdateOperationsInput | boolean;
    estadoLectura?:
      | EnumEstadoLecturaFieldUpdateOperationsInput
      | $Enums.EstadoLectura;
    estaPrestado?: BoolFieldUpdateOperationsInput | boolean;
    prestadoANombre?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaPrestamo?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    fechaAgregado?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotaLibroUpdateWithoutUsuarioInput = {
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
    libro?: LibroUpdateOneRequiredWithoutNotasNestedInput;
  };

  export type NotaLibroUncheckedUpdateWithoutUsuarioInput = {
    notaId?: IntFieldUpdateOperationsInput | number;
    libroId?: IntFieldUpdateOperationsInput | number;
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotaLibroUncheckedUpdateManyWithoutUsuarioInput = {
    notaId?: IntFieldUpdateOperationsInput | number;
    libroId?: IntFieldUpdateOperationsInput | number;
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecomendacionIAUpdateWithoutUsuarioInput = {
    promptEnviado?: StringFieldUpdateOperationsInput | string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaConsulta?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecomendacionIAUncheckedUpdateWithoutUsuarioInput = {
    recomendacionId?: IntFieldUpdateOperationsInput | number;
    promptEnviado?: StringFieldUpdateOperationsInput | string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaConsulta?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RecomendacionIAUncheckedUpdateManyWithoutUsuarioInput = {
    recomendacionId?: IntFieldUpdateOperationsInput | number;
    promptEnviado?: StringFieldUpdateOperationsInput | string;
    respuestaIaJson?: NullableJsonNullValueInput | InputJsonValue;
    modeloIa?: NullableStringFieldUpdateOperationsInput | string | null;
    fechaConsulta?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LogroUsuarioUpdateWithoutUsuarioInput = {
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
    logro?: LogroUpdateOneRequiredWithoutUsuariosNestedInput;
  };

  export type LogroUsuarioUncheckedUpdateWithoutUsuarioInput = {
    logroId?: IntFieldUpdateOperationsInput | number;
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LogroUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    logroId?: IntFieldUpdateOperationsInput | number;
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotaLibroCreateManyLibroInput = {
    notaId?: number;
    usuarioId: number;
    contenido: string;
    paginaReferencia?: number | null;
    esCitaDestacada?: boolean;
    fechaCreacion?: Date | string;
  };

  export type NotaLibroUpdateWithoutLibroInput = {
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: UsuarioUpdateOneRequiredWithoutNotasNestedInput;
  };

  export type NotaLibroUncheckedUpdateWithoutLibroInput = {
    notaId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotaLibroUncheckedUpdateManyWithoutLibroInput = {
    notaId?: IntFieldUpdateOperationsInput | number;
    usuarioId?: IntFieldUpdateOperationsInput | number;
    contenido?: StringFieldUpdateOperationsInput | string;
    paginaReferencia?: NullableIntFieldUpdateOperationsInput | number | null;
    esCitaDestacada?: BoolFieldUpdateOperationsInput | boolean;
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LogroUsuarioCreateManyLogroInput = {
    usuarioId: number;
    fechaObtencion?: Date | string;
  };

  export type LogroUsuarioUpdateWithoutLogroInput = {
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: UsuarioUpdateOneRequiredWithoutLogrosNestedInput;
  };

  export type LogroUsuarioUncheckedUpdateWithoutLogroInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LogroUsuarioUncheckedUpdateManyWithoutLogroInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number;
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
