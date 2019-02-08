const app = document.getElementById('app');
const url = 'https://randomuser.me/api/?results=20';

(async function displayUsers() {
	await fetch(url)
		.then(res => res.json())
		.then(data => {
			data.results.forEach(result => {
				let first = result.name.first,
					last = result.name.last,
					age = result.dob.age,
					picture = result.picture.large,
					email = result.email,
					phone = result.phone;

				let card = document.createElement('div');
				card.setAttribute('class', 'card');

				let cardContent = document.createElement('div');
				cardContent.setAttribute('class', 'card-content');
				card.appendChild(cardContent);

				let cardImg = document.createElement('div');
				cardImg.setAttribute('class', 'card-image');
				cardImg.setAttribute(
					'style',
					`background-image: url(${picture})`
				);
				cardContent.appendChild(cardImg);

				let details = document.createElement('p');

				let pName = document.createElement('p');
				pName.append(`Name: ${first} ${last}`);

				let pAge = document.createElement('p');
				pAge.append(`Age: ${age}`);

				let pEmail = document.createElement('p');
				pEmail.append(`E-mail: ${email}`);

				let pPhone = document.createElement('p');
				pPhone.append(`Phone: ${phone}`);

				details
					.appendChild(pName)
					.appendChild(pAge)
					.appendChild(pEmail)
					.appendChild(pPhone);
				cardContent.appendChild(details);
				app.appendChild(card);

				// console.log({ first, last, age, picture, email, phone });
			});
		})
		.catch(err => console.log(`Oops, Something went wrong ${err}`));
})();
