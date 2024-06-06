import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Footer.module.css';

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <footer className={styles.footer}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Teams" icon={<GroupIcon />} />
        <BottomNavigationAction label="Players" icon={<PersonIcon />} />
        <BottomNavigationAction label="Statistics" icon={<BarChartIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
