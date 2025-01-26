import { creatPerson, deletePerson, getOnePerson, getPerson, getPersonById, getPersonWithQuery, updateOnePerson, updatePerson } from "../controllers/person.js";
import express from "express"


const router = express.Router()
router.get("/", getPerson)
router.get("/food/:favoriteFoods", getOnePerson)
router.get("/person/id/:id", getPersonById)
router.get("/person", getPersonWithQuery);
router.post("/", creatPerson)
router.put("/:id", updatePerson)
router.put("/:name", updateOnePerson)
router.delete("/:id", deletePerson)


export {router as  personRouter}