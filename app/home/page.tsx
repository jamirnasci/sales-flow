'use client'

import { useState } from 'react'
import styles from './home.module.css'
import FuncionarioSection from '../sections/FuncionarioSection'
import ProdutoSection from '../sections/ProdutoSection'
import FornecedorSection from '../sections/FornecedorSection'
import VendasSection from '../sections/VendasSection'
import DashboardSection from '../sections/DashboardSection'
import ClienteSection from '../sections/ClienteSection'
import SideNav from '@/components/SideNav'
import TopNav from '@/components/TopNav'

export default function Home() {

    const [Section, setSection] = useState(() => ClienteSection)

    const changeSection = (sectionName: string) => {
        switch (sectionName) {
            case 'Clientes':
                setSection(() => ClienteSection)
                break;
            case 'Funcionarios':
                setSection(() => FuncionarioSection)
                break;
            case 'Produtos':
                setSection(() => ProdutoSection)
                break;
            case 'Fornecedores':
                setSection(() => FornecedorSection)
                break;
            case 'Vendas':
                setSection(() => VendasSection)
                break;
            case 'Dashboard':
                setSection(() => DashboardSection)
                break;
            default:
                break;
        }
    }

    return (
        <main className={styles.main}>
            <TopNav/>
            <div className={styles.contentContainer}>
                <SideNav setSection={changeSection}/>
                <section className="container">
                    <Section />
                </section>
            </div>
        </main>
    )
}