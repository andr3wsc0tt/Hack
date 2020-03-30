function trackRobot(...steps) {
    class Robot {
        constructor() {
            this.x = 0;
            this.y = 0;
        }

        move(...steps) {
            for (var move in steps) {
                switch (move % 4) {
                    case (0):
                        {
                            this.y += steps[move];
                            break;
                        }
                    case (1):
                        {
                            this.x += steps[move];
                            break;
                        }
                    case (2):
                        {
                            this.y -= steps[move];
                            break;
                        }
                    case (3):
                        {
                            this.x -= steps[move];
                            break;
                        }
                }
            }
        }
        position() {
            return [this.x, this.y];
        }
    }

    var R2 = new Robot();
    R2.move(...steps);
    return R2.position();
}