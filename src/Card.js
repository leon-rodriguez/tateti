const Card = ({ board, text, onClick }) => {
  return (
    <div
      className="cell"
      onClick={onClick}
      style={{
        color:
          board[text] == 10
            ? '#01368d'
            : board[text] == 1
            ? '#ba3b46'
            : 'transparent',
      }}
    >
      {board[text] == 1 ? 'X' : board[text] == 10 ? 'O' : ''}
    </div>
  );
};

export default Card;
