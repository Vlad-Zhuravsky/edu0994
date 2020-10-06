<?
header('Content-Type: text/html; charset=utf-8');
class Person{
  private $name;
  private $lastname;
  private $age;
  private $mother;
  private $father;
  function __construct($name,$lastname,$age,$mother=null,$father=null){
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
  }
	public function getName(){return $this->name;}
	public function getLastname(){return $this->lastname;}
	public function getAge(){return $this->age;}
	public function getMother(){return $this->mother;}
	public function getFather(){return $this->father;}
	public function getInfo(){
	  return "
	    Меня зовут: ".$this->name."<br>
	    Мою маму зовут: ".$this->mother->name."<br>
	    Моего папу зовут: ".$this->getFather()->getName()."<br>
	    Моих бабушек зовут: ".$this->getMother()->mother->name." и ".$this->getFather()->mother->name."<br>
	    Моих дедушек зовут: ".$this->getFather()->getFather()->name." и ".$this->getMother()->father->name;
	}
}
$petr = new Person("Петр","Петров",71);
$masha = new Person("Маша","Петрова",69);
$gleb = new Person("Глеб","Сидоров",72);
$ira = new Person("Ира","Сидорова",70);
$oleg = new Person("Олег","Петров",41,$masha,$petr);
$olga = new Person("Ольга","Петрова",41,$ira,$gleb);
$igor = new Person("Игорь","Петров",12,$olga,$oleg);
echo $igor->getInfo();
?>
