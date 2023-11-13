import FloatingActionButtons from "../components/FloatingActionButtons";
import MySearch from "../components/MySearch";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { TaskType, deleteSelectedTask, toggleTaskCheck } from "../store/modules/tasks/tasksSlice";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Home() {
  const tasksRedux = useAppSelector((state) => state.tasks);
  const [filterdTasks, setFilteredTasks] = useState<TaskType[]>([]);

  const dispatch = useAppDispatch();

  function checkTasks(t: TaskType) {
    dispatch(toggleTaskCheck(t));
  }

  function getSearch(change: string) {
    setFilteredTasks(
      tasksRedux.filter((item: TaskType) => {
        return item.content.toLowerCase().includes(change.toLowerCase());
      })
    );

    console.log(filterdTasks);
  }

  function apagarTask(index: number) {
    dispatch(deleteSelectedTask(index))
  }

  return (
    <>
      <MySearch search={getSearch} />
      <h1>Lista de tarefas</h1>
      <p>Quantia de tasks: {tasksRedux.length}</p>

      <List sx={{ width: "100%", maxWidth: 360 }}>
        {filterdTasks.length > 0
          ? filterdTasks.map((f) => (
              <ListItem style={{ display: "flex", justifyContent: "space-between" }} key={f.id}>
                <div>
                  {f.checked === true ? (
                    <Checkbox defaultChecked onChange={() => checkTasks(f)} style={{ color: "#009688" }} />
                  ) : (
                    <Checkbox onChange={() => checkTasks(f)} style={{ color: "#009688" }} />
                  )}
                  {f.content}
                </div>
                
                <div>
                <DeleteForeverIcon />
                </div>
              </ListItem>
            ))
          : tasksRedux.map((t: TaskType, index: number) => (
              <ListItem style={{ display: "flex", justifyContent: "space-between" }} key={t.id}>
                <div>
                  {t.checked === true ? (
                    <Checkbox defaultChecked onChange={() => checkTasks(t)} style={{ color: "#009688" }} />
                  ) : (
                    <Checkbox onChange={() => checkTasks(t)} style={{ color: "#009688" }} />
                  )}
                  {t.content}
                </div>
                <div onClick={() => apagarTask(index)}>
                  <DeleteForeverIcon />
                </div>
              </ListItem>
            ))}
      </List>

      <div style={{ position: "absolute", bottom: "30px", right: "30px" }}>
        <FloatingActionButtons />
      </div>
    </>
  );
}
