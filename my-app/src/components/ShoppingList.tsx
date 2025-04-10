import { JSX } from "react";
import item from "../models/items";

interface ShoppingListProps {
    shoppingItems: item[];
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {props.shoppingItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}