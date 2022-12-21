const db = require('./db');

const seed = async () => {
    try{
        await db.sync({force: true});
        console.log('Database synced!');
    } catch(err){
        console.log(err);
    }
}

seed();