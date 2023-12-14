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


const addresses = [
    {
      name: 'Child1',
      streetNumber: '1',
      streetName: 'Street name 1',
      postalCode: '1111'
    },
    {
      name: 'Child2',
      streetNumber: '2',
      streetName: 'Street name 3',
      postalCode: '2222'
    },
    {
      name: 'Adult1',
      streetNumber: '3',
      streetName: 'Street name 3',
      postalCode: '3333'
    },
    {
      name: 'Adult2',
      streetNumber: '4',
      streetName: 'Street name 4',
      postalCode: '4444'
    },
  ];


module.exports = {
  
    Query:{  
        libraries() {
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
    // For resolvers that are part of a union, implement the resolver on the types in the union and not the union
    Child: {
      // filter the address records against the parent object identifier (child.name) 
      address(parent) {
        // returns an Address type object ()
        return addresses.find((address) => address.name === parent.name);
      }
    },
    Adult: {
      // filter the address records against the parent object identifier (adult.name) 
      address(parent) {
        // returns an Address type object ()
        return addresses.find((address) => address.name === parent.name);
      }
    },
}