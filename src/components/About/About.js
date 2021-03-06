import '../../styles/main.css';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import pizza from '../../assets/pizza.jfif';

const About = (props) => {
  const AnyReactComponent = ({ text }) => <img className='googlemaps__marker' src={pizza} alt="" />;
  const defaultProps = {
    center: {
      lat: 51.91084,
      lng: 19.33357
    },
    zoom: 6
  };

  return (
    <div className='About section'>
      <div className='section__title'>O nas</div>
      <div className='googlemaps'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={54.35097}
            lng={18.64764}
          />
          <AnyReactComponent
            lat={54.51093}
            lng={18.5323}
          />
          <AnyReactComponent
            lat={53.76866}
            lng={20.48882}
          />
          <AnyReactComponent
            lat={53.13158}
            lng={23.14854}
          />
          <AnyReactComponent
            lat={52.24214}
            lng={21.02097}
          />
          <AnyReactComponent
            lat={53.12127}
            lng={17.96677}
          />
          <AnyReactComponent
            lat={53.45656}
            lng={14.54423}
          />
          <AnyReactComponent
            lat={54.15881}
            lng={15.57853}
          />
          <AnyReactComponent
            lat={52.406}
            lng={16.91085}
          />
          <AnyReactComponent
            lat={51.09976}
            lng={17.01661}
          />
          <AnyReactComponent
            lat={51.75592}
            lng={19.45935}
          />
          <AnyReactComponent
            lat={51.25876}
            lng={22.56217}
          />
          <AnyReactComponent
            lat={50.03039}
            lng={22.00147}
          />
          <AnyReactComponent
            lat={50.07206}
            lng={19.93767}
          />
          <AnyReactComponent
            lat={50.26084}
            lng={19.02315}
          />
          <AnyReactComponent
            lat={50.8087}
            lng={19.12507}
          />
        </GoogleMapReact>
      </div>
      <div className='section__paragraph'>Dzia??amy od 2004 roku i od samego pocz??tku stawiamy na jako????.</div>
      <div className='section__paragraph'>Nasza pierwsza restauracja powsta??a we Wroc??awiu, a dzisiaj oferujemy nasze us??ugi w ca??ej Polsce!</div>
      <div className='section__paragraph'>Za??o??ycielem firmy jest Micha?? Kowalski, kt??ry prowadzi?? restauracj?? we Wroc??awiu razem z dwoma synami, Marcinem oraz Piotrem.</div>
      <div className='section__paragraph'>W 2008 oraz 2010 roku otworzyli??my kolejne restauracje.</div>
      <div className='section__paragraph'>Najpierw w Warszawie, kt??rej opiekunem jest pierwszy z syn??w, Marcin. P????niej w Gda??sku, pod opiek?? drugiego syna, Piotra.</div>
      <div className='section__paragraph'>Dzisiaj jeste??my we wszystkich wojew??dztwach w Polsce!</div>
      <div className='section__paragraph'>Tradycja jest dla nas bardzo wa??na. Ewolucja pizz jest rozbudowana, a jej najpopularniejsze odmiany s?? na pewno warte spr??bowania. Nie bez powodu s?? one popularne od wielu lat!</div>
      <div className='section__paragraph'>Jeste??my jednak otwarci na eksperymenty, dlatego umo??liwiamy klientom dobranie sk??adnik??w samodzielnie.</div>
    </div>
  );
}

export default About;
