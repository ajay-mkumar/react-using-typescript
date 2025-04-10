import { useState } from 'react';
import './App.css'
import ShoppingList from './components/ShoppingList'
import item from './models/items';
import ShoppingListForm from './components/ShoppingListForm';

function App() {
 const [shoppingItems, setShoppingItems] = useState<item[]>([]);

 const addItem = (product: string, qty: number) => {
    setShoppingItems([...shoppingItems, { id: Math.random(), name: product, quantity: qty}]);
 }

  return (
    <>
     <ShoppingList shoppingItems = {shoppingItems}/>
     <ShoppingListForm addItem={addItem}/>
    </>
  )
}

export default App
