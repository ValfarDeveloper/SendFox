const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .react('resources/js/components/HomeContent.js', 'public/js/components')
   .react('resources/js/components/MailTemplateForm.js', 'public/js/components')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/components/Card.scss', 'public/css/components')
   .sass('resources/sass/components/MailTemplateForm.scss', 'public/css/components')
   .sass('resources/sass/components/HomeContent.scss', 'public/css/components');
