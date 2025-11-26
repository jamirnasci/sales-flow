'use client'

import ClienteSection from "@/components/sections/ClienteSection";
import DashboardSection from "@/components/sections/DashboardSection";
import ProdutoSection from "@/components/sections/ProdutoSection";
import VendaSection from "@/components/sections/VendaSection";

import SideNav from "@/components/SideNav";
import { useState } from "react";

export default function Home(){
    const [sideNavVisible, setSideNavVisible] = useState(false)

    const [Section, setSection] = useState(()=> ClienteSection)

    const changeSection = (section: string)=>{
        switch (section) {
            case 'cliente':
                setSection(()=> ClienteSection)
                break;
            case 'produto':
                setSection(()=> ProdutoSection)
                break;
            case 'venda':
                setSection(()=> VendaSection)
                break;
            case 'dashboard':
                setSection(()=> DashboardSection)
                break;
            default:
                setSection(()=> ClienteSection)
                break;
        }
        setSideNavVisible(false)
    }
    return(
        <main>
            <header style={{zIndex: '999'}} className="sticky top-0 p-3 bg-blue-600 w-full flex items-center h-[60px]">
                <button className="text-white text-[1.5em] cursor-pointer" onClick={()=>{
                    setSideNavVisible(!sideNavVisible)
                }}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <h1 className="ml-2 text-white text-[1.5em]">SalesFlow</h1>
            </header>
            {
                sideNavVisible ? <SideNav changeSection={changeSection}/> : null
            }       
            <div className="w-full flex items-center justify-center">
                <Section/>
            </div>     
        </main>
    )
}