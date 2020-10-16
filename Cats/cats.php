<?

class Cat {
    public $age;
    public $weight;
    public $strength;

    function __construct() {
    }

    function fight($anotherCat) {
     if ($this->age > $anotherCat->age || $this->weight > $anotherCat->weight || $this->strength > $anotherCat->strength){
       true;
     }else false; 
      
    }
}

$cat1 = new Cat(4,4,4);
$cat2 = new Cat(3,3,3);

$cat1->fight($cat2);

?>
