
import { useTranslation } from "react-i18next";
import NewsFeed from "../../widgets/newsFeed";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <h3>Főoldal</h3>
      <p className="home-page-brief">{t('home.whatsBacklog')}</p>
      <NewsFeed />
    </div>
  )
}

export default HomePage;