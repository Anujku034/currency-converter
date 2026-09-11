# 💱 Currency Converter

A responsive currency converter built using **React.js** and **Tailwind CSS**.  
It allows users to select different currencies, enter an amount, and convert it using live exchange rates.

## 🚀 Live Demo

🔗 [Currency Converter](https://currency-converter-lemon-pi-80.vercel.app/)

## 📸 Features

- 🌍 Select from multiple currencies
- 💰 Enter custom conversion amount
- 🔄 Swap From and To currencies
- 📊 Live exchange rates
- 💵 Dynamic currency symbols
- 📱 Responsive user interface
- ⚡ Fast and interactive React UI
- 🎨 Modern UI built with Tailwind CSS

## 🛠️ Tech Stack

- **React.js**
- **JavaScript**
- **Tailwind CSS**
- **Vite**
- **REST APIs**
- **Git & GitHub**
- **Vercel**

## 🔌 APIs Used

### Exchange Rate API

The application uses the Frankfurter API to fetch exchange rates.

### Currency Data

Open Exchange Rates is used to retrieve currency codes and currency names.

### Country & Flag Data

REST Countries is used to identify the country associated with a selected currency, and FlagCDN is used to display the corresponding flag.

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── AmountInput.jsx
│   ├── Convert.jsx
│   ├── Result.jsx
│   │
│   └── CurrencySelector/
│       ├── FromCurrency.jsx
│       ├── ToCurrency.jsx
│       └── SwapComponents.jsx
│
├── App.jsx
├── App.css
└── index.css
