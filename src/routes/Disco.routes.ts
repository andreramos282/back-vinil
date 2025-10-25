import { Router } from "express";
import DiscoController from "../controllers/Disco.controller";

const discoRouter = Router()
const discoController = new DiscoController()

discoRouter.post(
    "/disco",
    discoController.createDisco.bind(discoController)
)

discoRouter.get(
    "/disco",
    discoController.getAllDisco.bind(discoController)
)

discoRouter.get(
    "/disco/:id",
    discoController.getDisco.bind(discoController)
)

discoRouter.put(
    "/disco/:id",
    discoController.updateDisco.bind(discoController)
)

discoRouter.delete(
    "/disco/:id",
    discoController.deleteDisco.bind(discoController)
)

export default discoRouter