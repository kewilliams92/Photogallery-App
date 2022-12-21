const PORT = process.env.PORT || 3000;
const app = require('./app');
const db = require('./db');

if(process.env.SEED){
    db.seed();
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
// Path: server/index.js