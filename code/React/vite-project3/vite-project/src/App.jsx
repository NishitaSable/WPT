// import { useState } from 'react'
import Example from './Example'
import Gallery from './Gallery'
import Button from './Button'
import ShoppingList from './ShoppingList'
import List from './List'
import FormAdd from './FormAdd'
import List_data from './List_data'
import './App.css'
import MyCheckbox from './MyCheckBox'
import MyInput from './MyInput'


function App() {
  

  return (
    <>
    <h1>Counter that updates separate</h1>
      <Example/>
      <Gallery />
      <Button />
      <Button />
      <ShoppingList />
      <List />
      <FormAdd />
      <List_data />
      <MyCheckbox />
      <MyInput />

    </>
  )
}

export default App;
