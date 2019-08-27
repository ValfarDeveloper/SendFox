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
   .js('resources/js/content/mailTemplates/mailTemplates.js', 'public/js/content/mailTemplates')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/index.scss', 'public/css')
   .sass('resources/sass/auth/login.scss', 'public/css/auth')
   .sass('resources/sass/auth/register.scss', 'public/css/auth')
   .sass('resources/sass/components/Card.scss', 'public/css/components')
   .sass('resources/sass/components/MailTemplateForm.scss', 'public/css/components')
   .sass('resources/sass/components/HomeContent.scss', 'public/css/components')
   .sass('resources/sass/content/mailTemplates/mailTemplates.scss', 'public/css/content/mailTemplates');
