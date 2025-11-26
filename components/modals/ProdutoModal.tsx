interface ProdutoModalProps {
    setModalVisible: Function
    modalMode: string
}

export default function ProdutoModal(props: ProdutoModalProps) {
    return (
        <div className="fixed left-0 top-0 flex items-center justify-center h-[100vh] w-[100vw] bg-black/50">
            <div className="p-4 bg-white rounded-xl">
                <div className="flex items-center justify-between p-1">
                    <h2 className="font-bold text-xl">{props.modalMode === 'create' ? 'Cadastrar Produto' : 'Editar Produto'}</h2>
                    <button className="bg-red-500 text-white h-[30px] w-[30px] rounded-[50%] cursor-pointer" onClick={() => props.setModalVisible(false)}>
                        <i className="fa-solid fa-x"></i>
                    </button>
                </div>
                <div>
                    <form action="/cliente/novo" method="post">
                        <div className="flex items-center">
                            <div className="m-1">
                                <label htmlFor="">Nome</label><br />
                                <input className="border border-gray-300 rounded p-1" type="text" name="nome" id="nome" />
                            </div>
                            <div className="m-1">
                                <label htmlFor="">Modelo</label><br />
                                <input className="border border-gray-300 rounded p-1" type="text" name="modelo" id="modelo" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="m-1">
                                <label htmlFor="preco_compra">Preço Compra</label><br />
                                <input className="border border-gray-300 rounded p-1" type="number" name="preco_compra" id="preco_compra" />
                            </div>
                            <div className="m-1">
                                <label htmlFor="preco_venda">Preço Venda</label><br />
                                <input className="border border-gray-300 rounded p-1" type="number" name="preco_venda" id="preco_venda" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-1 w-full">
                                <label htmlFor="quantidade">Quantidade</label><br />
                                <input className="border border-gray-300 rounded p-1 w-full" type="number" name="quantidade" id="quantidade" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-1 w-full">
                                <label htmlFor="descricao">Descrição</label><br />
                                <textarea style={{resize: 'none'}} className="border border-gray-300 rounded p-1 w-full" name="descricao" id="descricao"></textarea>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <input className="m-1 p-1 px-3 text-white bg-green-600 rounded w-full cursor-pointer" type="submit" value={props.modalMode === 'create' ? 'Cadastrar' : 'Salvar'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}