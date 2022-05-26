const express = require('express');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
    session({
        secret: 'test',
        resave: false,
        store: new FileStore(),
        saveUninitialized: false,
        name: 'sid',
        cookie: {httpOnly: true},
    })
);

app.use((req, res, next) => {
    res.locals.userId = req.session?.userId;
    res.locals.name = req.session?.name;
    next();
});

app.listen(PORT, () => {
    console.log('Server has been started on PORT', PORT);
});
