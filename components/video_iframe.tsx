
// Create a component that renders the iframe
import React from 'react';

const FacebookVideoEmbed = () => {
  return (
    <div>
      <iframe
        src="https://player.vimeo.com/video/957140368?h=6a1d0f243c"
       
        width="1024"
        height="576"
        style={{ border: 'none', overflow: 'hidden' }}
   
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};


export default FacebookVideoEmbed;
