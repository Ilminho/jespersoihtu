import '../styles.css'
import EP from './EP'
import { keikat } from '../tekijat'

const KeikatNStuff = () => {
  return(
    <div className="KeikatNStuff">
      <div className="InfoDiv">
        <div className="KeikkaDiv" >
          <h2>Tulevat keikat: </h2>
          <br/>

          {
            keikat.map((e) =>
              <li className="Keikat" key={e.paikka}> {e.pvm} <br/> {e.paikka} </li>
            )
          }

        </div>
        <div className="YhteydenottoDiv">
          <h2>Keikkakyselyt: </h2>
          <br/>
          <p>Keikkamyyjä: PabroOnABeat</p>
          <p>puh: 420-1507712</p>
          <p> Sähköposti: <a href="mailto:pabrobrokea@gmail.com">pabrobrokea@gmail.com</a></p>
        </div>
        <div className="YhteydenottoDiv">
          <h2>Sosiaalinen media:</h2>
          <p>Instagram: </p>
          <p style={{ left:'50%', transform:'translate(-25%,0)' }}>
            <a href="http://instagram.com/jespersoihtu/"> http://instagram.com/jespersoihtu/ </a>
          </p>

        </div>
        <div className='HaastatteluDiv'>
          <h2> Haastattelut: </h2>
          <br/>
          <p> SMF/Sun mutsis</p>
          <p > <a href='mailto:jespersoihtu@gmail.com'>jespersoihtu@gmail.com</a></p>
        </div>
      </div>

      <div className="EP">
        <EP/>
      </div>
    </div>
  )
}

export default KeikatNStuff