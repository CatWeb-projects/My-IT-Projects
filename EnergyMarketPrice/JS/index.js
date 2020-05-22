toggle = (e) => {
	let checkButton = document.querySelectorAll('#click-switcher');
	let classActive = document.querySelector('.status-check');
		checkButton.forEach(el => {
			el.addEventListener('click', (e) => {
			e.target.checked ? el = true : el = false
			el == true ? 
			(classActive.classList.add('check-if-active'), classActive.innerHTML = 'Active') : 
			(classActive.classList.remove('check-if-active'), classActive.innerHTML = 'Inactive')
			console.log(el);
		}, false);
	})
}
toggle();






let timeButton = document.querySelector('.updated-class button').addEventListener('click', updateTime = (e) => {
	const now = new Date();

	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	const timeOfDay = '';
	hours > 12 ? timeofDay = 'PM' : timeofDay = 'AM';

	hours < 10 ? hours = '0' + hours : hours;
	minutes < 10 ? minutes = '0' + minutes : minutes;
	seconds < 10 ? seconds = '0' + seconds : seconds;


	dd = now.getDate();
	mm = now.getMonth();
	yyyy = now.getFullYear();

	// if(dd < 10 || mm < 10) {
	//   dd = '0' + dd;
	//   mm = '0' + mm
	// };

	console.log(`Current time is: ${dd}/${mm}/${yyyy} ${hours} ${timeofDay} : ${minutes} : ${seconds}`);
});

