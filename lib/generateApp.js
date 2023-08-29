const fs = require('fs');
const path = require('path');

function generateApp(appName) {
    const appDir = path.join(process.cwd(), appName);

    // Create app directory
    fs.mkdirSync(appDir);

    // Create subdirectories and generate files here
    const subdirectories = ['controllers', 'models', 'public', 'routes', 'util', 'views'];
    subdirectories.forEach(subdir => {
        const subdirPath = path.join(appDir, subdir);
        fs.mkdirSync(subdirPath);

        //  generate template files in each subdirectory
        // public
        if (subdir === "public") {
            fs.mkdirSync(path.join(subdirPath, 'css'));
            fs.mkdirSync(path.join(subdirPath, 'js'));
            fs.mkdirSync(path.join(subdirPath, 'images'));
                };
        //routes 
        if (subdir === "routes") {
            fs.writeFileSync(path.join(subdirPath, 'routes.js'), `
            const express = require('express');
            const router = express.Router();
            const controller = require('../controllers/controller');
            router.get('/',controller.getIndex);
            module.exports = router;`
            )};
        //controllers
        if (subdir === "controllers") {
            fs.writeFileSync(path.join(subdirPath, 'controller.js'), `
            exports.getIndex = (req,res,next) => {
                res.render('index');
            }`
            )};
            // views
        if (subdir === "views") {
            fs.writeFileSync(path.join(subdirPath, 'index.pug'), `
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title indexPage
    body 
        h1 srart coding gl ^^`
            )};
            // util
        if (subdir === "util") {
            fs.writeFileSync(path.join(subdirPath, 'database.js'), ``
            )};
            // models
        if (subdir === "models") {
        }
        // app.js
        fs.writeFileSync(path.join(appDir, 'app.js'), `
        const express = require('express');
        const bodyParser = require('body-parser');
        const sequelize = require('./util/database');
        const app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.set('view engine', 'pug');
        app.set('views', 'views');
        app.use(express.static('public'));
        const routes = require('./routes/routes');
        app.use('/', routes);
        const controller = require('./controllers/controller');
          app.listen(3000, () => {
            console.log('Server started on port 3000');
          });`
        );
        

    });

    console.log(`Application "${appName}" generated successfully.`);
}

module.exports = generateApp;
