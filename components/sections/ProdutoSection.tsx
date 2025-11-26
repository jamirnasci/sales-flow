import { useState } from "react";
import ProdutoModal from "../modals/ProdutoModal";

export default function ProdutoSection() {
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const [modalMode, setModalMode] = useState<string>('create')

    return (
        <section className="flex flex-col min-w-[70%]">
            <div>
                <h2 className="text-[2em] font-bold">Produtos</h2>
                <div className="flex items-center">
                    <button className="bg-blue-600 text-white rounded px-3 p-1" onClick={()=>{
                        setModalMode('create')
                        setModalVisible(true)
                    }
                    }>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Cadastrar Produto
                    </button>
                </div>
                <div className="flex items-end">
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input className="border border-gray-200 rounded p-1" type="text" name="" id="" placeholder="Nome do Produto" />
                    </div>
                    <div>
                        <button className="ml-1 rounded bg-green-600 text-white p-1 px-3">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-black text-center">
                            <td>NXR Bros 160</td>
                            <td>Honda</td>
                            <td>50</td>
                            <td>25.0000</td>
                            <td>
                                <button className="m-1 text-white p-1 rounded bg-green-600 w-[90%]" onClick={()=>{
                                    setModalMode('edit')
                                    setModalVisible(true)
                                }}>Abrir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                isModalVisible ? <ProdutoModal modalMode={modalMode} setModalVisible={setModalVisible}/> : null
            }
        </section>
    )
}