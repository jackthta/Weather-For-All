# Weather For All
This is a single page web application that shows you the weekly forecast for the area of the address you input. This project was built using HTML5, CSS3, SCSS, ReactJS, Webpack and dependencies listed in package.json. Two APIs were used (Google's Geocode API & Dark Sky API): one to convert the submitted address/location to find its longitude and latitude to then use to fetch weather data from the other. This is my first ReactJS project, so I tried to make things as simple as possible so as to not introduce messy complexities.
Functionality includes:
- **Responsive nature for mobile devices, tablets, and computers.**
- **Switch between Fahrenheit and Celsius by clicking the temperature.**

## Showcase
### Phone View
<img src="https://github.com/jackthta/Weather-For-All/blob/master/showcase/phone.gif" alt="Phone View" width="25%" height="25%">

### Tablet View
<img src="https://github.com/jackthta/Weather-For-All/blob/master/showcase/tablet.gif" alt="Tablet View" width="25%" height="25%">

### Desktop View
<img src="https://github.com/jackthta/Weather-For-All/blob/master/showcase/desktop.gif" alt="Desktop View" width="50%" height="50%">

## Built With
<img src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="HTML5" width="100px" height="100px"> <img src="https://cdn.worldvectorlogo.com/logos/css-5.svg" alt="CSS3" width="100px" height="100px"> <img src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" alt="SCSS" width="100px" height="100px"> <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="ReactJS" width="100px" height="100px"> <img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" alt="Webpack" width="100px" height="100px">

### APIs
- **[Dark Sky](https://darksky.net/dev)**
- **[Google Geocode](https://cloud.google.com/maps-platform/?__utma=102347093.427295369.1551241192.1552192166.1552192166.1&__utmb=102347093.0.10.1552192166&__utmc=102347093&__utmx=-&__utmz=102347093.1552192166.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=159041850&_ga=2.216961366.1730777831.1552192163-427295369.1551241192#get-started)**


## To use
If you wish to expand upon this project, you'll need to obtain your own set of API keys from the APIs listed above. The locations of where to apply them are in **WeatherApp.js** (src/components/WeatherApp.js)<br>
*line 17*
> const GEOCODE_API_KEY = {YOUR KEY};
*line 36*
> const DARK_SKY_API_KEY = {YOUR KEY};
