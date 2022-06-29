import React from 'react'
import PlusIcon from './PlusIcon'

interface Props {
    onClick(): void;
}

const NewTodoButton = ({onClick} : Props) => {
  return (
    <button 
        onClick={onClick}
        className='new_todo_button'
    >
        <span className='new_todo_button__icon'>
            <PlusIcon />
        </span>
        <span>New Reminder</span>
    </button>
  )
}

export default NewTodoButton