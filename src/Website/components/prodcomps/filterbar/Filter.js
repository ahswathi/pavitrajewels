import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Checkbox,
  Typography,
  Slider,
  FormControlLabel,
  IconButton,
  Divider,
} from "@mui/material";
import { FilterIcon } from "../../../../Svg";



const Filter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(["All Product"]);
  const [priceRange, setPriceRange] = useState([50, 500]);

  const open = Boolean(anchorEl);

  const categories = ["All Product", "Jumka", "Necklaces", "Bracelets"];

  const handleCategoryChange = (category) => {
    if (category === "All Product") {
      setSelectedCategories(["All Product"]);
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.includes(category)
          ? prev.filter((item) => item !== category)
          : [...prev, category];
        return newCategories.filter((item) => item !== "All Product");
      });
    }
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
    setPriceRange([50, 500]);
  };

  const handleApply = () => {
    console.log("Applied Filters:");
    console.log("Categories:", selectedCategories);
    console.log("Price Range:", priceRange);
    handleClose(); // Close dropdown after applying
  };

  return (
    <Box>
      {/* Filter Button */}
      <Button
        variant="outlined"
        startIcon={<FilterIcon />}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          borderColor: "#ddd",
          color: "#000",
          backgroundColor: "#fff",
          px: 2,
          py: 1,
        }}
      >
        Filter
      </Button>

      {/* Filter Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            p: 2,
            minWidth: "300px",
            padding: '10px 16px'
          },
        }}
      >
        {/* Filter Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" >
          <Typography variant="body1" fontWeight="bold">
            Filter
          </Typography>
          <Button onClick={handleClearAll} sx={{ fontSize: "0.875rem", color: "#ff5722", textTransform: 'capitalize' }}>
            Clear All
          </Button>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Categories Section */}
        <Typography variant="body2" color="text.secondary" fontWeight="bold" mb={1}>
          CATEGORIES
        </Typography>
        <Box display="flex" alignItems="flex-start" flexDirection='column'>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  sx={{
                    padding: '6px',
                    color: "#999",
                    "&.Mui-checked": { color: "#ff5722", },
                  }}
                />
              }
              label={category}
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: "0.875rem" },
              }}
            />
          ))}
        </Box>



        <Divider sx={{ mb: 1, mt: 1 }} />

        {/* Price Filter Section */}
        <Typography variant="body2" color="text.secondary" fontWeight="bold" mt={3} mb={1}>
          PRICE FILTER
        </Typography>
        <Box display="flex" alignItems="center" flexDirection='column' >
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={50}
            max={500}
            valueLabelDisplay="auto"
            sx={{
              color: "#ff5722",
              "& .MuiSlider-thumb": {
                width: '12px',
                height: '12px',
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              },
              "& .MuiSlider-root": {
                padding: '16px 0',
                height: "2px", // General height of the slider
              },
              "& .MuiSlider-rail": {
                height: "2px", // Height of the rail
              },
              "& .MuiSlider-track": {
                height: "2px",  // Same height
              },
            }}
          />
          <Box display="flex" alignItems="center" justifyContent='space-between' width='100%'>
            <Typography variant="body2" sx={{ minWidth: "40px" }}>
              ${priceRange[0]} from
            </Typography>
            <Typography variant="body2" sx={{ minWidth: "40px" }}>
              to ${priceRange[1]}
            </Typography>
          </Box>
        </Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleApply}
            sx={{
              textTransform: "none",
              backgroundColor: "#ff5722",
              color: "#fff",
              px: 3,
              py: 1,
              "&:hover": { backgroundColor: "#e64a19" },
            }}
          >
            Apply
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Filter;
