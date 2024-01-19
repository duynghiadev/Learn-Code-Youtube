const SlowComponent = ({ value }) => {
  return (
    <div>
      <h2>Slow Component</h2>
      {Array(value)
        .fill(1)
        .map((_, index) => (
          <p key={index}>{value + index}</p>
        ))}
    </div>
  )
}

export default SlowComponent
