import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { acFetchListMovie } from "./duck/action";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const dispatch: any = useDispatch();

  const { data, loading } = useSelector((state: RootState) => state.dashboardMovieReducer)


  useEffect(() => {
    dispatch(acFetchListMovie());
  }, []);

  const renderListMovie = () => {
    if (loading) return <div>Loading ... </div>
    if (data && data.length > 0) {
      return data.map((movie) => (
        <tr key={movie.maPhim}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {movie.maPhim}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{movie.tenPhim}</td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">      <img
            className="inline-block h-12 w-12 rounded-md"
            src={movie.hinhAnh}
            alt=""
          /></td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">  {movie.moTa.split(' ').slice(0, 10).join(' ')}
            {movie.moTa.split(' ').length > 10 ? '...' : ''}</td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
          </td>
        </tr>
      ))
    }
  }

  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">QUẢN LÝ PHIM</h1>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  name="search-data"
                  id="search-data"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Nhập thông tin phim cần tìm kiếm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            THÊM PHIM MỚI
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      MÃ PHIM
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      TÊN PHIM
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      HÌNH ẢNH
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      MÔ TẢ
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      HÀNH ĐỘNG
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {renderListMovie()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
