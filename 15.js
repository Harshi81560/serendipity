const date = new Date("2024/2/29");

Date.prototype.isValid = function () 
{

	return this.getTime() === this.getTime();
}

function isValidateDate() 
{
	console.log(date.isValid());
}

isValidateDate();
