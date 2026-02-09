import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import hamburgerIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";

function Header({
  handleAddClick,
  weatherData,
  isMobileMenuOpened,
  toggleMobileMenu,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const navClassName = `header__nav ${
    isMobileMenuOpened ? "header__nav_opened" : "header__nav_closed"
  }`;

  return (
    <header className="header">
      <img className="header__logo" alt="WTWR logo" src={logo} />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
      <button
        type="button"
        className="header__mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpened ? "Close menu" : "Open menu"}
      >
        <img
          src={isMobileMenuOpened ? closeIcon : hamburgerIcon}
          alt=""
          className="header__mobile-menu-icon"
        />
      </button>

      <div className={navClassName}>
        <button
          type="button"
          className="header__nav-close"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <img src={closeIcon} alt="Close menu" />
        </button>
        <div className="header__nav-user">
          <p className="header__nav-username">Terrence Tegegne</p>
          <img
            src={avatar}
            alt="Terrence Tegegne"
            className="header__nav-avatar"
          />
        </div>

        <button
          type="button"
          className="header__nav-add-btn"
          onClick={handleAddClick}
        >
          + Add clothes
        </button>
      </div>
    </header>
  );
}

export default Header;
