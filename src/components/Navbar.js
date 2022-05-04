import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  FaHome,
  FaList,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaBiking,
  FaTorah
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setToggled,
  selectToggled
} from '../features/shopBicycleState/shopBicycleSlice';
import * as ROUTES from '../utils/urls';
import { useTranslation } from 'react-i18next';
import { useWindowWidth } from '@react-hook/window-size';
import { ContainerNab } from '../assets/styles';
import i18n from 'i18next';

const Navbar = () => {
  const { t } = useTranslation('translation');
  const onlyWidth = useWindowWidth();
  const dispatch = useDispatch();
  let toggled = useSelector(selectToggled);
  const key = 'toggled';

  const menuIconClick = () => {
    dispatch(setToggled({ key, toggled }));
  };

  const handleLanguaje = async (lng) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <ContainerNab>
      <ProSidebar collapsed={onlyWidth > 800 ? toggled : true} width={'200px'}>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />}>
            {t('init')} <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FaList />}>
            {t('catalogue')}
            <Link to="/catalogue" />
          </MenuItem>
          <SubMenu title={t('group-by-card.rent')} icon={<FaBiking />}>
            <MenuItem>
              {t('new-rent')}
              <Link to={ROUTES.RENT_FORM} />
            </MenuItem>
            <MenuItem>
              {t('histo-rent')}
              <Link to="/history-rent" />
            </MenuItem>
          </SubMenu>
          <SubMenu title={t('lng')} icon={<FaTorah />}>
            <MenuItem icon={<FaTorah />} onClick={() => handleLanguaje('es')}>
              {t('spanish')}
            </MenuItem>
            <MenuItem icon={<FaTorah />} onClick={() => handleLanguaje('en')}>
              {t('english')}
            </MenuItem>
          </SubMenu>
          {toggled ? (
            <MenuItem
              icon={<FaArrowAltCircleRight />}
              onClick={menuIconClick}
            />
          ) : (
            <MenuItem icon={<FaArrowAltCircleLeft />} onClick={menuIconClick} />
          )}
        </Menu>
      </ProSidebar>
    </ContainerNab>
  );
};
export default Navbar;
