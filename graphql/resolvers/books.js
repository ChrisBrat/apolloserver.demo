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

const adults = [
    {
      name: 'Adult1',
      job: 'Job1',
    },
    {
      name: 'Adult2',
      job: 'Job2',
    },
  ];

const children = [
    {
      name: 'Child1',
      school: 'School1',
    },
    {
      name: 'Child2',
      school: 'School2',
    },
  ];




module.exports = {
  
    Query:{  
        libraries() {
            console.log('libraries');
            return libraries;
        },
        people(parent, args, contextValue, info) { 
          return adults.concat(children); 
        }
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
    },
    Person: {
      __resolveType(obj, contextValue, info){
        // Only adults have a job field
        if(obj.job){
          return 'Adult';
        }
        // Only children have a school field
        if(obj.school){
          return 'Child';
        }
        return null; // GraphQLError is thrown
      },
    },
}