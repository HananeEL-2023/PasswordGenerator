export default function App() {
  return (
    <div>
      <div>
        <p>The password is : </p>
        <button>Copier</button>
      </div>
      <form action="">
        <div>
          <input type="checkbox" name="uppercase" id="uppercase" />
          <label htmlFor="uppercase">Includes Uppercase Letters</label>
        </div>
        <div>
          <input type="checkbox" name="lowerCase" id="lowerCase" />
          <label htmlFor="lowerCase">Includes LowerCase Letters</label>
        </div>
        <div>
          <input type="checkbox" name="numbers" id="numbers" />
          <label htmlFor="numbers">Includes Numbers</label>
        </div>
        <div>
          <input type="checkbox" name="symbols" id="symbols" />
          <label htmlFor="symbols">Includes Symbols</label>
        </div>
        <div>
          <label htmlFor="range">Character length : </label>
          <input type="range" name="" id="range" min="0" max="20" />
        </div>
        <div>Strength : </div>
        <button>Generate</button>
      </form>
    </div>
  );
}
