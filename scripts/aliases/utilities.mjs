export const aliasStore = new Map([
	['filterNullAndUndefined', 'filterNullish'],
	['filterNullAndUndefinedAndEmpty', ['filterNullishAndEmpty', 'filterNullishOrEmpty']],
	['filterNullAndUndefinedAndZero', ['filterNullishAndZero', 'filterNullishOrZero']],
	['isNullOrUndefined', 'isNullish'],
	['isNullOrUndefinedOrEmpty', 'isNullishOrEmpty'],
	['isNullOrUndefinedOrZero', 'isNullishOrZero'],
	['sleep', 'sleepSync'],
	['tryParseJSON', 'tryParse'],
	['tryParseURL', 'parseURL']
]);
