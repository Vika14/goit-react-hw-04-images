import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
    <ThreeDots
      height="100"
      width="100"
      radius="10"
      color="#7B68EE"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);
