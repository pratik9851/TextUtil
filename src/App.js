
import TextForm from './component/TextForm';
import Textutil from './component/Textutil';

function App() {
  return (
    <div >
     <Textutil/>
     <div className="container my-3">
       <TextForm heading='Enter your text to Analyze'/>
     </div>
    </div>
  );
}

export default App;
