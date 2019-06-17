import React from 'react';
import MediaQuery from 'react-responsive';
 
const Responsive = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery query="(min-device-width: 1224px)"> {

    }
      <div>You are a desktop or laptop</div>
      </MediaQuery>


      <MediaQuery query="(min-device-width: 768px) and (max-device-width:1024px">{

      }
        <div>You are sized like a tablet </div>
      </MediaQuery>


    <MediaQuery query="(min-device-width: 768px) and (max-device-width: 480px)">{
    /* nav{position: relative;
  right: inherit; //anulamos su posición fuera de la pantalla
  width: auto;*/
     }
    }
      <div>You are a mobile phone</div>
    </MediaQuery>


    <MediaQuery query="(orientation: portrait)">
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <div>You ar+e landscape</div>
    </MediaQuery>
    
  </div>
);

export default  Responsive;