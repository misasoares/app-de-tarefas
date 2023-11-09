import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { v4 as genId } from "uuid";
import { useAppDispatch } from "../store/hooks";
import { addTask } from "../store/modules/tasks/tasksSlice";


export default function FloatingActionButtons() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask({id:genId(), content:input, checked:false}))
    setInput("");

    setOpen(false);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab onClick={handleClickOpen} style={{ backgroundColor: "#009688" }} aria-label="add">
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Adicionar Tarefa</DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddTask}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="..."
              style={{ outline: "none", resize: "none", width: "40vw", height: "20vh", color: "black", backgroundColor: "white", overflow: "auto" }}
            ></textarea>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancelar</Button>
              <Button type="submit">Adicionar</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
