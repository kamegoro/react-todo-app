import { useEffect, useState, FC } from "react";

interface Item {
    id: number,
    content: string
}

const App: FC = () => {
    const [value, setValue] = useState<string>('')
    const [items, setItems] = useState<Item[]>([]);

    function addItem(): void {
        const item: Item = {
            id: Date.now(),
            content: value
        }
        setItems([...items, item])
        setValue(``)
    }
    console.log(value)
    console.log(items)

    useEffect(() => {
        (async () => {
            
        })();
    }, []);

    return (
        <div>
            <p>TODO APP</p>
            <div>
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
                <button onClick={() => addItem()} disabled={!value}>送信</button>
            </div>
            <div>
                <ul>
                    {items.map(v => {
                        return (
                            <li>
                                <p>{v.id}</p>
                                <button>削除</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default App;
