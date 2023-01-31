import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


interface Sub{
    nick: string
    avatar:string
    subMonths: number
    description?:string
}
interface AppState{
    subs: Array<Sub>
}

const INITIAL_STATE =[
    {
        nick: 'Javi',
        subMonths: 3,
        avatar: 'https://i.pravatar.cc/150?u=Javi',
        description :'Javi es moderador'
    },
    {
        nick: 'juanito',
        subMonths: 7,
        avatar: 'https://i.pravatar.cc/150?u=juanito'
    }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  useEffect(()=>{
      setSubs(INITIAL_STATE)
  },[])



  return (
    <div className="App">
        <h1>Javi subs</h1>
        <ul>
            {
                subs.map( sub =>{
                    return(
                        <li key={sub.nick}>
                            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
                            <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                            <p>{sub.description?.substring(0,100)}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default App
