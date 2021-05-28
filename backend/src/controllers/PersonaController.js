const connection = require('../database/connection');

module.exports = {
    // Retorna os dados com rolagem infinita
    async index(request, response) {
        const { page = 1 } = request.query;

        // Armazenando o total de casos na primeira posicao do array
        const [count] = await connection('persona').count();

        // Enviando o total de registros para o cabeçalho da resposta para ser pego no frontend
        response.header('X-Total-Count', count['count(*)']);

        const personas = await connection('persona')
            .limit(20)
            .offset((page - 1) * 20)
            .select('*');

        return response.json(personas);
    },

    // Retornando todos os dados dos personagens
    async search(request, response) {
        const personas = await connection('persona')
            .select('*');

        return response.json(personas);
    },

    // Retornando os dados dos personagens com os detalhes (localização e episódios)
    async detail(request, response) {

        const personas = await connection('persona')
            .join('location', 'location.id', '=', 'persona.location_id')
            .join('episodes', 'episodes.id', '=', 'persona.episodes_id')
            .select([
                'persona.id', 
                'persona.name', 
                'persona.status',
                'persona.specie',
                'persona.type',
                'persona.gender',
                'persona.image',
                'location.locality',
                'episodes.description'
            ]);

        return response.json(personas);
    }
}