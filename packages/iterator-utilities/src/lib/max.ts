import { toNumberOrThrow } from './common/toNumberOrThrow';
import type { IterableResolvable } from './from';
import { map } from './map';

/**
 * Returns the maximum value in an iterator of numbers.
 *
 * @param iterable An iterator of number values to determine the maximum value of.
 * @returns The maximum value in the input iterator, or `null` if the iterator is empty or contains only non-number values.
 */
export function max(iterable: IterableResolvable<number>): number | null {
	let max: number | null = null;
	for (const value of map(iterable, toNumberOrThrow)) {
		if (max === null || value > max) max = value;
	}

	return max;
}
