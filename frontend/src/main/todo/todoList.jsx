import React from 'react'
import iconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map (todo => (
            <tr key={todo._id}>
                <td> {todo.description}</td>
                <td>
                    <iconButton style='danger' icon='trash-o'
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
                    <th> Acoes</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
