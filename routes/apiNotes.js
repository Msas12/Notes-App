const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname + '/../db/db.json'), 'utf8', (error, data) => {
            if (error) throw error
            data = JSON.parse(data)
            res.json(data);
        });
    })

    app.post('/api/notes', (req, res) => {
        let note = req.body
        note.id = uuidv4()
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

    app.delete('/api/notes/:id', (req, res) => {
        console.log(req.params.id)
        let note = req.body
        console.log(note)
        fs.readFile(path.join(__dirname + '/../db/db.json'), 'utf8', (error, data) => {
            if (error) throw error
            data = JSON.parse(data)
            let filtered = data.filter(function (note) {
            return note.id != req.params.id
                
            })
            newData = filtered
            console.log(data)
            
            fs.writeFile(path.join(__dirname + '/../db/db.json'), JSON.stringify(newData), (error) => {
                if (error) throw error
                res.json(true);
            });
        });
    })
};
