export const state = () => ({
    alphabet: "qwertyuiopasdfghjklzxcvbnm",
    alphObj: [
        {
            "letter": "q",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "w",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "e",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "r",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "t",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "y",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "u",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "i",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "o",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "p",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "a",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "s",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "d",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "f",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "g",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "h",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "j",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "k",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "l",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "z",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "x",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "c",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "v",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "b",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "n",
            "guessed": false,
            "correct": false,
            "inWord": false,
        },
        {
            "letter": "m",
            "guessed": false,
            "correct": false,
            "inWord": false,
        }
    ],
    word: "talon",
    start: false,
    solved: false,
    fail: false,
    time: 0,
    viewScores: false,
    viewHelp: true,
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
            guess: [],
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
            guess: [],
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
            guess: [],
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
            guess: [],
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
            guess: [],
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

        if (
            state.activeCell.row <= state.board[state.activeCell.row].row &&
            activeCell.cell <=
            board[activeCell.row].cells[activeCell.cell].id
        ) {
            //
            //add letter to active cell and move up a cell
            board[activeCell.row].cells[activeCell.cell].guess =
                letter.letter;
            board[activeCell.row].guess[activeCell.cell] = letter.letter;
            state.alphObj.forEach(item => {
                //find entered letter in obj
                if (item.letter == letter.letter) {
                    item.guessed = true;

                }
            });

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

            } else {
                activeCell.cell++;
            }
            if (letter != 'space') { letter.guessed = true; }
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
        //check every cell
        for (var cell in row.cells) {
            var alphIndex = state.alphObj.indexOf(state.alphObj.find(item => item.letter == row.cells[cell].guess));
            if (row.cells[cell].guess !== row.cells[cell].value && state.word.includes(row.cells[cell].guess)) {
                state.alphObj[alphIndex].inWord = true;
            } else
                // if guess is correct, add to counter (5 pts wins)
                if (row.cells[cell].guess == row.cells[cell].value) {
                    counter++;
                    state.alphObj[alphIndex].correct = true;
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
        var letter = state.board[state.activeCell.row].cells[state.activeCell.cell].guess;
        state.board[state.activeCell.row].cells[state.activeCell.cell].guess = "";
        state.board[state.activeCell.row].guess[state.activeCell.cell] = "";
        console.log(state.activeCell.row, state.activeCell.cell);
        state.alphObj.forEach(item => {
            if (item.letter == letter.letter) {
                item.correct = false;
                item.inWord = false;
                item.guessed = false;
            }
        });


        state.disableKeyboard = false;
    },

    increaseTime(state) {
        if (!state.solved && state.start) {
            state.time++;
            // sessionStorage.setItem('time', state.time);
        } else {
            // state.time = 0;
        }
    },
    setTime(state) {
        state.time = sessionStorage.getItem('time');
    },

    toggleHelp(state) {
        state.viewHelp = !state.viewHelp;
        state.start = !state.start;
        if (!state.start && state.time == 0) {
            state.viewHelp = false;
            this.$store.commit("initBoard");
            state.start = true;
        }
    }

}
