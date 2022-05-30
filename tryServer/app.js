const cors = require('cors');
const express = require('express');
const app = express();

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))


app.post('/newPlace', upload.single('myImg'), (req, res) => {
    console.log(req.file, req.body)
})


app.listen(PORT, () => console.log('port:', PORT));
