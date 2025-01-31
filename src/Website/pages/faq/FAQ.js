import React, { useState } from "react";
import styles from "./faq.module.css"; // assuming you have styles here
import { Pluse } from "../../../Svg";

const faqData = {
  "Topic 1": [
    {
      question: "Why is Webflow the best nocode tool?",
      answer:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    },
    {
      question: "When did Webflow was founded?",
      answer:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    },
    {
      question: "When did Webflow was founded?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    },
    {
      question: "Is NoCode the future of the web?",
      answer:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
    },
    {
      question: "Is NoCode the future of the web?",
      answer:
        "To place an order, a minimum order value of Rs. 999 or more is required (Excluding COD charges, Shipping charges, or value reduced after the application of coupons or any other offer).",
    },
  ],

};

const FAQ = () => {
  const [selectedTopic, setSelectedTopic] = useState("Topic 1");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setExpandedIndex(null); // Reset the expanded question when topic changes
  };

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>

      <h2>Frequently asked questions</h2>

      {/* FAQ Content */}
      <div className={styles.content}>
        {faqData[selectedTopic].map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => handleToggle(index)}>
              {item.question}
              <span>{expandedIndex === index ? <div className={styles.nagative}>-</div> : <div className={styles.positive}><Pluse /></div>}</span>
            </div>
            {expandedIndex === index && <div className={styles.answer}>{item.answer}</div>}
          </div>
        ))}
      </div>

      <div className={styles.mobile_contant}>
        {Object.keys(faqData).map((topic) => (
          <div className={styles.content1}>
            <h2 className={styles.heading}>{topic}</h2>
            {faqData[topic].map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <div
                  className={styles.question}
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                  <span>
                    {expandedIndex === index ? (
                      <div className={styles.nagative}>-</div>
                    ) : (
                      <div className={styles.positive}>+</div>
                    )}
                  </span>
                </div>
                {expandedIndex === index && (
                  <div className={styles.answer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

  );
};

export default FAQ;
