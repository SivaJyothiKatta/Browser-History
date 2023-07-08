import './index.css'

const BrowserHistory = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onRemoveHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-items-container">
      <div className="history-items">
        <p className="time">{timeAccessed}</p>
        <div className="history-container">
          <img src={logoUrl} alt="domain logo" className="history-logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-Url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="button"
        onClick={onRemoveHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
