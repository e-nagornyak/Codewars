function bump(x){
	const bumps = x.replace(/[^n]/g, "").length
	return bumps <=15 ? 'Woohoo!': 'Car Dead';
}
