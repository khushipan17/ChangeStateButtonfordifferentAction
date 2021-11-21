import {useState,useCallback} from 'react';
import './App.css';
import {Header} from './Header';
import {Footer} from './Footer';
import {DisplayCounter} from './DisplayCounter';
import {DisplayFlag} from './DisplayFlag';
import {ChangeState} from './ChangeState';

function App() {

   const [cnt, setCnt] = useState(0);
   const[ flag,setFlag] = useState(true);

    const changeFlag = useCallback(()=>{
      setFlag(!flag);
    },[cnt])
    const changeCounter = useCallback(()=>{
      setCnt(cnt+1);
    },[flag])
     
  return (
    <div className="App">

      <Header/>
      
       <DisplayCounter counter = {cnt}/>

       <DisplayFlag flag = {flag}/>

       <ChangeState caption = "Change Counter" click = {changeCounter}/>
       <ChangeState caption = "Change Flag"  click = {changeFlag}/>

      <Footer/>
    </div>
  );
}

export default App;
