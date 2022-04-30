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
import { useWindowWidth } from '@react-hook/window-size';
import i18n from 'i18next';

const Navbar = () => {
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
    <div
      style={{
        height: '100vh',
        position: 'sticky',
        top: 0
      }}
    >
      <ProSidebar collapsed={onlyWidth > 800 ? toggled : true} width={'200px'}>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />}>
            Inicio <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FaList />}>
            Catalogue
            <Link to="/catalogue" />
          </MenuItem>
          <SubMenu title="Rent" icon={<FaBiking />}>
            <MenuItem>
              New Rent
              <Link to={ROUTES.RENT_FORM} />
            </MenuItem>
            <MenuItem>
              History Rent
              <Link to="/history-rent" />
            </MenuItem>
          </SubMenu>
          <SubMenu title="Languajes" icon={<FaTorah />}>
            <MenuItem icon={<FaTorah />} onClick={() => handleLanguaje('es')}>
              Español
            </MenuItem>
            <MenuItem icon={<FaTorah />} onClick={() => handleLanguaje('en')}>
              English
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
    </div>
  );
};
export default Navbar;
