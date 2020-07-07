import React from 'react';
import { Helmet } from 'react-helmet-async';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/i18n';

export function HomePage() {
  const { t } = useTranslation();
  const title = t(translations.title());
  //const formattedString = t(translations.formattedString());
  const formattedString = t('formattedString', {
    first: 'my first',
    second: 'my second',
  });

  const handleClick = () => {
    i18next.changeLanguage('de');
  };

  return (
    <>
      <Helmet>
        <title>{title} Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>{title} container</span>
      <br />
      <span>{t(translations.newString())}</span>
      <div>{formattedString}</div>
      <hr />
      <button onClick={handleClick}>Switch</button>
    </>
  );
}
