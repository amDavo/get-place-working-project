const createNewPlace = async (req, res) => {
    const data = req.body
    console.log(data.placeName, data.category, data.address, data.hoursFrom, 'zzzzzzzz')
}

module.exports = createNewPlace