import s from './Square.module.css'

const Square = ({ value, action }) => {

    return (
        <div className={s.square} onClick={action} style={value ? { backgroundColor: value[0] } : {}}>
            <div> </div>
        </div >
    )
}

export default Square