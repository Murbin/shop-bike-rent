import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  FaHome,
  FaList,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaBiking
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setToggled,
  selectToggled
} from '../features/shopBikeState/shopBikeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const toggled = useSelector(selectToggled);
  const key = 'toggled';

  const menuIconClick = () => {
    dispatch(setToggled({ key, toggled }));
  };

  return (
    <div
      style={{
        height: '100vh',
        position: 'sticky',
        top: 0
      }}
    >
      <ProSidebar collapsed={toggled} width={'200px'}>
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />}>
            Inicio <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FaList />}>
            Catalogue
            <Link to="/catalogue" />
          </MenuItem>
          <MenuItem icon={<FaBiking />}>
            Rent <Link to="/rent" />
          </MenuItem>
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
