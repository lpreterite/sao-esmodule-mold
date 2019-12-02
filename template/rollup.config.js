import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
<% if(mode === 'vue-component'){ %>
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
<% } %>

import pkg from './package.json'

const name = "<%= name %>"
const sourcemap = true

const plugins = []
if(process.env.BUILD === 'production'){
	plugins.push(terser({ sourcemap }))
}

export default [
	{
		input: 'src/main.js',
		output: [
        { name, file: pkg.browser, format: 'umd', exports: 'named', sourcemap },
        { name, file: pkg.main, format: 'cjs', exports: 'named', sourcemap },
        { name, file: pkg.module, format: 'es', exports: 'named', sourcemap }
      ],
    plugins: [
			babel({
				exclude: 'node_modules/**'
			}),
			resolve(),
			commonjs(),
			<% if(mode === 'vue-component'){ %>
			css(),
			vue({ css: false }),
			<% } %>
			...plugins
    ]
	}
]
