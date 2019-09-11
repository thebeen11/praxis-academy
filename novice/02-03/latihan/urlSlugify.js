const string = " I Will be a url slug ";

const slugify = string =>
string
.toLowerCase()
.trim()
.split(" ")
.join("-")

console.log(slugify(string));
