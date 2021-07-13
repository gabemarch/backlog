import { useTranslation } from 'react-i18next';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.scss';

const SearchBar = () => {
  const { t } = useTranslation();
  return (
    <div className="search-bar">
      <input type="text" placeholder={t('common.searchForSomething')} className="search-bar-input" />
      <div className="search-bar-icon">
        <BsSearch />
      </div>
    </div>
  )
}

export default SearchBar;