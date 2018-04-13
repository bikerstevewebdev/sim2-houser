module.exports = {
    buildAHome: (req, res, next) => {
        const { body } = req
        req.app.get('db').create_house([body.name, body.address, body.city, body.state, body.zip, body.img, body.mortgage, body.rent]).then(houses => {
            res.status(200).send(houses)
        })
    },

    getAll: (req, res, next) => {
        req.app.get('db').get_houses().then(houses => {
            res.status(200).send(houses)
        })
    },

    getOne: (req, res, next) => {
        req.app.get('db').get_house([req.params.id]).then(house => {
            res.status(200).send(house)
        })
    },

    demolish: (req, res, next) => {
        req.app.get('db').delete_house([req.params.id]).then(houses => {
            res.status(200).send(houses)
        })
    }
}