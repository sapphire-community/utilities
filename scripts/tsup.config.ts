import { relative, resolve as resolveDir } from 'node:path';
import { defineConfig, type Options } from 'tsup';

export const createTsupConfig = ({
	globalName = undefined,
	format = ['esm', 'cjs', 'iife'],
	target = 'es2021',
	sourcemap = true,
	dts = true,
	esbuildOptions = (options, context) => {
		if (context.format === 'cjs') {
			options.banner = {
				js: '"use strict";'
			};
		}
	}
}: ConfigOptions = {}) =>
	defineConfig({
		clean: true,
		dts,
		entry: ['src/index.ts'],
		format,
		minify: false,
		skipNodeModulesBundle: true,
		sourcemap,
		target,
		tsconfig: relative(__dirname, resolveDir(process.cwd(), 'src', 'tsconfig.json')),
		keepNames: true,
		globalName,
		esbuildOptions
	});

type ConfigOptions = Pick<Options, 'esbuildOptions' | 'sourcemap' | 'target' | 'format' | 'globalName' | 'dts'>;
