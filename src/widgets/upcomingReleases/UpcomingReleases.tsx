import { useTranslation } from 'react-i18next';

import './UpcomingReleases.scss';

const UpcomingReleases = () => {
  const { t } = useTranslation();
  return (
    <div className="upcoming-releases">
      <h3 className="upcoming-releases-title">{t('common.upcomingReleases')}</h3>
    </div>
  )
}

export default UpcomingReleases;