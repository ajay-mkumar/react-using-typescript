import { JSX, useRef } from "react";

interface ShoppingListFormProps {
    addItem: (product: string, qty: number) => void;
}

function ShoppingListForm({ addItem }: ShoppingListFormProps): JSX.Element {
    const textInputRef = useRef<HTMLInputElement>(null);
    const qtyInputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        addItem(textInputRef.current!.value, qtyInputRef.current!.valueAsNumber);
        textInputRef.current!.value = "";
        qtyInputRef.current!.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add item" ref={textInputRef} /> <br />
            <input type="number" placeholder="Quantity" ref={qtyInputRef} min="0" /> <br />
            <button type="submit">Add</button>
        </form>
    );
}

export default ShoppingListForm;