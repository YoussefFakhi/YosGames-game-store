<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    public function run()
    {
        $games = $this->getGameData();

        foreach ($games as $game) {
            Game::create($game);
        }
    }

    protected function getGameData()
    {
        return [
            [
                'title' => "Assassin's Creed Valhalla",
                'price' => 24.99,
                'original_price' => 36.99,
                'category' => "adv",
                'image' => "assets/images/trending-01.jpg",
                'genre' => "Action-Adventure",
                'description' => "Become Eivor, a Viking raider raised to be a fearless warrior.",
                'long_description' => "In Assassin's Creed Valhalla, you are Eivor, a fierce Viking warrior...",
                'features' => json_encode(["Lead epic Viking raids", "Dual-wield powerful weapons", "Shape your character's growth"]),
                'tags' => json_encode(["Viking", "Open World"]),
                'reviews' => "Rated 4.7/5 by players"
            ],
            [
                'title' => "Fortnite",
                'price' => 0,
                'original_price' => 20,
                'category' => "str",
                'image' => "assets/images/trending-02.jpg",
                'genre' => "Battle Royale",
                'description' => "The free-to-play Battle Royale game.",
                'long_description' => "Fortnite Battle Royale is the completely free 100-player PvP mode...",
                'features' => json_encode(["Free-to-play", "Cross-platform play", "Regular updates"]),
                'tags' => json_encode(["Multiplayer", "Shooter"]),
                'reviews' => "Rated 4.5/5 by players"
            ],
            [
                'title' => "Need for Speed Heat",
                'price' => 30,
                'original_price' => 40,
                'category' => "rac",
                'image' => "assets/images/trending-03.jpg",
                'genre' => "Racing",
                'description' => "Hustle by day and risk it all at night.",
                'long_description' => "In Need for Speed Heat, compete in the Speedhunter Showdown...",
                'features' => json_encode(["Customize your cars", "Open world Palm City", "Day and night cycle"]),
                'tags' => json_encode(["Cars", "Racing"]),
                'reviews' => "Rated 4.3/5 by players"
            ],
            [
                'title' => "Little Nightmares II",
                'price' => 20,
                'original_price' => 50,
                'category' => "adv",
                'image' => "assets/images/b1.jpeg",
                'genre' => "Horror-Adventure",
                'description' => "Return to a world of charming horror.",
                'long_description' => "In Little Nightmares II, you play as Mono, a young boy trapped...",
                'features' => json_encode(["Gripping puzzle-platformer", "New threatening residents", "Unravel dark secrets"]),
                'tags' => json_encode(["Horror", "Puzzle"]),
                'reviews' => "Rated 4.8/5 by players"
            ],
            [
                'title' => "Call of Duty: Warzone",
                'price' => 0,
                'original_price' => 25,
                'category' => "str",
                'image' => "assets/images/warzone.jpg",
                'genre' => "Battle Royale",
                'description' => "Massive combat arena with 150 players.",
                'long_description' => "Join the fight in Verdansk with tactical loadouts and intense battles.",
                'features' => json_encode(["Realistic gunplay", "Tactical strategy", "Squad-based play"]),
                'tags' => json_encode(["Shooter", "Multiplayer"]),
                'reviews' => "Rated 4.6/5 by players"
            ],
            [
                'title' => "Minecraft",
                'price' => 26,
                'original_price' => 30,
                'category' => "adv",
                'image' => "assets/images/minecraft.jpg",
                'genre' => "Sandbox",
                'description' => "Build and explore blocky worlds.",
                'long_description' => "Craft, mine, and survive alone or with friends in infinite worlds.",
                'features' => json_encode(["Creative building", "Survival mode", "Multiplayer support"]),
                'tags' => json_encode(["Sandbox", "Adventure"]),
                'reviews' => "Rated 4.9/5 by players"
            ],
            [
                'title' => "Cyberpunk 2077",
                'price' => 29,
                'original_price' => 59,
                'category' => "adv",
                'image' => "assets/images/cyberpunk.jpg",
                'genre' => "RPG",
                'description' => "Enter the dark future of Night City.",
                'long_description' => "Cyberpunk 2077 is an open-world, action-adventure story set in a megalopolis...",
                'features' => json_encode(["Deep storytelling", "Open-world exploration", "Futuristic combat"]),
                'tags' => json_encode(["Sci-Fi", "RPG"]),
                'reviews' => "Rated 4.2/5 by players"
            ],
            [
                'title' => "God of War",
                'price' => 34,
                'original_price' => 60,
                'category' => "adv",
                'image' => "assets/images/gow.jpg",
                'genre' => "Action",
                'description' => "A new beginning for Kratos.",
                'long_description' => "Journey with Kratos and Atreus in a harsh Norse world.",
                'features' => json_encode(["Father-son narrative", "Brutal combat", "Mythical creatures"]),
                'tags' => json_encode(["Mythology", "Adventure"]),
                'reviews' => "Rated 4.9/5 by players"
            ],
            [
                'title' => "GTA V",
                'price' => 20,
                'original_price' => 40,
                'category' => "adv",
                'image' => "assets/images/gta.jpg",
                'genre' => "Open World",
                'description' => "Live the criminal life in Los Santos.",
                'long_description' => "Explore a sprawling open world with missions, heists, and chaos.",
                'features' => json_encode(["Open-world freedom", "Three main characters", "Online multiplayer"]),
                'tags' => json_encode(["Crime", "Adventure"]),
                'reviews' => "Rated 4.8/5 by players"
            ],
            [
                'title' => "The Witcher 3: Wild Hunt",
                'price' => 19,
                'original_price' => 50,
                'category' => "adv",
                'image' => "assets/images/witcher3.jpg",
                'genre' => "RPG",
                'description' => "Become a monster slayer for hire.",
                'long_description' => "Step into the shoes of Geralt of Rivia and explore a vast fantasy world.",
                'features' => json_encode(["Story-rich gameplay", "Dynamic weather", "Multiple endings"]),
                'tags' => json_encode(["Fantasy", "Story"]),
                'reviews' => "Rated 4.9/5 by players"
            ],
            [
                'title' => "FIFA 21",
                'price' => 25,
                'original_price' => 50,
                'category' => "rac",
                'image' => "assets/images/fifa21.jpg",
                'genre' => "Sports",
                'description' => "The latest installment in the FIFA soccer series.",
                'long_description' => "Play through realistic soccer matches with advanced AI and tactics.",
                'features' => json_encode(["Ultimate Team mode", "Career mode", "Stadiums from around the world"]),
                'tags' => json_encode(["Sports", "Multiplayer"]),
                'reviews' => "Rated 4.5/5 by players"
            ],
            [
                'title' => "Gran Turismo 7",
                'price' => 40,
                'original_price' => 60,
                'category' => "rac",
                'image' => "assets/images/gt7.jpg",
                'genre' => "Racing",
                'description' => "The most realistic driving simulator.",
                'long_description' => "Experience authentic cars and circuits with an amazing attention to detail.",
                'features' => json_encode(["Realistic car physics", "Wide selection of cars", "Dynamic weather conditions"]),
                'tags' => json_encode(["Cars", "Simulation"]),
                'reviews' => "Rated 4.7/5 by players"
            ],
            [
                'title' => "Red Dead Redemption 2",
                'price' => 35,
                'original_price' => 60,
                'category' => "adv",
                'image' => "assets/images/rdr2.jpg",
                'genre' => "Action-Adventure",
                'description' => "The open-world western adventure.",
                'long_description' => "Join Arthur Morgan as he navigates the challenges of the wild west.",
                'features' => json_encode(["Story-driven gameplay", "Open-world exploration", "Realistic environments"]),
                'tags' => json_encode(["Western", "Action"]),
                'reviews' => "Rated 4.9/5 by players"
            ],
            [
                'title' => "Madden NFL 21",
                'price' => 30,
                'original_price' => 50,
                'category' => "str",
                'image' => "assets/images/madden21.jpg",
                'genre' => "Sports",
                'description' => "The most intense football game experience.",
                'long_description' => "Play as your favorite NFL team or create your own superstar.",
                'features' => json_encode(["Franchise mode", "Ultimate Team mode", "Stadium authenticity"]),
                'tags' => json_encode(["Football", "Simulation"]),
                'reviews' => "Rated 4.4/5 by players"
            ],
            [
                'title' => "Battlefield V",
                'price' => 20,
                'original_price' => 40,
                'category' => "str",
                'image' => "assets/images/bfv.jpg",
                'genre' => "First-Person Shooter",
                'description' => "The brutal battles of WWII.",
                'long_description' => "Fight across iconic locations in this immersive multiplayer shooter.",
                'features' => json_encode(["Epic multiplayer battles", "Tactical squad gameplay", "Destructive environments"]),
                'tags' => json_encode(["Shooter", "War"]),
                'reviews' => "Rated 4.3/5 by players"
            ],
            [
                'title' => "WRC 10",
                'price' => 40,
                'original_price' => 60,
                'category' => "rac",
                'image' => "assets/images/wrc10.jpg",
                'genre' => "Racing",
                'description' => "The official World Rally Championship game.",
                'long_description' => "Race on real-life rally tracks with extreme conditions.",
                'features' => json_encode(["Official cars and teams", "Realistic weather effects", "Multiple game modes"]),
                'tags' => json_encode(["Racing", "Sports"]),
                'reviews' => "Rated 4.6/5 by players"
            ],
            [
                'title' => "Rocket League",
                'price' => 15,
                'original_price' => 20,
                'category' => "str",
                'image' => "assets/images/rocketleague.jpg",
                'genre' => "Sports",
                'description' => "Soccer with cars!",
                'long_description' => "Play with friends or strangers in fast-paced, physics-driven matches.",
                'features' => json_encode(["Team-based gameplay", "Multiple stadiums", "Customizable cars"]),
                'tags' => json_encode(["Sports", "Multiplayer"]),
                'reviews' => "Rated 4.8/5 by players"
            ],
            [
                'title' => "F1 2021",
                'price' => 30,
                'original_price' => 60,
                'category' => "rac",
                'image' => "assets/images/f1_2021.jpg",
                'genre' => "Racing",
                'description' => "Formula 1 racing action at its finest.",
                'long_description' => "Race through the most prestigious tracks in the world with real F1 teams.",
                'features' => json_encode(["Career mode", "Two-player split screen", "Online multiplayer"]),
                'tags' => json_encode(["Racing", "Simulation"]),
                'reviews' => "Rated 4.7/5 by players"
            ],
            [
                'title' => "Watch Dogs: Legion",
                'price' => 25,
                'original_price' => 50,
                'category' => "adv",
                'image' => "assets/images/watchdogs.jpg",
                'genre' => "Action-Adventure",
                'description' => "Fight for freedom in a futuristic London.",
                'long_description' => "Recruit anyone in London to join your resistance against a corrupt system.",
                'features' => json_encode(["Open-world gameplay", "Hack everything", "Recruit any character"]),
                'tags' => json_encode(["Hacking", "Open World"]),
                'reviews' => "Rated 4.4/5 by players"
            ],
            [
                'title' => "NBA 2K21",
                'price' => 30,
                'original_price' => 60,
                'category' => "str",
                'image' => "assets/images/nba2k21.jpg",
                'genre' => "Sports",
                'description' => "The definitive basketball simulation game.",
                'long_description' => "Experience fast-paced basketball action with real teams and players.",
                'features' => json_encode(["MyCareer mode", "Play with friends", "Realistic gameplay"]),
                'tags' => json_encode(["Basketball", "Sports"]),
                'reviews' => "Rated 4.5/5 by players"
            ]
        ];
    }
}
