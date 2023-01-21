import Crud from '../../components/Crud/CrudList'
import Field from '../../Core/Field'
import './Ganhos.css'
import columnsGanhos from '../../Core/data/ganhos'
import { Ganhos } from '../../Core/Types/ganhos'

export default () => {
    return (
        <div className='Ganhos'>
            <Crud<Ganhos> table="ganhos" columns={columnsGanhos}/>
        </div>
    )
}