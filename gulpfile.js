// Dependencies
const gulp = require ('gulp');
const gulpClean = require('gulp-clean');
const ts = require ('gulp-typescript');
const eslint = require ('gulp-eslint');

const tsProject = ts.createProject ('tsconfig.json');

// Tasks
const clean = () => gulp
	.src ('dist', { allowEmpty: true, read: false })
	.pipe (gulpClean ());

const lint = () => gulp
	.src ('src/**/*.ts')
	.pipe (eslint ())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());

const compile = () => gulp
	.src ('src/**/*.ts')
	.pipe (tsProject())
	.pipe (gulp.dest ('dist'));
const build = gulp.series (
	gulp.parallel (clean, lint),
	compile);

// Export
exports.clean = clean;
exports.lint = lint;
exports.build = build;
exports.default = gulp.series (build);
