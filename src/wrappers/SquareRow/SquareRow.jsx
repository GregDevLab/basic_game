import s from './SquareRow.module.css'

const SquareRow = ({ children }) => {
    return (
        <div className={s.row_square}>
            {children}
        </div>
    )
}

export default SquareRow