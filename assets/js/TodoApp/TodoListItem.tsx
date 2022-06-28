import React, { ChangeEvent, useCallback, useState } from 'react'
import TodoItem from "./types/TodoItem"
import { useMutation } from '@apollo/client'
import {gql} from '@apollo/client'
import { GET_TODO_ITEMS } from './TodoList'


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

const DELETE_TODO_ITEM = gql`
  mutation deleteTodoItem($id: ID!) {
    deleteTodoItem(id: $id) 
  }
`

interface TodoItems {
  todoItems: any; // TODO: Put a correct type here
}



const TodoListItem = ({id, content, isCompleted} : TodoItem) => {
  const [text, setText] = useState(content)
  const [toggleItem] = useMutation(TOGGLE_TODO_ITEM)
  const [updateItem] = useMutation(UPDATE_TODO_ITEM)
  const [deleteItem] = useMutation(DELETE_TODO_ITEM, {
    update(cache) {
      const {todoItems} = cache.readQuery<TodoItems>({query: GET_TODO_ITEMS})!
      console.log(todoItems)
      cache.writeQuery({
        query: GET_TODO_ITEMS,
        data: {
          todoItems: todoItems.filter((item: TodoItem) => item.id !== id)
        }
      })
    }
  })

  const handleToggle = useCallback(() => {
    toggleItem({variables: {id}})
  },[id, toggleItem])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const nextText = e.target.value;
    setText(nextText)
  }, [setText])

  const handleBlur = useCallback(() => {
    if(text === "") {
      deleteItem({variables: {id}})
      return
    }

    if(text === content) return
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