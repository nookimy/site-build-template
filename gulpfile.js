// Основной модуль
import gulp from "gulp";

// Импорт модулей
import { path } from "./gulp/config/path.js";

//Передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
}

// Построение сценариев выполнения задач
const dev = gulp.series(copy, watcher);

// Выполнение сценария по умолчанию
gulp.task("default", dev);

/*let fs = require("fs");

// Команды для задач
let browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    scss = require("gulp-sass")(require("sass")),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default,
    imagemin = require("gulp-imagemin"),
    webp = require("gulp-webp"),
    webphtml = require("gulp-webp-html"),
    webpcss = require("gulp-webpcss"),
    svgSprite = require("gulp-svg-sprite"),
    ttf2woff = require("gulp-ttf2woff"),
    ttf2woff2 = require("gulp-ttf2woff2"),
    fonter = require("gulp-fonter");



// Live-сервер для разработки
function browserSync () {
    browsersync.init ({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port:3000,
        notify:false
    })
};

// Копируем файлы html из #src в dist
function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
};

// Обработка файлов стилей
function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(
            webpcss({
                webpClass: '.webp',
                noWebpClass: '.no-webp'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}
// Обработка js-файлов
function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
};

// Обработка и оптимизация изображений
function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
};

// Конвертация ttf в форматы woff
function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
}

// Конвертация шрифтов из otf в ttf
gulp.task("otf2ttf", function () {
    return gulp.src([source_folder + "/fonts/!*.otf"])
        .pipe(fonter({
            formats: ["ttf"]
        }))
        .pipe(dest(source_folder + "/fonts/"))
})

//Создание svg-спрайта
gulp.task("svgSprite", function () {
    return gulp.src([source_folder + "/iconsprite/!*.svg"])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../icons/icons.svg",
                    example: true
                }
            },
        }
        ))
        .pipe(dest(path.build.img))
})

// Запись информации о шрифтах в fonts.scss
function fontsStyle(params) {

    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}

function cb() { }

// Слежка за изменениями в файлах
function watchFiles () {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);

    function clean () {
        return del(path.clean);
    }
};

// Удаление старой версии продакшена перед сборкой
function clean () {
    return del(path.clean);
};

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;*/
