import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskList } from "../taskSlice";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  const {selectedTask} = useSelector((state)=>state.task)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  
  console.log(selectedTask);
  const dispatch = useDispatch();

  const UpdateTask = () => {
    props.onHide();
    dispatch(updateTaskList({ id, title, description }));
  };

  useEffect(() => {
    if ( Object.keys(selectedTask).length !== 0) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setId(selectedTask.id);
    }
  }, [selectedTask]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="w-10">Tilte</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="Descrition"
              placeholder="Descrition"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => UpdateTask(e)}
          >
            Update
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
