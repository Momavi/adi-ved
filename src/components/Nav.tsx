import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  HomePage,
  ContactPage,
  PricePage,
  MedCardPage,
  EmployeesPage,
} from "../pages";

function Nav() {
  return (
    <Router>
      <nav className="flex justify-between items-center border-b-2 border-gray-700 pt-7 pb-3">
        <div className="flex pl-4">
          <Link to="/" className="logo-text">
            “АДИ-ВЕД”
          </Link>
          <ul className="nav-text ml-14 flex ">
            <li className="ml-4">
              <Link to="/">О нас</Link>
            </li>
            <li className="ml-4">
              <Link to="/price">Услуги</Link>
            </li>
            <li className="ml-4">
              <Link to="/employees">Сотрудники</Link>
            </li>
            <li className="ml-4">
              <Link to="/contact">Контакты</Link>
            </li>
            <li className="ml-4">
              <Link to="/medcard">МедКарта</Link>
            </li>
          </ul>
        </div>

        <div className="flex pr-4">
          <p className="number-text mr-8">+7 (925) 802-95-54</p>
          <button className="nav-btn">Записаться</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/medcard" element={<MedCardPage />} />
      </Routes>
    </Router>
  );
}

export default Nav;
