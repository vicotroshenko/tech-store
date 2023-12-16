import { Rating } from "@mui/material";
import { useState } from "react";

const StarsRating = () => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <>
      <Rating
        name="simple-controlled"
        value={value}
        size="small" 
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ margin: "10px 0 0 0"}}
      />
    </>
  );
};

export default StarsRating;
