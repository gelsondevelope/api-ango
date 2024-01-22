import { Request, Response } from "express";
import { provinces } from "../provinces";

export default class GetController{
    async GetProvinces(req:Request, res:Response){
       const nomeProvincia= provinces.map((province, index)=>(province.nome))
       res.json(nomeProvincia)

    }
    async GetMunicipes(req:Request, res:Response){
        const nomeProvincia = req.params.nome;
        const provincia = provinces.find(p => p.nome.toLowerCase() === nomeProvincia.toLowerCase());
        if (provincia) {
            res.json(provincia.municipios);
          } else {
            res.status(404).json({ error: 'Província não encontrada' });
          }
        

     }
     async GetComunas(req: Request, res: Response) {
      try {
        const nomeProvincia = req.params.provincia;
        const nomeMunicipio = req.params.municipio;
    
        const provincia = provinces.find((provincia) => provincia.nome.toLocaleLowerCase() === nomeProvincia.toLocaleLowerCase());
    
        if (provincia) {
          const municipio = provincia.comunas.find((comuna) => comuna.municipio.toLocaleLowerCase() === nomeMunicipio.toLocaleLowerCase());
    
          if (municipio) {
            const comunas = municipio.nomeComuna; // Ajuste aqui para acessar diretamente a propriedade nomeComuna
    
            console.log(comunas);
            res.json(comunas);
          } else {
            res.status(404).json({ error: 'Município não encontrado' });
          }
        } else {
          res.status(404).json({ error: 'Província não encontrada' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
    
}