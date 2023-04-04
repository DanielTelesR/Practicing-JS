const prompt = require('prompt-sync')();

function main() {
  let op;

  do {
    console.log(`
    Welcome to our Anime Rating System

    1 - Receive feedback about your favorite anime;
    2 - Exit the program;`);

    op = Number(prompt('Select an option: '));

    switch (op) {
      case 1:
        const anime = prompt('Please enter your favorite anime: ');
        switch (anime) {
          case 'Naruto':
            console.log('Your favorite anime is Naruto!');
            prompt(`
Press enter to continue...`);
            console.clear();
            break;
          case 'Demon Slayer':
            console.log('Your favorite anime is Demon Slayer!');
            prompt(`
Press enter to continue...`);
            console.clear();
            break;
          case 'Boku no Hero':
            console.log('Your favorite anime is Boku no Hero!');
            prompt(`
Press enter to continue...`);
            console.clear();
            break;
          case 'One Piece':
            console.log('Why? One Piece is boring, man!');
            prompt(`
Press enter to continue...`);
            console.clear();
            break;
          case 'Attack on Titan':
            console.log('Great choice! AOT is awesome!');
            prompt(`
Press enter to continue...`);
            console.clear();
            break;
          case 'Jujutsu Kaisen':
            console.log('Best anime ever! Jujutsu Kaisen!');
            prompt(`
Press enter to continue...`);
            console.clear();
            break;
          default:
            console.log('Please enter a valid anime!');
        }
        break;
      case 2:
        console.log('Thanks for using the program!');
        break;
      default:
        console.log('Enter a valid option.');
        break;
    }
  } while (op !== 2);
}

main();
