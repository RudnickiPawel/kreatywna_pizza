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
      <div className='googlemaps' style={{ height: '60vh', width: '70%' }}>
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
      <div className='section__paragraph'>Działamy od 2004 roku i od samego początku stawiamy na jakość.</div>
      <div className='section__paragraph'>Nasza pierwsza restauracja powstała we Wrocławiu, a dzisiaj oferujemy nasze usługi w całej Polsce!</div>
      <div className='section__paragraph'>Założycielem firmy jest Michał Kowalski, który prowadził restaurację we Wrocławiu razem z dwoma synami, Marcinem oraz Piotrem.</div>
      <div className='section__paragraph'>W 2008 oraz 2010 roku otworzyliśmy kolejne restauracje.</div>
      <div className='section__paragraph'>Najpierw w Warszawie, której opiekunem jest pierwszy z synów, Marcin. Później w Gdańsku, pod opieką drugiego syna, Piotra.</div>
      <div className='section__paragraph'>Dzisiaj jesteśmy we wszystkich województwach w Polsce!</div>
      <div className='section__paragraph'>Tradycja jest dla nas bardzo ważna. Ewolucja pizz jest rozbudowana, a jej najpopularniejsze odmiany są na pewno warte spróbowania. Nie bez powodu są one popularne od wielu lat!</div>
      <div className='section__paragraph'>Jesteśmy jednak otwarci na eksperymenty, dlatego umożliwiamy klientom dobranie składników samodzielnie.</div>
    </div>
  );
}

export default About;
