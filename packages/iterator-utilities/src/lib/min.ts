import { toNumberOrThrow } from './common/toNumberOrThrow';
import type { IterableResolvable } from './from';
import { map } from './map';

/**
 * Returns the minimum value in an iterator of numbers.
 *
 * @param iterable An iterator of number values to determine the minimum value of.
 * @returns The minimum value in the input iterator, or `null` if the iterator is empty or contains only non-number values.
 */
export function min(iterable: IterableResolvable<number>): number | null {
	let min: number | null = null;
	for (const value of map(iterable, toNumberOrThrow)) {
		if (min === null || value < min) min = value;
	}

	return min;
}
