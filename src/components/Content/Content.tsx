import { useContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { StoreContext } from "../../contexts/StoreContext"
import Despesas from "../../pages/Despesas/Despesas"
import DespesasAdd from "../../pages/Despesas/DespesasAdd"
import DespesasEdit from "../../pages/Despesas/DespesasEdit"
import Dividas from "../../pages/Dividas/Dividas"
import DividasAdd from "../../pages/Dividas/DividasAdd"
import DividasEdit from "../../pages/Dividas/DividasEdit"
import Ganhos from "../../pages/Ganhos/Ganhos"
import GanhosAdd from "../../pages/Ganhos/GanhosAdd"
import GanhosEdit from "../../pages/Ganhos/GanhosEdit"
import Home from "../../pages/Home/Home"
import Login from "../../pages/Login/Login"
import Registration from "../../pages/Registration/Registration"
import Menu from "../Menu/Menu"
import Navbar from "../Navbar/Navbar"
import './Content.css'

export default () => {
    const [menuOpened,setMenuOpened] = useState(false)
    const {state} = useContext(StoreContext)

    function toggleMenu() {
        setMenuOpened(
            (valor) => !valor
        )
    }
    return (
        <>
        {
            state.logged ? (
                <>
                    <aside className={menuOpened ? '': 'MenuClosed'}>
                        <Menu open={menuOpened}/>
                    </aside>
                    <main>
                        <Navbar toggleMenu={toggleMenu}/>
                        <div className="Content">
                            <Routes>
                                <Route path="/" element={<Home/>} />
                                <Route path="/ganhos" element={<Ganhos/>} />
                                <Route path="/ganhos/add" element={<GanhosAdd />} />
                                <Route path="/ganhos/edit/:id" element={<GanhosEdit />} />
                                <Route path="/despesas" element={<Despesas />} />
                                <Route path="/despesas/add" element={<DespesasAdd />} />
                                <Route path="/despesas/edit/:id" element={<DespesasEdit />} />
                                <Route path="/dividas" element={<Dividas />} />
                                <Route path="/dividas/add" element={<DividasAdd />} />
                                <Route path="/dividas/edit/:id" element={<DividasEdit />} />
                                <Route path="/registration" element={<Registration />} />
                            </Routes>
                        </div>
                    </main>
                    
                </>
            ) : (
                <Routes>
                    <Route path="/signup" element={<Registration />} />
                    <Route path="*" element={<Login/>} />
                </Routes>
            )
        }
        </>
    )
}