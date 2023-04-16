import s from './Loader.module.css'
import loadingSVG from './Spinner-1s-224px.svg'

export const Loader = () => <div className={s.loader}><img src={loadingSVG} alt="loadingSVG"/></div>
