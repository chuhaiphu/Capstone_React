import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect } from "react";
import { acFetchSeatBooking } from "./duck/action";
import { useParams } from "react-router-dom";


export default function SeatBooking() {
  
  const dispatch: any = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(acFetchSeatBooking(id));
    }
  }, [id]);
 
  const { data, loading } = useSelector((state: RootState) => state.seatBookingReducer);
  
  console.log("data", data)

  

  if (loading) return <div>Loading ... </div>

  return (
    <div className="container">
      <h2 style={{ marginTop: 150 }}>Seat-Booking</h2>

    </div>
  )
}
