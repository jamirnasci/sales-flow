import { useEffect } from 'react'
import M from 'materialize-css'

interface SideNavProps {
    setSection: Function
}

export default function SideNav(props: SideNavProps) {
    useEffect(() => {
        const M = require('materialize-css');
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }, []);

    return (
        <ul id="slide-out" className="sidenav flex flex-col">
            <div className="side-bar-header blue">
                <h4>SalesFlow</h4>
                <i>salesflow@email.com</i>
            </div>
            <li>
                <button className='flex items-center p-4 w-full' onClick={() => {
                    props.setSection('Dashboard')
                }}>
                    <i className="material-icons mr-2">dashboard</i>Dashboard
                </button>
            </li>
            <li>
                <button className='flex items-center p-4 w-full' onClick={() => {
                    props.setSection('Clientes')
                }}>
                    <i className="material-icons mr-2">people</i>Clientes
                </button>
            </li>
            <li>
                <button className='flex items-center p-4 w-full' onClick={() => {
                    props.setSection('Vendas')
                }}>
                    <i className="material-icons mr-2">shopping_cart</i>Vendas
                </button>
            </li>
            <li>
                <button className='flex items-center p-4 w-full' onClick={() => {
                    props.setSection('Fornecedores')
                }}>
                    <i className="material-icons mr-2">local_shipping</i>Fornecedores
                </button>
            </li>
            <li>
                <button className='flex items-center p-4 w-full' onClick={() => {
                    props.setSection('Produtos')
                }}>
                    <i className="material-icons mr-2">inventory</i>Produtos
                </button>
            </li>
            <li>
                <button className='flex items-center p-4 w-full' onClick={() => {
                    props.setSection('Funcionarios')
                }}>
                    <i className="material-icons mr-2">work</i>Funcionários
                </button>
            </li>
        </ul>
    )
}