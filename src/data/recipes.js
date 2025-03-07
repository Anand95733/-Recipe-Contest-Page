const recipes = [
  {
      id: 1,
      name: "Classic Margherita Pizza",
      chef: "Chef Isabella Rossi",
      totalRatings: 620,
      avgRating: 4.7,
      uploadedOn: "2024-03-15",
      mealType: "Lunch",
      dishType: "Pizza",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A simple yet delicious pizza with fresh mozzarella, basil, and tomato sauce on a crispy crust.",
      imgUrl: "/src/assets/Classic-Margherita-Pizza.jpg",
  },
  {
      id: 2,
      name: "Spicy Shrimp Tacos",
      chef: "Chef Ricardo Alvarez",
      totalRatings: 580,
      avgRating: 4.6,
      uploadedOn: "2024-04-01",
      mealType: "Dinner",
      dishType: "Mexican",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "Flavorful shrimp tacos with a spicy chipotle marinade, topped with fresh cilantro and lime.",
      imgUrl: "/src/assets/Spicy-Shrimp-Tacos.jpg",
  },
  {
      id: 3,
      name: "Creamy Tomato Soup with Grilled Cheese Croutons",
      chef: "Chef Emily Carter",
      totalRatings: 490,
      avgRating: 4.5,
      uploadedOn: "2024-04-15",
      mealType: "Lunch",
      dishType: "Soup",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A comforting tomato soup with a creamy texture, served with crispy grilled cheese croutons.",
      imgUrl: "/src/assets/Creamy-Tomato-Soup-with-Grilled-Cheese-Croutons.jpg",
  },
  {
      id: 4,
      name: "Avocado Toast with Everything Bagel Seasoning",
      chef: "Chef Anya Petrova",
      totalRatings: 380,
      avgRating: 4.3,
      uploadedOn: "2024-05-01",
      mealType: "Breakfast",
      dishType: "Toast",
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: "Simple and satisfying avocado toast topped with everything bagel seasoning and a sprinkle of red pepper flakes.",
      imgUrl: "/src/assets/Avocado-Toast-with-Everything-Bagel-Seasoning.jpg",
  },
  {
      id: 5,
      name: "Coconut Curry with Tofu and Vegetables",
      chef: "Chef Hiroki Tanaka",
      totalRatings: 520,
      avgRating: 4.8,
      uploadedOn: "2024-05-15",
      mealType: "Dinner",
      dishType: "Curry",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A fragrant coconut curry with tender tofu, a medley of colorful vegetables, and a hint of ginger.",
      imgUrl: "/src/assets/Coconut-Curry-with-Tofu-and-Vegetables.jpg",
  },
  {
      id: 6,
      name: "Blueberry Banana Smoothie",
      chef: "Chef Clara Dubois",
      totalRatings: 410,
      avgRating: 4.4,
      uploadedOn: "2024-06-01",
      mealType: "Breakfast",
      dishType: "Smoothie",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "A refreshing and nutritious smoothie with sweet blueberries, creamy banana, and a splash of almond milk.",
      imgUrl: "/src/assets/Blueberry-Banana-Smoothie.jpg",
  },
  {
      id: 7,
      name: "Grilled Salmon with Lemon Dill Sauce",
      chef: "Chef Ben Olsen",
      totalRatings: 550,
      avgRating: 4.7,
      uploadedOn: "2024-06-15",
      mealType: "Dinner",
      dishType: "Seafood",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "Perfectly grilled salmon with a bright and zesty lemon-dill sauce, served with roasted asparagus.",
      imgUrl: "/src/assets/Grilled-Salmon-with-Lemon-Dill-Sauce.jpg",
  },
  {
      id: 8,
      name: "Mushroom and Spinach Risotto",
      chef: "Chef Giovanni Esposito",
      totalRatings: 480,
      avgRating: 4.6,
      uploadedOn: "2024-07-01",
      mealType: "Dinner",
      dishType: "Rice",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A creamy and comforting risotto with earthy mushrooms, fresh spinach, and a sprinkle of Parmesan cheese.",
      imgUrl: "/src/assets/Mushroom-and-Spinach-Risotto.jpg",
  },
  {
      id: 9,
      name: "Chicken Enchiladas with Green Sauce",
      chef: "Chef Isabella Rodriguez",
      totalRatings: 510,
      avgRating: 4.5,
      uploadedOn: "2024-07-15",
      mealType: "Dinner",
      dishType: "Mexican",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Savory chicken enchiladas smothered in a tangy and flavorful green sauce, topped with melted cheese.",
      imgUrl: "/src/assets/Chicken-Enchiladas-with-Green-Sauce.jpg",
  },
  {
      id: 10,
      name: "Lentil Soup with Lemon and Herbs",
      chef: "Chef Jack Bennett",
      totalRatings: 440,
      avgRating: 4.4,
      uploadedOn: "2024-08-01",
      mealType: "Lunch",
      dishType: "Soup",
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: "A hearty and flavorful lentil soup with a bright lemon flavor and fresh herbs.",
      imgUrl: "/src/assets/Lentil-Soup-with-Lemon-and-Herbs.jpg",
  },
  {
      id: 11,
      name: "Peanut Butter Banana Oatmeal",
      chef: "Chef Emily Chen",
      totalRatings: 390,
      avgRating: 4.3,
      uploadedOn: "2024-08-15",
      mealType: "Breakfast",
      dishType: "Oatmeal",
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: "A warm and comforting bowl of oatmeal with creamy peanut butter, sliced banana, and a drizzle of honey.",
      imgUrl: "/src/assets/Peanut-Butter-Banana-Oatmeal.jpg",
  },
  {
      id: 12,
      name: "Vegetable Stir Fry with Noodles",
      chef: "Chef David Lee",
      totalRatings: 530,
      avgRating: 4.8,
      uploadedOn: "2024-09-01",
      mealType: "Dinner",
      dishType: "Noodles",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "A colorful and flavorful vegetable stir-fry with tender noodles and a savory sauce.",
      imgUrl: "/src/assets/Vegetable-Stir-Fry-with-Noodles.jpg",
  },
  {
      id: 13,
      name: "Lemon Ricotta Pancakes",
      chef: "Chef Sophia Rossi",
      totalRatings: 470,
      avgRating: 4.6,
      uploadedOn: "2024-09-15",
      mealType: "Breakfast",
      dishType: "Pancake",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Fluffy and light pancakes with a hint of lemon and creamy ricotta cheese.",
      imgUrl: "/src/assets/Lemon-Ricotta-Pancakes.jpg",
  },
  {
      id: 14,
      name: "Black Bean Burgers with Chipotle Mayo",
      chef: "Chef Ricardo Gomez",
      totalRatings: 500,
      avgRating: 4.7,
      uploadedOn: "2024-10-01",
      mealType: "Lunch",
      dishType: "Burger",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Hearty black bean burgers with a smoky chipotle mayo, served on toasted buns with your favorite toppings.",
      imgUrl: "/src/assets/Black-Bean-Burgers-with-Chipotle-Mayo.jpg",
  },
  {
      id: 15,
      name: "Pumpkin Spice Latte Smoothie",
      chef: "Chef Olivia Taylor",
      totalRatings: 420,
      avgRating: 4.4,
      uploadedOn: "2024-10-15",
      mealType: "Breakfast",
      dishType: "Smoothie",
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: "A seasonal smoothie with the flavors of pumpkin spice latte, blended with banana, yogurt, and a touch of maple syrup.",
      imgUrl: "/src/assets/Pumpkin-Spice-Latte-Smoothie.jpg",
  },
  {
      id: 16,
      name: "Seafood Paella",
      chef: "Chef Mateo Vargas",
      totalRatings: 560,
      avgRating: 4.9,
      uploadedOn: "2024-11-01",
      mealType: "Dinner",
      dishType: "Seafood",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "A Spanish classic with saffron-infused rice, shrimp, mussels, clams, and chorizo.",
      imgUrl: "/src/assets/Seafood-Paella.jpg",
  },
  {
      id: 17,
      name: "Winter Vegetable Minestrone",
      chef: "Chef Klaus Schmidt",
      totalRatings: 450,
      avgRating: 4.5,
      uploadedOn: "2024-11-15",
      mealType: "Lunch",
      dishType: "Soup",
      testKitchenApproved: false,
      contestWinner: false,
      featured: false,
      description: "A hearty Italian soup packed with seasonal winter vegetables and small pasta shells.",
      imgUrl: "/src/assets/Winter-Vegetable-Minestrone.jpg",
  },
  {
      id: 18,
      name: "Pesto Pasta with Cherry Tomatoes",
      chef: "Chef Alessia Lombardi",
      totalRatings: 580,
      avgRating: 4.7,
      uploadedOn: "2024-12-01",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A vibrant and flavorful pasta dish tossed with homemade pesto and sweet cherry tomatoes.",
      imgUrl: "/src/assets/Pesto-Pasta-with-Cherry-Tomatoes.jpg",
  }
];
export default recipes;