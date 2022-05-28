require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');
const favoritRouter = require('./src/routes/favorite.router');
const getCardsRouter = require('./src/routes/getCardsRouter');
const newPlaceRouter = require('./src/routes/newPlace.router')
const placeRouter = require("./src/routes/placeInfo.router");

const app = express();
const PORT = 8080;
const {COOKIE_SECRET, COOKIE_NAME} = process.env;

app.set('cookieName', COOKIE_NAME);

app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(
    session({
        name: app.get('cookieName'),
        secret: COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new FileStore(),
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1e3 * 86400,
        },
    }),
);

app.use((req, res, next) => {
    res.locals.userId = req.session?.userId;
    res.locals.name = req.session?.name;
    next();
});


// app.get('/location/:id', (req, res) => {
//     const place = {
//         place_name: 'test 1',
//         location: 'test 1',
//         img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
//         category: 'coffeeshop',
//         free: true,
//         body: 'test1',
//         working_hours: '9-20',
//         user_id: 1,
//         place_id: 1,
//         type_id: 1,
//         rating_wifi: 3,
//         rating_comf: 2,
//         rating_pers: 2,
//         rating_noise: 1,
//         rating_atmo: 4,
//     }
//     res.json(place)
// })

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/places', getCardsRouter)
app.use('/favorit', favoritRouter);
app.use('/newPlace', newPlaceRouter)
app.use('/location', placeRouter)

app.listen(PORT, () => {
    console.log('Server has been started on PORT', PORT);
});
