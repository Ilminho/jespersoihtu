import { useState } from 'react'
import kansi from '../imgs/js_kansi.png'
import { soittajat } from '../tekijat'


const Tekijat = () => {
  return(
    <div>
      <h4>Soittajat:</h4>
      <ul style={{ listStyleType:'none' }}>
        {
          soittajat.map((e) =>
            <li style={{ fontSize: '14px' }} key={e.nimi}> {e.nimi} : {e.soitin} </li>
          )
        }
      </ul>
      <br/>
      <h4 >Tuotanto:</h4>
      <ul style={{ listStyleType:'none', fontSize:'14px' }}>
        <li>Äänitys: Ilkka Niemeläinen + Jon Hagelberg</li>
        <li>Tuotanto: Ilkka Niemeläinen + Jon Hagelberg</li>
        <li> Miksaus: Ilkka Niemeläinen</li>
        <li> Masterointi: Minerva Pappi</li>
        <br/>
        <li> Äänitetty Ylivoimalla Suomenlinnassa, Oodissa, Tampereen Metson studiolla sekä Jonin vaatekaapissa</li>
      </ul>

    </div>
  )
}

const Tiedot = () => {
  return(
    <div>
      <img src={kansi} alt="Jesper Soihtu Kansi" width="90%" height="90%"/>
    </div>
  )
}

const ToggleTiedot=(props) => {

  let message = ''

  if(props.tiedot){
    message='Näytä EP:n tekijät'
  } else {
    message='Näytä kansi'
  }


  return(
    <div className="ToggleTiedotDiv">
      <h2 onClick={props.changeTiedot}>{message}</h2>
    </div>
  )
}

const EP = () => {
  const [tiedot, setTiedot]=useState(true)

  const changeTiedot=() => {
    setTiedot(!tiedot)
  }


  return(
    <div>
      <ToggleTiedot changeTiedot={changeTiedot} tiedot={tiedot}/>
      {tiedot===true?
        <Tiedot/>:
        <Tekijat/>
      }

    </div>
  )
}

export default EP