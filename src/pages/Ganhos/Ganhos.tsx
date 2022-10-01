import Crud from '../../components/Crud/CrudList'
import Field from '../../Core/Field'
import './Ganhos.css'
import columnsGanhos from '../../Core/data/ganhos'

export default () => {
    return (
        <div className='Ganhos'>
            <Crud table="ganhos" columns={columnsGanhos}/>
        </div>
    )
}