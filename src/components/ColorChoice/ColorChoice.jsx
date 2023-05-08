import { COLORS } from '../../config/masterMind'
import s from './ColorChoice.module.css'

const ColorChoice = ({ onClick, selectedSquare }) => {
    console.log("🚀 ~ file: ColorChoice.jsx:5 ~ ColorChoice ~ selectSquare:", selectedSquare)

    return (
        <div className={s.color_container} style={{ display: ` ${selectedSquare ? 'flex' : 'none'}` }}>
            {COLORS.map((color) => (
                <div className={`${s.box} ${s['box_' + color]}`} key={color}>
                    <input type="radio" name="color" className={s[color]} value={color} onClick={(e) => onClick(e.target.value)} />
                </div>
            ))}
        </div>
    )
}

export default ColorChoice