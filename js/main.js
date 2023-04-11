class CalorieTracker {
    constructor() {
        this._calorieLimit = 2000;
        this._totalcalories = 0;
        this._meals = [];
        this._workouts = [];
        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displatCaloriesProgress();
    }

    //public methodes/API//

    addMeal(meal) {
        this._meals.push(meal);
        this._totalcalories += meal.calories;
        this._render();
    }
    addWorkout(workout) {
        this._meals.push(workout);
        this._totalcalories -= workout.calories;
        this._render();
    }

    //private methods//


    _displayCaloriesTotal() {
        const totalcaloriesEl = document.getElementById('calories-total');
        totalcaloriesEl.innerHTML = this._totalcalories;
    }
    _displayCaloriesLimit() {
        const calorielimitEl = document.getElementById('calories-limit');
        calorielimitEl.innerHTML = this._calorieLimit;
    }

    _displayCaloriesConsumed() {
        const caloriesConsumedEl = document.getElementById('calories-consumed');

        const consumed = this._workouts.reduce((total, meal) =>
            total + meal.calories, 0
        );

        caloriesConsumedEl.innerHTML = consumed;

    }

    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.getElementById('calories-burned');

        const burned = this._workouts.reduce(
            (total, workout) => total + workout.calories, 0
        );

        caloriesBurnedEl.innerHTML = burned;

    }

    _displayCaloriesRemaining() {
        const caloriesRemainingEl = document.getElementById('calories-remaining');

        const remaining = this._calorieLimit - this._totalcalories;
        caloriesRemainingEl.innerHTML = remaining;
    }

    _displatCaloriesProgress() {
        const progressEL = document.getElementById('calories-progress');
        const percentage = (this._totalcalories / this._calorieLimit) * 100;
        const width = Math.min(percentage, 100);
        progressEL.style.width = `${width}%`;
    }

    _render() {
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this.__displatCaloriesProgress();
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

const breakfast = new Meal('Breakfast', 450);
const lunch = new Meal('Luch', 300)
tracker.addMeal(breakfast);
tracker.addMeal(lunch);

const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);

console.log(tracker._meals)
console.log(tracker._workouts)
console.log(tracker._totalcalories)
