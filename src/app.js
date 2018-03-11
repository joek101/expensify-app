import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/conifgureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();
console.log('test');
store.dispatch(addExpense({description: 'water bill', amount: 4500}));

store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));

store.dispatch(addExpense({description: 'Rent', amount: 109500}));


var state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

//ReactDOM.render(<AppRouter />, document.getElementById('app'));