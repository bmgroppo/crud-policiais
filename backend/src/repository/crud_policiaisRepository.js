const db = require('../config/db');
exports.buscarTodosPoliciais = (retorno) => {
    db.query('SELECT * FROM policiais', retorno);
};
exports.buscarPolicialPorId = (id, retorno) => {
    db.query('SELECT * FROM policiais WHERE id = ?', [id], retorno);
};

exports.inserirPolicial = (policiais, retorno) => {
    db.query('INSERT INTO policiais (RG_civil, RG_militar, CPF, data_nascimento, matricula) VALUES (?, ?, ?, ?, ?)', [policiais.RG_civil, policiais.RG_militar, policiais.CPF, policiais.data_nascimento, policiais.matricula], retorno);
};

exports.atualizarPolicial = (id, policiais, retorno) => {
    db.query('UPDATE policiais SET RG_civil = ?, RG_militar = ?, CPF = ?, data_nascimento = ?, matricula = ? WHERE id = ?', [policiais.RG_civil, policiais.RG_militar, policiais.CPF, policiais.data_nascimento, policiais.matricula, id], retorno);
};

exports.excluirPolicial = (id, retorno) => {
    db.query('DELETE FROM policiais WHERE id = ?', [id], retorno);
};
