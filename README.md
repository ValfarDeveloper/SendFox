# SendFox (current version 0.0.2)

SendFox is an application example of how work with Laravel and React. Basically with it you can create email templates using Draft.js. The application was built following these requirements:

1. Create a fresh Laravel app via composer.

2. Setup Bootstrap 4 CSS framework.

3. Setup Laravel's built in user authentication.

4. Using React and Draft.js, create a simple email editor form with "Subject" and "Body" fields.  User should be able to apply basic rich text editing to the "Content" field such as italic, bold, and underline.  The form should be able to save to a database.  Also don't forget field validation with relevant error messages.  *This page should only be accessible to logged in users.

5. Without using React, create a simple tabular page with pagination which lists the emails created via the above editor.  *This page should only be accessible to logged in users.

6. Provide a clear README with instructions on how to setup and run the app.

7. Set up a live link and the GitHub repository that we can pull from and test.

## Software requeriments

For run this application you need to have installed on your system the following programs:

* PHP
* Composer
* Node.js with Npm (or if you prefer, you could use Yarn)
* MySQL (optional), have installed mysql is optional because i'm using the service freesqldatabase.com for host a database in the cloud. If you prefer use your own instance of MySQL please install it on your machine and edit the .env file with the corresponding database configuration.

## Installation

Please follow the steps in the corresponding order:

1. The first thing that you need to do, is create a folder in your machine and clone the repository with the command:
```bash
git clone https://github.com/ValfarDeveloper/SendFox.git
```
2. Inside the project folder, install all the php dependencies, with the command:
```bash
composer install
```
3. Install all the npm dependencies with the command:
```bash
npm install
```
4. Please create a file called `.env` in the project folder, and save there all this configuration:
```
APP_NAME=SendFox
APP_ENV=local
APP_KEY=base64:J/VP0Z3yKa8KRJvPjY/laGEXEllebATlAx6qdU/3ZHM=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=sql3.freesqldatabase.com
DB_PORT=3306
DB_DATABASE=sql3302840
DB_USERNAME=sql3302840
DB_PASSWORD=Q1f7xWE5ac

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```
5. Please reset the database, running this command in the project folder:
```bash
php artisan migrate:rollback
```
6. Now run all the laravel migrations with the command:
```bash
php artisan migrate
```
7. Please run this command for compile all the front end assets:
```bash
npm run dev
```
8. Finally run the project server with the command:
```bash
php artisan serve
```
9. Now you can test the application.

## Important notes
* If you use the default mysql instance configured in freesqldatabase.com, you'll see that the application will have a delay of 7 seconds aprox. of delay per load. This is because we're using a free hosting service for the database.
* The site is completely responsive.
* Here a video of the website flow for the version 0.0.1: https://youtu.be/mjPWa11kV24
* Here a video of the website flow for the version 0.0.2 with the new design: https://www.youtube.com/watch?v=zKJG1NT3d6k

## License
[MIT](https://choosealicense.com/licenses/mit/)