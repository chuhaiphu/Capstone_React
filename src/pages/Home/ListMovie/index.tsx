import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { acFetchListMovie } from "./duck/action";
import Moviecomponent from "./movie";





export default function ListMovie() {
    const dispatch: any = useDispatch();

    const { data, loading } = useSelector((state: RootState) => state.listMovieReducer)


    useEffect(() => {
        dispatch(acFetchListMovie());
    }, []);

    const renderListMovie = () => {
        if (loading) return <div>Loading ... </div>

        if (data && data.length > 0) {
            return data.map((movie) => <Moviecomponent movie={movie} />)
        }

    }

    return (
        <div className="container" style={{marginTop: 150}}>

            <div className="row ">
                {renderListMovie()}
            </div>
        </div>
    )
}
