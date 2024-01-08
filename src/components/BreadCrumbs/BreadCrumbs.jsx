import Link from 'next/link';
import style from './BreadCrumbs.module.scss';

export const BreadCrumbs = ({ list }) => {
  return (
    <nav className={style.nav}>
      {list.map(({ link, text }, id) => {
        return (
          <span key={id}>
            <Link rel="canonical" className={style.link} href={link}>
              {text}
            </Link>
            {id < list.length - 1 && <span className={style.span}>/</span>}
          </span>
        );
      })}
    </nav>
  );
};
