var dropdown;

function setup() {
	noCanvas();
	dropdown = createSelect().size(300,50).style('font-size','30pt');
	dropdown.option('Alkane');
	dropdown.option('Alkene');
	dropdown.option('Alkyne');
	dropdown.changed(para);
}

function para() {
	let str = dropdown.value();
	createP("It is " + str);
}
