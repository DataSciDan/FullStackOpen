//const http = require('http');
require('dotenv').config();
const router = require('./controllers/blogs');

const PORT = process.env.PORT;
router.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
});