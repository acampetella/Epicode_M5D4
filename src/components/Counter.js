import React, {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [formState, setFormState] = useState({});
    console.log(formState);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }
  return (
    <div>
        <h1>Il conteggio è {counter}</h1>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
        <button onClick={reset}>Reset</button>
        <form>
            <input 
                type="text" 
                name="firstName"
                onChange={(e) => setFormState({
                    ...formState,
                    firstName: e.target.value
                })}
            />
            <input 
                type="text" 
                name="lastName"
                onChange={(e) => setFormState({
                    ...formState,
                    lastName: e.target.value
                })}
            />
            <button type='submit'>Invia</button>
        </form>
    </div>
  )
}

export default Counter