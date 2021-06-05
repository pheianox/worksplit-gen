const HELP_CONTENT = `
TOTAL (required)
	The number wihch will to be divided into ranges.
	example:
		TOTAL=15


PEOPLE (required)
	a list of participants.
	example: 
		PEOPLE=Jack,John,Joe


-A
	sort names in the alphabet order


-H or --HELP
	display all available commands.	
`;


let total, people, perPerson, remaining;

let sortAlphabet;

const exitWithMessage = msg => { 
	console.log(msg); 
	process.exit(0) 
};

for(const arg of process.argv){
	if(arg.startsWith("TOTAL=")){
		total = +arg.slice(6);
		continue;
	}

	if(arg.startsWith("PEOPLE=")){
		people = arg.slice(7).split(",");
		continue;
	}

	if(arg === "-A") sortAlphabet = true;

	if(arg === "-H" || arg === "--HELP") exitWithMessage(HELP_CONTENT);
}

if(!total || people == null) exitWithMessage("No arguments passed.\nUse --HELP to see all available commands.")

if(sortAlphabet) people.sort(); 

perPerson = Math.floor(total / people.length);
remaining = total % perPerson;

const maxNameLength = [...people].sort((a, b) => a.length - b.length).pop().length;
const maxCountDigits = people.length.toString().length;
const maxRangeDigits = total.toString().length;

console.log(`---------------------------------------------------
| TOTAL: ${total}
| PER PERSON: ${perPerson}
| REMAINING: ${remaining}
---------------------------------------------------`);

people.forEach((name, i) => {
	const k = Math.abs(total - (total - i * perPerson))

	const count = (i+1).toString().padStart(maxCountDigits);
	const start = (k + 1).toString().padStart(maxRangeDigits);
	const end = (k + perPerson).toString().padStart(maxRangeDigits);

	name = name.padEnd(maxNameLength, " ");

	console.log(`| ${count} | ${name} | ${start} - ${end} |`);
});

console.log("---------------------------------------------------");

