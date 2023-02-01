import {useEffect, useState} from 'react'
import './App.css'
import List from "./components/List";
import Form from "./components/Form";
import {Sub} from "./types";


interface AppState {
    subs: Array<Sub>
}

const INITIAL_STATE = [
    {
        nick: 'Javi',
        subMonths: 3,
        avatar: 'https://i.pravatar.cc/150?u=Javi',
        description: 'Javi es moderador'
    },
    {
        nick: 'juanito',
        subMonths: 7,
        avatar: 'https://i.pravatar.cc/150?u=juanito'
    }
]

function App() {
    const [subs, setSubs] = useState<AppState["subs"]>([]);

    useEffect(() => {
        setSubs(INITIAL_STATE)
    }, [])


    return (
        <div className="App">
            <h1>Javi subs</h1>
            <List subs={subs}/>
            <Form/>
        </div>
    )
}

export default App
