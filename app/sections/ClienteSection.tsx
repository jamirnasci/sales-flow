export default function ClienteSection() {
    return (
        <section id="clientes" className="">
            <h4>Clientes</h4>
            <div className="row">
                <div className="col s12">
                    <a className="btn waves-effect waves-light blue">
                        <i className="material-icons left">person_add</i>Cadastrar Cliente
                    </a>
                </div>
            </div>
            <div className="row flex items-center">
                <div className="col s12 m8">
                    <div className="input-field">
                        <i className="material-icons prefix">search</i>
                        <input id="pesquisa-cliente" type="text" className="validate" />
                        <label htmlFor="pesquisa-cliente">Pesquisar cliente</label>
                    </div>
                </div>
                <div className="col s12 m4">
                    <button className="btn waves-effect waves-light green" type="submit">
                        Buscar
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <table className="highlight responsive-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Cidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ana Souza</td>
                                <td>ana.souza@email.com</td>
                                <td>(91) 99999-1111</td>
                                <td>Belém</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>João Silva</td>
                                <td>joao.silva@email.com</td>
                                <td>(91) 98888-2222</td>
                                <td>Castanhal</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Maria Oliveira</td>
                                <td>maria.oliveira@email.com</td>
                                <td>(91) 97777-3333</td>
                                <td>Ananindeua</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}