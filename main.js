// www.codewars.com
// KATA 1 6kyu
const spinWords = str => {
  return str.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    } else {
      return word
    }
  }).join(' ')
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is another test"));

// KATA 2 6kyu
const likes = names => {
  switch(names.length) {
    case 0: return `no one likes this`; break;
    case 1: return `${names[0]} likes this`; break;
    case 2: return `${names[0]} and ${names[1]} like this`; break;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }  
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes(['Alex', 'Jacob', 'Mark']));


// KATA 3 6kyu
const solution = str => ((str + "_").match(/../g) || []);

console.log(solution("abcdef"));
console.log(solution(""));
console.log(solution("abc"));



