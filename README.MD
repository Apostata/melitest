# Meli test Fullstack javascript - React

## Stack
1. Express (backend)
1. React com Hooks (frontend)
3. Webpack para transpilação (front and backend)

## Como iniciar:
1. npm install
2. npm run both
3. Use a segunte url no navegador: `http://localhost:3000`

**NOTAS:**
1. Não utilizei o `create-react-app` por questões de estudo e maior customização.

2. No endpoint do backend que chama a api de busca `/api/items?q=:STRING&limit=4` o qual faz a consulta em: `https://api.mercadolibre.com/sites/MLA/search` para retornar o resultado, alguns não possuem o `filters` para mostrar as categorias. Para tais buscas, uso `available_filters` passando o primeiro item.

3. Na página de detalhes do produto, ao acessar a url direta pela barra de endereços, `/api/items/:ID` para carregamento das categorias foi usado o endopoint de busca `/api/items?q=:PRODUTO_ATUAL&limit=4`

4. O teste está 100% responsivo

Obrigado!