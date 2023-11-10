import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PendingIcon from "@mui/icons-material/Pending";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  children: React.ReactNode;
}

export default function Navbar(props: NavbarProps) {
  const [value, setValue] = React.useState(0); // Este estado determina qual aba está ativa
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault()
    setValue(newValue);
  
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/completes");
    } else if (newValue === 2) {
      navigate("/pending");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomNavigation showLabels value={value} style={{ backgroundColor: "#5b5b5b" }} onChange={handleChange}>
        <BottomNavigationAction style={{ color: value === 0 ? "white" : "" }} label="Todas" icon={<FormatListBulletedIcon />} />
        <BottomNavigationAction style={{ color: value === 1 ? "white" : "" }} label="Concluidas" icon={<AddTaskIcon />} />
        <BottomNavigationAction style={{ color: value === 2 ? "white" : "" }} label="Pendentes" icon={<PendingIcon />} />
      </BottomNavigation>

      <div style={{ padding: "30px" }}>{props.children}</div>
    </div>
  );
}
