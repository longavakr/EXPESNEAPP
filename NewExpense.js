import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setisEdiitng] = useState();

  const saveExpesneDataHandler = (enteredExpesneData) => {
    const expenseData = {
      ...enteredExpesneData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setisEdiitng(false);
  };

  const startEditingHandler = () => {
    setisEdiitng(true);
  };

  const stopEditingHandler = () => {
    setisEdiitng(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpesneDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
