import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { actFetchUserLogin } from "./duck/action";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});

export default function Login() {

  const dispatch: any = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.userReducer
  );
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<any>({
    defaultValues: { taiKhoan: "", matKhau: "" },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  useEffect(() => {
    console.log("errors", formState.errors);
  }, [formState]);

  const onSubmit = (formValues: any) => {
    dispatch(actFetchUserLogin(formValues));
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);  

  return (
    <section className="account-section bg_img">
      <div className="container">
        <div className="padding-top padding-bottom">
          <div className="account-area">
            <div className="section-header-3">
              <span className="cate">hello</span>
              <h2 className="title">welcome back</h2>
            </div>
            <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="email2">Email<span>*</span></label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email2"
                  required
                  {...register("taiKhoan")}
                />
                {formState.errors.taiKhoan?.message &&
                  <small className="text-danger">
                    {formState.errors.taiKhoan?.message as any}
                  </small>
                }
              </div>
              <div className="form-group">
                <label htmlFor="pass3">Password<span>*</span></label>
                <input
                  type="password"
                  placeholder="Password"
                  id="pass3"
                  required
                  {...register("matKhau")}
                />

                {formState.errors.matKhau?.message &&
                  <small className="text-danger">
                    {formState.errors.matKhau?.message as any}
                  </small>
                }
              </div>

              <div className="form-group checkgroup d-flex">
                <input type="checkbox" id="bal2" required defaultChecked />
                <label className="mt-2" htmlFor="bal2">remember password</label>
                <a href="#0" className="forget-pass mt-2">Forget Password</a>
              </div>
              <div className="form-group text-center">
                <input type="submit" defaultValue="log in" />
              </div>
            </form>
            <div className="option">
              Don't have an account? <Link to={"/sign-up"}>sign up now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
