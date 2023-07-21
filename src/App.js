const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const numArray = Array.from({ length: 20 }, (_, i) => i + 1);
console.log(numArray);
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What you need for the trip?</h3>
      <select>
        {numArray.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <input type="text" placeholder="...item" />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      {/* Spreading object */}
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

// Creating that item component

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X(X %)</em>
    </footer>
  );
}
