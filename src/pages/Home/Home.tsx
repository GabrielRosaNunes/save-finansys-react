import { useContext, useEffect, useRef, useState } from "react"
import CalculatorIcon from "../../assets/icons/CalculatorIcon"
import ClipboardIcon from "../../assets/icons/ClipboardIcon"
import MoneyIcon from "../../assets/icons/MoneyIcon"
import ValueCard from "../../components/ValueCard/ValueCard"
import { StoreContext } from "../../contexts/StoreContext"
import Firebase from "../../Core/Firebase"
import './Home.css'

export default () => {
    const [totalGanhos,setTotalGanhos] = useState(0)
    const [totalDespesas,setTotalDespesas] = useState(0)
    const [totalDividas,setTotalDividas] = useState(0)
    const {state} = useContext(StoreContext)

    useEffect(getSumGanhos,[])
    useEffect(getSumDespesas,[])
    useEffect(getSumDividas,[])

    function getSumGanhos() {
        const firebaseGanhos = new Firebase('ganhos',state.userEmail);
            firebaseGanhos.getAll().then(
                (dados) => {
                    const data = dados.reduce(
                        (previousValue:number,currentValue:any):number => {
                            let count = 0;
                            if (previousValue) {
                                count = previousValue
                            }
                            return count + parseInt(currentValue.valor)
                        },0
                    )

                    setTotalGanhos(data)
                }
            )
    }

    function getSumDespesas() {
        const firebaseDespesas = new Firebase('despesas',state.userEmail);
            firebaseDespesas.getAll().then(
                (dados) => {
                    const data = dados.reduce(
                        (previousValue:number,currentValue:any):number => {
                            let count = 0;
                            if (previousValue) {
                                count = previousValue
                            }
                            return count + parseInt(currentValue.valor)
                        },0
                    )

                    setTotalDespesas(data)
                }
            )
    }

    function getSumDividas() {
        const firebaseDividas = new Firebase('dividas',state.userEmail);
            firebaseDividas.getAll().then(
                (dados) => {
                    const data = dados.reduce(
                        (previousValue:number,currentValue:any):number => {
                            let count = 0;
                            if (previousValue) {
                                count = previousValue
                            }
                            return count + parseInt(currentValue.valor)
                        },0
                    )

                    setTotalDividas(data)
                }
            )
    }
    
    return (
        <div className="Home">
            <div className="HomeHead">
                <ValueCard icon={<MoneyIcon />} title="Ganhos" value={totalGanhos.toString()} color="green"/>
                <ValueCard icon={<CalculatorIcon />} title="Despesas" value={totalDespesas.toString()} color="red"/>
                <ValueCard icon={<ClipboardIcon />} title="Dívidas" value={totalDividas.toString()} color="blue"/>
            </div>
        </div>
    )
}