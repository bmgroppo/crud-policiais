const db = require('../config/db');
exports.buscarTodosPoliciais = (retorno) => {
    db.query('SELECT * FROM policiais', retorno);
};
exports.buscarPolicialPorId = (id, retorno) => {
    db.query('SELECT * FROM policiais WHERE id = ?', [id], retorno);
};

exports.inserirPolicial = (policiais, retorno) => {
    db.query('INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula) VALUES (?, ?, ?, ?, ?)', [policiais.rg_civil, policiais.rg_militar, policiais.cpf, policiais.data_nascimento, policiais.matricula], retorno);
};

exports.atualizarPolicial = (id, policiais, retorno) => {
    db.query('UPDATE policiais SET rg_civil = ?, rg_militar = ?, cpf = ?, data_nascimento = ?, matricula = ? WHERE id = ?', [policiais.rg_civil, policiais.rg_militar, policiais.cpf, policiais.data_nascimento, policiais.matricula, id], retorno);
};

exports.excluirPolicial = (id, retorno) => {
    db.query('DELETE FROM policiais WHERE id = ?', [id], retorno);
};
