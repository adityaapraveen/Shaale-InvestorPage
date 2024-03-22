import React, { createContext, useContext } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useToggle } from "./UseToggle";
import "./Accordion.css";

// Create context api
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const { title, subheading, imageUrl, investment, revenue, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand,
  };

  return (
    <Provider value={value}>
      <div className="accordion">
        <AccordionHeader
          title={title}
          subheading={subheading}
          imageUrl={imageUrl}
          investment={investment}
          revenue={revenue}
        />
        <AccordionContent>{content}</AccordionContent>
      </div>
    </Provider>
  );
};

// Header
const AccordionHeader = ({ title, subheading, imageUrl, investment, revenue }) => {
  const { expand, toggleExpand } = useContext(AccordionContext);

  return (
    <button onClick={toggleExpand}>
      {imageUrl && <img src={imageUrl} alt="Accordion Image" className="accordion-image" />}
      <div className="header-content">
        <div className="header-details">
          <div className="title">{title}</div>
          <div className="subheading">{subheading}</div>
          <div className="investment-revenue-container">
            <div className="investment">{investment}</div>
            <div className="revenue">{revenue}</div>
          </div>
        </div>
      </div>
      <AccordionIcon
        iconOpened={<FaChevronRight />}
        iconClosed={<FaChevronDown />}
      />
    </button>
  );
};


// Content
const AccordionContent = ({ children }) => {
  const { expand } = useContext(AccordionContext);

  return <>{expand && <div className="content">{children}</div>}</>;
};

// Icon
const AccordionIcon = ({ iconOpened, iconClosed }) => {
  const { expand } = useContext(AccordionContext);
  return <span>{expand ? iconOpened : iconClosed}</span>;
};

export default Accordion;
