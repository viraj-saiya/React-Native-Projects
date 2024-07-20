import React, { useState, useCallback, useEffect } from 'react'


const  ChatWoot =()=> {


        // Add Chatwoot Settings
        window.chatwootSettings = {
            hideMessageBubble: true,
            position: "right", // This can be left or right
            locale: "en", // Language to be set
            type: "standard" // [standard, expanded_bubble]
          };
    
    // Paste the script from inbox settings except the <script> tag

    (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: '5kkk8ETF7veNzrPHDoHw5tk1',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");

      
  }


export default ChatWoot;
