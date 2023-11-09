import FloatingActionButtons from "../components/FloatingActionButtons";
import MySearch from "../components/MySearch";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { TaskType, toggleTaskCheck } from "../store/modules/tasks/tasksSlice";

export default function Home() {
  const tasksRedux = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  function checkTasks(t: TaskType) {
    dispatch(toggleTaskCheck(t));
  }

  return (
    <>
      <MySearch />
      <h1>Lista de tarefas</h1>
      <p>Quantia de tasks: {tasksRedux.length}</p>

      <List sx={{ width: "100%", maxWidth: 360 }}>
        {tasksRedux.map((t) => (
          <ListItem key={t.id}>
            {t.checked === true ? <Checkbox defaultChecked onChange={() => checkTasks(t)} style={{ color: "#009688" }} /> : <Checkbox onChange={() => checkTasks(t)} style={{ color: "#009688" }} />}
            {t.content}
          </ListItem>
        ))}
      </List>

      <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
        <FloatingActionButtons />
      </div>
    </>
  );
}
