import React, { PureComponent } from 'react';
import ListContainer from 'containers/ListContainer';
import FormContainer from 'containers/FormContainer';
import { addLocaleData, FormattedMessage, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import messages from 'locales/messages';
import MainWrapper from './MainWrapper';

addLocaleData([...en, ...ja]);

class App extends PureComponent {
  render() {
    const { locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <MainWrapper>
          <div className="col-md-4 offset-md-1">
            <h2>
              <FormattedMessage id="articles.header" />
            </h2>
            <ListContainer />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>
              <FormattedMessage id="article.new" />
            </h2>
            <FormContainer />
          </div>
        </MainWrapper>
      </IntlProvider>
    );
  }
}

export default App;
