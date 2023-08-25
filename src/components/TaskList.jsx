import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { setseletedTask } from "../taskSlice";
import { useState } from "react";
import { removeFromTaskList } from "../taskSlice";
import MyVerticallyCenteredModal from "./UpdateTask";

function BasicExample() {
  const { TaskList } = useSelector((state) => state.task);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const openUpdateModal = (task) => {
    console.log(task);
    setModalShow(true);
    dispatch(setseletedTask(task));
  };

  const deleteTask = (task) => {
    dispatch(removeFromTaskList(task));
  };

  return (
    <Table striped bordered hover>
      <thead className="text-center">
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Task Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {TaskList &&
          TaskList.map((task, index) => {
            return (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary mx-2"
                    onClick={() => openUpdateModal(task)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteTask(task)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Table>
  );
}

export default BasicExample;
