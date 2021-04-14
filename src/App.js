import Credits from "./component/credits/Credits";
import Head from "./component/UI/Head";

const { Button } = require("semantic-ui-react");

function App() {
  return (
    <div className="App">
      <Head>CREDIT DASHBOARD</Head>
      <Credits />
    </div>
  );
}

export default App;
