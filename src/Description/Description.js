import './Description.css'
import iconEthereum from '../assets/icon-ethereum.svg'
import iconClock from '../assets/icon-clock.svg'
export function Description(){
    return (
        <div className="Decription-container">
            <h3 className="Title">Equilibrium #3429</h3>
            <p className='Description-text'>Our Equilibrium collection promotes balance and calmm</p>
            <div className='price-section'>
                <span className='span-container'>
                    <img src={iconEthereum} alt='icon-ethereum'/>
                    <p className='time-left'>0.041</p>
                </span>
                <span className='span-container'>
                    <img src={iconClock} alt='icon-time'/>
                    <p className='time-left'>3 Days left</p>
                </span>
            </div>
        </div>
    )
}