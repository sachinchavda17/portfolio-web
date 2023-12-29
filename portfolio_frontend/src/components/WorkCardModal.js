import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import "../css/WordCardModalStyle.css";

// setShowFullText,
// cookie,
// showFullText,
// toggleText,
// displayText,
// view,
// thumbnail,
// source,
// title,
// text,
// projectId,
// showCardModal = true,
// setShowCardModal,
const WorkCardModal = () => {
  const navigate = useNavigate();
  const params = useParams()
  const id = params._id
  return (
    <div className="modal-project">
      <div className="modal-project-wrapper"></div>
      <div role="presentation" class="MuiModal-root css-8ndowl">
        <div
          aria-hidden="true"
          class="MuiBackdrop-root MuiModal-backdrop css-919eu4  div123"
        ></div>
        <div tabindex="0" data-testid="sentinelStart"></div>
        <div tabindex="-1" className="sc-jGprRt csHRAx">
          <div className="sc-bPyhqo gqfxGu" onClick={(e) => navigate("/")}>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv newsvg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CloseRoundedIcon"
            >
              <path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
            </svg>
            <img
              src="https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png"
              alt="no"
              className="sc-eEOqmf iBSHyB"
            />
            <div className="sc-fWIMVQ kXcpYa">Trackify</div>
            <div className="sc-ESujJ dOmPAq">Jun 2023 - Jul 2023</div>
            <div className="sc-lkwKjF bjkEOg">
              <div className="sc-jmNpzm gRPMsD">Docker</div>
              <div className="sc-jmNpzm gRPMsD">AWS</div>
              <div className="sc-jmNpzm gRPMsD">DuckDNS</div>
              <div className="sc-jmNpzm gRPMsD">Eslint</div>
              <div className="sc-jmNpzm gRPMsD">Husky</div>
              <div className="sc-jmNpzm gRPMsD">CI/CD</div>
              <div className="sc-jmNpzm gRPMsD">React Js</div>
              <div className="sc-jmNpzm gRPMsD">MongoDb</div>
              <div className="sc-jmNpzm gRPMsD">Node Js</div>
              <div className="sc-jmNpzm gRPMsD">Express Js</div>
              <div className="sc-jmNpzm gRPMsD">Redux</div>
            </div>
            <div className="sc-jWEIYm jslPzR">
              Trackify is a web application designed to streamline task
              management and enhance productivity in the workplace. It provides
              a user-friendly interface for employers to keep track of their
              employees' daily work activities and empowers employees to log
              their tasks efficiently. Admin Credentials: # Email:
              testadmin@gmail.com #Password- 123@testadmin, Employee
              Credentials: #Email: testemployee@gmail.com #Password-
              123@Testemployee
            </div>
            <div className="sc-gUAEMC fsMZnh">
              <a
                href="https://github.com/rishavchanda/Trackify"
                target="new"
                className="sc-fWjsSh frnAGP"
              >
                View Code
              </a>
              <a
                href="https://trackify.duckdns.org"
                target="new"
                className="sc-fWjsSh eUvbYW"
              >
                View Live App
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="modal-project-container"
        onClick={(e) => setShowCardModal(false)}
      >
        <img src={thumbnail} alt={"no Img "} />
        <h2 className=" project-title">{title}</h2>
        <div className=" pro-details">
          <p>{displayText}</p>
          {text.length > 150 && (
            <span className=" read-more-btn" onClick={toggleText}>
              {showFullText ? "Read Less" : "Read More"}
            </span>
          )}
          <div className="pro-btns">
            <NavLink to={view} className={"btn"} target="_blank">
              View
            </NavLink>
            <NavLink to={source} className={"btn"} target="_blank">
              Source
            </NavLink>
            {cookie.email && (
              <NavLink to={"/edit/" + projectId} className={"btn"}>
                Edit
              </NavLink>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WorkCardModal;
