export const API_URL = process.env.NODE_ENV === 'production' 
?  'api' 
: 'http://localhost:8000';

export const IMGS_URL = (process.env.NODE_ENV === 'production')
    ? '/pictures/'
    : 'http://localhost:8000/public/pictures/';