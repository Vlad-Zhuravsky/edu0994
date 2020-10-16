<?
header('Content-Type: text/html; charset=utf-8');
abstract class Animal {
  private $nickname;
  private $age;
  private $breed;
  
  function __construct($nick, $age, $breed){
    $this->nickname = $nick;
    $this->age = $age;
    $this->breed = $breed;
  }
  function getNickname(){return $this->nickname;}
  function getAge(){return $this->age;}
  function getBreed(){return $this->breed;}
}

class Horse extends Animal {
  function run(){
    echo "Игого, я поскакал(а)";
  }
}

class Pegause extends Horse {
  function fly(){
    echo "Игого, я полетел(а)";
  }
}

$horse = new Horse("Idalgo",5,null);
$horse->run();

$pegause = new Pegause("Fernal",7,null);
$pegause->fly();

?>
