import { useEffect, useState, FC } from "react";

interface Item {
    id: number,
    content: string
}

const App: FC = () => {
    const [value, setValue] = useState<string>('')
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        (async () => {
            
        })();
    }, []);

    return (
        <div>
            <p>TODO APP</p>
            <div>
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
                <button>送信</button>
            </div>
        </div>
    )
};

export default App;
