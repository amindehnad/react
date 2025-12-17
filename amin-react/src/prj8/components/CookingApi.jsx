// export async function CookingAPI(ingrdientsArray){
//     const ingrdientsString = ingrdientsArray.join(",")
// const CookingAPI = {

//           recipes: [
//             {
//               id: 1,
//               title: "قرمه سبزی",
//               category: "غذای ایرانی",
//               prepTime: 120,
//               cookTime: 180,
//               difficulty: "متوسط",
//               servings: 4,
//               rating: 4.8,
//               favorite: true,
//               ingredients: [
//                 { id: 1, name: "گوشت گوسفند", amount: "500 گرم" },
//                 { id: 2, name: "لوبیا قرمز", amount: "1 پیمانه" },
//                 { id: 3, name: "سبزی قرمه", amount: "1 کیلوگرم" },
//                 { id: 4, name: "پیاز", amount: "2 عدد" },
//                 { id: 5, name: "لیمو عمانی", amount: "5 عدد" },
//                 { id: 6, name: "روغن", amount: "4 قاشق غذاخوری" },
//                 { id: 7, name: "زردچوبه", amount: "1 قاشق چایخوری" },
//                 { id: 8, name: "نمک و فلفل", amount: "به میزان لازم" }
//               ],
//               instructions: [
//                 "گوشت را به تکه‌های متوسط خرد کنید.",
//                 "پیاز را ریز خرد کرده و در روغن تفت دهید تا طلایی شود.",
//                 "گوشت را اضافه کرده و تفت دهید تا رنگ آن تغییر کند.",
//                 "زردچوبه را اضافه کنید و کمی تفت دهید.",
//                 "سبزی خرد شده را اضافه کرده و تفت دهید تا بوی سبزی گرفته شود.",
//                 "لوبیا قرمز خیس خورده و لیمو عمانی را اضافه کنید.",
//                 "مقدار مناسب آب اضافه کرده و بگذارید ۲-۳ ساعت با حرارت ملایم بپزد.",
//                 "در آخر نمک و فلفل را اضافه کنید."
//               ],
//               nutrition: {
//                calories: 420,
//                 protein: "32g",
//                 carbs: "28g",
//                 fat: "22g"
//               },
//               tips: "برای طعم بهتر، یک شب قبل سبزی را تفت دهید."
//             },
//             {
//               id: 2,
//               title: "کوکو سبزی",
//               category: "غذای ایرانی",
//               prepTime: 30,
//               cookTime: 40,
//               difficulty: "آسان",
//               servings: 4,
//               rating: 4.5,
//               favorite: false,
//               image: "https://via.placeholder.com/300x200/2196F3/FFFFFF?text=Kookoo+Sabzi",
//               ingredients: [
//                 { id: 1, name: "سبزی کوکو", amount: "500 گرم" },
//                 { id: 2, name: "تخم مرغ", amount: "4 عدد" },
//                 { id: 3, name: "آرد", amount: "2 قاشق غذاخوری" },
//                 { id: 4, name: "گردو", amount: "½ پیمانه" },
//                 { id: 5, name: "زرشک", amount: "¼ پیمانه" },
//                 { id: 6, name: "روغن", amount: "به میزان لازم" },
//                 { id: 7, name: "نمک و فلفل", amount: "به میزان لازم" },
//                 { id: 8, name: "زردچوبه", amount: "1 قاشق چایخوری" }
//               ],
//               instructions: [
//                 "سبزی را خوب بشویید و ریز خرد کنید.",
//                 "تخم مرغ‌ها را در کاسه بزرگی بزنید.",
//                 "سبزی خرد شده، آرد، نمک، فلفل و زردچوبه را اضافه کنید.",
//                 "گردو و زرشک را اضافه کرده و خوب مخلوط کنید.",
//                 "روغن را در تابه داغ کنید.",
//                 "مخلوط را در تابه ریخته و با حرارت ملایم بپزید.",
//                 "وقتی یک طرف طلایی شد، برگردانید و طرف دیگر را بپزید."
//               ],
//               nutrition: {
//                 calories: 280,
//                 protein: "18g",
//                 carbs: "15g",
//                 fat: "18g"
//               },
//               tips: "برای ترد شدن بیشتر، کوکو را در روغن نسبتاً داغ سرخ کنید."
//             },
//             {
//               id: 3,
//               title: "پاستا کاربونارا",
//               category: "غذای ایتالیایی",
//               prepTime: 15,
//               cookTime: 20,
//               difficulty: "آسان",
//               servings: 2,
//               rating: 4.7,
//               favorite: true,
//               image: "https://via.placeholder.com/300x200/FF9800/FFFFFF?text=Carbonara",
//               ingredients: [
//                 { id: 1, name: "پاستا اسپاگتی", amount: "200 گرم" },
//                 { id: 2, name: "بیکن یا گوانچیاله", amount: "100 گرم" },
//                 { id: 3, name: "تخم مرغ", amount: "2 عدد" },
//                 { id: 4, name: "پنیر پارمزان", amount: "½ پیمانه" },
//                 { id: 5, name: "فلفل سیاه", amount: "به میزان لازم" },
//                 { id: 6, name: "نمک", amount: "به میزان لازم" }
//               ],
//               instructions: [
//                 "پاستا را در آب جوش و نمک دار بپزید.",
//                 "بیکن را به قطعات کوچک برش داده و تفت دهید تا ترد شود.",
//                 "تخم مرغ‌ها را با پنیر رنده شده و فلفل سیاه مخلوط کنید.",
//         "پاستای پخته شده را به بیکن اضافه کنید.",
//             "مخلوط تخم مرغ را اضافه کرده و سریع هم بزنید تا سس غلیظ شود.",
//             "بلافاصله سرو کنید."
//           ],
//           nutrition: {
//             calories: 650,
//             protein: "35g",
//             carbs: "75g",
//             fat: "25g"
//           },
//           tips: "برای جلوگیری از بریده بریده شدن سس، حرارت را خاموش کنید سپس تخم مرغ را اضافه کنید."
//         }
//       ],
    
//       // متدهای API
    
//       // دریافت تمام دستورها
//       getAllRecipes: function() {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             resolve({
//               success: true,
//               data: this.recipes,
//               count: this.recipes.length
//             });
//           }, 300); // شبیه‌سازی تاخیر شبکه
//         });
//       },
    
//       // دریافت یک دستور خاص
//       getRecipeById: function(id) {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             const recipe = this.recipes.find(r => r.id === parseInt(id));
//             if (recipe) {
//               resolve({
//                 success: true,
//                 data: recipe
//               });
//             } else {
//               reject({
//                 success: false,
//                 message: "دستور آشپزی یافت نشد"
//               });
//             }
//           }, 200);
//         });
//       },
    
//       // جستجوی دستورها
//       searchRecipes: function(query, category = null, difficulty = null) {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             let results = this.recipes;
            
//             if (query) {
//               results = results.filter(recipe => 
//                 recipe.title.toLowerCase().includes(query.toLowerCase()) ||
//                 recipe.ingredients.some(ing => ing.name.toLowerCase().includes(query.toLowerCase()))
//               );
//             }
            
//             if (category) {
//               results = results.filter(recipe => 
//                 recipe.category.toLowerCase() === category.toLowerCase()
//               );
//             }
            
//             if (difficulty) {
//               results = results.filter(recipe => 
//                 recipe.difficulty.toLowerCase() === difficulty.toLowerCase()
//               );
//             }
            
//             resolve({
//               success: true,
//               data: results,
//               count: results.length
//             });
//           }, 300);
//         });
//       },
    
//       // دریافت دستورهای پرطرفدار
//       getFeaturedRecipes: function() {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const featured = this.recipes
//               .filter(recipe => recipe.rating >= 4.5)
//               .sort((a, b) => b.rating - a.rating)
//               .slice(0, 3);
            
//             resolve({
//               success: true,
//               data: featured
//             });
//           }, 200);
//         });
//       },
    
//       // دریافت دستورهای مورد علاقه
//       getFavoriteRecipes: function() {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const favorites = this.recipes.filter(recipe => recipe.favorite);
            
//             resolve({
//               success: true,
//               data: favorites,
//               count: favorites.length
//             });
//           }, 200);
//         });
//       },
    
//       // تغییر وضعیت علاقه‌مندی
//       toggleFavorite: function(recipeId) {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             const recipeIndex = this.recipes.findIndex(r => r.id === recipeId);
            
//             if (recipeIndex !== -1) {
//               this.recipes[recipeIndex].favorite = !this.recipes[recipeIndex].favorite;
//               resolve({
//                 success: true,
//                 data: this.recipes[recipeIndex],
//                 message: this.recipes[recipeIndex].favorite ? 
//                   "به علاقه‌مندی‌ها اضافه شد" : 
//                   "از علاقه‌مندی‌ها حذف شد"
//               });
//             } else {
//               reject({
//                 success: false,
//                 message: "دستور آشپزی یافت نشد"
//               });
//             }
//           }, 150);
//         });
//       },
    
//       // دریافت دستورها بر اساس دسته‌بندی
//       getRecipesByCategory: function(category) {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const filtered = this.recipes.filter(recipe => 
//               recipe.category.toLowerCase() === category.toLowerCase()
//             );
            
//             resolve({
//               success: true,
//               data: filtered,
//               count: filtered.length
//             });
//           }, 200);
//         });
//       },// اضافه کردن دستور جدید
//       addRecipe: function(newRecipe) {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const recipeWithId = {
//               ...newRecipe,
//               id: this.recipes.length > 0 ? Math.max(...this.recipes.map(r => r.id)) + 1 : 1,
//               favorite: false,
//               rating: 0
//             };
            
//             this.recipes.push(recipeWithId);
            
//             resolve({
//               success: true,
//               data: recipeWithId,
//               message: "دستور آشپزی با موفقیت اضافه شد"
//             });
//           }, 300);
//         });
//       },
    
//       // دریافت دسته‌بندی‌های موجود
//       getCategories: function() {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const categories = [...new Set(this.recipes.map(recipe => recipe.category))];
            
//             resolve({
//               success: true,
//               data: categories
//             });
//           }, 100);
//         });
//       }
//     };
//     {ingrdientsString}
// return CookingAPI
// }
