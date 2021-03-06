const webpack = require ("webpack");
const merge = require ("webpack-merge");
const UglifyJSPlugin = require ("uglifyjs-webpack-plugin");
const common = require ("./webpack.common.js");
const package = require ("./package.json");

module.exports = merge (common, {
	output: {
		filename: "actuate.min.js"
	},
	plugins: [
		new UglifyJSPlugin ({
			sourceMap: true,
			uglifyOptions: {
				// warnings: true
			}
		}),
		new webpack.BannerPlugin ({
			banner: "/*! Actuate v" + package.version + " | MIT (c) Joshua Granick | https://github.com/jgranick/actuate */",
			raw: true,
			entryOnly: true
		}),
		new webpack.DefinePlugin ({
			"process.env.NODE_ENV": JSON.stringify ("production")
		})
	]
});