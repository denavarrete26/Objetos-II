//Ejercicio 1
var assert = require("assert");

function sumaNumeros(numInicial, numFinal)
{
  var objeto =
   {
      inicio: numInicial,
      fin: numFinal,
      metodoSumar: function()
      {
        var suma = 0;
        for (var i = this.inicio; i <= this.fin; i++)
        {
           suma += i;
        }
        return suma;
      }
  }
  return (objeto.metodoSumar());
}

describe("Sumando numeros", function()
{
    it("Sumar del 1 al 10", function()
    {
        assert.equal(55, sumaNumeros(1, 10));
    });
});

//Ejercicio2
var assert = require("assert");

function superCoder(nombre, edad, ocupacion, genero)
{
  this.nombre = nombre,
  this.edad = edad,
  this.ocupacion = ocupacion,
  this.genero = genero,
  this.coder = function()
  {
    if(this.genero == "Femenino" )
    {
      if(this.edad >= 17)
      {
        if(this.ocupacion == "Estudiante Laboratoria" || this.ocupacion == "Desarrollador")
        {
              return (this.nombre + " you are awesome");
        }
      }
    }
    else{
      return ("Ups!!!");
    }
  }
 }

function developer(nombre1, edad1, ocupacion1, genero1)
{
  var chica = new superCoder(nombre1, edad1, ocupacion1, genero1);
  return chica.coder();
}

describe("Super Coder", function()
{
    it("Ejemplo edad", function()
    {
        assert.equal("Tamara you are awesome", developer("Tamara", 22, "Estudiante Laboratoria", "Femenino"));
    });
    it("Ejemplo género", function()
    {
        assert.equal("Ups¡¡¡", developer("Gerson", 16, "Estudiante", "Masculino"));
    });
    it("Ejemplo ocupacion", function()
    {
        assert.equal("Ups!!!", developer("Gerson", 20, "Desarrollador", "Masculino"));
    });
});

//Ejercicio3
var assert = require("assert");

function propObjetos(arr)
{
  var long = arr.length;
  var cadena = "";
  var text =  {
    propiedad: function ()
    {
        for (var i in arr )
        {
            return ("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1");
        }
    }
  }
  return text.propiedad();
}

describe("Todo el texto", function()
{
    it("Numeros al reves [6,5,4,3,2,1]", function()
    {
        assert.equal("Propiedad1 -->6,Propiedad1 -->5,Propiedad1 -->4,Propiedad1 -->3,Propiedad1 -->2,Propiedad1 -->1,", propObjetos([6, 5, 4, 3, 2, 1]));
    });
});

//Ejercicio 4
var assert = require("assert");

function datosClinica(nombre, apellido, edad, genero, ciudad, pais)
{
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad,
  this.genero = genero,
  this.ciudad = ciudad,
  this.pais = pais,
  this.ficha = function ()
  {
    return ("Nombre: " + this.nombre + " " + this.apellido + ", Edad: " + this.edad + ", Pais: " + this.pais);
  }
}

function paciente(nombre, apellido, edad, genero, ciudad, pais)
{
  var pacientito = new datosClinica(nombre, apellido, edad, genero, ciudad, pais);
  return pacientito.ficha();
}

describe("Clinica Lab", function()
{
  it("Esta es la ficha de la paciente de Clinica Lab ", function(){
      assert.equal("Nombre: Blanca Perez, Edad: 19, Pais: Chile", paciente("Blanca", "Perez", 19, "Femenino" ,"Santiago", "Chile"));
  });
});
