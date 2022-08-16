import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="py-4">
      <div className="container">
        <h1>All Posts</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Card
              imageUrl="https://placekitten.com/g/300/200"
              title="First Post"
              published="06 Feb, 2022"
            />
          </div>
          <div className="col-md-4">
            <Card
              imageUrl="https://placekitten.com/300/200"
              title="Second Post"
              published="07 Feb, 2022"
            />
          </div>
          <div className="col-md-4">
            <Card
              imageUrl="https://placekitten.com/300/200"
              title="Third Post"
              published="08 Feb, 2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
