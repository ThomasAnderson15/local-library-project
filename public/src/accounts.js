function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account, prevAccount) => account.name.last.toLowerCase() > prevAccount.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;

  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        total++;
      }
    }
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
let bookIsCheckedOut = books.filter((book) => {
  return accountBorrowedThisBook = book.borrows.some((borrow) =>
  borrow.id == account.id && borrow.returned == false)
})

let fullBookInfo = bookIsCheckedOut.map((bookInfo) => {
  let {authorId} = bookInfo
  let [author] = authors.filter((author) => author.id === authorId)
  bookInfo['author'] = author
  return bookInfo
})
return fullBookInfo
}



  // //It returns an array of books and authors that represents all books _currently checked out_ by the given account.
  // // _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.
    
  //   //compare book and account id and push to arr the matches
  //   let accountId = account.id
  //   //let booksId = books.borrows.id
    
  //    let arr = books.filter((currentBook) => currentBook.borrows[i].id === accountId);
  //     console.log(arr);

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
