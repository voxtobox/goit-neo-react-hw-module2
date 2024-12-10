export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div style={{ lineHeight: '2em' }}>
      <div>Good: {feedback.good}</div>
      <div>Neutral: {feedback.neutral}</div>
      <div>Bad: {feedback.bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {positiveFeedback}%</div>
    </div>
  );
}
