

function RoundIcon({img, text}) {
  return (
    <div className="roundIcon-wrapper">
        <div className="roundIcon">
          <img src={img} alt="icon"/>
        </div>
        <span>{text}</span>
    </div>  
  )
}

export default RoundIcon
