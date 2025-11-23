export default function ProdutoSection() {
    return (
        <section id="produtos" className="">
            <h4>Produtos</h4>

            <div className="row">
                <div className="col s12">
                    <a className="btn waves-effect waves-light blue">
                        <i className="material-icons left">add</i>Cadastrar Produto
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m8">
                    <div className="input-field">
                        <i className="material-icons prefix">search</i>
                        <input id="pesquisa-produto" type="text" className="validate" />
                        <label htmlFor="pesquisa-produto">Pesquisar produto</label>
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
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Notebook Dell</td>
                                <td>Informática</td>
                                <td>R$ 3.500,00</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mouse Logitech</td>
                                <td>Periféricos</td>
                                <td>R$ 120,00</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Cadeira Gamer</td>
                                <td>Móveis</td>
                                <td>R$ 1.200,00</td>
                                <td>8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}