const express = require('express');
const { Candy } = require('./db');
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
    console.log(`Fetching candy with id:${id}`)
    try { 
        const candy = await Candy.findByPk(id);
        if (candy) {
            res.status(200).send(candy)
        } else{
            res.status(404).send({error: `Candy not found`});
        }
    } catch {
        res.status(500).send({error: error.message})
    }
});

app.delete('/candy/:id', async(req, res) => {
    const { id } = req.params

    try {
        const candy = await Candy.findByPk(id);
        if (candy) {
            console.log("Hello!")
            await candy.destroy();
            res.status(200).send({message: `Candy ${candy.name} deleted successfully` });
        } else{
            res.status(404).send({error: "Candy not found"});
        }
    } catch{
        res.status(500).send({error: error.message});
    }

});
