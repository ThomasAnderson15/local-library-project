
//HELPER FUNCTION!!!!!!!!!!!
function sortObject(object) {
  const keys = Object.keys(object);
 return keys.sort((keyA, keyB) => {
 if (object[keyA] > object[keyB]) {
   return -1;
 }
 else if (object[keyB] > object[keyA]) {
   return 1;
 }
 else {
   return 0;
 }
});
}



function getTotalBooksCount(books) {
  let total = 0;
  for (let book of books) {
    total++;
  }
  return total;
}

function getTotalAccountsCount(accounts) {
return accounts.length;
}

function getBooksBorrowedCount(books) {

//   let total = 0;
//   for (let book of books) {
//     for (let borrow of book.borrows) {
//       if (borrow.returned === false) {
//       total++;
//       }
//     }
//   }
//   return total;
// }

   let total = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].returned === false) {
      total++;
      }
    }
  }
  return total;
}

function getMostCommonGenres(books) {
const result = books.reduce((acc, {genre}) => {
  if (acc[genre]) { 
    acc[genre] += 1;
  } else { 
    acc[genre] = 1;
  }
  return acc;
}, {});
const sorted = sortObject(result);

return sorted.map((item) => ({name: item, count: result[item]})).slice(0, 5);
}

function getMostPopularBooks(books) {
const groupedId = books.reduce((acc, {id, borrows}) => {
  acc[id] = borrows.length;
  return acc;
}, {});

const sorted = sortObject(groupedId);
return sorted.map((id) => {
  const {title: name} = books.find(({id: bookId}) => bookId === id);
  return { name, count: groupedId[id]}
}).slice(0, 5)
}




function getMostPopularAuthors(books, authors) {
  // Setting the acc to = authorsId: [borrows]
const count = books.reduce((acc, {authorId, borrows}) => {
  if (acc[authorId]) {
    acc[authorId].push(borrows.length)
  } else {
    acc[authorId] = [borrows.length]
  }
  return acc;
}, {});

console.log(count);
// turning the [borrows] into one number added up per index
for (let id in count) {
  const sum = count[id].reduce((numA,numB) => numA+numB);
  count[id] = sum

  console.log(sum)
}
// taking each authorsId and ordering it bu most popular based on [borrows] value
const sorted = sortObject(count);
return sorted.map((authorId) => {
  authors.find(({id}) => {
    
    console.log(sorted)
    return id === authorId
  });
  // created new object with the key of name and values of first and last and fills the first and last variable
  const {name:{first, last}} = authors.find(({id}) => id === Number(authorId));
  const name = `${first} ${last}`;
  console.log({name, count:count[authorId]})
  //example --- {name: 'author name', count: '# of books'}
  return {name, count:count[authorId]} 
}).slice(0, 5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
