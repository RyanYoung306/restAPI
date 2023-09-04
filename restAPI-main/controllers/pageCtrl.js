const path = require('path');

const pageCtrl = {};

pageCtrl.index = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
};

// siteController.history = (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'html', 'history.html'));
// };

// siteController.about = (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'html', 'about.html'));
// };

module.exports = pageCtrl;