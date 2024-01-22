import { Router } from "express";
import GetController from "./controller/getController";
const getController=new GetController
const route=Router()
route.get('/provinces', getController.GetProvinces)
route.get('/:nome/municipio',getController.GetMunicipes)
route.get('/:provincia/:municipio', getController.GetComunas)
export default route