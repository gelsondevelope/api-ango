API de Localidades de Angola
Introdução
A API de Localidades de Angola é uma aplicação desenvolvida em Node.js que tem como objetivo fornecer informações detalhadas sobre as províncias, 
municípios e comunas de Angola. Este projeto foi construído com base nas informações disponibilizadas pelo Angola-API, com melhorias significativas nos dados relacionados aos municípios 
e um aprimoramento na seção das comunas.
Instalação
Para utilizar a API em seu ambiente local, siga os seguintes passos:
-Ter o Node js instalado
-clonar o repositório:git clone https://github.com/gelsondevelope/api-ango.git
-Instalação das Dependências:npm install
-Execução da Aplicação(precisas estar no diretório da aplicação):npm run dev
Rotas
A API fornece várias rotas para acessar informações sobre as localidades de Angola:
Provincias:
Rota: http://localhost:5000/provinces
Descrição: Retorna a lista de todas as províncias de Angola.
Municipios:
Rota: http://localhost:5000/${selectedProvincia}/municipio
Descrição: Retorna a lista de todos os municípios de uma província de Angola, com dados corrigidos e aprimorados.
Comunas:

Rota:http://localhost:5000/${selectedProvincia}/${selectedMunicipio}
Descrição: Retorna a lista de todas as comunas de um município  de Angola, com melhorias significativas.
