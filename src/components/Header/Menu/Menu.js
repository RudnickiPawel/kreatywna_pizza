import '../../../styles/main.css';
import { handleLinkClick } from '../../../utils';

const Menu = (props) => {
  return (
    <div className='Menu'>
      <a onClick={e => {handleLinkClick(e, 'Order', props.section)}} href="/" className="Menu__link Menu__link--order">ZAMÓW</a>
      <div className="Menu__container">
        <a onClick={e => {handleLinkClick(e, 'Recommended', props.section)}} href="/" className="Menu__link">POLECANE</a>
        <a onClick={e => {handleLinkClick(e, 'About', props.section)}} href="/" className="Menu__link">O NAS</a>
        <a onClick={e => {handleLinkClick(e, 'Career', props.section)}} href="/" className="Menu__link">PRACA</a>
      </div>
    </div>
  )
};

export default Menu;