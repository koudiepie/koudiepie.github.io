function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0xEA, 0x45, 0x45));
    fill(color(0xDF, 0xEA, 0x45));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    text("中餐吃泡麵 ", 50, 50);
    text("中餐UberEat ", 50, 100);
    text("中餐FoodPanda ", 50, 150);
}

function mousePressed() {
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
