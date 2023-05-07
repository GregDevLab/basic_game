import s from './Logo.module.css'
const Logo = ({ logo }) => {
    return (
        <div className={s.logo_container}>
            <img src={logo} alt="logo" height={50} width={50} />
        </div>
    )
}

export default Logo