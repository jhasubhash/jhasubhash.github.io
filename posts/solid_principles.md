---
title : "SOLID Principles"
date : "Mon 29 Dec 2021"
excerpt : "Set of rules each programmer should adhere to in order to make the code more secure, robust and extensible. This is my attempt to make it easier to understand with the help of simple examples."
cover_image : "/images/posts/solid.jpeg"
--- 

## The principles :
- Single-responsibility principle
- Open-Closed principle
- Liskov substitution principle
- Interface segregation principle
- Dependency inversion principle
<br/>
<br/>

### Single Responsibility Principle
---
A class should do one thing and therefore it should have only a single reason to change
```
class Vehicle {
	public:
	int speed;
	Engine* engine;
	int mileage;
	void changeSpeed();
	void changeDirection();
	void repair();            // Violate SRP
}

// FIX
class Garage {
	public:
	void repair(Vehicle* vehicle);
}
```
<br/>
<br/>

### Open Closed Principle
---
Classes should be open for extension and closed to modification.
```
class Garage {
	public:
	void repairLocal(Vehicle* vehicle);
	void repairBranded(Vehicle* vehicle); // Violate Open closed principle
}
// Addition of new tyep of repair will result into modfying the existing class.

//FIX
class Garage {
	public:
	virtual void rapair(Vehicle* vehicle) = 0;
}

class LocalGarage : public Garage {
	public:
	void repair(Vehicle* vehicle);  //Local repair
}

class BrandedGarage : public Garage {
	public:
	void repair(Vehicle* vehicle);  //Branded repair
}

```
<br/>
<br/>

### Liskov Substitution Principle
---
Subclasses should be substitutable for their base classes
> Liskov Substitution Principle is an extension of the Open Close Principle and is violated when you have written code that throws “not implemented exceptions” or you hide methods in a derived class that have been marked as virtual in the base class.
```
class Vehicle {
	public:
	virtual void changeGear();
}

class Scooti : public Vehicle {
	public:
	void changeGear(){
		throw("Not implemented"); //Violate Liskov substitution principle
	}
}

// FIX
class Vehicle {
}

class GearVehicle : public Vehicle {
	public:
	virtual void changeGear();
}

class NonGearVehicle : public Vehicle {
}

class Scooti : public NonGearVehicle {
}
```
<br/>
<br/>

### Interface Segregation Principle
---
Separating the interfaces
> The principle states that many client-specific interfaces are better than one general-purpose interface. Clients should not be forced to implement a function they do no need.
```
// FIX
class Vehicle { // Common Base Interface
}

class GearVehicle : public Vehicle { // Segregated Interface 1
	public:
	virtual void changeGear();
}

class NonGearVehicle : public Vehicle { // Segregated Interface 1
}

class Scooti : public NonGearVehicle { // Implement only what required
}
```
<br/>
<br/>

### LSP vs ISP
> LSP: The receiver must honor the contracts it promises.
ISP: The caller shouldn’t depend on more of the receiver’s interface than it needs.
Where they fit: If you apply the ISP, you use only a slice of the receiver’s full interface. But according to LSP, the receiver must still honor that slice. If you fail to apply ISP, there can be a temptation to violate LSP. Because “this method doesn’t matter, it won’t actually be called.”

Liskov Substitution addresses **Subtypes** design whereas Interface Segregation addresses **Basetypes** design.
<br/>
<br/>

### Dependency Inversion Principle
---
Our classes should depend upon interfaces or abstract classes instead of concrete classes and functions

```
class Vehicle {
}

class Car : public Vehicle {
}

class Garage {
public:
	void repair(Vehicle* vehicle); // depends on Vehicle interface rather then on Car
}
```