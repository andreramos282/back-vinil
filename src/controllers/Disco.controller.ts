import { Request, Response } from "express";
import DiscoService from "../services/Disco.service";
import getErrorMessage from "../utils/getMessageError";
import DiscoType from "../types/Disco.type";

class DiscoController {
    private discoService: DiscoService

    constructor() {
        this.discoService = new DiscoService()
    }

    /**
     * `POST | http://0.0.0.0:0000/disco`
     */
    async createDisco(req: Request, res: Response): Promise<void> {
        try {
            const { titulo, artista, ano, genero, formato, preco } = req.body
            if (!titulo || !artista || !ano || !genero || !formato || !preco) {
                res.sendStatus(400)
                return
            }

            const disco: DiscoType = { titulo, artista, ano: new Date(ano), genero, formato, preco }
            await this.discoService.createDisco(disco)

            res.sendStatus(201)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    /**
     * `GET | http://0.0.0.0:0000/disco`
     */
    async getAllDisco(_: Request, res: Response): Promise<void> {
        try {
            const discos = await this.discoService.getAllDisco()
            res.status(200).json(discos)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    /**
     * `GET | http://0.0.0.0:0000/disco/:id`
     */
    async getDisco(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            if (!id) {
                res.sendStatus(400)
                return
            }

            const disco = await this.discoService.getDisco(id)

            res.status(200).json(disco)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    /**
     * `PUT | http://0.0.0.0:0000/disco/:id`
     */
    async updateDisco(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            if (!id) {
                res.sendStatus(400)
                return
            }

            const { titulo, artista, ano, genero, formato, preco } = req.body
            const disco: DiscoType = { titulo, artista, ano, genero, formato, preco }

            await this.discoService.updateDisco(id, disco)
            res.sendStatus(200)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }

    /**
     * `DELETE | http://0.0.0.0:0000/disco/:id`
     */
    async deleteDisco(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params
            if (!id) {
                res.sendStatus(400)
                return
            }

            await this.discoService.deleteDisco(id)

            res.sendStatus(200)
        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error)
            res.status(500).json({ message: errorMessage })
        }
    }
}

export default DiscoController