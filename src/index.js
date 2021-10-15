// import css and icons
import './main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import fetchData from './JSFunctions/fetchData.js';
import fetchLikes from './JSFunctions/fetchLikes.js';

fetchData();
fetchLikes(false);
