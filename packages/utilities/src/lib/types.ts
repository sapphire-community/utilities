export type Primitive = string | number | boolean | bigint | symbol | undefined | null;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Builtin = Primitive | Function | Date | Error | RegExp;

export type DeepReadonly<T> = T extends Builtin
	? T
	: // Skip class constructors and functions
		T extends AbstractConstructor<unknown> | ((...args: any[]) => unknown)
		? T
		: T extends ReadonlyMap<infer K, infer V>
			? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
			: T extends ReadonlySet<infer U>
				? ReadonlySet<DeepReadonly<U>>
				: T extends readonly [] | readonly [...never[]]
					? readonly []
					: T extends readonly [infer U, ...infer V]
						? readonly [DeepReadonly<U>, ...DeepReadonly<V>]
						: T extends readonly [...infer U, infer V]
							? readonly [...DeepReadonly<U>, DeepReadonly<V>]
							: T extends ReadonlyArray<infer U>
								? ReadonlyArray<DeepReadonly<U>>
								: T extends object
									? { readonly [K in keyof T]: DeepReadonly<T[K]> }
									: unknown;

export type DeepRequired<T> = T extends Builtin
	? NonNullable<T>
	: T extends Map<infer K, infer V>
		? Map<DeepRequired<K>, DeepRequired<V>>
		: T extends ReadonlyMap<infer K, infer V>
			? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
			: T extends WeakMap<infer K, infer V>
				? WeakMap<DeepRequired<K>, DeepRequired<V>>
				: T extends Set<infer U>
					? Set<DeepRequired<U>>
					: T extends ReadonlySet<infer U>
						? ReadonlySet<DeepRequired<U>>
						: T extends WeakSet<infer U>
							? WeakSet<DeepRequired<U>>
							: T extends Promise<infer U>
								? Promise<DeepRequired<U>>
								: T extends {} // eslint-disable-line @typescript-eslint/ban-types
									? { [K in keyof T]-?: DeepRequired<T[K]> }
									: NonNullable<T>;

export type RequiredExcept<T, K extends keyof T> = Partial<Pick<T, K>> & Required<Omit<T, K>>;

export type PartialRequired<T, K extends keyof T> = Partial<Omit<T, K>> & Required<Pick<T, K>>;

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends Array<infer U>
		? Array<DeepPartial<U>>
		: T[P] extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: DeepPartial<T[P]>;
};

export type ArgumentTypes<F extends (...args: any[]) => unknown> = F extends (...args: infer A) => any ? A : never;

/**
 * A readonly array of any values.
 */
export type AnyReadonlyArray = readonly any[];

/**
 * A generic constructor with parameters
 */
export type Ctor<A extends AnyReadonlyArray = readonly any[], R = any> = new (...args: A) => R;

/**
 * A generic abstract constructor with parameters
 */
export type AbstractCtor<A extends AnyReadonlyArray = readonly any[], R = any> = abstract new (...args: A) => R;

/**
 * A generic constructor without parameters
 */
export type Constructor<T> = new (...args: any[]) => T;

/**
 * A generic abstract constructor without parameters
 */
export type AbstractConstructor<T> = abstract new (...args: any[]) => T;

/**
 * Gets the first argument of any given function
 */
export type FirstArgument<T> = T extends (arg1: infer U, ...args: unknown[]) => unknown ? U : unknown;

/**
 * Gets the second argument of any given function
 */
export type SecondArgument<T> = T extends (arg1: unknown, arg2: infer U, ...args: unknown[]) => unknown ? U : unknown;

/**
 * ReturnType for a function that can return either a value or a `Promise` with that value
 */
export type Awaitable<T> = PromiseLike<T> | T;

/**
 * Type union for the full 2 billion dollar mistake in the JavaScript ecosystem
 */
export type Nullish = null | undefined;

/**
 * Similar to the built in {@link NonNullable}, but properly removes `null` from all keys in the class or interface
 * This does not recurse deeply, for that use {@link DeepRequired}
 */
export type NonNullableProperties<T = unknown> = {
	[P in keyof T]: NonNullable<T[P]>;
};

/**
 * An object that is non nullable, to bypass TypeScript not easily working with `Record<PropertyKey, unknown>` in various instances.
 *
 * @deprecated Use the `object` type instead.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type NonNullObject = {} & object;

/**
 * An object that can have any structure, this is an alternative to {@link NonNullObject} for situations where
 * that leads to unexpected type resolutions.
 *
 * Note that this is still a strictly typed type, it is not simply aliasing `any`
 *
 * @deprecated Use the `object` type instead.
 */
export type AnyObject<T> = {
	[K in keyof T]: T[K];
};

/**
 * An utility type that fuses intersections of objects.
 *
 * @example
 *
 * ```typescript
 * type Objects = {
 *   foo: string;
 *   bar: number;
 * } & {
 *   hello: boolean;
 *   world: bigint;
 * };
 *
 * type PrettyObjects = PrettifyObject<Objects>;
 * // {
 * //   foo: string;
 * //   bar: number;
 * //   hello: boolean;
 * //   world: bigint
 * // }
 * ```
 */
export type PrettifyObject<T extends object> = {
	[K in keyof T]: T[K];
};

/**
 * Gets all the keys (as a string union) from a type `T` that match value `V`
 * @example
 * ```typescript
 * interface Sample {
 * 	id: string;
 * 	name: string | null;
 * 	middleName?: string;
 * 	lastName: string;
 * 	hobbies: readonly string[];
 * }
 *
 * type BB = PickByValue<Sample, string>;
 * // Expected:
 * // "id" | "lastName"
 * ```
 */
export type PickByValue<T, V> = {
	[P in keyof T]: T[P] extends V ? P : never;
}[keyof T] &
	keyof T;

/**
 * Transforms a `readonly` type to be mutable
 * @example
 * ```typescript
 * interface Sample {
 * 	id: string;
 * 	hobbies: readonly string[];
 * }
 *
 * type BB = Mutable<Sample>;
 * // Expected:
 * // {
 * //    id: string;
 * //    hobbies: string[];
 * // }
 * ```
 */
export type Mutable<T> = {
	-readonly [P in keyof T]: T[P] extends Array<unknown> | object ? Mutable<T[P]> : T[P];
};

/**
 * Transforms every key in an object to be strictly required, essentially removing `undefined` and `null` from the type.
 * @example
 * ```typescript
 * interface Sample {
 * 	id: string;
 * 	name: string | null;
 * 	middleName?: string;
 * }
 *
 * type BB = StrictRequired<Sample>;
 * // Expected:
 * // {
 * //    id: string;
 * //    name: string;
 * //    middleName: string;
 * // }
 * ```
 */
export type StrictRequired<T> = {
	[P in keyof T]-?: NonNullable<T[P]>;
};

/**
 * Gets a union type of all the keys that are in an array.
 * @example
 * ```typescript
 * const sample = [1, 2, '3', true];
 *
 * type arrayUnion = ArrayElementType<typeof sample>;
 * // Expected: string | number | boolean
 * ```
 */
export type ArrayElementType<T> = T extends (infer K)[] ? K : T extends readonly (infer RK)[] ? RK : T;

/**
 * A type utility that allows branching of types depending on the `Value` parameter.
 * @example
 * ```typescript
 * declare function get<const GetValues extends boolean = false>(
 *   getValues?: GetValues
 * ): If<GetValues, string, string[]>;
 *
 * const a = get(true);
 * //    ^? string
 *
 * const b = get(false);
 * //    ^? string[]
 *
 * declare const someBoolean: boolean;
 * const c = get(someBoolean);
 * //    ^? string | string[]
 * ```
 */
export type If<Value extends boolean, TrueResult, FalseResult> = Value extends true
	? TrueResult
	: Value extends false
		? FalseResult
		: TrueResult | FalseResult;

/**
 * A type utility that allows branching of an union type on the `Value` parameter.
 * @example
 * ```typescript
 * declare function get<const Required extends boolean = false>(
 *   required?: Required
 * ): If<Required, string>;
 *
 * const a = get(true);
 * //    ^? string
 *
 * const b = get(false);
 * //    ^? string | null
 *
 * declare const someBoolean: boolean;
 * const c = get(someBoolean);
 * //    ^? string | null
 * ```
 */
export type RequiredIf<Value extends boolean, ValueType, FallbackType = null> = If<Value, ValueType, ValueType | FallbackType>;
