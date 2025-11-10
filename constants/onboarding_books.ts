export type OnboardingBook = {
  title: string;
  author: string;
  year?: number;
  imageUrl: string;
};

export const ONBOARDING_BOOKS: OnboardingBook[] = [
  // Classics & Literary Fiction
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, imageUrl: "https://covers.openlibrary.org/b/id/12606502-L.jpg" },
  { title: "1984", author: "George Orwell", year: 1949, imageUrl: "https://covers.openlibrary.org/b/id/9267242-L.jpg" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, imageUrl: "https://covers.openlibrary.org/b/id/10590366-L.jpg" },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, imageUrl: "https://covers.openlibrary.org/b/id/14348537-L.jpg" },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, imageUrl: "https://covers.openlibrary.org/b/id/8235363-L.jpg" },
  { title: "Wuthering Heights", author: "Emily Brontë", year: 1847, imageUrl: "https://covers.openlibrary.org/b/id/12818862-L.jpg" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, imageUrl: "https://covers.openlibrary.org/b/id/14911181-L.jpg" },
  { title: "The Catcher in the Rye", author: "J. D. Salinger", year: 1951, imageUrl: "https://covers.openlibrary.org/b/id/9273490-L.jpg" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, imageUrl: "https://covers.openlibrary.org/b/id/14314858-L.jpg" },
  { title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, imageUrl: "https://covers.openlibrary.org/b/id/12715902-L.jpg" },
  { title: "Beloved", author: "Toni Morrison", year: 1987, imageUrl: "https://covers.openlibrary.org/b/id/8261367-L.jpg" },
  { title: "Invisible Man", author: "Ralph Ellison", year: 1952, imageUrl: "https://covers.openlibrary.org/b/id/998256-L.jpg" },
  { title: "The Kite Runner", author: "Khaled Hosseini", year: 2003, imageUrl: "https://covers.openlibrary.org/b/id/14846827-L.jpg" },
  { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", year: 2007, imageUrl: "https://covers.openlibrary.org/b/id/8579790-L.jpg" },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988, imageUrl: "https://covers.openlibrary.org/b/id/15075168-L.jpg" },
  { title: "Life of Pi", author: "Yann Martel", year: 2001, imageUrl: "https://covers.openlibrary.org/b/id/12840573-L.jpg" },
  { title: "The Road", author: "Cormac McCarthy", year: 2006, imageUrl: "https://covers.openlibrary.org/b/id/198120-L.jpg" },
  { title: "The Goldfinch", author: "Donna Tartt", year: 2013, imageUrl: "https://covers.openlibrary.org/b/id/8771366-L.jpg" },
  { title: "Normal People", author: "Sally Rooney", year: 2018, imageUrl: "https://covers.openlibrary.org/b/id/8794265-L.jpg" },
  { title: "Little Women", author: "Louisa May Alcott", year: 1868, imageUrl: "https://covers.openlibrary.org/b/id/8775559-L.jpg" },

  // Fantasy
  { title: "Harry Potter and the Sorcerer’s Stone", author: "J. K. Rowling", year: 1997, imageUrl: "https://covers.openlibrary.org/b/id/14656856-L.jpg" },
  { title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937, imageUrl: "https://covers.openlibrary.org/b/id/14627509-L.jpg" },
  { title: "The Fellowship of the Ring", author: "J. R. R. Tolkien", year: 1954, imageUrl: "https://covers.openlibrary.org/b/id/14627060-L.jpg" },
  { title: "A Game of Thrones", author: "George R. R. Martin", year: 1996, imageUrl: "https://covers.openlibrary.org/b/id/9269962-L.jpg" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", year: 2007, imageUrl: "https://covers.openlibrary.org/b/id/11480483-L.jpg" },
  { title: "Mistborn: The Final Empire", author: "Brandon Sanderson", year: 2006, imageUrl: "https://covers.openlibrary.org/b/id/14658160-L.jpg" },
  { title: "The Way of Kings", author: "Brandon Sanderson", year: 2010, imageUrl: "https://covers.openlibrary.org/b/id/14658316-L.jpg" },
  { title: "The Lies of Locke Lamora", author: "Scott Lynch", year: 2006, imageUrl: "https://covers.openlibrary.org/b/id/6307636-L.jpg" },
  { title: "The Blade Itself", author: "Joe Abercrombie", year: 2006, imageUrl: "https://covers.openlibrary.org/b/id/14543422-L.jpg" },
  { title: "American Gods", author: "Neil Gaiman", year: 2001, imageUrl: "https://covers.openlibrary.org/b/id/8494659-L.jpg" },

  // Science Fiction
  { title: "Dune", author: "Frank Herbert", year: 1965, imageUrl: "https://covers.openlibrary.org/b/id/11481354-L.jpg" },
  { title: "Neuromancer", author: "William Gibson", year: 1984, imageUrl: "https://covers.openlibrary.org/b/id/283860-L.jpg" },
  { title: "Ender’s Game", author: "Orson Scott Card", year: 1985, imageUrl: "https://covers.openlibrary.org/b/id/14532822-L.jpg" },
  { title: "The Martian", author: "Andy Weir", year: 2011, imageUrl: "https://covers.openlibrary.org/b/id/11447888-L.jpg" },
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", year: 1969, imageUrl: "https://covers.openlibrary.org/b/id/10618463-L.jpg" },
  { title: "Snow Crash", author: "Neal Stephenson", year: 1992, imageUrl: "https://covers.openlibrary.org/b/id/392508-L.jpg" },
  { title: "The Three-Body Problem", author: "Liu Cixin", year: 2006, imageUrl: "https://covers.openlibrary.org/b/id/9157544-L.jpg" },
  { title: "Project Hail Mary", author: "Andy Weir", year: 2021, imageUrl: "https://covers.openlibrary.org/b/id/11200092-L.jpg" },
  { title: "Hyperion", author: "Dan Simmons", year: 1989, imageUrl: "https://covers.openlibrary.org/b/id/380332-L.jpg" },
  { title: "Foundation", author: "Isaac Asimov", year: 1951, imageUrl: "https://covers.openlibrary.org/b/id/14612610-L.jpg" },

  // Mystery & Thrillers
  { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005, imageUrl: "https://covers.openlibrary.org/b/id/10655947-L.jpg" },
  { title: "Gone Girl", author: "Gillian Flynn", year: 2012, imageUrl: "https://covers.openlibrary.org/b/id/8368314-L.jpg" },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003, imageUrl: "https://covers.openlibrary.org/b/id/9255229-L.jpg" },
  { title: "The Silent Patient", author: "Alex Michaelides", year: 2019, imageUrl: "https://covers.openlibrary.org/b/id/9407338-L.jpg" },
  { title: "Big Little Lies", author: "Liane Moriarty", year: 2014, imageUrl: "https://covers.openlibrary.org/b/id/7352410-L.jpg" },
  { title: "The Girl on the Train", author: "Paula Hawkins", year: 2015, imageUrl: "https://covers.openlibrary.org/b/id/7350360-L.jpg" },
  { title: "In the Woods", author: "Tana French", year: 2007, imageUrl: "https://covers.openlibrary.org/b/id/1474730-L.jpg" },
  { title: "And Then There Were None", author: "Agatha Christie", year: 1939, imageUrl: "https://covers.openlibrary.org/b/id/11172296-L.jpg" },
  { title: "The Thursday Murder Club", author: "Richard Osman", year: 2020, imageUrl: "https://covers.openlibrary.org/b/id/10201431-L.jpg" },
  { title: "Shutter Island", author: "Dennis Lehane", year: 2003, imageUrl: "https://covers.openlibrary.org/b/id/28990-L.jpg" },

  // Historical Fiction
  { title: "All the Light We Cannot See", author: "Anthony Doerr", year: 2014, imageUrl: "https://covers.openlibrary.org/b/id/14559680-L.jpg" },
  { title: "The Nightingale", author: "Kristin Hannah", year: 2015, imageUrl: "https://covers.openlibrary.org/b/id/8314147-L.jpg" },
  { title: "The Book Thief", author: "Markus Zusak", year: 2005, imageUrl: "https://covers.openlibrary.org/b/id/8153054-L.jpg" },
  { title: "Wolf Hall", author: "Hilary Mantel", year: 2009, imageUrl: "https://covers.openlibrary.org/b/id/8345848-L.jpg" },
  { title: "A Gentleman in Moscow", author: "Amor Towles", year: 2016, imageUrl: "https://covers.openlibrary.org/b/id/11326818-L.jpg" },
  { title: "The Pillars of the Earth", author: "Ken Follett", year: 1989, imageUrl: "https://covers.openlibrary.org/b/id/9269909-L.jpg" },
  { title: "The Help", author: "Kathryn Stockett", year: 2009, imageUrl: "https://covers.openlibrary.org/b/id/8387264-L.jpg" },
  { title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", year: 2001, imageUrl: "https://covers.openlibrary.org/b/id/10107706-L.jpg" },
  { title: "Circe", author: "Madeline Miller", year: 2018, imageUrl: "https://covers.openlibrary.org/b/id/8739376-L.jpg" },
  { title: "The Tattooist of Auschwitz", author: "Heather Morris", year: 2018, imageUrl: "https://covers.openlibrary.org/b/id/8572962-L.jpg" },

  // YA & Coming-of-Age
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008, imageUrl: "https://covers.openlibrary.org/b/id/12646537-L.jpg" },
  { title: "The Fault in Our Stars", author: "John Green", year: 2012, imageUrl: "https://covers.openlibrary.org/b/id/7418786-L.jpg" },
  { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky", year: 1999, imageUrl: "https://covers.openlibrary.org/b/id/14315052-L.jpg" },
  { title: "The Hate U Give", author: "Angie Thomas", year: 2017, imageUrl: "https://covers.openlibrary.org/b/id/11521588-L.jpg" },
  { title: "Six of Crows", author: "Leigh Bardugo", year: 2015, imageUrl: "https://covers.openlibrary.org/b/id/12667417-L.jpg" },
  { title: "Divergent", author: "Veronica Roth", year: 2011, imageUrl: "https://covers.openlibrary.org/b/id/13274634-L.jpg" },
  { title: "The Giver", author: "Lois Lowry", year: 1993, imageUrl: "https://covers.openlibrary.org/b/id/8352502-L.jpg" },
  { title: "Eleanor & Park", author: "Rainbow Rowell", year: 2012, imageUrl: "https://covers.openlibrary.org/b/id/12917595-L.jpg" },
  { title: "The Outsiders", author: "S. E. Hinton", year: 1967, imageUrl: "https://covers.openlibrary.org/b/id/7263662-L.jpg" },
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", year: 2015, imageUrl: "https://covers.openlibrary.org/b/id/8738585-L.jpg" },

  // Horror
  { title: "The Shining", author: "Stephen King", year: 1977, imageUrl: "https://covers.openlibrary.org/b/id/12376585-L.jpg" },
  { title: "It", author: "Stephen King", year: 1986, imageUrl: "https://covers.openlibrary.org/b/id/15138281-L.jpg" },
  { title: "Bird Box", author: "Josh Malerman", year: 2014, imageUrl: "https://covers.openlibrary.org/b/id/8159409-L.jpg" },
  { title: "Mexican Gothic", author: "Silvia Moreno-Garcia", year: 2020, imageUrl: "https://covers.openlibrary.org/b/id/10239163-L.jpg" },
  { title: "The Haunting of Hill House", author: "Shirley Jackson", year: 1959, imageUrl: "https://covers.openlibrary.org/b/id/4289014-L.jpg" },
  { title: "Dracula", author: "Bram Stoker", year: 1897, imageUrl: "https://covers.openlibrary.org/b/id/12216503-L.jpg" },
  { title: "Frankenstein", author: "Mary Shelley", year: 1818, imageUrl: "https://covers.openlibrary.org/b/id/12356249-L.jpg" },
  { title: "The Exorcist", author: "William Peter Blatty", year: 1971, imageUrl: "https://covers.openlibrary.org/b/id/12715730-L.jpg" },
  { title: "House of Leaves", author: "Mark Z. Danielewski", year: 2000, imageUrl: "https://covers.openlibrary.org/b/id/6450442-L.jpg" },
  { title: "The Only Good Indians", author: "Stephen Graham Jones", year: 2020, imageUrl: "https://covers.openlibrary.org/b/id/10299432-L.jpg" },

  // Romance
  { title: "Outlander", author: "Diana Gabaldon", year: 1991, imageUrl: "https://covers.openlibrary.org/b/id/14428230-L.jpg" },
  { title: "The Notebook", author: "Nicholas Sparks", year: 1996, imageUrl: "https://covers.openlibrary.org/b/id/7382153-L.jpg" },
  { title: "The Hating Game", author: "Sally Thorne", year: 2016, imageUrl: "https://covers.openlibrary.org/b/id/9247684-L.jpg" },
  { title: "Beach Read", author: "Emily Henry", year: 2020, imageUrl: "https://covers.openlibrary.org/b/id/15125507-L.jpg" },
  { title: "Me Before You", author: "Jojo Moyes", year: 2012, imageUrl: "https://m.media-amazon.com/images/I/41eiD2UAHxL._SY445_SX342_ML2_.jpg" },
  { title: "Red, White & Royal Blue", author: "Casey McQuiston", year: 2019, imageUrl: "https://m.media-amazon.com/images/I/71skR7IaVEL._SY522_.jpg" },
  { title: "The Time Traveler’s Wife", author: "Audrey Niffenegger", year: 2003, imageUrl: "https://m.media-amazon.com/images/I/51fLudhA2tL._SY445_SX342_ControlCacheEqualizer_.jpg" },
  { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", year: 2017, imageUrl: "https://m.media-amazon.com/images/I/51+8eQEfiWL._SY445_SX342_ControlCacheEqualizer_.jpg" },
  { title: "The Kiss Quotient", author: "Helen Hoang", year: 2018, imageUrl: "https://m.media-amazon.com/images/I/81J4nP5vItL._SY522_.jpg" },

  // Nonfiction – Memoir, History, Science, Self-Help
  { title: "Educated", author: "Tara Westover", year: 2018, imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg" },
  { title: "Becoming", author: "Michelle Obama", year: 2018, imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg" },
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg" },
  { title: "Homo Deus", author: "Yuval Noah Harari", year: 2015, imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1468760805i/31138556.jpg" },
  { title: "Atomic Habits", author: "James Clear", year: 2018, imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg" },
  { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", year: 2016, imageUrl: "https://covers.openlibrary.org/b/id/15128730-L.jpg" },
  { title: "Quiet", author: "Susan Cain", year: 2012, imageUrl: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif" },
  { title: "Bad Blood", author: "John Carreyrou", year: 2018, imageUrl: "https://covers.openlibrary.org/b/id/12735647-L.jpg" },
  { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: 2010, imageUrl: "https://covers.openlibrary.org/b/id/10593122-L.jpg" },

  // Poetry & Short Stories
  { title: "The Sun and Her Flowers", author: "Rupi Kaur", year: 2017, imageUrl: "https://m.media-amazon.com/images/I/71qQgwFbo+L._SY522_.jpg" },
  { title: "Milk and Honey", author: "Rupi Kaur", year: 2014, imageUrl: "https://m.media-amazon.com/images/I/41rrZplMctL._SY445_SX342_ControlCacheEqualizer_.jpg" },
  { title: "The Complete Poems", author: "Emily Dickinson", year: 1890, imageUrl: "https://m.media-amazon.com/images/I/41JApIqIEAL._SY445_SX342_ControlCacheEqualizer_.jpg" },
  { title: "Dubliners", author: "James Joyce", year: 1914, imageUrl: "https://m.media-amazon.com/images/I/41Eucg5g-2L._SY445_SX342_ControlCacheEqualizer_.jpg" },
  { title: "Tenth of December", author: "George Saunders", year: 2013, imageUrl: "https://m.media-amazon.com/images/I/41gymwtA+bL._SY445_SX342_ControlCacheEqualizer_.jpg" },
  { title: "Interpreter of Maladies", author: "Jhumpa Lahiri", year: 1999, imageUrl: "https://m.media-amazon.com/images/I/71Z6yDRK47L._SY522_.jpg" },
  { title: "Men Without Women", author: "Haruki Murakami", year: 2014, imageUrl: "https://m.media-amazon.com/images/I/41KbBpJXucL._SY445_SX342_ControlCacheEqualizer_.jpg" },
  { title: "Her Body and Other Parties", author: "Carmen Maria Machado", year: 2017, imageUrl: "https://m.media-amazon.com/images/I/91ZOrAgmdrL._SY522_.jpg" },
  { title: "Citizen: An American Lyric", author: "Claudia Rankine", year: 2014, imageUrl: "https://m.media-amazon.com/images/I/61lla6QqQ2L._SY522_.jpg" },
  { title: "Where the Sidewalk Ends", author: "Shel Silverstein", year: 1974, imageUrl: "https://m.media-amazon.com/images/I/41Hc1E8MCsL._SY445_SX342_FMwebp_.jpg" },

  // Graphic Novels & Manga
  { title: "Watchmen", author: "Alan Moore", year: 1986, imageUrl: "https://m.media-amazon.com/images/I/41u2xud1YuL._SY445_SX342_FMwebp_.jpg" },
  { title: "Maus", author: "Art Spiegelman", year: 1980, imageUrl: "https://m.media-amazon.com/images/I/51Ud+Rl1SaL._SY445_SX342_FMwebp_.jpg" },
  { title: "Saga, Vol. 1", author: "Brian K. Vaughan", year: 2012, imageUrl: "https://m.media-amazon.com/images/I/41xoHyucgjL._SY445_SX342_FMwebp_.jpg" },
  { title: "The Sandman, Vol. 1: Preludes & Nocturnes", author: "Neil Gaiman", year: 1989, imageUrl: "https://m.media-amazon.com/images/I/41iFoZA1QKL._SY445_SX342_FMwebp_.jpg" },
  { title: "Persepolis", author: "Marjane Satrapi", year: 2000, imageUrl: "https://m.media-amazon.com/images/I/616z6dC0bYL._SY522_.jpg" },
  { title: "Batman: The Dark Knight Returns", author: "Frank Miller", year: 1986, imageUrl: "https://m.media-amazon.com/images/I/41ZxIlhoiOL._SY445_SX342_FMwebp_.jpg" },
  { title: "V for Vendetta", author: "Alan Moore", year: 1982, imageUrl: "https://m.media-amazon.com/images/I/91wx3LG3HzL._SY522_.jpg" },
  { title: "Naruto, Vol. 1", author: "Masashi Kishimoto", year: 1999, imageUrl: "https://m.media-amazon.com/images/I/51BucomQlHL._SY445_SX342_FMwebp_.jpg" },
  { title: "Attack on Titan, Vol. 1", author: "Hajime Isayama", year: 2009, imageUrl: "https://m.media-amazon.com/images/I/51QWSFImgvL._SY445_SX342_QL70_FMwebp_.jpg" },
  { title: "One Piece, Vol. 1", author: "Eiichiro Oda", year: 1997, imageUrl: "https://m.media-amazon.com/images/I/51E7ppfFw1L._SY445_SX342_QL70_FMwebp_.jpg" },
];
