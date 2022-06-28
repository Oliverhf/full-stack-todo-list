import React, { ChangeEvent, useCallback, useState } from 'react'
import TodoItem from "./types/TodoItem"
import { useMutation } from '@apollo/client'
import {gql} from '@apollo/client'


const TOGGLE_TODO_ITEM = gql`
  mutation($id: ID!) {
    toggleTodoItem(id: $id) {
      id
      isCompleted
    }
  }
`

const UPDATE_TODO_ITEM = gql`
  mutation ($id: ID!, $content: String!) {
  updateTodoItem(id: $id, content: $content) {
    id
    content
	}
} 
`


const TodoListItem = ({id, content, isCompleted} : TodoItem) => {
  const [text, setText] = useState(content)
  const [toggleItem] = useMutation(TOGGLE_TODO_ITEM)
  const [updateItem] = useMutation(UPDATE_TODO_ITEM)

  const handleToggle = useCallback(() => {
    toggleItem({variables: {id}})
  },[id, toggleItem])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const nextText = e.target.value;
    setText(nextText)
  }, [setText])

  const handleBlur = useCallback(() => {
    updateItem({variables: {id, content: text}})
  }, [text, updateItem])

  return (
    <div className='todo_item'>
    <button 
      onClick={handleToggle}
      className={`todo_item__toggle ${isCompleted ? "todo_item__toggle--completed" : ""}`}>
    </button>
    <input 
      className='todo_item__content'
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
    
    />
  </div>
  )

}

export default TodoListItem