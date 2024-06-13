import EmptyDataImage from '../assets/emptydata.svg'

function EmptyData() {
  return (
    <div className="emptyData">
      <img src={EmptyDataImage} alt="emptydata" />
      <p>No record available. Try another page or add a new book</p>
    </div>
  )
}

export default EmptyData
