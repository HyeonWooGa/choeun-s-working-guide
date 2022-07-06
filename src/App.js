import React, { useEffect, useState } from "react";

// 클래스 컴포넌트는 장황합니다.
class ChoEun extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "eun",
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

const Eun = () => {
  const [name, setName] = useState("eun");
  useEffect(() => {
    console.log("this component is redered");
  });
  return <div>{name}</div>;
};

function App() {
  return (
    <div>
      <ChoEun />
      <Eun />
    </div>
  );
}

export default App;
