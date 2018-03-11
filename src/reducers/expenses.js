const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
           return [
               ...state,
               action.expense
           ]
        }
        case 'REMOVE_EXPENSE': {
            return state.filter(({ id }) => id !== action.id);
        }
        case 'EDIT_EXPENSE': {
            //console.log('state',state)
            // state is the default values, plus the values passed up from 
            // const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                       ...expense,
                       ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
        }
        default: 
            return state;
    }
};

export default expensesReducer;