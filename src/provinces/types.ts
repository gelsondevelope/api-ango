export type IProvincesProps = {
    id: string;
    normalized: string;
    nome: string;
    fundada: string;
    capital: string;
    area: string;
    prefixo_telefonico: string;
    site_governo_provincial: string;
    municipios: string[],
    comunas:IComunaProps[],
    //distritos:string[] | null
}
export type IComunaProps={
    municipio:string,
    nomeComuna:string[]
}