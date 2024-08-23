import React from 'react';

function InputBox({
    fromAmount = "",
    toAmount = "",
    onFromAmountChange,
    onToAmountChange,
    onFromCurrencyChange,
    onToCurrencyChange,
    onConvert,
    currencyOptions = [],
    fromCurrency = "USD",
    toCurrency = "EUR",
    fromAmountDisabled = false,
    toAmountDisabled = false,
    fromCurrencyDisabled = false,
    toCurrencyDisabled = false,
}) {
    return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="fromAmount" className="block text-sm font-medium text-gray-700">
                    From
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            name="fromAmount"
                            id="fromAmount"
                            className="block w-full rounded-l-md border-gray-300 pl-3 pr-16 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0.00"
                            value={fromAmount}
                            onChange={onFromAmountChange}
                            disabled={fromAmountDisabled}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <select
                                id="fromCurrency"
                                name="fromCurrency"
                                className="h-full w-full rounded-r-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={fromCurrency}
                                onChange={onFromCurrencyChange}
                                disabled={fromCurrencyDisabled}
                            >
                                {currencyOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="toAmount" className="block text-sm font-medium text-gray-700">
                    To
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            name="toAmount"
                            id="toAmount"
                            className="block w-full rounded-l-md border-gray-300 pl-3 pr-16 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0.00"
                            value={toAmount}
                            onChange={onToAmountChange}
                            disabled={toAmountDisabled}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <select
                                id="toCurrency"
                                name="toCurrency"
                                className="h-full w-full rounded-r-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={toCurrency}
                                onChange={onToCurrencyChange}
                                disabled={toCurrencyDisabled}
                            >
                                {currencyOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="button"
                className="w-full mt-4 inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onConvert}
            >
                Convert
            </button>
        </div>
    );
}

export default InputBox;
