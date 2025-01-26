import { Person } from "../models/person.js"

export async function creatPerson(req,res) {
    try{
        const {name, age, favoriteFoods} = req.body
        const newPerson = new Person ({
            name,
            age,
            favoriteFoods,
        })
        newPerson.save()
        res.json({
            message: "Person created successfully",
            data : newPerson
        })
    } catch (err) {
        console.log(error)
        res.status(500).json({ message: "errror in creatPersno controller"})
    }
}

export async function getPerson(req,res){
    try{
        const person = await Person.find()
        res.json({
            message: "Person find successfully",
            data : person
        })
    } catch (err) {
        console.log(error)
        res.status(500);json({ message: "errror in getPerson controller"})
    }
}

export async function getPersonById(req, res){
    try{
        const { id } = req.params
        const person = await Person.findById(id)
        res.json({
            message: "Person find successfully",
            data : person
        })

    } catch (err) {
        console.log(err)
        res.status(500).json( {message: "errror in getPersonById controller"})
    }
}

export async function getOnePerson(req, res){
    try{
        const {favoriteFoods} = req.params
        const person = await Person.findOne({favoriteFoods})
        res.json({
            message: "Person find successfully",
            data : person
        })

    } catch (err) {
        console.log(err)
        res.status(500).json( {message: "errror in getOnePerson controller"})
    }
}

export async function getPersonWithQuery(req, res) {
    console.log("Requête query params : ", req.query);

    try {
        const { favoriteFoods } = req.query;
        if (!favoriteFoods) {
            return res.status(400).json({ message: "Le paramètre favoriteFoods est requis." });
        }
        const person = await Person.find({ favoriteFoods })
            .sort({ name: 1 })
            .limit(2)
            .select('-age');
        if (!person || person.length === 0) {
            return res.status(404).json({ message: "Aucune personne trouvée avec ce critère." });
        }

        res.json({ message: "Personnes trouvées avec succès", data: person });
    } catch (err) {
        console.error("Erreur : ", err);
        res.status(500).json({ message: "Erreur dans getPersonWithQuery", error: err.message });
    }
}


export async function updatePerson (req, res){
    try{
        const { id } = req.params
        const {name, age, favoriteFoods} = req.body
        const updatePerson = await Person.findByIdAndUpdate(id, {
            name,
            age,
            favoriteFoods
        })
        res.json({
            message: "Person updated successfully",
            data : updatePerson
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "errror in updatePerson controller"})
    }
}

export async function updateOnePerson (req, res){
    try {
        const { name } = req.params
        const { age } = req.body
        const updateOnePerson = await Person.findOneAndUpdate({ name }, { age })
        res.json({
            message: "Person updated successfully",
            data : updateOnePerson
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "errror in updateOnePerson controller"})
    }
}

export async function deletePerson (req, res){
    try{
        const { id } = req.params
        const deletePerson = await Person.findByIdAndDelete({_id: id})
        res.json({
            message: "Person deleted successfully",
            data : deletePerson
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "errror in deletePerson controller"})
    }
}
