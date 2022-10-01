export interface SleepOptions {
	/**
	 * When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
	 */
	signal?: AbortSignal | undefined;

	/**
	 * Set to `false` to indicate that the scheduled `Timeout`
	 * should not require the Node.js event loop to remain active.
	 * @default true
	 */
	ref?: boolean | undefined;
}

export class AbortError extends Error {
	public readonly code: string;
	public constructor(
		message?: string,
		options?: {
			cause?: unknown;
		}
	) {
		super(message, options);
		this.name = 'AbortError';
		this.code = 'ERR_ABORT';
	}
}

/**
 * Sleeps for the specified number of milliseconds.
 * @param ms The number of milliseconds to sleep.
 * @param value A value with which the promise is fulfilled.
 * @see {@link sleepSync} for a synchronous version.
 */
export function sleep<T = undefined>(ms: number, value?: T, options?: SleepOptions): Promise<T> {
	return new Promise((resolve, reject) => {
		const timer: NodeJS.Timeout | number = setTimeout(() => resolve(value!), ms);
		const signal = options?.signal;
		if (signal) {
			signal.addEventListener('abort', () => {
				clearTimeout(timer);
				reject(
					new AbortError('The operation was aborted', {
						cause: signal.reason
					})
				);
			});
		}
		if (options?.ref === false && typeof timer === 'object') {
			timer.unref();
		}
	});
}

/**
 * Sleeps for the specified number of milliseconds synchronously.
 * We should probably note that unlike {@link sleep} (which uses CPU tick times),
 * sleepSync uses wall clock times, so the precision is near-absolute by comparison.
 * That, and that synchronous means that nothing else in the thread will run for the length of the timer.
 * @param ms The number of milliseconds to sleep.
 * @param value A value to return.
 * @see {@link sleep} for an asynchronous version.
 */
export function sleepSync<T = undefined>(ms: number, value?: T): T {
	const end = Date.now() + ms;
	while (Date.now() < end) continue;
	return value!;
}
