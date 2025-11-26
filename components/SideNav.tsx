interface SideNavProps {
    changeSection: Function
}

export default function SideNav(props: SideNavProps) {
    return (
        <nav className="fixed left-0 bottom-0 h-[calc(100vh-60px)] bg-blue-600 shadow shadow-sm min-w-[250px]">
            <header className="bg-blue-100 flex items-start justify-left flex-col p-2">
                <img className="rounded-[50%] shadow shadow-sm h-[60px] w-[60px]" src="/user.png" alt="" />
                <h4 className="">username</h4>
            </header>
            <div className="p-4">
                <div className="mt-1 py-2 text-white">
                    <i className="fa-regular fa-user"></i>
                    <button className="ml-2" onClick={()=> props.changeSection('cliente')}>Clientes</button>
                </div>
                <div className="mt-1 py-2 text-white">
                    <i className="fa-solid fa-boxes-stacked"></i>
                    <button className="ml-2" onClick={()=> props.changeSection('produto')}>Produtos</button>
                </div>
                <div className="mt-1 py-2 text-white">
                    <i className="fa-solid fa-money-check"></i>
                    <button className="ml-2" onClick={()=> props.changeSection('venda')}>Vendas</button>
                </div>
                <div className="mt-1 py-2 text-white">
                    <i className="fa-solid fa-chart-line"></i>
                    <button className="ml-2" onClick={()=> props.changeSection('dashboard')}>Dashboard</button>
                </div>
            </div>
        </nav>
    )
}