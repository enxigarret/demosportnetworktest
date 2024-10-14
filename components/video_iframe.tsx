
// Create a component that renders the iframe
import React from 'react';

const FacebookVideoEmbed = () => {
  return (
    <div>
      <iframe
        src="https://players.brightcove.net/6012566821001/9yinZu1tBI_default/index.html?videoId=6361074015112 "
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
