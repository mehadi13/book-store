import { useState } from "react";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);  // Track the active accordion index

    const toggleAccordion = (index) => {
        // If the clicked item is already open, close it. Otherwise, set it as active.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flow-root">
            <div className="-my-8 divide-y divide-gray-100">
                {faqData.map((faq, index) => (
                    <details
                        key={index}
                        className="group py-8 [&_summary::-webkit-details-marker]:hidden"
                        open={activeIndex === index} // Conditionally open the current FAQ
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between text-gray-900"
                            onClick={() => toggleAccordion(index)}  // Handle click
                        >
                            <h2 className="text-lg font-medium">{faq.question}</h2>

                            <span className="relative size-5 shrink-0 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </div>
    );
}


const faqData = [
    {
        question: "What is React.js and Explain the concept of 'components' in React?",
        answer:
            "React.js is a JavaScript library for building user interfaces, particularly for single-page applications. 'Components' in React are reusable, isolated pieces of code that represent a part of the UI. They can be either class-based or functional components and are responsible for rendering a portion of the user interface.",
    },
    {
        question: "What is JSX in React, and how does it work?",
        answer:
            "JSX stands for JavaScript XML. It allows you to write HTML-like syntax inside JavaScript, which is then transformed into JavaScript objects (via Babel) that React uses to render the UI. JSX makes it easier to visualize the structure of the UI components.",
    },
    {
        question: "What is the Virtual DOM, and how does React use it to optimize performance?",
        answer:
            "The Virtual DOM is a lightweight copy of the actual DOM. React keeps a virtual representation of the UI and compares it with the real DOM. When there are changes in the state or props, React updates the Virtual DOM first, compares it with the previous version (diffing), and applies the minimal set of changes to the real DOM, optimizing performance.",
    },
    {
        question: "Explain the concept of 'props' in React and how they are used.",
        answer:
            "'Props' are short for properties. They are used to pass data from one component to another, usually from a parent component to a child component. Props are immutable, meaning they cannot be modified within the child component and are used to render dynamic content.",
    },
    {
        question: "What is 'state' in React, and how does it differ from props?",
        answer:
            "'State' in React is a built-in object that stores a component's dynamic data and determines how the component behaves. Unlike 'props,' which are passed down from parent to child and are immutable, 'state' is managed within the component itself and can be updated using the 'setState' function (or hooks in functional components like useState).",
    },
    {
        question: "Explain the useState hook and provide an example of how it is used.",
        answer:
            "The 'useState' hook is a React hook that allows you to add state to functional components. It returns an array with two values: the current state and a function to update the state. Example: `const [count, setCount] = useState(0);`. This creates a 'count' state variable and a 'setCount' function to update it.",
    },
    {
        question: "What is the purpose of the useEffect hook in React, and when would you use it?",
        answer:
            "The 'useEffect' hook allows you to perform side effects in your functional components, such as data fetching, subscriptions, or manually updating the DOM. It runs after the render and can be controlled to run only when specific state or props change, or just once when the component mounts.",
    },
];