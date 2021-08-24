let color = "brown";
let value;

switch (color) {
	case "green":
		value = "It is green";
		break;
	case "blue":
		value = "It is blue";
		break;
	case "yellow":
		value = "It is yellow";
		break;
	case "red":
		value = "it is red";
		break;
	case "brown":
		value = "it is brown";
		break;
	default:
		value = "i can't guess!"
}

document.querySelector("#head").innerText = value;	

// console.log("hey now")