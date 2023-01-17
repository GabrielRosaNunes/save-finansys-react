import {  useEffect,  useState } from "react"
import CalculatorIcon from "../../assets/icons/CalculatorIcon"
import ClipboardIcon from "../../assets/icons/ClipboardIcon"
import MoneyIcon from "../../assets/icons/MoneyIcon"
import ValueCard from "../../components/ValueCard/ValueCard"
import { Despesas } from "../../Core/Types/Despesas"
import { Dividas } from "../../Core/Types/Dividas"
import { Ganhos } from "../../Core/Types/ganhos"
import { useFirebaseQuery } from "../../Hooks/useFirebaseQuery"
import './Home.css'

export default () => {
    const [totalGanhos,setTotalGanhos] = useState(0)
    const [totalDespesas,setTotalDespesas] = useState(0)
    const [totalDividas,setTotalDividas] = useState(0)
    const { getAll:getAllGanhos } = useFirebaseQuery<Ganhos>('ganhos')
    const { getAll:getAllDespesas } = useFirebaseQuery<Despesas>('despesas')
    const { getAll:getAllDividas } = useFirebaseQuery<Dividas>('dividas')

    useEffect(getSumGanhos,[])
    useEffect(getSumDespesas,[])
    useEffect(getSumDividas,[])

    function getSumGanhos() {
        getAllGanhos().then(
            dados => {
                const sumGanhos = dados.reduce(
                    (previousValue,currentValue):number => (previousValue ?? 0) + parseInt(currentValue.valor),
                    0
                )
                setTotalGanhos(sumGanhos);
            }
        )
    }

    function getSumDespesas() {
        getAllDespesas().then(
            dados => {
                const sumDespesas = dados.reduce(
                    (previousValue,currentValue):number => (previousValue ?? 0) + parseInt(currentValue.valor),
                    0
                )
                setTotalDespesas(sumDespesas);
            }
        )
    }

    function getSumDividas() {
        getAllDividas().then(
            dados => {
                const sumDividas = dados.reduce(
                    (previousValue,currentValue):number => (previousValue ?? 0) + parseInt(currentValue.valor),
                    0
                )
                setTotalDividas(sumDividas);
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