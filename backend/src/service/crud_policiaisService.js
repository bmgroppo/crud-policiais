const repository = require('../repository/crud_policiaisRepository');

exports.getAllPoliciais = (retorno) => {
    repository.buscarTodosPoliciais(retorno);
};

exports.getPolicialById = (id, retorno) => {
    repository.buscarPolicialPorId(id, retorno);
};

exports.postPolicial = (policial, retorno) => {
    repository.inserirPolicial(policial, retorno);
};

exports.putPolicial = (id, policial, retorno) => {
    repository.atualizarPolicial(id, policial, retorno);
};

exports.deletePolicial = (id, retorno) => {
    repository.excluirPolicial(id, retorno);
};
