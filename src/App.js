// import "./App.css";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Row className="justify-content-md-center">
    <Col lg="5">
     <AddTask />
     <TaskList  />
     </Col>
      </Row>
    </div>
  );
}

export default App;
