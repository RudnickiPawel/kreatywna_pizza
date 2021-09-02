import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';

const Header = (props) => {
  const handleLinkClick = (e, r) => {
    e.preventDefault();
    props.section(r);
  };
  return (
    <div className='Header'>
      <div className="Header__container">
        <a onClick={e => handleLinkClick(e, 'Main')} href='/' className="Header__logo">
          Kreatywna<span>Pizza</span>
        </a>
        <Menu click={handleLinkClick}/>
        <Hamburger />
      </div>
    </div>
  )
};

export default Header;