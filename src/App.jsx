import { useState } from "react";

export default function App() {
  const [choice, setChoice] = useState([]);
  const [rangeInput, setRangeInput] = useState(5);
  const [password, setPassword] = useState("");

  //Function for randomize our password
  const getRandomPassword = (basePassword) => {
    let generatedPassword = "";

    for (let i = 0; i < rangeInput; i++) {
      const randomIndex = Math.floor(Math.random() * basePassword.length);

      generatedPassword += basePassword.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  //Function for handle Copy password
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("The password copied");
  };

  const GeneratePassword = (e) => {
    e.preventDefault();
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-=_+[]{}|;:,.<>?";

    let basePassword = "";

    choice.forEach((item) => {
      if (item === "uppercase") basePassword += uppercase;
      if (item === "lowercase") basePassword += lowercase;
      if (item === "numbers") basePassword += numbers;
      if (item === "symbols") basePassword += symbols;
    });

    getRandomPassword(basePassword);
  };

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChoice((pre) => [...pre, value]);
    }
  };

  return (
    <div>
      <div>
        <p>The password is : {password}</p>
        <button onClick={copyPassword}>Copier</button>
      </div>
      <form onSubmit={GeneratePassword}>
        <div>
          <input
            type="checkbox"
            name="uppercase"
            id="upperCase"
            value="uppercase"
            onChange={handleCheckBox}
          />
          <label htmlFor="uppercase">Includes Uppercase Letters</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="lowerCase"
            id="lowerCase"
            value="lowercase"
            onChange={handleCheckBox}
          />
          <label htmlFor="lowerCase">Includes LowerCase Letters</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            value="numbers"
            onChange={handleCheckBox}
          />
          <label htmlFor="numbers">Includes Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            value="symbols"
            onChange={handleCheckBox}
          />
          <label htmlFor="symbols">Includes Symbols</label>
        </div>
        <div>
          <input
            type="range"
            name="range"
            id="range"
            min="5"
            max="20"
            step="1"
            value={rangeInput}
            onChange={(e) => {
              setRangeInput(e.target.value);
            }}
          />
          <label htmlFor="range">Character length : {rangeInput}</label>
        </div>
        <div>
          <p>Strength :</p>
        </div>
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
}
