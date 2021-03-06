export const holdings = [
    {
        id: "bitcoin",
        qty: 888
    },
    {
        id: "ethereum",
        qty: 188
    },
    {
        id: "dogecoin",
        qty: 88888
    }
]

export const profile = {
    id: 8888888,
    email: "byprogrammers@gmail.com",
}

export const settings = {
    launchScreen: "Home",
    currency: "USD",
    appearance: "Dark",
    language: "English",
    faceId: true,
}



export const trendingCurrencies = [
    {
        id: 1,
        currency: "Bitcoin",
        code: "BTC",
        amount: "29,455.74",
        changes: "+7.24%",
        type: "I",      // I - Increased, D - Decreased
        description: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.",
        chartData: [
            { x: 1, y: 2.5 },
            { x: 1.5, y: 2 },
            { x: 2, y: 2.3 },
            { x: 2.5, y: 1.4 },
            { x: 3, y: 1.5 },
            { x: 3.5, y: 2.3 },
            { x: 4, y: 2.8 }
        ],
        wallet: {
            value: "170435.86",
            crypto: "5.1"
        },
        
    },
    {
        id: 2,
        currency: "Ethereum",
        code: "ETH",
        amount: "919.03",
        changes: "-0.73%",
        type: "D",
        description: "Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain.",
        chartData: [
            { x: 1, y: 2 },
            { x: 1.5, y: 2.3 },
            { x: 2, y: 2 },
            { x: 2.5, y: 2.2 },
            { x: 3, y: 1.5 },
            { x: 3.5, y: 2.1 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "18409.24",
            crypto: "13.7"
        },
        
    },
    {
        id: 3,
        currency: "Litecoin",
        code: "LTC",
        amount: "118.33",
        changes: "+1.73%",
        type: "I",
        description: "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Litecoin was an early bitcoin spinoff or altcoin, starting in October 2011. In technical details, Litecoin is nearly identical to Bitcoin.",
        chartData: [
            { x: 1, y: 2.6 },
            { x: 1.5, y: 2.2 },
            { x: 2, y: 2 },
            { x: 2.5, y: 2.2 },
            { x: 3, y: 1.6 },
            { x: 3.5, y: 2.1 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "13139.23",
            crypto: "100.2"
        },
        
    },
    {
        id: 4,
        currency: "Ripple",
        code: "XRP",
        amount: "0.24",
        changes: "-0.51%",
        type: "D",
        description: "Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company.",
        chartData: [
            { x: 1, y: 2.3 },
            { x: 1.5, y: 2.3 },
            { x: 2, y: 2.5 },
            { x: 2.5, y: 2.1 },
            { x: 3, y: 2.2 },
            { x: 3.5, y: 1.8 },
            { x: 4, y: 2.5 }
        ],
        wallet: {
            value: "2000.0",
            crypto: "6000.0"
        },
        
    },
]



const chartOptions = [
    {
        id: 1,
        label: "1 hr"
    },
    {
        id: 2,
        label: "3 Days"
    },
    {
        id: 3,
        label: "1 Week"
    },
    {
        id: 4,
        label: "1 Month"
    },
    {
        id: 5,
        label: "3 Months"
    }
]

const dummyData = { trendingCurrencies, chartOptions ,holdings, profile,settings};

export default dummyData;


