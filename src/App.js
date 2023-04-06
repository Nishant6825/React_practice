
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <body>
        <Navbar title="Textutils" aboutText="About"/>
        <div className="container">
        <TextForm heading="You can type below"/>
        </div>
        
      </body>
    </>
  );
}


export default App;
