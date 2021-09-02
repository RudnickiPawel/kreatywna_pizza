import '../../styles/main.css';
import { handleLinkClick } from '../../utils';

const Main = (props) => {
  return (
    <div className='Main section'>
      <div className="section__title colorOrange">
        Witaj!
      </div>
      <div className="section__paragraph ">Masz może ochotę na <span className='colorOrange'>pizzę</span>?</div>
      <div className="section__paragraph">Taką świeżutką, prosto z pieca?</div>
      <div className="section__paragraph">Z pysznym serem? szyneczką? i dodatkami?</div>
      <div className="section__paragraph">Jeśli tak, to <span className='colorOrange'>świetnie</span> się składa!</div>
      <div className="section__paragraph">Właśnie takie mamy w ofercie.</div>
      <div className="section__paragraph">Można też samemu dobrać składniki!</div>
      <a onClick={e => {handleLinkClick(e, 'Order', props.section)}} href='/' className="section__paragraph section__link colorOrange">Zamów już teraz!</a>
    </div>
  );
}

export default Main;
