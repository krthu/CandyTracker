const express = require('express');
const { Candy, ExpiryDate } = require('./db');
const app = express();

app.use(express.json())


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log("Sever Listening on PORT:", PORT)
})


app.get("/candy", async (req, res) => {
    try {
        const candys = await Candy.findAll();
        res.send({candys})
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
});

app.post("/candy", async (req, res) => {
    const { name } = req.body;
    console.log("Posted the name: " + name)
    try {
        const candy = await Candy.create({name})
        res.status(201).send(candy)

    }catch(error){
        res.status(400).send({error: error.message})
    }

});

app.get("/candy/:id", async (req, res) => {
    const { id } = req.params
  
    try { 
        const candy = await Candy.findByPk(id, {
            include: ExpiryDate
        });
        if (candy) {
            res.status(200).send(candy)
        } else{
            res.status(404).send({error: `Candy not found`});
        }
    } catch (error){
        res.status(500).send({error: error.message})
    }
});

app.put(`/candy/:id`, async (req, res) => {
    const { id } = req.params
    const {name} = req.body

    try {
        const candy = await Candy.findByPk(id);
        if (candy) {
            await candy.update({ name });
            const updatedCandy = await Candy.findByPk(id)
            res.status(200).send(updatedCandy);
        } else{
            res.status(404).send({error: `Candy not found`})
        }


    } catch{
       // res.status(500).send({error: error.message})
       console.log("Error finding candy")
       res.status(500).send({error: "Error finding candy"})
    }


});

app.delete('/candy/:id', async(req, res) => {
    const { id } = req.params

    try {
        const candy = await Candy.findByPk(id);
        if (candy) {

            await candy.destroy();
            res.status(200).send({message: `Candy ${candy.name} deleted successfully` });
        } else{
            res.status(404).send({error: "Candy not found"});
        }
    } catch{
        res.status(500).send({error: error.message});
    }

});

app.post('/candy/:id/expiry', async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;
    console.log("Well post works")
    try {
        const candy = await Candy.findByPk(id);
        if (candy){
            const expiryDate = await ExpiryDate.create({date, CandyId: id});
            res.status(201).send(expiryDate)

        }else {
            res.status(404).send({ error: 'Candy not found'})
        }
    } catch(error){
        res.status(500).send({error: error.message})
    }
});

app.delete('/expiry/:id', async (req,res) => {
    const { id } = req.params;
    try{
        const date = await ExpiryDate.findByPk(id);
        if (date){
            await date.destroy();
            res.status(200).send({ message: `Date with id: ${id} deleted successfully`})
        } else{
            res.status(404).send({ error: 'Date not found'})
        }
    } catch(error) {
        res.status(500).send({error: error.message})

    }
});

app.get("/expiring", async (req, res) => {
    try {
        const candies = await Candy.findAll({

            include: {
                model: ExpiryDate,
                attributes: ['date', 'id'],
            },
            order: [
                [{ model: ExpiryDate}, 'date', 'ASC']
            ]
        });

        res.status(200).send({ candies });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


app.get("/expiring2", async (req, res) => {
    console.log("We are here that is good!")
    try {
        const candies = await Candy.findAll({
            include: {
                model: ExpiryDate,
               
                attributes: ['date'],
               
               
            },
            order: [
                [{model: ExpiryDate}, 'date', 'ASC']
            ]
        });
        res.status(200).send({candies})

    } catch(error){
        res.status(500).send({ error: error.message})
    }
});





