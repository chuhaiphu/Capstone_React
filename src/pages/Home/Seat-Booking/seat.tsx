
import { useState } from "react";
import { danhSachGhe } from "../../../store/types";
import { ListGroup } from "react-bootstrap";

 
type Props = {
    seats: danhSachGhe;
    handleSelectSeat: (seats: danhSachGhe) => void;
  
}

export default function SeatComponent(props: Props) {
    const { seats, handleSelectSeat } = props;

    const handleCheckboxChange = () => {
        handleSelectSeat(seats);
    }

    return (
        <div className="col-1">
            {seats.tenGhe}
            <input
                onChange={handleCheckboxChange}
                type='checkbox'
                className='seat'
            />
        </div>
    )
}