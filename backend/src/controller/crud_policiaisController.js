const service = require('../service/crud_policiaisService')

exports.listarTodosPoliciais = async (req, res) => {
    service.getAllPoliciais((err, results) => {
        if (err) {
            res.status(500).json({err: "Erro ao listar os policiais"})
        } else {
            res.status(200).json(results)
        }
    });
}

exports.buscarPolicialPorId = async (req, res) => {
    const id = req.params.id;
    service.getPolicialById(id, (err, result) => {
        if (err) {
            res.status(500).json({err: "Erro ao buscar o policial por Id"})
        } else {
            res.status(200).json(result[0]);
        }
    });
}

exports.cadastrarPolicial = async (req, res) => {
    const policial = req.body;
    service.postPolicial(policial, (err, result) => {
        if (err) {
            res.status(500).json({err: "Erro ao cadastrar o policial"})
        } else {
            res.status(201).json({message:"Policial cadastrado com sucesso!", id: result.insertId});
        }
    });
}

exports.atualizarPolicial = async (req, res) => {
    const id = req.params.id;
    const policial = req.body;
    service.putPolicial(id, policial, (err, result) => {
        if (err) {
            res.status(500).json({err: "Erro ao atualizar o policial"})
        } else if (result.affectedRows === 0) {
            res.status(404).json({err: "Policial não encontrado"})
        } else {
            res.status(200).json({message:"Policial atualizado com sucesso!"});
        }
    });
}

exports.deletarPolicial = async (req, res) => {
    const id = req.params.id;
    service.deletePolicial(id, (err, result) => {
        if (err) {
            res.status(500).json({err: "Erro ao deletar o policial"})
        } else if (result.affectedRows === 0) {
            res.status(404).json({err: "Policial não encontrado"})
        } else {
            res.status(200).json({message:"Policial deletado com sucesso!"});
        }
    });
}