import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation()

  //TODO: when user is not authenticated the ProfilePage menu is not available on the NavBar
  return (
    <div className="profile-page">
      <h3 className="profile-page-title">{t('pages.myProfile')}</h3>
      <div className="profile-page-navigation">
        <ul className="profile-page-navigation-list">
          <li className="profile-page-navigation-list-item">{t('profile.personalData')}</li>
          <li className="profile-page-navigation-list-item">{t('profile.myBacklog')}</li>
        </ul>
      </div>
      <span className="profile-page-favorites">{t('common.favorites')}</span>
      <span className="profile-page-signout">{t('authentication.signOut')}</span>
    </div>
  )
}

export default ProfilePage;