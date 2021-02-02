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

    app.post('/api/notes', (req, res) => {
        let note = req.body
        console.log(note)

        fs.readFile(path.join(__dirname + '/../db/db.json'), 'utf8', (error, data) => {
            if (error) throw error
            console.log(data)
            data = JSON.parse(data)
            data.push(note)

            fs.writeFile(path.join(__dirname + '/../db/db.json'), JSON.stringify(data), (error) => {
                if (error) throw error
                res.json(true);   
            });
        });
    })

    // app.delete('/api/notes', (req, res) => {
    //     fs.remove(path.join(__dirname + '/../db/db.json'), 'utf8', (error, data) => {
    //         if (error) throw error
    //         console.log(data)
    //         data = JSON.parse(data)
    //         res.json(data);
            
    //     });
    // })

};
