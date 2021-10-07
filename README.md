# worksplit-gen
A command line tool for splitting work between people. It prints out the result in a truly beautiful table.

# Installation
> Make sure you have the latest node.js runtime environment installed

Just clone this repo and run the `index.js` file using `node index <arguments>`

# Arguments
|argument|description|example|required?|
|-|-|-|-|
|TOTAL|The number wihch will be divided into ranges.|`node index.js TOTAL=123`|true|
|PEOPLE|A list of participants.|`node index.js PEOPLE=Alisa,John,Steve`|true|
|-H or --HELP|Display all available commands.|`node index.js -H`|false|
|-A|Sort peoples alphabetically.|`node PEOPLE=Steve,Alisa,John TOTAL=15 -A`|false|

# Examples

## Example 1
Let's say we need to divide 500 test questions between 4 people: Alisa, Bob, Steve and John

`node index TOTAL=500 PEOPLE=Steve,Bob,John,Alisa`

Output:
```
---------------------------------------------------
| TOTAL: 500
| PER PERSON: 125
| REMAINING: 0
---------------------------------------------------
| 1 | Steve |   1 - 125 |
| 2 | Bob   | 126 - 250 |
| 3 | John  | 251 - 375 |
| 4 | Alisa | 376 - 500 |
---------------------------------------------------
```
## Example 2

Let's say we need to divide 500 test questions between 4 people: Alisa, Bob, Steve and John, but in alphabetical order.

`node index TOTAL=500 PEOPLE=Steve,Bob,John,Alisa -A`


Output:
```
---------------------------------------------------
| TOTAL: 500
| PER PERSON: 125
| REMAINING: 0
---------------------------------------------------
| 1 | Alisa |   1 - 125 |
| 2 | Bob   | 126 - 250 |
| 3 | John  | 251 - 375 |
| 4 | Steve | 376 - 500 |
---------------------------------------------------
```
