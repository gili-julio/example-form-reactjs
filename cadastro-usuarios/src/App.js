import React, { useState } from 'react';

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [dadosFormulario, setDadosFormulario] = useState({ nome: '', email: '' });

    const alterarMudancas = (e) => {
        setDadosFormulario({ ...dadosFormulario, [e.target.nome]: e.target.value });
    };

    const enviarFormulario = (e) => {
        e.preventDefault();
        if (dadosFormulario.nome && dadosFormulario.email) {
            setUsuarios([...usuarios, dadosFormulario]);
            setDadosFormulario({ nome: '', email: '' });
        }
    };

    return (
        <div>
            <h1>Cadastro de Usuários</h1>

            <form onSubmit={enviarFormulario}>
                <div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={dadosFormulario.nome}
                            onChange={alterarMudancas}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={dadosFormulario.email}
                            onChange={alterarMudancas}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Cadastrar</button>
            </form>

            <h2>Usuários Cadastrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
