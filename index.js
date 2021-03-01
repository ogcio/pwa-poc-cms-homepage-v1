import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import '@material/mwc-menu';
import './src/components/search-input';
import './src/components/cards-component';
import './src/components/content-card';

const topbarContainer = document.querySelector('#topbar-container');
const menuToggle = document.querySelector('#menu-toggle');

menuToggle.addEventListener('click', () => topbarContainer.classList.toggle('open'));

const mainCards = [
  {
    url: '',
    title: 'All services',
    body: 'View all services'
  },
  {
    url: '',
    title: 'Agriculture',
    body: 'Safety information, animal and farm welfare and grants'
  },
  {
    url: '',
    title: 'Business',
    body: 'Tools and guidance for businesses'
  },
  {
    url: '',
    title: 'Education',
    body: 'College and university websites, education, training boards and grants'
  },
  {
    url: '',
    title: 'Employment',
    body: 'Redundancy claims, employment permits, employment rights and obligations'
  },
  {
    url: '',
    title: 'Environment',
    body: 'Energy and emissions services'
  },
];

const imageCards = [
  {
    image: 'https://s3-eu-west-1.amazonaws.com/govieassets/72312/da860f36b2ba4e5ca5c8fafb430913fe.png',
    url: '',
    title: 'COVID-19 (Coronavirus)',
    body: 'View the latest information on how Ireland is responding to cases of COVID-19 (Coronavirus)'
  },
  {
    image: 'https://s3-eu-west-1.amazonaws.com/govieassets/5896/220119142735-94584dad14354b83b833dc13f58bf49c.png',
    url: '',
    title: 'Brexit. Are you ready?',
    body: 'The United Kingdom left the European Union on 1 February 2020'
  },
  {
    image: 'https://s3-eu-west-1.amazonaws.com/govieassets/90759/0070fe21-44ee-4452-bc9c-92ba03dd12c7.png',
    url: '',
    title: 'Budget 2021',
    body: 'Budget 2021 was published on Tuesday 13 October 2020.'
  },
]

const mainCardsComponent = document.querySelector('#main-cards');

mainCardsComponent.cards = mainCards;
