import React from 'react';

import Menu from './../components/about/menu.jsx';
function content()
{
    return(<div className="container">
        <script src="/js/googleMap.js"></script>
        <div id="map">
        </div>
        <div className="contacts">
            <h2 className="title">Телефоны:</h2>
            <ul>
                <li>
                    +375331234567
                </li> 
                <li>
                    +375331234568
                </li>
            </ul>
            <h2 className="title">E-mail:</h2>
            <ul>
                <li>
                    example-1@gmail.com
                </li> 
                <li>
                    example-2@gmail.com
                </li>
            </ul>
            <h2 className="title">Адрес:</h2>
            <ul>
                <li>
                    г. Минск
                </li> 
            </ul>
        </div>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOw3RjQA8M72BmduwNrLCvS3krvGddZco&callback=initMap">
        </script>
    </div>)
}

const About = ()=> {
  return (
    <main className="aboutPage">
        <Menu/>
        <div >
            {content()}
        </div>
    </main>
  );
};
export default About;