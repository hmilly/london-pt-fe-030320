
const users = [
	{
		id: 1,
		firstName: "Lady",
		lastName: "Muck",
		email: "lmuck@gmail.com",
		pword: "l",
		avatar: "",
		balance: 100.00,
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
		"loan": [

		]
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
		"loan": [

		]
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
		"loan": [

		]
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
		"loan": [

		]
	}
]


export default users