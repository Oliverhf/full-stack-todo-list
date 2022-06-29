import React, {FormEvent, useState, FocusEvent} from 'react'
import { gql } from "@apollo/client";
import {useMutation} from '@apollo/client'
import TodoItems from './types/TodoItems';
import { GET_TODO_ITEMS } from './TodoList'


const CREATE_TODO_ITEM =  gql `
    mutation createTodoItem($content: String!) {
  createTodoItem(content: $content) {
    id
    isCompleted
    content
  }
}
`


const NewTodoForm = ({setShowForm}) => {
  const [content, setContent] = useState("")
  const [createTodo] = useMutation(CREATE_TODO_ITEM , {
    update(cache, {data: {createTodoItem: newTodo}}) {
        const {todoItems} = cache.readQuery<TodoItems>({query: GET_TODO_ITEMS})!
        console.log(todoItems)
        cache.writeQuery({
            query: GET_TODO_ITEMS,
            data: {
                todoItems: [...todoItems, newTodo]
            }
        })
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(content.trim() !== "") {
        createTodo({variables: {content: content.trim()}})
        setContent("")
    }
  }

  const handleBlur = (e: FocusEvent) => {
    if(content === "") {
      setShowForm(false)
      return
    } 
  }

  return (
    <form className='todo_item new_todo__form' onSubmit={handleSubmit}>
        <button className="todo_item__toggle">
        </button>
        <input 
            type="text" 
            name=""
            onChange={(e) => setContent(e.target.value)}
            onBlur={handleBlur}
            value={content}
            className="todo_item__content" 
            autoFocus 
        />
    </form>
  )
}

export default NewTodoForm                                                                                                                            