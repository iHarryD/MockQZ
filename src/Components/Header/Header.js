import "./CSS/style.css";

import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate();

  return (
    <header>
      <nav className="navbar --horizontal-flex">
        <Link className="navbar-logo" to="/">
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.312 20.112C12.92 20.112 14.192 19.416 15.128 18.024C16.064 16.608 16.532 14.652 16.532 12.156C16.532 9.804 16.064 7.968 15.128 6.648C14.192 5.328 12.92 4.668 11.312 4.668C9.704 4.668 8.432 5.328 7.496 6.648C6.56 7.968 6.092 9.804 6.092 12.156C6.092 14.652 6.56 16.608 7.496 18.024C8.432 19.416 9.704 20.112 11.312 20.112ZM19.052 30.552C16.58 30.552 14.48 29.94 12.752 28.716C11.024 27.516 9.74 26.004 8.9 24.18C6.404 23.652 4.4 22.344 2.888 20.256C1.4 18.168 0.656 15.468 0.656 12.156C0.656 9.588 1.1 7.416 1.988 5.64C2.9 3.84 4.148 2.472 5.732 1.536C7.34 0.575999 9.2 0.0959988 11.312 0.0959988C13.424 0.0959988 15.272 0.575999 16.856 1.536C18.464 2.472 19.712 3.84 20.6 5.64C21.512 7.44 21.968 9.612 21.968 12.156C21.968 15.3 21.296 17.904 19.952 19.968C18.608 22.008 16.796 23.352 14.516 24C15.068 24.816 15.812 25.404 16.748 25.764C17.708 26.124 18.68 26.304 19.664 26.304C20.168 26.304 20.636 26.256 21.068 26.16C21.524 26.088 21.92 26.004 22.256 25.908L23.192 29.76C22.76 29.976 22.184 30.156 21.464 30.3C20.768 30.468 19.964 30.552 19.052 30.552ZM24.1614 15V13.488L28.6974 6.696H24.5934V4.632H31.7934V6.12L27.2334 12.936H31.8174V15H24.1614Z"
              fill="#2D76AC"
            />
          </svg>
        </Link>
        <ul className="navlinks-container --horizontal-flex --has-gap">
          <li className="navlink">
            <button className="btn --icon-only-btn" onClick={() => {}}>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z" />
              </svg>
            </button>
          </li>
          <li className="navlink">
            <button className="btn --icon-only-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 20 20"
                height="48px"
                viewBox="0 0 20 20"
                width="48px"
                fill="#fff"
              >
                <rect fill="none" height="20" width="20" />
                <path d="M8.04,4.86C7.88,5.39,7.8,5.94,7.8,6.5c0,3.14,2.56,5.7,5.7,5.7c0.56,0,1.11-0.08,1.64-0.24c-0.79,2.07-2.8,3.54-5.14,3.54 c-3.03,0-5.5-2.47-5.5-5.5C4.5,7.66,5.97,5.65,8.04,4.86z M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7 c0-0.36-0.03-0.72-0.08-1.06C16.16,10,14.91,10.7,13.5,10.7c-2.32,0-4.2-1.88-4.2-4.2c0-1.41,0.7-2.66,1.76-3.42 C10.72,3.03,10.36,3,10,3L10,3z" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
