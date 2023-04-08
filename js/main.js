class CalorieTracker {
    constructor() {
        this._calorieLimit = 2000;
        this._totalcalories = 0;
        this._meals = [];
        this._workouts = [];
    }

    addMeal(meal) {
        this._meals.push(meal);
        this._totalcalories += meal.calories;
    }
    addWorkout(workout) {
        this._meals.push(workout);
        this._totalcalories -= workout.calories;
    }
}


class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories
    }
}
class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories
    }
}

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);

const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);

console.log(tracker._meals)
console.log(tracker._workouts)
console.log(tracker._totalcalories)