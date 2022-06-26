import { err, type Err } from '../Result/Err';
import type { IResult } from '../Result/IResult';
import { ok, type Ok } from '../Result/Ok';
import type { IOption } from './IOption';
import { none, type None } from './None';

export class Some<T> implements IOption<T> {
	private readonly value: T;

	public constructor(value: T) {
		this.value = value;
	}

	public isSome(): true {
		return true;
	}

	public isSomeAnd<R extends boolean>(cb: (value: T) => R): R {
		return cb(this.value);
	}

	public isNone(): false {
		return false;
	}

	public expect(message: string): T;
	public expect(): T {
		return this.value;
	}

	public unwrap(): T {
		return this.value;
	}

	public unwrapOr(defaultValue: T): T;
	public unwrapOr(): T {
		return this.value;
	}

	public unwrapOrElse(cb: () => T): T;
	public unwrapOrElse(): T {
		return this.value;
	}

	public map<U>(cb: (value: T) => U): Some<U> {
		return some(cb(this.value));
	}

	public mapOr<U>(_: U, cb: (value: T) => U): U {
		return cb(this.value);
	}

	public mapOrElse<U>(_: () => U, cb: (value: T) => U): U {
		return cb(this.value);
	}

	public inspect(cb: (value: T) => void): this {
		cb(this.value);
		return this;
	}

	public okOr(err?: any): Ok<T>;
	public okOr(): Ok<T> {
		return ok(this.value);
	}

	public okOrElse(cb: () => any): Ok<T>;
	public okOrElse(): Ok<T> {
		return ok(this.value);
	}

	public *iter(): Generator<T> {
		yield this.value;
	}

	public and<R extends IOption<any>>(option: R): R {
		return option;
	}

	public andThen<R extends IOption<any>>(cb: (value: T) => R): R {
		return cb(this.value);
	}

	public or(option: IOption<any>): this;
	public or(): this {
		return this;
	}

	public orElse(cb?: () => IOption<any>): this;
	public orElse(): this {
		return this;
	}

	public xor(option: Some<T>): None;
	public xor(option: None): this;
	public xor(option: IOption<T>): this | None;
	public xor(option: IOption<T>): this | None {
		return option.isSome() ? none : this;
	}

	public filter(predicate: (value: T) => true): this;
	public filter(predicate: (value: T) => false): None;
	public filter(predicate: (value: T) => boolean): this | None;
	public filter(predicate: (value: T) => boolean): this | None {
		return predicate(this.value) ? this : none;
	}

	public contains(value: T): boolean {
		return this.value === value;
	}

	public zip(other: None): None;
	public zip<U>(other: Some<U>): Some<[T, U]>;
	public zip<U>(other: IOption<U>): IOption<[T, U]>;
	public zip<U>(other: IOption<U>): IOption<[T, U]> {
		return other.map((o) => [this.value, o]);
	}

	public zipWith<U, R>(other: None, f: (s: T, o: U) => R): None;
	public zipWith<U, R>(other: Some<U>, f: (s: T, o: U) => R): Some<R>;
	public zipWith<U, R>(other: IOption<U>, f: (s: T, o: U) => R): IOption<R>;
	public zipWith<U, R>(other: IOption<U>, f: (s: T, o: U) => R): IOption<R> {
		return other.map((o) => f(this.value, o));
	}

	public unzip<I, U>(this: Some<readonly [I, U]>): [Some<I>, Some<U>] {
		const [s, o] = this.value;
		return [some(s), some(o)];
	}

	public transpose<Inner>(this: Some<Ok<Inner>>): Ok<Some<Inner>>;
	public transpose<Inner>(this: Some<Err<Inner>>): Err<Some<Inner>>;
	public transpose<IT, E>(this: Some<IResult<IT, E>>): IResult<Some<IT>, E>;
	public transpose<IT, E>(this: Some<IResult<IT, E>>): IResult<Some<IT>, E> {
		return this.value.match({
			ok: (v) => ok(some(v)) as any,
			err: (e) => err(e) as any
		});
	}

	public flatten<Inner extends IOption<any>>(this: Some<Inner>): Inner {
		return this.value;
	}

	public eq(other: None): false;
	public eq(other: IOption<T>): boolean;
	public eq(other: IOption<T>): boolean {
		return other.isSomeAnd((value) => this.value === value);
	}

	public ne(other: None): true;
	public ne(other: IOption<T>): boolean;
	public ne(other: IOption<T>): boolean {
		return !this.eq(other);
	}

	public match<U>(branches: { some(value: T): U; none(): U }): U {
		return branches.some(this.value);
	}

	public *[Symbol.iterator](): Generator<T> {
		yield this.value;
	}
}

export function some<T>(value: T): Some<T> {
	return new Some<T>(value);
}
