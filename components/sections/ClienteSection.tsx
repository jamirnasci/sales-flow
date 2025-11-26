'use client'

import { useState } from "react";
import ClienteModal from "../modals/ClienteModal";

export default function ClienteSection(){
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    const [modalMode, setModalMode] = useState<string>('create')

    return(
        <section className="flex flex-col min-w-[70%]">
            <div>
                <h2 className="text-[2em] font-bold">Clientes</h2>                
                <div className="flex items-center">
                    <button className="bg-blue-600 text-white rounded px-3 p-1" onClick={()=>{
                        setModalMode('create')
                        setModalVisible(true)
                    }
                    }>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Novo Cliente
                    </button>
                </div>
                <div className="flex items-end">
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input className="border border-gray-200 rounded p-1" type="text" name="" id="" placeholder="Nome do Cliente"/>
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
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>CEP</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-black text-center">
                            <td>Jamir</td>
                            <td>91981073539</td>
                            <td>jamir@gmail.com</td>
                            <td>68743000</td>
                            <td>
                                <button className="m-1 text-white p-1 rounded bg-green-600 w-[90%]" onClick={()=>{
                                        setModalMode('edit')
                                        setModalVisible(true)
                                    }
                                }>
                                    Abrir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                isModalVisible ? <ClienteModal modalMode={modalMode} setModalVisible={setModalVisible}/> : null
            }
        </section>
    )
}