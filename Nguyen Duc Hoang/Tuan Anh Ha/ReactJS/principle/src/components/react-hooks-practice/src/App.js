import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <EffectTutorial />
      <ReducerTutorial />
      <ContextTutorial />
      <ImperativeHandle />
      <RefTutorial />
      <MemoTutorial />
      <CallBackTutorial />
      <LayoutEffectTutorial />
    </div> 
  );
}

export default App;
