//Importes necessários
const connection = require('../database/connection');
/**
 * Métodos do profile
 */
module.exports = {

    // método de listagem de incidents com um ong_id
    async index(req, response){
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        
        return response.json(incidents);
    }
}