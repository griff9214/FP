const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');


const config = {
    src: './app',
    css: {
        watch: '/sass/**/*.+(sass|scss)',
        src: '/sass/styles.sass',
        dest: '/css'
    },
    html: {
        src: '/*.html'
    },
    js: {
        src: '/js',
        watch: ['/js/main.js', "/js/common.js"]
    }
};

gulp.task('sass', function () {
     return gulp.src(config.src + config.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 0
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.src + config.css.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('browserSync', function () {
    return browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});

gulp.task('scripts', function () {
    return gulp.src([
        "app/js/main.js"
    ])
        .pipe(rigger())
        .pipe(concat('scripts.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', gulp.series('sass', 'scripts', function() {

    var buildFiles = gulp.src([
        './app/*.html',
        './app/.htaccess',
    ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        './app/css/styles.css',
    ]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
        './app/js/scripts.min.js',
    ]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
        './app/fonts/**/*',
    ]).pipe(gulp.dest('dist/fonts'));
    var buildFonts = gulp.src([
        './app/images/**/*',
    ]).pipe(gulp.dest('dist/images'));

}));

gulp.task('code', function() {
    return gulp.src(config.html.src)
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function () {
    gulp.watch(config.src + config.html.src, gulp.parallel('code'));
    gulp.watch(config.src + config.css.watch, gulp.parallel('sass'));
    gulp.watch(config.src + config.js.watch, gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'browserSync', 'watch'));


// gulp.task('removedist', function() { return del.sync('dist'); });
// gulp.task('clearcache', function () { return cache.clearAll(); });