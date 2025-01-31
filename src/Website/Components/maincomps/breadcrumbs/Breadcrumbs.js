import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import { BradeArrow } from '../../../../Svg';

const Breadcrumbs = () => {
  const path = useLocation();
  const location = decodeURIComponent(path.pathname);
  console.log('location', location);
  const pathnames = location.split('/').filter(x => x);

  return (
    <div className={styles.breadcrumbs}> {/* Use the imported styles */}
      <Link to="/" className={styles.homeLink}>Home</Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const lastRoute = pathnames[pathnames.length - 2];

        return last ? (
          lastRoute === "Product page" ? null : (
            <span key={to} className={styles.breadcrumbItem}>
              <BradeArrow /> {value}
            </span>
          )
        ) : (
          <span key={to} className={styles.breadcrumbItem}>
            <BradeArrow /> <Link to={to} className={styles.breadcrumbLink}>{value}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
