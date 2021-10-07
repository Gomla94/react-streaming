import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamUpdate from "./streams/StreamUpdate";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/edit" component={StreamUpdate} />
          <Route path="/streams/delete" component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};
//when we type exact into the Route component, react router changes
//the path checking condition from exactPath.contains(path) to exactPath === path.

//each route component is given a path property, the path property is used by react router to check
//wheither or not to show the given route compponent property.

//exact only modifies the route that was added to.

export default App;
