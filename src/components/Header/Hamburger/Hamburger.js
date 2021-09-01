import '../../../styles/main.css';

const Hamburger = () => {
  const handleHamburgerClick = () => {
    // toggle menu on hamburger click
    const menu = document.getElementsByClassName("Menu__container")[0];
    menu.classList.toggle("Menu__container--hidden");
  };
  return (
    <div className='Hamburger' onClick={handleHamburgerClick}>
      <div className="Hamburger__line Hamburger__line1"></div>
      <div className="Hamburger__line Hamburger__line2"></div>
      <div className="Hamburger__line Hamburger__line3"></div>
    </div>
  )
};

export default Hamburger;