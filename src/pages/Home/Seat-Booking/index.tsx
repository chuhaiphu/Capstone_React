import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { acFetchSeatBooking } from "./duck/action";
import { useParams } from "react-router-dom";
import SeatComponent from "./seat";
import { danhSachGhe } from "../../../store/types";


export default function SeatBooking() {

  const [selectedSeats, setSelectedSeats] = useState<any>([]);
  // useEffect(() => {
  //   console.log(selectedSeats);
  // }, [selectedSeats]);

  const handleSelectSeat = (Ghe: any) => {
    const isSelected = selectedSeats.some((s: any) => s.tenGhe === Ghe.tenGhe);

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((s: any) => s.tenGhe !== Ghe.tenGhe));
    } else {
      setSelectedSeats([...selectedSeats, Ghe]);
    }

  }

  const handleConfirm = () => {
    // console.log(selectedSeats)
    const tenGhe = selectedSeats.map((b: any) => b.tenGhe)
    return `${tenGhe}     `
  }

  const dispatch: any = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(acFetchSeatBooking(id));
    }
  }, [id]);

  const { data, loading } = useSelector((state: RootState) => state.seatBookingReducer);

  const renderSeat = () => {
    if (loading) return <div>Loading ... </div>

    if (data) {
      return data.danhSachGhe.map((seats: danhSachGhe) => (
        <SeatComponent
          key={seats.tenGhe}
          seats={seats}
          handleSelectSeat={handleSelectSeat}
        />
      ))
    }
  }



  return (
    <div className="container">
      <div className="row">

        <div className='widthSeat col-7'>
          <ul className="seat_w3ls d-flex">
            <li className="smallBox greenBox">Selected Seat</li>
            <li className="smallBox redBox">Reserved Seat</li>
            <li className="smallBox emptyBox">Empty Seat</li>
          </ul>
          <div className="screen">
            <h2 className="wthree">Screen this way</h2>
          </div>
          <div className="row">
            {renderSeat()}
          </div>
          <div>
            <button onClick={handleConfirm} className="btn btn-success"> Confirm</button>
          </div>

        </div>
        <div className="col-5 mt-44">
          <h3>your ticket information</h3>
          <div>
            <h4>{data?.thongTinPhim.tenPhim}</h4>
            <p>{data?.thongTinPhim.tenCumRap}  : {data?.thongTinPhim.diaChi}</p>
            <p>{data?.thongTinPhim.tenRap}</p>
            <p>Time :{data?.thongTinPhim.gioChieu}</p>
            <p> Số ghế : {handleConfirm()} </p>
          </div>
        </div>
      </div>
    </div>
  )
}
