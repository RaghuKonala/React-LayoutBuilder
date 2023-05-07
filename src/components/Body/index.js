// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const rightNavbar = () => (
    <div className="right-navbar-container">
      <h1 className="body-header">Right Navbar</h1>
      <div className="boxes-container">
        <p className="ad-box">Ad 1</p>
        <p className="ad-box">Ad 2</p>
      </div>
    </div>
  )

  const content = () => (
    <div className="content-container">
      <h1 className="body-header">Content</h1>
      <p className="body-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const leftNavbar = () => (
    <div className="left-navbar-container">
      <h1 className="body-header">Left Navbar Menu</h1>
      <ul className="left-navbar-list">
        <li className="body-content list-item">Item 1</li>
        <li className="body-content list-item">Item 2</li>
        <li className="body-content list-item">Item 3</li>
        <li className="body-content list-item">Item 4</li>
      </ul>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar && leftNavbar()}
            {showContent && content()}
            {showRightNavbar && rightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
