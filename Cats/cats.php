<?

class Cat {
    public $age;
    public $weight;
    public $strength;

    function __construct() {
    }

    function fight($anotherCat) {
     if ($this->age < $anotherCat->age || $this->weight > $anotherCat->weight || $this->strength > $anotherCat->strength){
       true;
       echo "win";
     }else{
       false; 
       echo "lose";
     } 
    }
}

$cat1 = new Cat();
$cat1->age = 10;
$cat1->weight=2;
$cat1->strength=12;

$cat2 = new Cat();
$cat2->age = 3;
$cat2->weight=5;
$cat2->strength=10;

$cat1->fight($cat2);

?>
