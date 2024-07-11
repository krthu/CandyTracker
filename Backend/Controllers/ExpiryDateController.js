const ExpiryDate = require('../Models/ExpiryDate');
const Candy = require('../Models/Candy');

exports.addExpiryDate = async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;
    console.log("We hit the route!")
    try {
        const candy = await Candy.findByPk(id);
        if (candy) {
            const expiryDate = await ExpiryDate.create({ date, CandyId: id });
            res.status(201).send(expiryDate);
        } else {
            res.status(404).send({ error: 'Candy not found' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.deleteExpiryDate = async (req, res) => {
    const { id } = req.params;
    try {
        const date = await ExpiryDate.findByPk(id);
        if (date) {
            await date.destroy();
            res.status(200).send({ message: `Date with id: ${id} deleted successfully` });
        } else {
            res.status(404).send({ error: 'Date not found' });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.getAllExpiring = async (req, res) => {
    try {
        const candies = await Candy.findAll({
            include: {
                model: ExpiryDate,
                as: 'ExpiryDates',
                attributes: ['date', 'id'],
            },
            order: [
                [{ model: ExpiryDate, as: 'ExpiryDates' }, 'date', 'ASC']
            ]
        });

        res.status(200).send({ candies });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};