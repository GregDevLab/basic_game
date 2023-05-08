import { useEffect, useState } from "react"
import ColorChoice from "../components/ColorChoice/ColorChoice"
import GameMasterMind from "../components/GameMasterMind/GameMasterMind"
import { COLORS, DEFAULT_GAME } from "../config/masterMind"

const MAsterMind = () => {
    const [game, setGame] = useState([...JSON.parse(JSON.stringify(DEFAULT_GAME))])
    const [selectedSquare, setSelectedSquare] = useState(null)
    const [code, setCode] = useState([])
    const [wining, setWining] = useState(false)

    const randomColor = () => {
        return COLORS[Math.floor(Math.random() * 6)]
    }

    const initCode = () => {
        setCode(null)
        const arr = []
        for (let i = 0; i < 4; i++) {
            let color = randomColor()
            while (arr.includes(color)) {
                color = randomColor()
            }
            arr.push(color)
        }
        setCode(arr)
    }

    const isCompleted = (row) => {
        let completRow = row
        game[row].map(col => {
            if (!col[0]) return completRow = null
        })
        return completRow
    }

    const isSelectable = (row, column) => {
        let plain = true
        if (game[row][column].length > 0) return false
        if (row > 0) {
            for (let col = 0; col < game[row].length; col++) {
                if (game[row - 1][col].length === 0) plain = false
            }
        }
        return plain
    }

    const selectSquare = (row, column) => {
        const selectable = isSelectable(row, column)
        selectable ? setSelectedSquare([row, column]) : setSelectedSquare(null)
    }

    const validColor = (line, color) => {
        console.log("🚀 ~ file: MAsterMind.jsx:53 ~ validColor ~ line:", line)
        let isValid = true
        game[line].map(col => {
            if (col.includes(color)) return isValid = false
        })
        return isValid
    }

    const isWin = (row) => {
        let win = true
        for (let col = 0; col < game[row].length - 1; col++) {
            if (game[row][col][0] !== code[col]) {
                win = false
            }
        }
        return win
    }

    const addColor = (color) => {
        const isValid = validColor(selectedSquare[0], color)
        if (!isValid) return
        if (!selectedSquare) {
            console.log('veuillez selectionner une case valide avant de choisir une couleur')
        } else {
            const row = selectedSquare[0]
            const col = selectedSquare[1]
            const newGame = [...game]
            newGame[row][col] = [color]
            setGame(newGame)
            setSelectedSquare(null)
            if (isCompleted(row) !== null) {
                setWining(isWin(row))
            }
        }
    }

    const resetGame = () => {
        console.log("Réinitialisation du jeu !");
        initCode()
        setWining(false)
        setGame([...JSON.parse(JSON.stringify(DEFAULT_GAME))]);
    };

    useEffect(() => {
        console.log(game)
    }, [game])

    useEffect(() => {
        initCode()
    }, [])

    useEffect(() => {
        console.log(code)
    }, [code])
    return (
        <>
            <div className="game">
                <ColorChoice onClick={addColor} selectedSquare={selectedSquare} />
                <GameMasterMind game={game} selectSquare={selectSquare} code={code} resetGame={resetGame} wining={wining} />
            </div>
        </>
    )
}

export default MAsterMind