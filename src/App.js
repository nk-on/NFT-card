import './App.css';
import equilibrium  from './assets/image-equilibrium.jpg'
function App() {
  return <>
   <Card></Card>
  </>;
}
function Card() {
  return <div className="card">
    <img className = 'equilibrium' src= {equilibrium} alt='equilibrium'/>
  </div>;
}
export default App;
