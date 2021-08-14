import "./styles.css";
import FeedPage from "./Feed/FeedPage";
import { Router, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import { Space } from "antd";
import history from "../utils/history";

export default function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Router history={history}>
        <div>
          <Route path="/" exact component={HomePage} />
        </div>
      </Router>
      <Router history={history}>
        <div>
          <Route path="/feed" exact component={FeedPage} />
        </div>
      </Router>
      {/* <HomePage /> */}
      {/* <AsyncMention />
        <Mentions />
        <br />
        <FeedInputBT type="feed" />
        <br />
        <br />
        <FeedMessage>
          <FeedInputBT type="comment" />
          <FeedMessage comment>
            <FeedMessage comment />
            <FeedMessage comment />
          </FeedMessage>
          <FeedMessage comment />
          <FeedMessage comment />
          <FeedMessage comment />
        </FeedMessage> */}
    </div>
  );
}

// .feed-input-outer-wrapper {
//   /* Frame 44 */
//   /* Auto Layout */
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 24px;

//   position: absolute;
//   width: 704px;
//   height: 238px;
//   left: 43px;
//   top: 36px;

//   border: 1px solid #d2d2d2;
//   box-sizing: border-box;
//   border-radius: 12px;
// }

// .feed-input-inner-wrapper {
//   /* Frame 23
//      Auto Layout */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-end;
//   padding: 0px;

//   position: static;
//   width: 656px;
//   height: 190px;
//   left: 24px;
//   top: 24px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 10px 0px;
// }

// .feed-input-content {
//   /* content */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 0px;

//   position: static;
//   width: 656px;
//   height: 190px;
//   left: 0px;
//   top: 0px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 20px 0px;
// }

// .feed-input-msg-type-buttons-wrapper {
//   /* Frame 17 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;

//   position: static;
//   width: 656px;
//   height: 44px;
//   left: 0px;
//   top: 146px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 1;
//   flex-grow: 0;
//   margin: 32px 0px;
// }

// .feed-input-textarea-outer-wrapper {
//   /* Frame 43 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 0px;

//   position: static;
//   width: 552px;
//   height: 114px;
//   left: 0px;
//   top: 0px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 32px 0px;
// }

// .feed-input-trade-button {
//   /* Frame 41 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;

//   position: static;
//   width: 218.67px;
//   height: 44px;
//   left: 437.33px;
//   top: 0px;

//   border: 0.5px solid #d2d2d2;
//   box-sizing: border-box;
//   border-radius: 0px 8px 8px 0px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 2;
//   flex-grow: 1;
//   margin: 0px 0px;
// }

// .feed-input-research-button {
//   /* Frame 40 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;

//   position: static;
//   width: 218.67px;
//   height: 44px;
//   left: 218.67px;
//   top: 0px;

//   border: 0.5px solid #d2d2d2;
//   box-sizing: border-box;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 1;
//   flex-grow: 1;
//   margin: 0px 0px;
// }

// .feed-input-opinion-button {
//   /* Frame 39 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;

//   position: static;
//   width: 218.67px;
//   height: 44px;
//   left: 0px;
//   top: 0px;

//   background: rgba(165, 217, 255, 0.2);
//   border: 0.5px solid #d2d2d2;
//   box-sizing: border-box;
//   border-radius: 8px 0px 0px 8px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 1;
//   margin: 0px 0px;
// }

// .feed-input-trade-button-heading {
//   /* Heading / H600 */

//   position: static;
//   width: 198.67px;
//   height: 24px;
//   left: 10px;
//   top: 10px;

//   font-family: Inter;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 24px;
//   /* identical to box height, or 171% */

//   text-align: center;

//   /* Gray 3 */

//   color: #828282;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 1;
//   margin: 0px 10px;
// }

// .feed-input-research-button-heading {
//   /* Heading / H600 */

//   position: static;
//   width: 198.67px;
//   height: 24px;
//   left: 10px;
//   top: 10px;

//   font-family: Inter;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 24px;
//   /* identical to box height, or 171% */

//   text-align: center;

//   /* Gray 3 */

//   color: #828282;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 1;
//   margin: 0px 10px;
// }

// .feed-input-opinion-button-heading {
//   /* Heading / H600 */

//   position: static;
//   width: 198.67px;
//   height: 24px;
//   left: 10px;
//   top: 10px;

//   font-family: Inter;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 24px;
//   /* identical to box height, or 171% */

//   text-align: center;

//   color: #3693d6;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 1;
//   margin: 0px 10px;
// }

// .feed-input-textarea-wrapper {
//   /* Frame 14 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 0px;

//   position: static;
//   width: 552px;
//   height: 54px;
//   left: 0px;
//   top: 60px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 1;
//   flex-grow: 0;
//   margin: 20px 0px;
// }

// .feed-input-textarea-inner-wrapper {
//   /* write */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;

//   position: static;
//   width: 552px;
//   height: 54px;
//   left: 0px;
//   top: 0px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 104px 0px;
// }

// .feed-input-textarea {
//   /* Heading / H600 */

//   position: static;
//   width: 433px;
//   height: 24px;
//   left: 70px;
//   top: 0px;

//   font-family: Inter;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 24px;
//   /* identical to box height, or 150% */

//   /* Gray 3 */

//   color: #828282;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 1;
//   flex-grow: 0;
//   margin: 0px 16px;
// }

// .feed-input-user-image {
//   /* Ellipse 1 */

//   position: static;
//   width: 54px;
//   height: 54px;
//   left: 0px;
//   top: 0px;

//   /* background: url(.jpg), #c4c4c4; */

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 0px 16px;
// }

// .feed-input-options-outer-wrapper {
//   /* Frame 16 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;

//   position: static;
//   width: 381px;
//   height: 40px;
//   left: 0px;
//   top: 0px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 20px 0px;
// }

// .feed-input-options-inner-wrapper {
//   /* Frame 47 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;

//   position: static;
//   width: 381px;
//   height: 40px;
//   left: 0px;
//   top: 0px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 0px 19px;
// }

// .feed-input-privacy-setting {
//   /* Frame 46 */

//   /* Auto Layout */

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 8px 10px;

//   position: static;
//   width: 105px;
//   height: 40px;
//   left: 276px;
//   top: 0px;

//   border: 0.5px solid #d2d2d2;
//   box-sizing: border-box;
//   border-radius: 8px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 1;
//   flex-grow: 0;
//   margin: 0px 20px;
// }

// .feed-input-insert-buttons-wrapper {
//   /* Group 2 */

//   position: static;
//   width: 256px;
//   height: 40px;
//   left: 0px;
//   top: 0px;

//   /* Inside Auto Layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 0px 20px;
// }
