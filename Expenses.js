import "./Expenses.css";
import Card from "../../UI/Card";

import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpesnesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHnadler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onChangeYear={filterChangeHnadler}
        />

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
