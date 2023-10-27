import { section1, aboutthumb } from "../../assets/images";
import { useState } from "react";
import PropTypes from "prop-types";

function AccordionItem({ id, title, content, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? "" : "collapsed"}`}>
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={onToggle}
        >
          {<span>0{id}.</span>}
          {title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
}

const FaqArea = () => {
  const [activeItem, setActiveItem] = useState(null);

  const accordionItems = [
    {
      title: "What is your pricing strategy and why?",
      content:
        "Key business questions are the questions that your data expert will be tasked with answering. They are the questions you have about business performance that are central to the overall strategy.",
    },
    {
      title: "What problem does your business solve?",
      content:
        "Key business questions are the questions that your data expert will be tasked with answering. They are the questions you have about business performance that are central to the overall strategy.",
    },
    {
      title: "How does your business generate income?",
      content:
        "Key business questions are the questions that your data expert will be tasked with answering. They are the questions you have about business performance that are central to the overall strategy.",
    },
  ];

  const accordionItems2 = [
    {
      title: "What is your favorite family vacation?",
      content:
        "Initial conversations set the tone for if the person wants to continue to get to know you, so be ready to answer some questions as well. Initial set the tone for if the person wants to continue to get to know.",
    },
    {
      title: "What really makes you angry?",
      content:
        "Initial conversations set the tone for if the person wants to continue to get to know you, so be ready to answer some questions as well. Initial set the tone for if the person wants to continue to get to know.",
    },
    {
      title: "How does your business generate income?",
      content:
        "Initial conversations set the tone for if the person wants to continue to get to know you, so be ready to answer some questions as well. Initial set the tone for if the person wants to continue to get to know.",
    },
  ];

  const handleToggle = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <>
      {/*================= Faq Area Start Here =================*/}
      <section className="faq-area pt-105 pb-0 pt-md-55 pt-xs-55">
        <div className="container">
          <div className="row align-items-center pb-90 pb-md-30 pb-xs-30">
            <div className="col-lg-6 col-md-12">
              <div className="faq-img-wrapper pr-70 pr-lg-0 pr-md-0 pr-xs-0 mb-30">
                <img className="w-100" src={section1} alt="Faq Img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-content-wrapper2 faq-wrap3 pr-30 pr-lg-0 pr-md-0 pr-xs-0">
                <h2 className="sect-title mb-55 mb-lg-20">
                  Some Q. &amp; Answers
                </h2>
                <div className="faq-que-list faq-que2 mb-30">
                  <div className="accordion" id="accordionExample">
                    {accordionItems.map((item, index) => (
                      <AccordionItem
                        key={index}
                        id={index + 1}
                        title={item.title}
                        content={item.content}
                        isOpen={index === activeItem}
                        onToggle={() => handleToggle(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grey-bg4 pt-120 pb-90 pt-md-60 pb-md-30 pt-xs-60 pb-xs-30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="faq-content-wrapper pr-50 pr-lg-0 pr-md-0 pr-xs-0">
                  <div className="section-title mb-55 mb-lg-30">
                    <h2 className="sect-title">Some Q. &amp; Answers</h2>
                  </div>
                  <div className="faq-que-list faq-que-list4 mb-30">
                    <div className="accordion" id="accordion2">
                      {accordionItems2.map((item, index) => (
                        <AccordionItem
                          key={index}
                          id={index + 1}
                          title={item.title}
                          content={item.content}
                          isOpen={index === activeItem}
                          onToggle={() => handleToggle(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="faq-img-wrapper d-flex mb-30">
                  <div className="faq-img-wrapper pr-70 pr-lg-0 pr-md-0 pr-xs-0 mb-30">
                    <img className="w-100" src={aboutthumb} alt="Faq Img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Faq Area End Here =================*/}
    </>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FaqArea;
