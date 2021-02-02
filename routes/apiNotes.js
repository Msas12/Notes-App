const fs = require('fs')
const path = require('path')

module.exports = (app) => {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname + '/../db/db.json'), 'utf8', (error, data) => {
            if (error) throw error
            console.log(data)
            data = JSON.parse(data)
            res.json(data);
            
        });
    })

};
