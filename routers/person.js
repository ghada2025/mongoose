import { creatPerson, deletePerson, getPerson, updatePerson } from "../controllers/person.js";
import express from "express"


const router = express.Router()
router.get("/", getPerson)
router.post("/", creatPerson)
router.put("/:id", updatePerson)
router.delete("/:id", deletePerson)

export {router as  personRouter}