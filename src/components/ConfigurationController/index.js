import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleShowRightNavbar = event =>
        onToggleShowRightNavbar(event.target.checked)

      const toggleShowLeftNavbar = event =>
        onToggleShowLeftNavbar(event.target.checked)

      const toggleShowContent = event =>
        onToggleShowContent(event.target.checked)

      return (
        <div className="controllers-container">
          <div className="controllers-responsive-container">
            <h1 className="controllers-header">Layout</h1>
            <div className="checkbox-container">
              <input
                onChange={toggleShowContent}
                className="checkbox"
                type="checkbox"
                id="content"
                checked={showContent}
              />
              <label htmlFor="content" className="checkbox-label">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                onChange={toggleShowLeftNavbar}
                className="checkbox"
                type="checkbox"
                id="leftNavbar"
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="checkbox-label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                onChange={toggleShowRightNavbar}
                className="checkbox"
                type="checkbox"
                id="rightNavbar"
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar" className="checkbox-label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext>
)

export default ConfigurationController
