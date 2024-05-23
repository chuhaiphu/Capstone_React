import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { RootState } from "../../../store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import api from "../../../utils/apiUtils";

const schema = yup.object({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
  email: yup.string().required("Vui lòng nhập email"),
  soDt: yup.string().required("Vui lòng nhập số điện thoại"),
  maNhom: yup.string().required("Vui lòng nhập mã nhóm"),
  hoTen: yup.string().required("Vui lòng nhập họ tên"),
});

export default function SignupPage() {

  const dispatch: any = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.userReducer
  );

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<any>({
    defaultValues: {
      taiKhoan: data?.taiKhoan,
      matKhau: "",
      email: data?.email,
      soDt: data?.soDT,
      maNhom: data?.maNhom,
      maLoaiNguoiDung: data?.maLoaiNguoiDung,
      hoTen: data?.hoTen
    },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  useEffect(() => {
    console.log("errors", formState.errors);
  }, [formState]);

  const onSubmit = (formValues: any) => {
    api
    .put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formValues)
    .catch((error: any) => {
        console.log(error)
    })
    navigate("/");
  };


  return (
    <div>
      <section className="account-section bg_img" data-background="./assets/images/account/account-bg.jpg" style={{ backgroundImage: 'url("./assets/images/account/account-bg.jpg")' }}>
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">welcome</span>
                <h2 className="title">to X Cinema </h2>
              </div>
              <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="taikhoan">ID<span>*</span></label>
                  <input type="text" placeholder="Enter Id" id="taikhoan" {...register("taiKhoan")} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email1">Email<span>*</span></label>
                  <input type="text" placeholder="Enter Your Email" id="email1" {...register("email")} required />
                </div>
                <div className="form-group">
                  <label htmlFor="pass1">Password<span>*</span></label>
                  <input type="password" placeholder="Password" id="pass1" {...register("matKhau")} required />
                </div>
                <div className="form-group">
                  <label htmlFor="pass2">Confirm Password<span>*</span></label>
                  <input type="password" placeholder="Password" id="pass2" required />
                </div>
                <div className="form-group">
                  <label htmlFor="hoTen">Họ tên<span>*</span></label>
                  <input type="text" placeholder="Enter Your Email" id="hoTen" {...register("hoTen")} required />
                </div>
                <div className="form-group">
                  <label htmlFor="sdt">SĐT<span>*</span></label>
                  <input type="text" placeholder="Enter Your Email" id="sdt" {...register("soDt")} required />
                </div>
                <div className="form-group checkgroup d-flex">
                  <input type="checkbox" id="bal" required defaultChecked />
                  <label className="mt-2 ml-2" htmlFor="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                </div>
                <div className="form-group text-center">
                  <input type="submit" defaultValue="Confirm Update" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
