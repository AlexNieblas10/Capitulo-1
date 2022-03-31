dinero1 = prompt('Ingrese el dinero que tiene el Cofla')
dinero2 = prompt('Ingrese el dinero que tiene el Roberto')
dinero3 = prompt('Ingrese el dinero que tiene el Pedro')

dineroCofla = parseInt(dinero1);

if (dinero1 >= 0.6 && dinero1 < 1){
    alert('compra el helado de agua')
    alert("y te sobran" + (dinero1 - 0.6));
}

else if (dinero1 >= 1 && dinero1 < 1.6){
    alert('cofla el helado mas caro para ti es el de crema')
    alert("y te sobran" + (dinero1 - 1));
}

else if (dinero1 >= 1.6 && dinero1 < 1.7){
    alert('cofla el helado mas caro para ti es el heladix')
    alert("y te sobran" + (dinero1 - 1.6));
}

else if (dinero1 >= 1.7 && dinero1 < 1.8){
    alert('cofla el helado mas caro para ti es el heladovich')
    alert("y te sobran" + (dinero1 - 1.7));
}

else if (dinero1 >= 1.8 && dinero1 < 2.9){
    alert('cofla el helado mas caro para ti es el helardo')
    alert("y te sobran" + (dinero1 - 1.8));
}

else if (dinero1 >= 2.9){
    alert('cofla el helado mas caro para ti es el de 1/4 de kilo o el confites')
    alert("y te sobran" + (dinero1 - 2.9))
}

else{
    alert('cofla no te alcanza para nada')
}


if (dinero2 >= 0.6 && dinero2 < 1){
    alert('Roberto compra el helado de agua')
}

else if (dinero2 >= 1 && dinero2 < 1.6){
    alert('Roberto el helado mas caro para ti es el de crema')
}

else if (dinero2 >= 1.6 && dinero2 < 1.7){
    alert('Roberto el helado mas caro para ti es el heladix')
}

else if (dinero2 >= 1.7 && dinero2 < 1.8){
    alert('Roberto el helado mas caro para ti es el heladovich')
}

else if (dinero2 >= 1.8 && dinero2 < 2.9){
    alert('Roberto el helado mas caro para ti es el helardo')
}

else if (dinero2 >= 2.9){
    alert('Roberto el helado mas caro para ti es el de 1/4 de kilo o el confites')
}

else{
    alert('Roberto no te alcanza para nada')
}

if (dinero3 >= 0.6 && dinero3 < 1){
    alert('Pedro compra el helado de agua')
}

else if (dinero3 >= 1 && dinero3 < 1.6){
    alert('Pedro el helado mas caro para ti es el de crema')
}

else if (dinero3 >= 1.6 && dinero3 < 1.7){
    alert('Pedro el helado mas caro para ti es el heladix')
}

else if (dinero3 >= 1.7 && dinero3 < 1.8){
    alert('Pedro el helado mas caro para ti es el heladovich')
}

else if (dinero3 >= 1.8 && dinero3 < 2.9){
    alert('Pedro el helado mas caro para ti es el helardo')
}

else if (dinero3 >= 2.9){
    alert('Pedro el helado mas caro para ti es el de 1/4 de kilo o el confites')
}

else{
    alert('Pedro no te alcanza para nada')
}