/* eslint-disable react/prop-types */
import SquareRow from '../../wrappers/SquareRow/SquareRow'
import Square from '../Square/Square'
import s from './GameMasterMind.module.css'


const GameMasterMind = ({ game, selectSquare, resetGame, code, wining }) => {

    return (
        <div className={s.game_container}>
            <div className={s.mater_mind}>
                <div className={`${s.code} ${wining ? '' : s.mask}`}>
                    <SquareRow >
                        {code.map((color, index) => <Square key={color + '_' + index} value={[color]} />)}
                    </SquareRow>
                </div>
                {game.map((line, row) => (
                    <SquareRow key={row}>
                        {line.map((el, col) => <Square key={col} value={game[row][col]} action={() => selectSquare(row, col)} />)}
                    </SquareRow>
                )).reverse()
                }
                <button onClick={resetGame} className='btn'>RECOMMENCER</button>
            </div>
        </div>
    )
}

export default GameMasterMind