import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/i18n';
import { ListUsers } from '../ListUsers';

const Home = styled.div`
  padding: 16px;
`;

export function HomePage() {
  const { t } = useTranslation();
  const title = t(translations.title());
  const formattedString = t('formattedString', {
    first: 'my first',
    second: 'my second',
  });

  const handleSwitchLocaleClick = () => {
    const nextLanguage = i18next.language === 'en' ? 'de' : 'en';
    i18next.changeLanguage(nextLanguage);
  };

  return (
    <>
      <Helmet>
        <title>{title} Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Home>
        <span>{title} container</span>
        <br />
        <span>{t(translations.newString())}</span>
        <div>{formattedString}</div>
        <hr />
        <button onClick={handleSwitchLocaleClick}>Switch Locale</button>
        <hr />
        <ListUsers />
      </Home>
    </>
  );
}
