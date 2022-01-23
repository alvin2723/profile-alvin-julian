import 'font-awesome/css/font-awesome.min.css';
import './scss/App.scss';
import NavbarMenu from './components/NavbarMenu';
import MainSection from './components/MainSection';


function App() {
  return (
   
    <main className='main-container'>
      <NavbarMenu/>
      <MainSection/>
    </main>
  );
}

export default App;
