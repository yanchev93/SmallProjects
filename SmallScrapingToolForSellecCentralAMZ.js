let orderId = document.querySelector('.a-text-bold').textContent;
let allPacks = document.getElementsByClassName('a-popover-trigger a-declarative');
let allPrices = [...document.querySelectorAll('div .a-column.a-span4.a-span-last>.a-color-')];

let resultPrices = [];
let result = [];

if(allPacks.length > 0){
	for(i = 1; i < allPrices.length; i+=2){
		resultPrices.push(allPrices[i].textContent);
	}


	[...allPacks].forEach((x, i) => result.push(`${orderId}/${x.textContent}/${resultPrices[i]}`));

	let output = [];

	output.push(result.join(' ^ '));

	output.forEach(x => console.log(x));
} else {
	let trackId = document.querySelector('div>.a-column.a-span3>span').textContent;
	
	console.log(`${orderId}/${trackId}`);
}
