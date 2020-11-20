import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  setAmount,
  incrementByAmount,
  decrementByAmount,
  multiplyByAmount,
  divideByAmount,
  selectCalc,
} from './calculatorSlice';
import styles from './Calculator.module.css';

export function Calculator() {
  const calc = useSelector(selectCalc);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{calc}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(setAmount(Number(incrementAmount) || 0))
          }
        >
          Set Amount
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        {/* <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button> */}
        <button
          className={styles.button}
          onClick={() =>
            dispatch(decrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Subtract Amount
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(multiplyByAmount(Number(incrementAmount) || 1))
          }
        >
          Multiply Amount
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(divideByAmount(Number(incrementAmount) || 1))
          }
        >
          Divide Amount
        </button>
      </div>
    </div>
  );
}