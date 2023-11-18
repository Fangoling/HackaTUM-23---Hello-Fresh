const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Finds meals in the database based on provided tag names.
 *
 * @param {Array<string>} tagNames - An array of tag names to search for in meals.
 */
export async function findMealByTags(tagNames) {
    try {
      const meals = await prisma.recipe.findMany({
        where: {
          tags: {
            some: {
              name: {
                in: tagNames,
              },
            },
          },
        },
      });
  
      console.log('Matching Meals:', meals);
      return meals;
    } catch (error) {
      console.error('Error finding meals by tags:', error);
    } finally {
      await prisma.$disconnect();
    }
  }

export async function insertMeals() {
  const mealsData = [
    // Meal 1
    {
      id: '64fed0d332e9107c6db8b507',
      name: 'Harissa chicken on quinoa with green olives',
      headline:
        'This dish produces 50% less CO2e from ingredients than an average HelloFresh recipe',
      prepTime: 'PT25M',
      image:
        'https://img.hellofresh.com/q_auto/recipes/image/HF_Y23_R37_W44_DE_R4819-1_Main_low-661e95c9.jpg',
      websiteURL:
        'https://www.hellofresh.de/recipes/harissa-hahnchen-auf-quinoa-mit-grunen-oliven-64fed0d332e9107c6db8b507',
      tags: ['High Protein', 'Under 650 Calories'],
      nutrition: {
        energy: 2534,
        calories: 606,
        carbohydrate: 52.4,
        protein: 38.4,
      },
    },
    // Meal 2
    {
      id: '64df2a75552e10127649f25f',
      name: 'Balsamic lentil salad with chicken breast',
      headline: 'Avocado and plum dressing',
      prepTime: 'PT25M',
      image:
        'https://img.hellofresh.com/q_auto/recipes/image/HF_Y23_R38_W36_DE_R4737-1_Main_low-127700d5.jpg',
      websiteURL:
        'https://www.hellofresh.de/recipes/balsamico-linsen-salat-mit-hahnchenbrust-64df2a75552e10127649f25f',
      tags: ['High Protein', 'Gluten Free', 'Low Carb'],
      nutrition: {
        energy: 2273,
        calories: 543,
        carbohydrate: 26.1,
        protein: 41.6,
      },
    },
    // Meal 3
    {
      id: '64e8611440ec4203972faf1b',
      name: 'Perlencouscous-salat with red beet and parsnip chips',
      headline:
        'This dish produces 50% less CO2e from ingredients than an average HelloFresh recipe',
      prepTime: 'PT35M',
      image:
        'https://img.hellofresh.com/q_auto/recipes/image/HF_Y23_R39_W49_DE_R4823-1_Main__5low-208db069.jpg',
      websiteURL:
        'https://www.hellofresh.de/recipes/perlencouscous-salat-mit-rote-beete-and-pastinakenchips-64e8611440ec4203972faf1b',
      tags: ['Vegetarian', 'Extra Vegatables', 'Family Friendly'],
      nutrition: {
        energy: 3663,
        calories: 875,
        carbohydrate: 83.4,
        protein: 18,
      },
    },
  ];

  try {
    for (const mealData of mealsData) {
      const createdMeal = await prisma.recipe.create({
        data: {
          id: mealData.id,
          name: mealData.name,
          headline: mealData.headline,
          prepTime: mealData.prepTime,
          image: mealData.image,
          websiteURL: mealData.websiteURL,
          energy: mealData.nutrition.energy,
          calories: mealData.nutrition.calories,
          carbohydrate: mealData.nutrition.carbohydrate,
          protein: mealData.nutrition.protein,
          tags: {
            connectOrCreate: mealData.tags.map(tagName => ({
              where: { name: tagName },
              create: { name: tagName },
            })),
          },
        },
      });

      console.log(`Created Meal: ${createdMeal.name}`);
    }
  } catch (error) {
    console.error('Error inserting meals:', error);
  } finally {
    await prisma.$disconnect();
  }
}

insertMeals();