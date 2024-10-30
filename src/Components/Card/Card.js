import  equilibrium  from '../../assets/image-equilibrium.jpg'
import './Card.css'
import { Description } from '../../Description/Description';
export default function Card() {
  return (
    <div className="card">
      <img className="equilibrium" src={equilibrium} alt="equilibrium" />
      <Description/>
    </div>
  );
}
