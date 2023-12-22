import { Rating } from "@mui/material";
import { useState } from "react";
import { IData } from "../../../redux/productsSlice";

const StarsRating:React.FC<Pick<IData, "rating">> = ({ rating }) => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <>
      <Rating
        name="simple-controlled"
        value={value || rating}
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
