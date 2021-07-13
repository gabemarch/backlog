import { useTranslation } from "react-i18next";

const GamesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="games-page">
      <h3 className="games-page-title">{t('pages.games')}</h3>
    </div>
  )
}

export default GamesPage;