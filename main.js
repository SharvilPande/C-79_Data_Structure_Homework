pizza_menu = [];

function menu_show() {
 
    var menu_1=("1. Chicken Tandoori Pizza");
    var menu_2=("2. Deluxe Veggie Pizza");
    var menu_3=("3. Paneer Tikka Pizza");
    var menu_4=("4. Veg Extravaganza Pizza");
    var menu_5=("5. Veg Supreme Pizza");
    pizza_menu.push(menu_1);
    pizza_menu.push(menu_2);
    pizza_menu.push(menu_3);
    pizza_menu.push(menu_4);
    pizza_menu.push(menu_5);
    var array = "";
    for (i=0; i<pizza_menu.length; i++){
        array = array + pizza_menu[i] + "<br>";
        document.getElementById("options").innerHTML=array;
    }
    document.getElementById("options").style.display="inline-block";
}

function add_pizza() 
{
    pizza_add_menu = [];
    var menu_11 =("Chicken Tandoori Pizza");
    var menu_12=("Deluxe Veggie Pizza");
    var menu_13=("Paneer Tikka Pizza");
    var menu_14=("Veg Extravaganza Pizza");
    var menu_15=("Veg Supreme Pizza");
    pizza_add_menu.push(menu_11);
    pizza_add_menu.push(menu_12);
    pizza_add_menu.push(menu_13);
    pizza_add_menu.push(menu_14);
    pizza_add_menu.push(menu_15);
    add = ""
    var input=document.getElementById("pizza_name").value;
    console.log(input);
    pizza_add_menu.push(input);
    pizza_add_menu.sort();
    for ( j=0; j<pizza_add_menu.length; j++)
     {
       add = add + "<div>" + pizza_add_menu[j] + "</div>";
       }
    document.getElementById("display_addmenu").innerHTML=add;
    
}
