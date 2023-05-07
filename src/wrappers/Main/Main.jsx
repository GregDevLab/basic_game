import s from './Main.module.css'

const Main = ({ children }) => {
    return (
        <main className={s.main_container}>
            {children}
        </main>
    )
}

export default Main