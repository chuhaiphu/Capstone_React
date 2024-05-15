

export type Movie = {
    maPhim: number | string;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa:string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: number;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
}

export type  AppState<T> = {
    loading: boolean,
    data: T[] | null,
    error : any,
}

export type Action = {
    type: string,
    payload? : any,
}

export type AppStateDetails<K> = {
    loading: boolean,
    data: K | null ,
    error : any,
}

export interface MovieDetails {
    heThongRapChieu: HeThongRapChieu[];
    maPhim:          number;
    tenPhim:         string;
    biDanh:          string;
    trailer:         string;
    hinhAnh:         string;
    moTa:            string;
    maNhom:          string;
    hot:             boolean;
    dangChieu:       boolean;
    sapChieu:        boolean;
    ngayKhoiChieu:   Date;
    danhGia:         number;
}

export interface HeThongRapChieu{
    cumRapChieu:   CumRapChieu[];
    maHeThongRap:  string;
    tenHeThongRap: string;
    logo:          string;
}

export interface CumRapChieu {
    lichChieuPhim: LichChieuPhim[];
    maCumRap:      string;
    tenCumRap:     string;
    hinhAnh:       string;
    diaChi:        string;
}

export interface LichChieuPhim{
    maLichChieu:       string;
    maRap:             string;
    tenRap:            string;
    ngayChieuGioChieu: Date;
    giaVe:             number;
    thoiLuong:         number;
}

export interface CurrentUser {
    taiKhoan: string;
    hoTen: string;
    email:string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: string;
    accessToken: string;
}
export type Datve = any
// export type ThongTinPhim =
//  {
//     maLichChieu: string,
//     tenCumRap : string,
//     tenRap : string,
//     diaChi : string,
//     tenPhim: string,
//     hinhAnh : string,
//     ngayChieu: string,
//     gioChieu : string,
// }

// export type DanhSachVe = [
//  {
//     maGhe: string;
//     tenGhe : string;
//     maRap : string;
//     loaiGhe: string;
//     stt :string;
//     giaVe:string;
//     daDat:string;
//     taiKhoanNguoiDat: string
// }
// ]