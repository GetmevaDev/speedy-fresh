import "../css/bannerWithText.css"

function BannerWithText({title, subtitle, img}) {
  return (
    <div className="container"  >
    <div className="bannerWithText" style={{backgroundImage: `url(${img})`}}>
      {title && <h4>{title}</h4>}
      {subtitle && <h5>{subtitle}</h5>}
      <div className="liner"></div>

    </div>
    </div>
  )
}

export default BannerWithText
