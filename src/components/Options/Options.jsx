export default function Options({ updateFeedback, totalFeedback, onReset }) {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback ? <button onClick={onReset}>Reset</button> : null}
    </div>
  );
}
