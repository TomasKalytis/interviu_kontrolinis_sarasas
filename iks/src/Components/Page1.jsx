import "./Page1.css";
import HTML from "../assets/page1/HTML5_logo.svg";
import CSS from "../assets/page1/CSS3_logo.svg";
import JAVA from "../assets/page1/javascript-1.svg";

const listA = [
  "DOCTYPE",
  "Block & Inline Elemens",
  "Anchors & navigation",
  "Tags & Attributes",
  "Lists (unordered ordered)",
  "Head & Title",
  "Forms & Input types",
  "Imports (script, style...)",
  "Images",
  "Events basics",
  "Headings",
  "Tables",
  "Semantic HTML",
  "Local & Sesssion storage",
];
const listB = [
  "Selectors",
  "Pseudo",
  "Inheritance",
  "Display & Flex",
  "Specificity",
  "Box model",
  "Fonts & Typography",
  "Colors",
  "Positioning",
  "Units (absolute + relative",
  "Overflow",
  "Float",
];
const listC = [
  "Primitives",
  "Scopes & Hosting",
  "Arrays + methods",
  "Closures",
  "Objects + methods",
  "Functions + Arrow functions",
  "Try Catch & Error handling",
  "Execution context",
  "Variables (var.let.const)",
  "Strict mode",
  "Timeout & Interval",
  "Operators",
  "Type Conversions",
  "Classes",
];

const listItemA = listA.map((listasA) => <li>{listasA}</li>);
const listItemB = listB.map((listasB) => <li>{listasB}</li>);
const listItemC = listC.map((listasC) => <li>{listasC}</li>);

export default function Page1() {
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="title">FUNDAMENTALS</div>
          <div className="content">
            <div className="button-logo">
              <button className="logo-button">HTML</button>
              <img src={HTML} alt="CSS logo" width={40} height={40} />
            </div>
            <div className="content-list">
              <ul className="column-list">{listItemA}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="title">FUNDAMENTALS</div>
          <div className="content">
            <div className="button-logo">
              <button className="logo-button1">CSS</button>
              <img src={CSS} alt="HTML logo" width={30} height={40} />
            </div>
            <div className="content-list">
              <ul className="column-list">{listItemB}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="title">FUNDAMENTALS</div>
          <div className="content">
            <div className="button-logo">
              <button className="logo-button2">JAVASCRIPT</button>
              <img src={JAVA} alt="Java Script logo" width={30} height={40} />
            </div>
            <div className="content-list">
              <ul className="column-list">{listItemC}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
