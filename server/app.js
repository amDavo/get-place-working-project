const express = require('express');
const path = require('path');
const session = require('express-session');
const {url} = require('inspector');
const FileStore = require('session-file-store')(session);
const cors = require('cors');


const app = express();
const PORT = 3001;

app.use(cors())
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

app.get('/places', (req, res) => {
    const places = [{
        place_name: 'test 1',
        location: 'test 1',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
        category: 'coffeeshop',
        free: true,
        body: 'test1',
        working_hours: '9-20',
        user_id: 1,
        place_id: 1,
        type_id: 1,
        rating_wifi: 5,
        rating_comf: 4,
        rating_pers: 4,
        rating_noise: 5,
        rating_atmo: 5,

    },
        {
            place_name: 'test 1',
            location: 'test 1',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
            category: 'coffeeshop',
            free: true,
            body: 'test1',
            working_hours: '9-20',
            user_id: 1,
            place_id: 1,
            type_id: 1,
            rating_wifi: 2,
            rating_comf: 1,
            rating_pers: 2,
            rating_noise: 3,
            rating_atmo: 3,

        },
        {
            place_name: 'test 1',
            location: 'test 1',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
            category: 'coffeeshop',
            free: true,
            body: 'test1',
            working_hours: '9-20',
            user_id: 1,
            place_id: 1,
            type_id: 1,
            rating_wifi: 3,
            rating_comf: 2,
            rating_pers: 2,
            rating_noise: 1,
            rating_atmo: 4,

        }];
    res.json(places)
});

app.post('/newplace', (req, res) => {
    res.end();

})

app.get('/location/:id', (req, res) => {
    const place = {
        place_name: 'test 1',
        location: 'test 1',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/27/3b/77/caption.jpg',
        category: 'coffeeshop',
        free: true,
        body: 'test1',
        working_hours: '9-20',
        user_id: 1,
        place_id: 1,
        type_id: 1,
        rating_wifi: 3,
        rating_comf: 2,
        rating_pers: 2,
        rating_noise: 1,
        rating_atmo: 4,
    }
})


app.listen(PORT, () => {
    console.log('Server has been started on PORT', PORT);
});
