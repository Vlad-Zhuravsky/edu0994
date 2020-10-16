<?

class Cat {
    public $age;
    public $weight;
    public $strength;

    function __construct() {
    }

    function fight($anotherCat) {
     $count_cat1=0; 
     $count_cat2=0;
     
     $this->age > $anotherCat->age ? $count_cat1++ : $count_cat2++;
     $this->weight > $anotherCat->weight ? $count_cat1++ : $count_cat2++;
     $this->strength > $anotherCat->strength ? $count_cat1++ : $count_cat2++;
     
     return $count_cat1>$count_cat2;
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

$result = $cat1->fight($cat2);

echo $result?"Winner Cat1":"Winner Cat2"

?>
