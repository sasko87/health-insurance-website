import React, { useState } from "react";
import classes from "./Accordion.module.css";
import { faq } from "../../data/faq";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestions = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };
  return (
    <section className={classes.accordion}>
      <div className={classes.faqContainer}>
        {faq.map((question, index) => (
          <div key={index}>
            <div
              onClick={() => handleQuestions(index)}
              className={
                selectedQuestion === index
                  ? `${classes.question} ${classes.activeQuestion}`
                  : classes.question
              }
            >
              <p>{question.question}</p>
              {selectedQuestion === index ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </div>

            {selectedQuestion === index ? (
              <div className={classes.answer}>
                <p>{question.answer}</p>
                <hr />
              </div>
            ) : (
              <hr />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
