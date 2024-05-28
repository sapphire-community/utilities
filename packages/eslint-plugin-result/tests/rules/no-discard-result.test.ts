import { RuleTester } from '@typescript-eslint/rule-tester';
import { fileURLToPath } from 'url';
import { noDiscardResult } from '../../src/rules/no-discard-result';

export const ruleTester = new RuleTester({
	parserOptions: {
		ecmaVersion: 2020,
		tsconfigRootDir: fileURLToPath(new URL('..', import.meta.url)),
		project: fileURLToPath(new URL('../tsconfig.json', import.meta.url))
	},
	parser: '@typescript-eslint/parser'
});

describe('ESLint plugin result', () => {
	test('GIVEN valid results THEN asserts that no-discard passes successfully', () => {
		ruleTester.run('no-discard-result', noDiscardResult, {
			valid: [
				{
					code: `import { Result } from '@sapphire/result';
					function foo(): Result<string, string> {}
					async function bar(): Promise<Result<string, string>> {}
					const x = foo();
					let y = await bar(), z = (void 0, foo());
					y = z = await bar();
					const complex = foo() && (((Math.random() > 0.5 ? foo() : await bar()) || foo()) ?? await bar());
				`,
					name: 'Result is not discarded'
				},
				{
					code: `import { Result } from '@sapphire/result';
					function foo(): Result<string, string> {}
					void foo();
				`,
					name: 'Result is intentionally discarded'
				},
				{
					code: `import { Result } from '@sapphire/result';
					function foo(): Result<string, string> {}
					function bar(result: Result<string, string>) {}
					void bar(foo());
				`,
					name: 'Result is passed into another function'
				}
			],
			invalid: []
		});
	});

	test('GIVEN invalid results THEN asserts that no-discard causes an error', () => {
		ruleTester.run('no-discard-result', noDiscardResult, {
			valid: [],
			invalid: [
				{
					code: `import { Result } from '@sapphire/result';
					function foo(): Result<string, string> {}

					foo();`,
					name: 'simple discard',
					errors: [
						{
							messageId: 'discardedResult',
							line: 4
						}
					]
				},
				{
					code: `import { Result } from '@sapphire/result';
					async function foo(): Promise<Result<string, string>> {}

					foo();`,
					name: 'unawaited async function discarded',
					errors: [
						{
							messageId: 'discardedResult',
							line: 4
						}
					]
				},
				{
					code: `import { Result } from '@sapphire/result';
					async function foo(): Promise<Result<string, string>> {}

					await foo();`,
					name: 'awaited async function discarded',
					errors: [
						{
							messageId: 'discardedResult',
							line: 4
						}
					]
				},
				{
					code: `import { Result } from '@sapphire/result';
					function foo(): Promise<Result<string, string>> {}

					(
						foo(),
						await foo()
					);`,
					name: 'double discard',
					errors: [
						{
							messageId: 'discardedResult',
							line: 5
						},
						{
							messageId: 'discardedResult',
							line: 6
						}
					]
				},
				{
					code: `import { Result } from '@sapphire/result';
					function foo(): Promise<Result<string, string>> {}

					null ?? foo();
					`,
					name: 'potential discard (??)',
					errors: [
						{
							messageId: 'discardedResult',
							line: 4
						}
					]
				}
			]
		});
	});
});
