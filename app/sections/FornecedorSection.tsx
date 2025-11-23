export default function FornecedorSection() {
    return (
        <section id="fornecedores" className="">
            <h4>Fornecedores</h4>

            <div className="row">
                <div className="col s12">
                    <a className="btn waves-effect waves-light blue">
                        <i className="material-icons left">business</i>Cadastrar Fornecedor
                    </a>
                </div>
            </div>

            <div className="row flex items-center">
                <div className="col s10 m8">
                    <div className="input-field">
                        <i className="material-icons prefix">search</i>
                        <input id="pesquisa-fornecedor" type="text" className="validate" />
                        <label htmlFor="pesquisa-fornecedor">Pesquisar fornecedor</label>
                    </div>
                </div>
                <div className="col s2 m4">
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
                                <span className="title"><strong>Tech Supplies Ltda</strong></span><br />
                                <span>Telefone: (91) 99999-4444</span><br />
                                <span>Email: contato@techsupplies.com</span><br />
                                <span>Produto Principal: Equipamentos de Informática</span><br />
                                <span>Cidade: Belém</span>
                            </div>
                            <div>
                                <a href="#!" className="secondary-content btn-small blue waves-effect waves-light">Abrir</a>
                            </div>
                        </li>
                                                <li className="collection-item flex items-center justify-between">
                            <div>
                                <span className="title"><strong>Tech Supplies Ltda</strong></span><br />
                                <span>Telefone: (91) 99999-4444</span><br />
                                <span>Email: contato@techsupplies.com</span><br />
                                <span>Produto Principal: Equipamentos de Informática</span><br />
                                <span>Cidade: Belém</span>
                            </div>
                            <div>
                                <a href="#!" className="secondary-content btn-small blue waves-effect waves-light">Abrir</a>
                            </div>
                        </li>
                                                <li className="collection-item flex items-center justify-between">
                            <div>
                                <span className="title"><strong>Tech Supplies Ltda</strong></span><br />
                                <span>Telefone: (91) 99999-4444</span><br />
                                <span>Email: contato@techsupplies.com</span><br />
                                <span>Produto Principal: Equipamentos de Informática</span><br />
                                <span>Cidade: Belém</span>
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