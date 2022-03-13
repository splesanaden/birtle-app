export const state = () => ({
    alphabet: "qwertyuiopasdfghjklzxcvbnm",
    alphObj: [
        {
            "letter": "q",
            "guessed": false
        },
        {
            "letter": "w",
            "guessed": false
        },
        {
            "letter": "e",
            "guessed": false
        },
        {
            "letter": "r",
            "guessed": false
        },
        {
            "letter": "t",
            "guessed": false
        },
        {
            "letter": "y",
            "guessed": false
        },
        {
            "letter": "u",
            "guessed": false
        },
        {
            "letter": "i",
            "guessed": false
        },
        {
            "letter": "o",
            "guessed": false
        },
        {
            "letter": "p",
            "guessed": false
        },
        {
            "letter": "a",
            "guessed": false
        },
        {
            "letter": "s",
            "guessed": false
        },
        {
            "letter": "d",
            "guessed": false
        },
        {
            "letter": "f",
            "guessed": false
        },
        {
            "letter": "g",
            "guessed": false
        },
        {
            "letter": "h",
            "guessed": false
        },
        {
            "letter": "j",
            "guessed": false
        },
        {
            "letter": "k",
            "guessed": false
        },
        {
            "letter": "l",
            "guessed": false
        },
        {
            "letter": "z",
            "guessed": false
        },
        {
            "letter": "x",
            "guessed": false
        },
        {
            "letter": "c",
            "guessed": false
        },
        {
            "letter": "v",
            "guessed": false
        },
        {
            "letter": "b",
            "guessed": false
        },
        {
            "letter": "n",
            "guessed": false
        },
        {
            "letter": "m",
            "guessed": false
        }
    ],
    word: "talon",
    start: false,
    solved: false,
    fail: false,
    time: 0,
    solveTime: null,
    disableKeyboard: false,
    activeCell: {
        row: 0,
        cell: 0,
    },
    board: [
        {
            row: 0,
            scored: false,
            cells: [
                {
                    id: 0,
                    value: "",
                    guess: "",
                },
                { id: 1, value: "", guess: "" },
                { id: 2, value: "", guess: "" },
                { id: 3, value: "", guess: "" },
                { id: 4, value: "", guess: "" },
            ],
        },
        {
            row: 1,
            scored: false,
            cells: [
                {
                    id: 0,
                    value: "",

                    guess: "",
                },
                { id: 1, value: "", guess: "" },
                { id: 2, value: "", guess: "" },
                { id: 3, value: "", guess: "" },
                { id: 4, value: "", guess: "" },
            ],
        },
        {
            row: 2,
            scored: false,
            cells: [
                {
                    id: 0,
                    value: "",

                    guess: "",
                },
                { id: 1, value: "", guess: "" },
                { id: 2, value: "", guess: "" },
                { id: 3, value: "", guess: "" },
                { id: 4, value: "", guess: "" },
            ],
        },
        {
            row: 3,
            scored: false,
            cells: [
                {
                    id: 0,
                    value: "",

                    guess: "",
                },
                { id: 1, value: "", guess: "" },
                { id: 2, value: "", guess: "" },
                { id: 3, value: "", guess: "" },
                { id: 4, value: "", guess: "" },
            ],
        },
        {
            row: 4,
            scored: false,
            cells: [
                {
                    id: 0,
                    value: "",

                    guess: "",
                },
                { id: 1, value: "", guess: "" },
                { id: 2, value: "", guess: "" },
                { id: 3, value: "", guess: "" },
                { id: 4, value: "", guess: "" },
            ],
        },

    ],

})

export const mutations = {
    startGame(state) {
        state.start = true;
    },
    initBoard(state, word) {
        for (var letter in state.word) {
            for (var row in state.board) {
                state.board[row].cells[letter].value = state.word[letter];
            }
        }
        $nuxt.$emit('startWatch');
    },
    letterPress(state, letter) {
        var board = state.board;
        var activeCell = state.activeCell;
        var disableKeyboard = state.disableKeyboard;
        // console.log("press:", "letter:" + letter, state.board);
        if (
            state.activeCell.row <= state.board[state.activeCell.row].row &&
            activeCell.cell <=
            board[activeCell.row].cells[activeCell.cell].id
        ) {
            //
            //add letter to active cell and move up a cell
            board[activeCell.row].cells[activeCell.cell].guess =
                letter.letter;

            // if last cell in last row, escape
            if (
                activeCell.row === board.length - 1 &&
                activeCell.cell ===
                board[activeCell.row].cells.length - 1
            ) {
                return;
            }

            //if last cell in non-last row, move to next row
            if (
                activeCell.cell ==
                board[activeCell.row].cells.length - 1
            ) {
                //DO NOTHING - user needs to check row. Disable keyboard?
                disableKeyboard = true;
                // activeCell.row++;
                // activeCell.cell = 0;
                // window.navigator.vibrate(200);
            } else {
                activeCell.cell++;
            }
            letter.guessed = true;
        } else {
            //done?
        }
        console.log(
            "active cell",
            activeCell.cell,
            board[activeCell.row].cells[activeCell.cell],
            "board:",
            board
        );
    },
    checkRow(state) {
        console.log("check row");
        var row = state.board[state.activeCell.row];
        row.scored = true;
        var counter = 0;
        for (var cell in row.cells) {
            //check every cell
            if (row.cells[cell].guess == row.cells[cell].value) {
                counter++;
                if (counter == row.cells.length) {
                    //every cell is valid
                    state.solveTime = state.time;
                    state.solved = true;
                }
            }
        }


        state.activeCell.row++;
        state.activeCell.cell = 0;
        state.disableKeyboard = false;
    },
    deleteLetter(state) {
        //delete last letter entered

        //can't go back if first cell
        if (state.activeCell.cell == 0) return;

        //if not first or last cell, move back one
        if (state.activeCell.cell > 0 && state.activeCell.cell !== 4) {
            state.activeCell.cell--;
        }

        //if start


        //if end
        if (state.activeCell.cell == 4) {
            //if end has a value, erase it and go back a position. If it's blank, delete #3
            if (
                state.board[state.activeCell.row].cells[state.activeCell.cell].guess ==
                ""
            ) {
                state.activeCell.cell = 3;
            } else {
                state.activeCell.cell = 4;
            }
        }

        state.board[state.activeCell.row].cells[state.activeCell.cell].guess = "";
        console.log(state.activeCell.row, state.activeCell.cell);
        state.disableKeyboard = false;
    },

    increaseTime(state) {
        if (!state.solved) {
            state.time++;
        } else {
            state.time = 0;
        }
    }

}
