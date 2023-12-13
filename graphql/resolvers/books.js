// Hardcoded data store
const libraries = [
    {
      branch: 'downtown',
    },
    {
      branch: 'riverside',
    },
  ];

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
      branch: 'riverside',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
      branch: 'downtown',
    },
  ];

module.exports = {
    

    Query:{  
        libraries() {
            console.log('libraries');
            return libraries;
        },
        // books(_,args) {
        //     return books;
        // }
    },
    // Resolver chain
    Library:{
        books(parent) {
          // Filter the hardcoded array of books to only include
          // books that are located at the correct branch
          console.log('parent.branch : '+parent.branch);
          return books.filter((book) => book.branch === parent.branch);
        },
      },
    Book: {
        // Map the parent object (Library.books) with the Author name as text into an Author type object matching the GraphQL type
        author(parent) {
          // returns an Author type object ()
          return {
            name: parent.author,
          };
        }
    }
}