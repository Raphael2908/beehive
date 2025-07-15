export class CreateBeehiveDto {
  name: string;
  bee_type: string;
  player_id: number;
  num_queens: number;
  num_workers: number;
  food_points: number;
}

// I want to make a game wear the main goal is to collect and manage beehives.
// A user starts with a basic beehive and can only get more beehives by producing more queens.
// A user needs a queen to produce more beehives.
// The player must have a garden to grow food for the beehives.
// each beehive has a specific food type in order for their food points to increase.
// if the food points are not enough to feed the beehives, the beehives will start to die.
