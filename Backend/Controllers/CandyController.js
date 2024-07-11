const Candy = require('../Models/Candy');
const ExpiryDate = require('../Models/ExpiryDate');
console.log("Yes found Controller for candy correctly!")

exports.getAllCandies = async (req, res) => {
    console.log("Yes hit route correctly!")
    try {
        const candies = await Candy.findAll();
        res.status(200).send({ candies });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.createCandy = async (req, res) => {
    const { name } = req.body;
    try {
        const candy = await Candy.create({ name });
        res.status(201).send(candy);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.getCandyById = async (req, res) => {
    const { id } = req.params;
    try {
        const candy = await Candy.findByPk(id, {
            include: ExpiryDate
        });
        if (candy) {
            res.status(200).send(candy);
        } else {
            res.status(404).send({ error: `Candy not found` });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.updateCandy = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const candy = await Candy.findByPk(id);
        if (candy) {
            await candy.update({ name });
            res.status(200).send(candy);
        } else {
            res.status(404).send({ error: `Candy not found` });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.deleteCandy = async (req, res) => {
    const { id } = req.params;
    try {
        const candy = await Candy.findByPk(id);
        if (candy) {
            await candy.destroy();
            res.status(200).send({ message: `Candy ${candy.name} deleted successfully` });
        } else {
            res.status(404).send({ error: "Candy not found" });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};