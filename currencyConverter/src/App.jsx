import { useState } from 'react';
import InputBox from './components/InputBox';

function App() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  
  const currencyOptions = ['usd', 'eur', 'inr', 'gbp']; 

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
  };

  const handleToAmountChange = (e) => {
    setToAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    const convertedAmount = (parseFloat(fromAmount) * 0.85).toFixed(2); 
    setToAmount(convertedAmount);
  };

  return (
    <>
      <h1 className='text-3xl bg-orange-600 text-center py-3 my-4'>Currency App</h1>
      <div>
        <InputBox
          fromAmount={fromAmount}
          toAmount={toAmount}
          onFromAmountChange={handleFromAmountChange}
          onToAmountChange={handleToAmountChange}
          onFromCurrencyChange={handleFromCurrencyChange}
          onToCurrencyChange={handleToCurrencyChange}
          onConvert={handleConvert}
          currencyOptions={currencyOptions}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
        />
      </div>
    </>
  );
}

export default App;
