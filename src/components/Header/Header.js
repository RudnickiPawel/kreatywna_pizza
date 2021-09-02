import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import { handleLinkClick } from '../../utils';

const Header = (props) => {

  return (
    <div className='Header'>
      <div className="Header__container">
        <a onClick={e => handleLinkClick(e, 'Main', props.section)} href='/' className="Header__logo">
          Kreatywna<span>Pizza</span>
        </a>
        <Menu section={props.section}/>
        <Hamburger />
      </div>
    </div>
  )
};

export default Header;