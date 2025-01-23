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