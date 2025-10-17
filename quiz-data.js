
/* ========== QUIZ DATA ========== */
const quizData = {
    science: {
        name: "Science",
        description: "25 questions about Biology, Chemistry, and Physics",
        questions: [
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Go", "Gd", "Au", "Ag"],
                        correct: 2
                    },
                    {
                        question: "What is the powerhouse of the cell?",
                        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
                        correct: 1
                    },
                    {
                        question: "What is the speed of light in vacuum?",
                        options: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
                        correct: 0
                    },
                    {
                        question: "What is the most abundant gas in Earth's atmosphere?",
                        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                        correct: 2
                    },
                    {
                        question: "What is the pH value of pure water?",
                        options: ["5", "7", "9", "10"],
                        correct: 1
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Jupiter", "Mars", "Saturn"],
                        correct: 2
                    },
                    {
                        question: "What is the hardest natural substance on Earth?",
                        options: ["Gold", "Iron", "Diamond", "Platinum"],
                        correct: 2
                    },
                    {
                        question: "What type of bond involves the sharing of electrons?",
                        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
                        correct: 1
                    },
                    {
                        question: "What is the smallest unit of life?",
                        options: ["Atom", "Molecule", "Cell", "Tissue"],
                        correct: 2
                    },
                    {
                        question: "What force keeps planets in orbit around the sun?",
                        options: ["Magnetic force", "Gravity", "Nuclear force", "Friction"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical formula for water?",
                        options: ["H2O", "CO2", "O2", "H2O2"],
                        correct: 0
                    },
                    {
                        question: "Which organ produces insulin?",
                        options: ["Liver", "Kidney", "Pancreas", "Heart"],
                        correct: 2
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "6", "8", "12"],
                        correct: 1
                    },
                    {
                        question: "What type of energy does a moving object have?",
                        options: ["Potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
                        correct: 1
                    },
                    {
                        question: "What is the process by which plants make food?",
                        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                        correct: 1
                    },
                    {
                        question: "Which blood type is known as the universal donor?",
                        options: ["A+", "B+", "AB+", "O-"],
                        correct: 3
                    },
                    {
                        question: "What is the melting point of ice in Celsius?",
                        options: ["0°C", "32°C", "100°C", "-10°C"],
                        correct: 0
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Liver", "Skin", "Brain"],
                        correct: 2
                    },
                    {
                        question: "What particle in an atom has a positive charge?",
                        options: ["Electron", "Neutron", "Proton", "Photon"],
                        correct: 2
                    },
                    {
                        question: "What is the boiling point of water at sea level?",
                        options: ["90°C", "100°C", "110°C", "120°C"],
                        correct: 1
                    },
                    {
                        question: "Which vitamin is produced when skin is exposed to sunlight?",
                        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
                        correct: 2
                    },
                    {
                        question: "What is the center of an atom called?",
                        options: ["Electron cloud", "Nucleus", "Orbital", "Shell"],
                        correct: 1
                    },
                    {
                        question: "What gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                        correct: 2
                    },
                    {
                        question: "What is the study of heredity called?",
                        options: ["Ecology", "Genetics", "Botany", "Zoology"],
                        correct: 1
                    },
                    {
                        question: "What is the SI unit of force?",
                        options: ["Joule", "Watt", "Newton", "Pascal"],
                        correct: 2
                    }
                ]
            },
            mathematics: {
                name: "Mathematics",
                description: "25 questions about Algebra, Geometry, and Arithmetic",
                questions: [
                    {
                        question: "What is the value of π (pi) approximately?",
                        options: ["3.14", "2.71", "1.41", "4.20"],
                        correct: 0
                    },
                    {
                        question: "What is 15% of 200?",
                        options: ["20", "25", "30", "35"],
                        correct: 2
                    },
                    {
                        question: "What is the square root of 144?",
                        options: ["10", "11", "12", "13"],
                        correct: 2
                    },
                    {
                        question: "What is 7 × 8?",
                        options: ["54", "56", "58", "60"],
                        correct: 1
                    },
                    {
                        question: "What is the sum of angles in a triangle?",
                        options: ["90°", "180°", "270°", "360°"],
                        correct: 1
                    },
                    {
                        question: "What is 2³ (2 to the power of 3)?",
                        options: ["6", "8", "9", "12"],
                        correct: 1
                    },
                    {
                        question: "What is the area of a circle with radius 5? (use π = 3.14)",
                        options: ["31.4", "78.5", "157", "314"],
                        correct: 1
                    },
                    {
                        question: "What is 100 divided by 4?",
                        options: ["20", "25", "30", "35"],
                        correct: 1
                    },
                    {
                        question: "What is the next prime number after 7?",
                        options: ["8", "9", "10", "11"],
                        correct: 3
                    },
                    {
                        question: "What is 45 + 67?",
                        options: ["110", "112", "114", "116"],
                        correct: 1
                    },
                    {
                        question: "What is the value of x in: 2x + 5 = 15?",
                        options: ["3", "4", "5", "6"],
                        correct: 2
                    },
                    {
                        question: "What is the perimeter of a square with side 6 cm?",
                        options: ["18 cm", "24 cm", "30 cm", "36 cm"],
                        correct: 1
                    },
                    {
                        question: "What is 1/2 + 1/4?",
                        options: ["1/6", "2/6", "3/4", "1/8"],
                        correct: 2
                    },
                    {
                        question: "What is the cube of 3?",
                        options: ["6", "9", "18", "27"],
                        correct: 3
                    },
                    {
                        question: "How many sides does a hexagon have?",
                        options: ["5", "6", "7", "8"],
                        correct: 1
                    },
                    {
                        question: "What is 20% of 50?",
                        options: ["5", "10", "15", "20"],
                        correct: 1
                    },
                    {
                        question: "What is the square of 9?",
                        options: ["72", "81", "90", "99"],
                        correct: 1
                    },
                    {
                        question: "What is 12 × 12?",
                        options: ["124", "134", "144", "154"],
                        correct: 2
                    },
                    {
                        question: "What is the value of 5!  (5 factorial)?",
                        options: ["20", "60", "120", "240"],
                        correct: 2
                    },
                    {
                        question: "What is the median of: 3, 7, 9, 12, 15?",
                        options: ["7", "9", "10", "12"],
                        correct: 1
                    },
                    {
                        question: "What is 0.5 × 100?",
                        options: ["5", "25", "50", "500"],
                        correct: 2
                    },
                    {
                        question: "What is the least common multiple (LCM) of 4 and 6?",
                        options: ["10", "12", "18", "24"],
                        correct: 1
                    },
                    {
                        question: "What is the formula for the area of a rectangle?",
                        options: ["length + width", "length × width", "2(length + width)", "length²"],
                        correct: 1
                    },
                    {
                        question: "What is 3/5 as a decimal?",
                        options: ["0.3", "0.5", "0.6", "0.8"],
                        correct: 2
                    },
                    {
                        question: "How many degrees are in a right angle?",
                        options: ["45°", "60°", "90°", "180°"],
                        correct: 2
                    }
                ]
            },
            history: {
                name: "History",
                description: "25 questions about World History and Important Events",
                questions: [
                    {
                        question: "In which year did World War II end?",
                        options: ["1943", "1944", "1945", "1946"],
                        correct: 2
                    },
                    {
                        question: "Who was the first President of the United States?",
                        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                        correct: 1
                    },
                    {
                        question: "What was the ancient civilization that built the pyramids?",
                        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
                        correct: 2
                    },
                    {
                        question: "In which year did the Titanic sink?",
                        options: ["1910", "1912", "1914", "1916"],
                        correct: 1
                    },
                    {
                        question: "Who discovered America in 1492?",
                        options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
                        correct: 1
                    },
                    {
                        question: "What ancient wonder was located in Alexandria?",
                        options: ["Hanging Gardens", "Lighthouse", "Colossus", "Temple of Artemis"],
                        correct: 1
                    },
                    {
                        question: "Who was the first man to walk on the moon?",
                        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
                        correct: 1
                    },
                    {
                        question: "In which country did the Renaissance begin?",
                        options: ["France", "Spain", "Italy", "England"],
                        correct: 2
                    },
                    {
                        question: "Who wrote the Declaration of Independence?",
                        options: ["George Washington", "John Adams", "Thomas Jefferson", "Benjamin Franklin"],
                        correct: 2
                    },
                    {
                        question: "What year did the Berlin Wall fall?",
                        options: ["1987", "1989", "1991", "1993"],
                        correct: 1
                    },
                    {
                        question: "Who was known as the Iron Lady?",
                        options: ["Margaret Thatcher", "Indira Gandhi", "Golda Meir", "Angela Merkel"],
                        correct: 0
                    },
                    {
                        question: "In which year did India gain independence?",
                        options: ["1945", "1947", "1950", "1952"],
                        correct: 1
                    },
                    {
                        question: "Who was the last Tsar of Russia?",
                        options: ["Nicholas I", "Alexander II", "Nicholas II", "Alexander III"],
                        correct: 2
                    },
                    {
                        question: "What was the name of the ship that brought the Pilgrims to America?",
                        options: ["Santa Maria", "Mayflower", "Victoria", "Golden Hind"],
                        correct: 1
                    },
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
                        correct: 1
                    },
                    {
                        question: "In which year did the French Revolution begin?",
                        options: ["1776", "1789", "1799", "1804"],
                        correct: 1
                    },
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                        correct: 1
                    },
                    {
                        question: "What was the capital of the Byzantine Empire?",
                        options: ["Rome", "Athens", "Constantinople", "Alexandria"],
                        correct: 2
                    },
                    {
                        question: "Who invented the printing press?",
                        options: ["Benjamin Franklin", "Johannes Gutenberg", "Leonardo da Vinci", "Galileo Galilei"],
                        correct: 1
                    },
                    {
                        question: "In which battle did Napoleon suffer his final defeat?",
                        options: ["Austerlitz", "Trafalgar", "Waterloo", "Leipzig"],
                        correct: 2
                    },
                    {
                        question: "Who led the Protestant Reformation?",
                        options: ["John Calvin", "Martin Luther", "King Henry VIII", "Huldrych Zwingli"],
                        correct: 1
                    },
                    {
                        question: "What ancient trade route connected East and West?",
                        options: ["Spice Route", "Silk Road", "Amber Road", "Incense Route"],
                        correct: 1
                    },
                    {
                        question: "Who was the first female Prime Minister of the UK?",
                        options: ["Margaret Thatcher", "Theresa May", "Elizabeth II", "Tony Blair"],
                        correct: 0
                    },
                    {
                        question: "In which year did the American Civil War end?",
                        options: ["1863", "1865", "1867", "1869"],
                        correct: 1
                    },
                    {
                        question: "Who was assassinated in 1963 in Dallas, Texas?",
                        options: ["John F. Kennedy", "Martin Luther King Jr.", "Robert Kennedy", "Abraham Lincoln"],
                        correct: 0
                    }
                ]
            },
            geography: {
                name: "Geography",
                description: "25 questions about World Geography and Landmarks",
                questions: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2
                    },
                    {
                        question: "Which is the largest ocean on Earth?",
                        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                        correct: 3
                    },
                    {
                        question: "What is the longest river in the world?",
                        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                        correct: 1
                    },
                    {
                        question: "Which continent is the Sahara Desert located in?",
                        options: ["Asia", "Africa", "Australia", "South America"],
                        correct: 1
                    },
                    {
                        question: "What is the highest mountain in the world?",
                        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
                        correct: 2
                    },
                    {
                        question: "Which country has the largest population?",
                        options: ["India", "China", "United States", "Indonesia"],
                        correct: 0
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                        correct: 1
                    },
                    {
                        question: "Which river flows through Egypt?",
                        options: ["Amazon", "Nile", "Congo", "Niger"],
                        correct: 1
                    },
                    {
                        question: "What is the capital of Japan?",
                        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                        correct: 2
                    },
                    {
                        question: "Which country is known as the Land of the Rising Sun?",
                        options: ["China", "Thailand", "Japan", "South Korea"],
                        correct: 2
                    },
                    {
                        question: "What is the largest country by area?",
                        options: ["Canada", "China", "United States", "Russia"],
                        correct: 3
                    },
                    {
                        question: "Which continent is Antarctica?",
                        options: ["The northernmost", "The southernmost", "The easternmost", "The westernmost"],
                        correct: 1
                    },
                    {
                        question: "What is the capital of Australia?",
                        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                        correct: 2
                    },
                    {
                        question: "Which mountain range separates Europe from Asia?",
                        options: ["Alps", "Himalayas", "Ural Mountains", "Andes"],
                        correct: 2
                    },
                    {
                        question: "What is the largest island in the world?",
                        options: ["New Guinea", "Borneo", "Madagascar", "Greenland"],
                        correct: 3
                    },
                    {
                        question: "Which country has the most time zones?",
                        options: ["Russia", "United States", "France", "China"],
                        correct: 2
                    },
                    {
                        question: "What is the capital of Canada?",
                        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                        correct: 2
                    },
                    {
                        question: "Which sea is the saltiest?",
                        options: ["Mediterranean Sea", "Red Sea", "Dead Sea", "Black Sea"],
                        correct: 2
                    },
                    {
                        question: "What is the largest desert in the world?",
                        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                        correct: 3
                    },
                    {
                        question: "Which country is home to the Amazon Rainforest?",
                        options: ["Colombia", "Brazil", "Peru", "Venezuela"],
                        correct: 1
                    },
                    {
                        question: "What is the capital of Spain?",
                        options: ["Barcelona", "Madrid", "Valencia", "Seville"],
                        correct: 1
                    },
                    {
                        question: "Which strait connects the Mediterranean Sea to the Atlantic Ocean?",
                        options: ["Strait of Hormuz", "Bosphorus Strait", "Strait of Gibraltar", "Strait of Malacca"],
                        correct: 2
                    },
                    {
                        question: "What is the largest lake in Africa?",
                        options: ["Lake Chad", "Lake Tanganyika", "Lake Victoria", "Lake Malawi"],
                        correct: 2
                    },
                    {
                        question: "Which city is located on two continents?",
                        options: ["Cairo", "Istanbul", "Moscow", "Dubai"],
                        correct: 1
                    },
                    {
                        question: "What is the deepest point in the ocean?",
                        options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Tonga Trench"],
                        correct: 2
                    }
                ]
            },
            english: {
                name: "English",
                description: "25 questions about Grammar, Literature, and Vocabulary",
                questions: [
                    {
                        question: "What is a noun?",
                        options: ["An action word", "A describing word", "A person, place, or thing", "A connecting word"],
                        correct: 2
                    },
                    {
                        question: "Who wrote 'Romeo and Juliet'?",
                        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                        correct: 1
                    },
                    {
                        question: "What is a synonym for 'happy'?",
                        options: ["Sad", "Joyful", "Angry", "Tired"],
                        correct: 1
                    },
                    {
                        question: "What is the past tense of 'run'?",
                        options: ["Runned", "Ran", "Running", "Runs"],
                        correct: 1
                    },
                    {
                        question: "What punctuation mark ends a question?",
                        options: ["Period", "Comma", "Question mark", "Exclamation mark"],
                        correct: 2
                    },
                    {
                        question: "What is an adjective?",
                        options: ["A word that describes a noun", "A word that shows action", "A word that connects", "A word that replaces a noun"],
                        correct: 0
                    },
                    {
                        question: "Who wrote 'Pride and Prejudice'?",
                        options: ["Emily Bronte", "Jane Austen", "Charlotte Bronte", "George Eliot"],
                        correct: 1
                    },
                    {
                        question: "What is the plural of 'child'?",
                        options: ["Childs", "Childes", "Children", "Childrens"],
                        correct: 2
                    },
                    {
                        question: "What is an antonym for 'hot'?",
                        options: ["Warm", "Cold", "Boiling", "Heated"],
                        correct: 1
                    },
                    {
                        question: "What type of word is 'quickly'?",
                        options: ["Noun", "Verb", "Adjective", "Adverb"],
                        correct: 3
                    },
                    {
                        question: "Who wrote 'To Kill a Mockingbird'?",
                        options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
                        correct: 0
                    },
                    {
                        question: "What is a verb?",
                        options: ["A naming word", "An action word", "A describing word", "A joining word"],
                        correct: 1
                    },
                    {
                        question: "What does 'biography' mean?",
                        options: ["A story about someone's life", "A story about animals", "A fictional story", "A poem"],
                        correct: 0
                    },
                    {
                        question: "What is the superlative form of 'good'?",
                        options: ["Gooder", "Goodest", "Better", "Best"],
                        correct: 3
                    },
                    {
                        question: "What is a metaphor?",
                        options: ["A comparison using 'like' or 'as'", "A direct comparison", "An exaggeration", "A sound word"],
                        correct: 1
                    },
                    {
                        question: "Who wrote '1984'?",
                        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
                        correct: 1
                    },
                    {
                        question: "What is the correct spelling?",
                        options: ["Recieve", "Receive", "Receve", "Receieve"],
                        correct: 1
                    },
                    {
                        question: "What is a pronoun?",
                        options: ["A word that replaces a noun", "A describing word", "An action word", "A connecting word"],
                        correct: 0
                    },
                    {
                        question: "What literary device uses exaggeration?",
                        options: ["Simile", "Metaphor", "Hyperbole", "Alliteration"],
                        correct: 2
                    },
                    {
                        question: "What is the comparative form of 'big'?",
                        options: ["Biger", "Bigger", "More big", "Bigest"],
                        correct: 1
                    },
                    {
                        question: "Who wrote 'The Great Gatsby'?",
                        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "John Steinbeck"],
                        correct: 1
                    },
                    {
                        question: "What is the plural of 'mouse'?",
                        options: ["Mouses", "Mice", "Mices", "Mousies"],
                        correct: 1
                    },
                    {
                        question: "What does 'prefix' mean?",
                        options: ["A word part added at the end", "A word part added at the beginning", "The main part of a word", "A complete word"],
                        correct: 1
                    },
                    {
                        question: "What is alliteration?",
                        options: ["Repetition of vowel sounds", "Repetition of consonant sounds at the beginning", "A comparison", "An exaggeration"],
                        correct: 1
                    }
                ]
            },
            computer: {
                name: "Computer Science",
                description: "25 questions about Programming, Technology, and Computing",
                questions: [
                    {
                        question: "What does CPU stand for?",
                        options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Utility"],
                        correct: 0
                    },
                    {
                        question: "What does HTML stand for?",
                        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
                        correct: 0
                    },
                    {
                        question: "Who is known as the father of computers?",
                        options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"],
                        correct: 2
                    },
                    {
                        question: "What is the brain of the computer?",
                        options: ["RAM", "CPU", "Hard Drive", "Monitor"],
                        correct: 1
                    },
                    {
                        question: "What does RAM stand for?",
                        options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"],
                        correct: 0
                    },
                    {
                        question: "Which programming language is known for web development?",
                        options: ["Python", "JavaScript", "C++", "Swift"],
                        correct: 1
                    },
                    {
                        question: "What is the smallest unit of data in a computer?",
                        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
                        correct: 1
                    },
                    {
                        question: "What does URL stand for?",
                        options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Reference Locator", "Uniform Reference Locator"],
                        correct: 1
                    },
                    {
                        question: "What is an algorithm?",
                        options: ["A type of computer", "A programming language", "A step-by-step procedure", "A hardware component"],
                        correct: 2
                    },
                    {
                        question: "What does Wi-Fi stand for?",
                        options: ["Wireless Fidelity", "Wireless Fiber", "Wide Fidelity", "Wired Fidelity"],
                        correct: 0
                    },
                    {
                        question: "Which company developed Windows?",
                        options: ["Apple", "Google", "Microsoft", "IBM"],
                        correct: 2
                    },
                    {
                        question: "What is phishing?",
                        options: ["A type of virus", "A cyber attack to steal information", "A programming language", "A hardware device"],
                        correct: 1
                    },
                    {
                        question: "What does PDF stand for?",
                        options: ["Portable Document Format", "Personal Document Format", "Public Document Format", "Private Document Format"],
                        correct: 0
                    },
                    {
                        question: "What is the main function of an operating system?",
                        options: ["Browse the internet", "Manage hardware and software", "Edit documents", "Play games"],
                        correct: 1
                    },
                    {
                        question: "What is a firewall?",
                        options: ["A cooling system", "A security system", "A storage device", "A display device"],
                        correct: 1
                    },
                    {
                        question: "Which of these is an input device?",
                        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
                        correct: 2
                    },
                    {
                        question: "What does SQL stand for?",
                        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
                        correct: 0
                    },
                    {
                        question: "What is cloud computing?",
                        options: ["Computing in the sky", "Storing data on the internet", "A type of weather forecast", "A gaming platform"],
                        correct: 1
                    },
                    {
                        question: "Which language is used for styling web pages?",
                        options: ["HTML", "CSS", "JavaScript", "Python"],
                        correct: 1
                    },
                    {
                        question: "What is malware?",
                        options: ["A type of hardware", "Malicious software", "A programming tool", "An operating system"],
                        correct: 1
                    },
                    {
                        question: "What does AI stand for?",
                        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Actual Intelligence"],
                        correct: 1
                    },
                    {
                        question: "What is the binary number system based on?",
                        options: ["0 and 1", "1 and 2", "0 and 2", "1 and 10"],
                        correct: 0
                    },
                    {
                        question: "What is a byte made of?",
                        options: ["4 bits", "8 bits", "16 bits", "32 bits"],
                        correct: 1
                    },
                    {
                        question: "Which of these is an open-source operating system?",
                        options: ["Windows", "macOS", "Linux", "iOS"],
                        correct: 2
                    },
                    {
                        question: "What does HTTP stand for?",
                        options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transmission Protocol"],
                        correct: 0
                    }
                ]
            },
            biology: {
                name: "Biology",
                description: "20 questions about Life Sciences and Living Organisms",
                questions: [
                    {
                        question: "What is the basic unit of life?",
                        options: ["Atom", "Molecule", "Cell", "Tissue"],
                        correct: 2
                    },
                    {
                        question: "What process do plants use to make food?",
                        options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
                        correct: 1
                    },
                    {
                        question: "How many chambers does the human heart have?",
                        options: ["2", "3", "4", "5"],
                        correct: 2
                    },
                    {
                        question: "What is DNA?",
                        options: ["A type of cell", "Genetic material", "A protein", "An enzyme"],
                        correct: 1
                    },
                    {
                        question: "Which organ filters blood in the human body?",
                        options: ["Liver", "Heart", "Kidney", "Lungs"],
                        correct: 2
                    },
                    {
                        question: "What is the study of plants called?",
                        options: ["Zoology", "Botany", "Ecology", "Microbiology"],
                        correct: 1
                    },
                    {
                        question: "What type of organism is yeast?",
                        options: ["Bacteria", "Virus", "Fungus", "Protozoa"],
                        correct: 2
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Liver", "Brain", "Skin", "Heart"],
                        correct: 2
                    },
                    {
                        question: "What is osmosis?",
                        options: ["Movement of water across a membrane", "Movement of gases", "Cell division", "Energy production"],
                        correct: 0
                    },
                    {
                        question: "How many bones are in the adult human body?",
                        options: ["186", "206", "226", "246"],
                        correct: 1
                    },
                    {
                        question: "What is the function of red blood cells?",
                        options: ["Fight infection", "Carry oxygen", "Clot blood", "Produce hormones"],
                        correct: 1
                    },
                    {
                        question: "What is the powerhouse of the cell?",
                        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
                        correct: 1
                    },
                    {
                        question: "What is the scientific name for humans?",
                        options: ["Homo erectus", "Homo sapiens", "Homo habilis", "Homo neanderthalensis"],
                        correct: 1
                    },
                    {
                        question: "Which blood cells help fight infection?",
                        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
                        correct: 1
                    },
                    {
                        question: "What is the main gas plants need for photosynthesis?",
                        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                        correct: 2
                    },
                    {
                        question: "What is the smallest bone in the human body?",
                        options: ["Femur", "Stapes", "Tibia", "Radius"],
                        correct: 1
                    },
                    {
                        question: "What is evolution?",
                        options: ["Growth of an organism", "Change in species over time", "Cell division", "Energy transfer"],
                        correct: 1
                    },
                    {
                        question: "What is the function of the liver?",
                        options: ["Pump blood", "Filter toxins", "Digest food", "Breathe"],
                        correct: 1
                    },
                    {
                        question: "What are chromosomes made of?",
                        options: ["Proteins only", "DNA and proteins", "RNA only", "Lipids"],
                        correct: 1
                    },
                    {
                        question: "What is the largest artery in the human body?",
                        options: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
                        correct: 2
                    }
                ]
            },
            physics: {
                name: "Physics",
                description: "20 questions about Forces, Energy, and Matter",
                questions: [
                    {
                        question: "What is the SI unit of force?",
                        options: ["Joule", "Newton", "Watt", "Pascal"],
                        correct: 1
                    },
                    {
                        question: "What is the speed of light?",
                        options: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
                        correct: 0
                    },
                    {
                        question: "What is gravity?",
                        options: ["A type of energy", "A force of attraction", "A type of matter", "A wave"],
                        correct: 1
                    },
                    {
                        question: "Who discovered the law of gravity?",
                        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
                        correct: 1
                    },
                    {
                        question: "What is the formula for force?",
                        options: ["F = m/a", "F = ma", "F = m+a", "F = a/m"],
                        correct: 1
                    },
                    {
                        question: "What type of energy does a moving object have?",
                        options: ["Potential", "Kinetic", "Thermal", "Chemical"],
                        correct: 1
                    },
                    {
                        question: "What is the SI unit of energy?",
                        options: ["Newton", "Watt", "Joule", "Pascal"],
                        correct: 2
                    },
                    {
                        question: "What is absolute zero?",
                        options: ["-273.15°C", "0°C", "-100°C", "-200°C"],
                        correct: 0
                    },
                    {
                        question: "What is refraction?",
                        options: ["Bending of light", "Reflection of light", "Absorption of light", "Emission of light"],
                        correct: 0
                    },
                    {
                        question: "What is the law of conservation of energy?",
                        options: ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy always increases"],
                        correct: 2
                    },
                    {
                        question: "What is the unit of electrical resistance?",
                        options: ["Volt", "Ampere", "Ohm", "Watt"],
                        correct: 2
                    },
                    {
                        question: "What is the acceleration due to gravity on Earth?",
                        options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
                        correct: 1
                    },
                    {
                        question: "What is the first law of thermodynamics?",
                        options: ["Energy conservation", "Entropy increases", "Heat flows from hot to cold", "Absolute zero"],
                        correct: 0
                    },
                    {
                        question: "What particles are found in the nucleus of an atom?",
                        options: ["Electrons and protons", "Protons and neutrons", "Electrons and neutrons", "Only protons"],
                        correct: 1
                    },
                    {
                        question: "What is the unit of power?",
                        options: ["Joule", "Newton", "Watt", "Pascal"],
                        correct: 2
                    },
                    {
                        question: "What is an electromagnetic wave?",
                        options: ["Sound wave", "Water wave", "Light wave", "Seismic wave"],
                        correct: 2
                    },
                    {
                        question: "What is momentum?",
                        options: ["Mass times velocity", "Mass times acceleration", "Force times time", "Energy times time"],
                        correct: 0
                    },
                    {
                        question: "What is the unit of frequency?",
                        options: ["Meter", "Second", "Hertz", "Newton"],
                        correct: 2
                    },
                    {
                        question: "What happens to the volume of a gas when pressure increases at constant temperature?",
                        options: ["Increases", "Decreases", "Stays the same", "Becomes zero"],
                        correct: 1
                    },
                    {
                        question: "What is the theory of relativity associated with?",
                        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
                        correct: 1
                    }
                ]
            },
            chemistry: {
                name: "Chemistry",
                description: "20 questions about Elements, Compounds, and Reactions",
                questions: [
                    {
                        question: "What is the chemical symbol for water?",
                        options: ["H2O", "CO2", "O2", "H2O2"],
                        correct: 0
                    },
                    {
                        question: "What is the atomic number of carbon?",
                        options: ["4", "6", "8", "12"],
                        correct: 1
                    },
                    {
                        question: "What is the pH of a neutral solution?",
                        options: ["5", "7", "9", "10"],
                        correct: 1
                    },
                    {
                        question: "What is the most abundant element in the universe?",
                        options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
                        correct: 2
                    },
                    {
                        question: "What is the chemical formula for table salt?",
                        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
                        correct: 0
                    },
                    {
                        question: "What is an acid?",
                        options: ["pH > 7", "pH < 7", "pH = 7", "pH = 0"],
                        correct: 1
                    },
                    {
                        question: "What is the periodic table?",
                        options: ["A table of times", "A table of elements", "A table of compounds", "A table of reactions"],
                        correct: 1
                    },
                    {
                        question: "What is oxidation?",
                        options: ["Loss of electrons", "Gain of electrons", "Loss of protons", "Gain of neutrons"],
                        correct: 0
                    },
                    {
                        question: "What is the noble gas with atomic number 2?",
                        options: ["Neon", "Argon", "Helium", "Krypton"],
                        correct: 2
                    },
                    {
                        question: "What is a catalyst?",
                        options: ["Speeds up a reaction", "Slows down a reaction", "Stops a reaction", "Creates a reaction"],
                        correct: 0
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Go", "Gd", "Au", "Ag"],
                        correct: 2
                    },
                    {
                        question: "What is an isotope?",
                        options: ["Same protons, different neutrons", "Same neutrons, different protons", "Same electrons, different protons", "Different atoms"],
                        correct: 0
                    },
                    {
                        question: "What is the formula for carbon dioxide?",
                        options: ["CO", "CO2", "C2O", "C2O2"],
                        correct: 1
                    },
                    {
                        question: "What is a covalent bond?",
                        options: ["Transfer of electrons", "Sharing of electrons", "Loss of electrons", "Gain of protons"],
                        correct: 1
                    },
                    {
                        question: "What is the lightest element?",
                        options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
                        correct: 1
                    },
                    {
                        question: "What is Avogadro's number approximately?",
                        options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10²⁵"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical symbol for iron?",
                        options: ["Ir", "Fe", "In", "Fr"],
                        correct: 1
                    },
                    {
                        question: "What state of matter has a definite shape and volume?",
                        options: ["Gas", "Liquid", "Solid", "Plasma"],
                        correct: 2
                    },
                    {
                        question: "What is a base?",
                        options: ["pH < 7", "pH > 7", "pH = 7", "pH = 14"],
                        correct: 1
                    },
                    {
                        question: "What is the main component of natural gas?",
                        options: ["Ethane", "Propane", "Methane", "Butane"],
                        correct: 2
                    }
                ]
    }
};
