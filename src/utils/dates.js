export const days = [];
for (let i = 1; i <= 31; i++) {
	days.push(i);
}
export const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
export const years = [];
let today = new Date().getFullYear();

for (let i = today; i >= 1930; i--) {
	years.push(i);
}
