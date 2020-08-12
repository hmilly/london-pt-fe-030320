
const users = [
	{
		id: 1,
		firstName: "Lady",
		lastName: "Muck",
		email: "lmuck@gmail.com",
		pword: "l",
		avatar: "",
		balance: 100.99,
		savingsBal: 10000.00,
		loansBal: -10.00,
		transactions: [
			{
				transName: "Marks and Spencers",
				minus: 5.10,

			},
			{
				transName: "Aldi",
				minus: 20.50,

			},
			{
				transName: "ASOS",

				plus: 15.99
			},
		],
		savingTran: [
			{
				transName: "savings",
				minus: 6.50,
			},
			{
				transName: "savings",
				plus: 2.99,
			},
		],
		loansTran: [
			{
				transName: "loan",
				plus: 25.44,
			},
			{
				transName: "loan",
				minus: 15.80,
			},
		],
	},
	{
		id: 2,
		firstName: "Mister",
		lastName: "Muck",
		email: "mmuck@gmail.com",
		pword: "m",
		avatar: "",
		balance: 599.01,
		savingsBal: 15.00,
		loansBal: -10.00,
		transactions: {
			transName: "Marks and Spencers",
			plus: 5.00
		},
	},
	{
		id: 3,
		firstName: "Herutio",
		lastName: "Muck",
		email: "hmuck@gmail.com",
		pword: "h",
		avatar: "",
		balance: 101.00,
		savingsBal: 0.00,
		loansBal: -1.00,
		transactions: {
			transName: "Costa",
			minus: 3.10,
		},
	}, {
		id: 4,
		firstName: "floridan",
		lastName: "Muck",
		email: "fmuck@gmail.com",
		pword: "f",
		avatar: "",
		balance: 122.00,
		savingsBal: 2000.00,
		loansBal: 0.00,
		transactions: {
			transName: "Black market",
			plus: 5000.00
		},
	}
]


export default users