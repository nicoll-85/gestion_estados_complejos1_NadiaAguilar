import react from "react";
import TodoListContainer from "./assets/components/TodoListContainer";
// import CurrentLanguageContext from "./assets/components/CurrentLanguageContext";
import Header from "./assets/components/Header";
import Content from "./assets/components/Content";
import { LanguageProvider } from "./assets/components/CurrentLanguageContext";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Gestión de estados complejos 1</h1>
        <hr />
        <h2>Context API</h2>
        <h3>Ejercicio 1</h3>
        <LanguageProvider>
          <Header></Header>
          <Content></Content>
        </LanguageProvider>
        <hr />
        <h2>To do List</h2>
        <h3>Ejercicio 2</h3>
        <TodoListContainer></TodoListContainer>
      </div>
    </>
  );
}

export default App;
