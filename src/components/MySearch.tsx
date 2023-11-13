import { InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginTop: 30,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12vw",
      "&:focus": {
        width: "20vw",
      },
    },
  },
}));

interface SearchProps {
  search: (change: string) => void;
}

function MySearch(props: SearchProps) {
  const [change, setChange] = useState("");
  console.log(change, "search-");

  function handleSearch(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const newValue = e.target.value;
    setChange(newValue);
    props.search(newValue)

  }

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase onChange={(e) => handleSearch(e)} name="search" placeholder="Search…" inputProps={{ "aria-label": "search" }} />
      </Search>
    </>
  );
}

export default MySearch;
