import "./App.css";
import ComponentA from "./components/ComponentA";
import { createContext } from "react";

export const UserContext = createContext();
export const ChannelContext = createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Sumit"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
