import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { actFetchUserLogin } from "./duck/action";


export default function Login() {

  const dispatch: any = useDispatch();

  const { loading, data, error } = useSelector(
    (state: RootState) => state.userReducer);

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: { taiKhoan: "", matKhau: "" },
  });

  const userName = form.register("taiKhoan");
  const password = form.register("matKhau");

  useEffect(() => { }, [form.formState]);

  const onSubmit =
    (formValue: any) => {
      dispatch(actFetchUserLogin(formValue))
    };

  useEffect(() => {
    if (data) {
      if (data.maLoaiNguoiDung === "QuanTri") {
        navigate("/admin/dashboard");
      } else {
        navigate("/")
      }
    }
  }, [data]);


  return (
    <section className="account-section bg_img">
      <div className="container">
        <div className="padding-top padding-bottom">
          <div className="account-area">
            <div className="section-header-3">
              <span className="cate">hello</span>
              <h2 className="title">welcome back</h2>
            </div>
            <form className="account-form" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="email2">Email<span>*</span></label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email2"
                  required
                  {...form.register("taiKhoan")}
                  onChange={userName.onChange}
                />
                {form.formState.errors.taiKhoan?.message &&
                  <small className="text-danger">
                    {form.formState.errors.taiKhoan?.message as any}
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
                  {...form.register("matKhau")}
                  onChange={password.onChange}
                />

                {form.formState.errors.matKhau?.message &&
                  <small className="text-danger">
                    {form.formState.errors.matKhau?.message as any}
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
              Don't have an account? <Link to={"sign-up"}>sign up now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
