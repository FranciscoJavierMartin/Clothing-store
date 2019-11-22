import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './MenuItem.module.scss';

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
  const history = useHistory();

  const handleClickItem = () => {
    history.push(props.linkUrl);
  };

  return (
    <div
      className={`${styles.menuItem} ${props.size ? styles[props.size] : ''}`}
      data-test='container'
      onClick={handleClickItem}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        data-test='image'
      />
      <div className={styles.content} data-test='content'>
        <h1 className={styles.title} data-test='title'>
          {props.title.toUpperCase()}
        </h1>
        <span className={styles.subtitle} data-test='subtitle'>
          Shop now
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
