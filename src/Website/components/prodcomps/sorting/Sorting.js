import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Sorting = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSort, setSelectedSort] = useState("What's New");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    handleClose();
  };

  const sortingOptions = [
    "What's New",
    "Price - high to low",
    "Price - low to high",
    "Ratings - high to low",
  ];

  return (
    <Box>
      {/* Trigger Button */}
      <Button
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          color: "#000",
          borderColor: "#ddd",
          backgroundColor: "#fff",
        }}
      >
        Default sorting
      </Button>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            p: 2,
            minWidth: "200px",
            marginLeft: "-40px",
          },
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          SORT BY
        </Typography>
        <RadioGroup value={selectedSort} onChange={handleSortChange}>
          {sortingOptions.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio 
                sx={{
                    color: "#999", // Default color
                    "&.Mui-checked": {
                      color: "#E9781A", // Custom checked color
                    },
                  }}
              />}
              label={option}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "0.875rem",
                },
                "& .MuiSvgIcon":{
                    fill:'red'
                }
              }}
            />
          ))}
        </RadioGroup>
      </Menu>
    </Box>
  );
};

export default Sorting;
