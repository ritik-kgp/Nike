import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import {navLinks} from "../constants/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full z-10 absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width="130px" height="29px"/>
        </a>
        <ul className="flex flex-1 gap-16 justify-center items-center max-lg:hidden">
         {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href}
            className="font-montserrat leading-normal text-slate-gray text-lg">{item.label}</a>
          </li>
         ))}
        </ul>
        <div className="lg:hidden block">
          <img src={hamburger} width="25px" height="25px"/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
