import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import App from 'components/App';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import messages from './locales/messages';
import store from './store';

addLocaleData([...en, ...ja]);

const language = navigator.language.toLowerCase().split(/[-_]/)[0];

render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);
