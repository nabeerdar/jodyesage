## Dependencies
npm install @fortawesome/react-fontawesome  @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-brands-svg-icons
npm install react-router-dom
npm install @fortawesome/fontawesome-free


## 
npm install -D dts-css-modules-loader


## Font Names
noto-serif

Libre baskerville
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@587&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Serif:ital,wght@1,681&display=swap');
    </style>

Cinzel
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@638&display=swap');
    </style>

    font-family: "Cinzel",  serif;
    font-optical-sizing: auto;
    font-weight: 638;
    font-style: normal;

## deploy application
https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithub.com

 "homepage": "https://jodyesage.github.io/mywebsite",
 "predeploy": "npm run build",
    "deploy": "gh-pages -d build",