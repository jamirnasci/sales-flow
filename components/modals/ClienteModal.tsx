interface ClienteModalProps {
    setModalVisible: Function
    modalMode: string
}

export default function ClienteModal(props: ClienteModalProps) {
    return (
        <div onClick={() => props.setModalVisible(false)} className="fixed left-0 top-0 flex items-center justify-center h-[100vh] w-[100vw] bg-black/50">
            <div className="p-4 bg-white rounded-xl">
                <div className="flex items-center justify-between p-1">
                    <h2 className="font-bold text-xl">{props.modalMode === 'create' ? 'Cadastrar Cliente' : 'Editar Cliente'}</h2>
                    <button className="bg-red-500 text-white h-[30px] w-[30px] rounded-[50%] cursor-pointer" onClick={()=> props.setModalVisible(false)}>
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
                                <label htmlFor="">CPF</label><br />
                                <input className="border border-gray-300 rounded p-1" type="text" name="cpf" id="cpf" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="m-1">
                                <label htmlFor="">E-mail</label><br />
                                <input className="border border-gray-300 rounded p-1" type="email" name="email" id="email" />
                            </div>
                            <div className="m-1">
                                <label htmlFor="">Telefone</label><br />
                                <input className="border border-gray-300 rounded p-1" type="tel" name="telefone" id="telefone" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-1 w-full">
                                <label htmlFor="">CEP</label><br />
                                <input className="border border-gray-300 rounded p-1 w-full" type="text" name="cep" id="cep" />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <input className="m-1 p-1 px-3 text-white bg-green-600 rounded w-full cursor-pointer" type="submit" value={props.modalMode == 'create' ? 'Cadastrar' : 'Salvar'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}