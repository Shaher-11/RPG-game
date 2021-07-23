let playerName = 'Guest';

const setPlayerName = (name) => {
  if (name === '') {
    playerName = 'Guest';
  } else {
    playerName = name;
  }
};

const getPlayerName = () => playerName;

export { setPlayerName, getPlayerName };