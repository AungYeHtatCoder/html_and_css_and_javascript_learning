const day = 'monday';
switch (day) { //day === monday
	case 'monday';
		console.log('Plan Course Structure');
		console.log('Go To coding Meet Up');
		break;
	case ' tuesday':
		console.log('Preapare Theory Video');
	case 'wednesday':
	case 'thursday';
		console.log('Write Code Example');
		break;
	case 'friday';
		console.log('Record Video');
	case 'saturday';
	case 'sunday';
		console.log('Enjoy the weekend ');
		break;
	default:
		console.log('Not a valid day');
}

if (day === 'monday') {
	console.log('Plan Course Structure');
	console.log('Go To coding Meet Up');
} else if (day === 'tuesday') {
	console.log('Preapare Theory Video');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Write Code Example');
} else if (day == 'friday') {
	console.log('Record Video');
} else if (day === 'saturd' || day === 'thursday') {
	console.log('Enjoy the weekend ');
} else {
	console.log('Not a valid day');
}