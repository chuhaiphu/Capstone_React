import { Movie } from "../../../store/types";
import { Link } from "react-router-dom"; 

type Props = {
    movie: Movie
}

export default function Moviecomponent(props: Props) {
    const { movie } = props;
    return (
        <div className=" cart-movie col-md-3 mb-30-none justify-content-center">
            <div className="movie-grid">
                <div className="movie-thumb c-thumb">
                    <Link to = {`/detail/${movie.maPhim} `}>
                        <img src={movie.hinhAnh} style={{ objectFit: "cover" }} alt={movie.tenPhim} className="avt-movie" />
                    </Link>
                </div>
                <div className="movie-content bg-one">
                    <h5 className="title m-0">
                        <Link to = {`/detail/${movie.maPhim} `} >{movie.tenPhim}</Link>
                    </h5>
                    <ul className="movie-rating-percent">
                        <li>
                            <div className="thumb">
                                <img src="./../../../../public/images/movie/tomato.png" alt="icon" />
                            </div>
                            <span className="content">88%</span>
                        </li>
                        <li>
                            <div className="thumb">
                                <img src="./../../../../public/images/movie/cake.png" alt="icon" />
                            </div>
                            <span className="content">88%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    )
}