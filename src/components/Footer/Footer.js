import '../../styles/main.css';

const Footer = (props) => {
  return (
    <div className='Footer'>
      <div className="Footer__logo">
        Kreatywna<span>Pizza</span>
      </div>
      <div className="Footer__container">
        <div className="Footer__wrapper">
          <span>e-mail:</span>
          <span>tel: </span>
        </div>
        <div className="Footer__wrapper">
          <a href="mailto:mail@kreatywnapizza.pl">mail@kreatywnapizza.pl</a>
          <a href="tel:+48512386720">512 386 720</a>
        </div>
      </div>
      <div className="Footer__date">
        2004-2021
      </div>
    </div>
  );
}

export default Footer;
