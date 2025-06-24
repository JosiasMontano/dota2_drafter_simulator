 const gameState = 
 {
            currentTurn: 0,
            turnSequence: [
                'bp1', 'bp2', 'bp2', 'bp1', 'bp2', 'bp2', 'bp1', 'ep1', 
                'ep2', 'bp1', 'bp1', 'bp2', 'ep2', 'ep1', 'ep1', 'ep2', 
                'ep2', 'ep1', 'bp1', 'bp2', 'bp2', 'bp1', 'ep1', 'ep2'
            ],
            player1ReserveTime: 130, 
            player2ReserveTime: 130,
            currentTimer: 0,
            currentTimerType: '', 
            currentPlayer: '',
            isPaused: false,
            timerInterval: null,
            characters: [ /*complete after s */],
            history: []
};

const charactersGrid = document.getElementById('charactersGrid');
const historyPanel = document.getElementById('historyPanel');
const player1TimerDisplay = document.querySelector('#player1Timer .time-display');
 /*complete after */

function initGame() {
            
            charactersGrid.innerHTML = '';
            gameState.characters.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';
                card.dataset.id = character.id;
                
                const img = document.createElement('img');
                img.src = character.imgUrl;
                img.alt = `Character ${character.id}`;
                
                card.appendChild(img);
                card.addEventListener('click', () => handleCharacterClick(character.id));
                charactersGrid.appendChild(card);
                
                updateCharacterCard(character.id);
            });
             

            historyPanel.innerHTML = '';
            /*complete after */
            startNextTurn();
        }