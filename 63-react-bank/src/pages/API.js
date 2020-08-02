
const users = [
	{
		id: 1,
		firstName: "Lady",
		lastName: "Muck",
		email: "lmuck@gmail.com",
		pword: "l",
		avatar: "",
		balance: 100.99,
		savingsBal: 10000,
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
		savingsBal: 15,
		loansBal: -10,
		transactions: {
			transName: "Marks and Spencers",
			plus: 5
		},
	},
	{
		id: 3,
		firstName: "Herutio",
		lastName: "Muck",
		email: "hmuck@gmail.com",
		pword: "h",
		avatar: "",
		balance: 101,
		savingsBal: 0,
		loansBal: -1,
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
		balance: 122,
		savingsBal: 2000,
		loansBal: 0,
		transactions: {
			transName: "Black market",
			plus: 5000
		},
	}
]


export default users