import { Typography } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
import ReviewFilterBar from "../components/ReviewFilterBar";

function Danforth() {
    return (
        <div>
            <Typography variant="h2" mt={3} gutterBottom>Danforth Dining Center</Typography>
            <ReviewFilterBar></ReviewFilterBar>
            <ReviewCard></ReviewCard>
        </div>
    );
  }
  
export default Danforth;