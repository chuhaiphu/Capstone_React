import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Button, Menu, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { actUserLogout } from "../../../Auth/LoginPage/duck/action";

export default function Header() {
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const { data: userData } = useSelector(
    (state: RootState) => state.userReducer
  );
  const localUser = localStorage.getItem("user");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const handleSignOut = () => {
    localStorage.clear();
    dispatch(actUserLogout());
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (userData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userData]);

  useEffect(() => {
    if(localUser){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }, [localUser]);

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to={""}>
              <img src="./images/logo/logo.png" alt="logo" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to={""} className="active">Home</Link>
              <ul className="submenu">
                <li>
                  <a href="#0" className="active">Home One</a>
                </li>
                <li>
                  <a href="index-2.html">Home Two</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">movies</a>
              <ul className="submenu">
                <li>
                  <a href="movie-grid.html">Movie Grid</a>
                </li>
                <li>
                  <a href="movie-list.html">Movie List</a>
                </li>
                <li>
                  <a href="movie-details.html">Movie Details</a>
                </li>
                <li>
                  <a href="movie-details-2.html">Movie Details 2</a>
                </li>
                <li>
                  <a href="movie-ticket-plan.html">Movie Ticket Plan</a>
                </li>
                <li>
                  <a href="movie-seat-plan.html">Movie Seat Plan</a>
                </li>
                <li>
                  <a href="movie-checkout.html">Movie Checkout</a>
                </li>
                <li>
                  <a href="popcorn.html">Movie Food</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">About Us</a>
            </li>
            <li>
              <a href="#0">blog</a>
              <ul className="submenu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Single</a>
                </li>
              </ul>
            </li>
            {isLoggedIn ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex items-center justify-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 h-8 w-8">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(
                            active ? 'bg-indigo-500 text-white' : 'text-gray-700',
                            'block px-4 py-2 text-sm transition-colors duration-300'
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(
                            active ? 'bg-indigo-500 text-white' : 'text-gray-700',
                            'block px-4 py-2 text-sm transition-colors duration-300'
                          )}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Button
                          onClick={handleSignOut}
                          className={classNames(
                            active ? 'bg-indigo-500 text-white' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm transition-colors duration-300'
                          )}
                        >
                          Sign out
                        </Button>
                      )}
                    </Menu.Item>
                  </Menu.Items>

                </Transition>
              </Menu>
            ) : (
              <li className="header-button pr-0">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
          <div className="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>


  )
}
