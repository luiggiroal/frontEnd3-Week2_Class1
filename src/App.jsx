import Greeting from './components/Greeting'
import Card, {Button} from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1>Exercise 1</h1>
      <Greeting name="Juan">
        Hello
      </Greeting >
      <Greeting name="Martha">
        Hello
      </Greeting >

      <hr />

      <h1>Exercise 2</h1>
      <Card title="Card without button" />
      <Card title="Card with button 1"  >
        <Button msg="Add" />
      </Card>
      <Card title="Card with button 2"  >
        <Button msg="Remove" />
      </Card>
    </>
  )
}

export default App
