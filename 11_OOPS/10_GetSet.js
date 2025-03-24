/* 
=> Use Getters and setters to encapsulate data, add validation, 
    compute derived values, and control property access in objects.
=> It is compulsory to setter and if getter is written
=> It is better to create a property by using undescore to avoid the 
    setter, getter race condition
=> Function behave in 2 ways, one is function and other is object.
=> Object.defineProperty: it is a property of getter and setter property, 
    Old code before classes it is used in function.
=> We need to write setters and getter, so that others cant access it. here
    underscore (_) define the private property, cant be used by normal user.
*/

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

/* 
The issue isn’t really a “race condition” but rather infinite recursion. 
When a getter or setter inadvertently accesses its own property (for 
example, using this.name inside the getter for name), it repeatedly calls 
itself, causing a stack overflow. By using an underscore (e.g., storing 
the value in this._name), you create a separate backing property that the 
getter and setter reference. This stops the recursive loop because accessing 
or modifying this._name does not trigger the getter or setter for name.
*/