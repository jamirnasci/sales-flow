export default function VendaSection() {
    return (
        <section className="flex flex-col min-w-[70%]">
            <h2 className="text-[2em] font-bold">Venda</h2>
            <div>
                <div>
                    <div className="border border-gray-300 rounded p-4">
                        <strong>Cliente</strong>
                        <div className="flex">
                            <div className="w-full pr-1">
                                <label htmlFor="nome">Nome</label><br />
                                <input className="p-1 border border-gray-400 rounded w-full" type="text" name="nome" id="nome" />
                            </div>
                            <div>
                                <label htmlFor="cpf">CPF</label><br />
                                <input className="p-1 border border-gray-400 rounded" type="text" name="cpf" id="cpf" max={11} />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="telefone">Telefone</label><br />
                                <input className="p-1 border border-gray-400 rounded" type="tel" name="telefone" id="telefone" />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label><br />
                                <input className="p-1 border border-gray-400 rounded" type="email" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="cep">CEP</label><br />
                                <input className="p-1 border border-gray-400 rounded" type="text" name="cep" id="cep" max={8} />
                            </div>
                        </div>
                        <div className="flex justify-left items-end mt-1">
                            <div>
                                <button className="rounded bg-green-600 text-white p-1 px-3">
                                    Buscar
                                    <i className="ml-1 fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded p-4 mt-1">
                        <strong>Produto</strong>
                        <div className="flex">
                            <div className="w-full pr-1">
                                <label htmlFor="">Modelo</label><br />
                                <select className="p-1 border border-gray-400 rounded w-full" name="modelo" id="modelo">
                                    <option value="id">NXR Bros 160</option>
                                    <option value="id">POP 110i</option>
                                    <option value="id">Biz 125</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pagamento">Pagamento</label><br />
                                <select className="p-1 border border-gray-400 rounded w-full" name="pagamento" id="pagamento">
                                    <option value="id">PIX</option>
                                    <option value="id">Dinheiro</option>
                                    <option value="id">Débito/Crédito</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="quantidade">Quantidade</label><br />
                                <input className="p-1 border border-gray-400 rounded" type="number" name="quantidade" id="quantidade" />
                            </div>
                            <div>
                                <label htmlFor="desconto">Desconto</label><br />
                                <input className="p-1 border border-gray-400 rounded" type="number" name="desconto" id="desconto" />
                            </div>
                            <div>
                                <label htmlFor="status">Status</label><br />
                                    <select className="p-1 border border-gray-400 rounded w-full" name="pagamento" id="pagamento">
                                    <option value="id">Novo</option>
                                    <option value="id">Em Andamento</option>
                                    <option value="id">Finalizado</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-full ">
                                <label htmlFor="descricao">Descrição</label><br />
                                <input className="p-1 border border-gray-400 rounded w-full" type="text" name="descricao" id="descricao" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <input className="m-1 p-1 bg-green-600 text-white rounded min-w-[250px]" type="submit" value="Finalizar" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}