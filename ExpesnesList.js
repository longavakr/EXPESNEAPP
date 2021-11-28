import "./ExpenesList.css";
import ExpenseItem from "./ExpenseItem.js";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expesnes-list__fallback">found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((ttt) => (
        <ExpenseItem
          key={ttt.id}
          title={ttt.title}
          amount={ttt.amount}
          date={ttt.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
