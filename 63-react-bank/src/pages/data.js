

	const users = async () => {
		await fetch("http://localhost:3001/users")
		.then((res) => res.json());
	}

    

    export default users
