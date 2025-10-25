import DiscoModel from "../model/Disco.model";
import DiscoType from "../types/Disco.type";
import DiscoUpdateType from "../types/DiscoUpdate.type";

class DiscoService {
    async createDisco(disco: DiscoType): Promise<void> {
        const novoDisco = new DiscoModel(disco)
        await novoDisco.save()
    }

    async getAllDisco(): Promise<DiscoType[]> {
        const discos = (await DiscoModel.find()) as DiscoType[]
        return discos
    }

    async getDisco(id: string): Promise<DiscoType> {
        const disco = (await DiscoModel.findById(id)) as DiscoType
        return disco
    }

    async updateDisco(id: string, disco: DiscoUpdateType): Promise<void> {
        await DiscoModel.findByIdAndUpdate(id, disco, { new: true })
    }

    async deleteDisco(id: string): Promise<void> {
        await DiscoModel.findByIdAndDelete(id)
    }
}

export default DiscoService