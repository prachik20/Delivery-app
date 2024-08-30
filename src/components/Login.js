import Accordion from "./Accordion";

const Login = () => {
  const data = [
    {
      id: 1,
      question: "what is the react one",
      answer:
        "react is a javascript library for building user interfaces for UI components",
    },
    {
      id: 2,
      question: "what is the react two",
      answer:
        "react is a javascript library for building user interfaces for UI components",
    },
    {
      id: 3,
      question: "what is the react two",
      answer:
        "react is a javascript library for building user interfaces for UI components",
    },
    {
      id: 4,
      question: "what is the react two",
      answer:
        "react is a javascript library for building user interfaces for UI components",
    },
  ];
  return (
    <div>
      Login page
      {data.map((item) => (
        <Accordion title={item.question}>{item.answer}</Accordion>
      ))}
    </div>
  );
};

export default Login;
