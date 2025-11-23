export default function FuncionarioSection() {
    return (
        <section id="funcionarios" className="">
            <h4>Funcionários</h4>
            <div className="row">
                <div className="col s12">
                    <a className="btn waves-effect waves-light blue">
                        <i className="material-icons left">person_add</i>Cadastrar Funcionário
                    </a>
                </div>
            </div>

            <div className="row flex items-center">
                <div className="col s12 m8">
                    <div className="input-field">
                        <i className="material-icons prefix">search</i>
                        <input id="pesquisa-funcionario" type="text" className="validate" />
                        <label htmlFor="pesquisa-funcionario">Pesquisar funcionário</label>
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
                    <ul className="collection">
                        <li className="collection-item flex items-center justify-between">
                            <div>
                                <span className="title"><strong>Maria Oliveira</strong></span><br />
                                <span>Telefone: (91) 99999-1111</span><br />
                                <span>Email: maria.oliveira@email.com</span><br />
                                <span>Total de Vendas: 120</span>
                            </div>
                            <div>
                                <a href="#!" className="secondary-content btn-small blue waves-effect waves-light">Abrir</a>
                            </div>
                        </li>
                        <li className="collection-item flex items-center justify-between">
                            <div>
                                <span className="title"><strong>Maria Oliveira</strong></span><br />
                                <span>Telefone: (91) 99999-1111</span><br />
                                <span>Email: maria.oliveira@email.com</span><br />
                                <span>Total de Vendas: 120</span>
                            </div>
                            <div>
                                <a href="#!" className="secondary-content btn-small blue waves-effect waves-light">Abrir</a>
                            </div>
                        </li>
                                                <li className="collection-item flex items-center justify-between">
                            <div>
                                <span className="title"><strong>Maria Oliveira</strong></span><br />
                                <span>Telefone: (91) 99999-1111</span><br />
                                <span>Email: maria.oliveira@email.com</span><br />
                                <span>Total de Vendas: 120</span>
                            </div>
                            <div>
                                <a href="#!" className="secondary-content btn-small blue waves-effect waves-light">Abrir</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}