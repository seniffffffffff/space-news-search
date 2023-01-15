import TextField from "@mui/material/TextField";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SearchIcon from "../../icons/SearchIcon";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "../../store/action-creator/searchInputValue";

const SearchBar: React.FC = () => {
  const dispath = useDispatch();
  const inputValue = useSelector((state: any) => state.value.value);
  const { articles, error, loading } = useTypedSelector(
    (state) => state.articles
  );

  const handleSearch = (event: any) => {
    dispath(changeInputValue(event.target.value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "20px",
          marginBottom: "10px",
          fontFamily: "Montserrat, sans-serif",
        }}
        gutterBottom
      >
        Filter by keywords
      </Typography>
      <TextField
        sx={{ width: "600px" }}
        id="outlined-basic"
        value={inputValue}
        onChange={handleSearch}
        placeholder="Enter your request"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
