import { useState } from "react";
import FormExample from "./components/Form";
import Hero from "./components/Hero";
import LoginExample from "./components/Login";

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div className="container mx-auto px-4">
      <Hero />
      {!isSuccess && <FormExample setIsSuccess={setIsSuccess} />}
      {isSuccess && <LoginExample setIsSuccess={setIsSuccess} />}
    </div>
  );
};

export default App;
