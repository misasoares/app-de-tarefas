import FloatingActionButtons from "../components/FloatingActionButtons";
import MySearch from "../components/MySearch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { TaskType, toggleTaskCheck } from "../store/modules/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";



export default function Pending() {
  const tasksRedux = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();


  function checkTasks(t: TaskType) {
    dispatch(toggleTaskCheck(t));
  }



  return (
    <>
      <MySearch />
      <h1>Tarefas concluidas</h1>


      <List sx={{ width: "100%", maxWidth: 360 }}>
        {tasksRedux.map((t) => t.checked === false ? (
          <ListItem key={t.id}>
            <Checkbox onChange={() => checkTasks(t)} style={{ color: "#009688" }} />
            {t.content}
          </ListItem>
        ): null)}
      </List>

      <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
        <FloatingActionButtons />
      </div>
    </>
  );
}
