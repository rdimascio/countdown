import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from '@rollup/plugin-json';

import pkg from './package.json';

const mergeAll = (objs) => Object.assign({}, ...objs);

const configBase = {
	input: 'src/countdown.js',
	output: {
		exports: 'default',
	},
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [babel(), nodeResolve({jsnext: true}), commonjs(), json()],
};

const umdConfig = mergeAll([
	configBase,
	{
		output: mergeAll([
			configBase.output,
			{
				file: pkg.main,
				format: 'umd',
				name: 'CountDown',
			},
		]),
		external: Object.keys(pkg.peerDependencies || {}),
	},
]);

const devUmdConfig = mergeAll([
	umdConfig,
	{
		plugins: umdConfig.plugins.concat(
			replace({
				'process.env.NODE_ENV': JSON.stringify('development'),
			})
		),
	},
]);

const prodUmdConfig = mergeAll([
	umdConfig,
	{
		output: mergeAll([
			umdConfig.output,
			{file: umdConfig.output.file.replace(/\.js$/, '.min.js')},
		]),
	},
	{
		plugins: umdConfig.plugins.concat(
			replace({
				'process.env.NODE_ENV': JSON.stringify('production'),
			}),
			terser()
			// uglify({
			// 	compress: {
			// 		pure_getters: true,
			// 		unsafe: true,
			// 		unsafe_comps: true,
			// 	},
			// })
		),
	},
]);

const webConfig = mergeAll([
	configBase,
	{
		output: [
			mergeAll([configBase.output, {file: pkg.module, format: 'es'}]),
			mergeAll([configBase.output, {file: pkg.main, format: 'cjs'}]),
		],
	},
]);

export default [devUmdConfig, prodUmdConfig, webConfig];
