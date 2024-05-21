import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../store';
import { actFetchMovieDetail } from './duck/action';
import dayjs from 'dayjs';
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";


export default function DetailMovie() {
  const { id } = useParams();

  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const { loading, data, error } = useSelector(
    (state: RootState) => state.movieDetailsReducer
  )

  useEffect(() => {
    if (id) {
      dispatch(actFetchMovieDetail(id))
    }
  }, [id]);

  const cinemaSystems = data?.heThongRapChieu || [];

  if (loading) return <p>Loadinggg...</p>

  const datve = (maLichChieu:string) => { navigate(`/seat-booking/${maLichChieu}`)}

  return (
    <div className=' container  '>
      <div className='row ' style={{ marginTop: 200 }}>
        <div className='col-3'>
          <img
            src={data?.hinhAnh}
            alt={data?.tenPhim}
            className="w-100 rounded"
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className='col-9 d-flex flex-column justify-content-between'>
          <div>
            <h4 className="font-weight-bold mb-5">Tên phim: {data?.tenPhim}</h4>
            <p>Mô tả: {data?.moTa}</p>
            <p>Đánh giá: {`${data?.danhGia} /10`}</p>

            <p>Ngày khởi chiếu: {dayjs(new Date(data?.ngayKhoiChieu || "")).format("DD/MM/YYYY HH:mm")} </p>
          </div>
          <div style={{ width: 200 }}>
            <a href={data?.trailer}>
              <button className="btn btn-success">
                Xem trailer

              </button></a>
          </div>
        </div>
      </div>
      <div className=" mt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {cinemaSystems.map((system) => {
                  return (
                    <Nav.Item>
                      {system.tenHeThongRap}
                      <Nav.Link eventKey={system.maHeThongRap}>
                        <img
                          src={system.logo}
                          style={{ width: 120, height: 120 }}
                        />

                      </Nav.Link>
                    </Nav.Item>
                  )
                })}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {cinemaSystems.map((system) => {
                  return <Tab.Pane eventKey={system.maHeThongRap}>
                    {system.cumRapChieu.map((item) => {
                      return (
                        <div>
                          {item.tenCumRap}
                          <Row>
                            {item.lichChieuPhim.map((item , index) => {
                              return (
                                <Col sm={2}>
                                  
                                    <Button onClick={() => datve(item.maLichChieu)}
                                      variant="primary"
                                      key={`lich-chieu-${index}`}
                                      className="mb-3"
                                    >
                                      {dayjs(item.ngayChieuGioChieu).format(
                                        "DD/MM HH:mm"
                                      )}
                                    </Button>
                                 
                                </Col>
                              )

                            })}
                          </Row>
                        </div>)

                    })}

                  </Tab.Pane>
                })}

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  )
}



