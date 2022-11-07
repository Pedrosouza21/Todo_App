import React from 'react'
import iconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map (todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}> {todo.description}</td>
                <td>

                    <iconButton style='sucess' icon='check' hide={todo.done}
                    onClick={() => props.handleMarkAsDone(todo)}></iconButton>
                    <iconButton style= 'warning' icon='undo' hide={!todo.done}
                    onClick={() => props.handleMarkAsPending(todo)}></iconButton>
                    <iconButton style='danger' icon='trash-o' hide={!todo.done}
                    onClick={()=> props.handleRemove(todo)}></iconButton>
                </td>

            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr> 
                    <th> Descricao</th>
                    <th className='tableActions'> Acoes</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
