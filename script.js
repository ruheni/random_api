const url = 'https://randomuser.me/api/?results=30';

(async function displayUsers() {
	await fetch(url)
		.then(res => res.json())
		.then(data => {
			data.results.forEach(result => {
				let first = result.name.first,
					last = result.name.last,
					age = result.dob.age,
					picture = result.picture.thumbnail,
					email = result.email;
				console.log({ first, last, age, picture, email });
			});
		})
		.catch(err => console.log(`Oops, Something went wrong ${err}`));
})();
