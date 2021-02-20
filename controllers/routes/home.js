const router = require('express').Router();
const path = require("path");

router.get('/', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../../public/index.html'));
    } catch (err) {
        res.status(404).json({ message: 'page not found'});
    }
});

router.get('/stats', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../../public/stats.html'));
    } catch (err) {
        res.status(404).json({ message: 'page not found'});
    }
});

router.get('/exercise', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../../public/exercise.html'));
    } catch (err) {
        res.status(404).json({ message: 'page not found'});
    }
});

router.get('*', (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname,'../../public/index.html'));
    } catch (err) {
        res.status(404).json({ message: 'page not found'});
    }
});


module.exports = router;