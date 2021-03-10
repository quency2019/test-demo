import styles from './index.css';
import { NavLink } from 'umi'
export default function () {
  return (
    <div className={styles.normal}>
      index
      <NavLink to="/sub">sub</NavLink>
      <NavLink to="/admin">admin</NavLink>
    </div>
  );
}
