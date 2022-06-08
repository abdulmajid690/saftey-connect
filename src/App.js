import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";

const App = () => {
  return (
    <>
      <Header />
      <article className="row">
        <Sidebar />
        <Content />
      </article>
    </>
  );
};

export default App;
