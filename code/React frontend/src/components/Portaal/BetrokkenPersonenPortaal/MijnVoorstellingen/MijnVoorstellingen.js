import "./Template.css";
import { Link } from 'react-router-dom'

const Template = () => {
  return (
    <>
      <div class="TemplateBox">
        <div class="TemplateWrapper">
          <h2 class="TemplateTitle">Template</h2>
          <div class="TemplateContentBox">
            <div class="TemplateContentWrapper">
              <h2 class="TemplateContentTitle">Template</h2>
              <div class="TemplateField">
                <Link to="/template">
                  <button type="submit">Template</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;