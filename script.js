const sayHello = function (hello = 'Hello', endMark = '!') {
    // console.log(this)
    const sentence = hello + ' ' + this.firstName + ' ' + this.lastName + endMark
    console.log(sentence)
    return sentence
}

sayHello()
sayHello('Cześć', '!!!')

const me = {
    firstName: 'Mateusz',
    lastName: 'Choma',
    sayHello: sayHello,
}

me.sayHello()
me.sayHello('Cześć', '!!!')

const person1 = {
    firstName: 'Ala',
    lastName: 'Kotowicz',
}

sayHello.call(person1)
sayHello.call(person1, 'Cześć', '!!!')

sayHello.apply(person1)
sayHello.apply(person1, ['Cześć', '!!!'])
const args = ['Cześć', '!!!']
sayHello.apply(person1, args)


// apply and call do not change function only call it!
sayHello()
sayHello('Cześć', '!!!')

const sayHelloBound = sayHello.bind(person1)

// bind also do not change original function
sayHello()
sayHello('Cześć', '!!!')

// bounded function can't change context from now
sayHelloBound()
sayHelloBound('Cześć', '!!!')

const person2 = {
    firstName: 'Ola',
    lastName: 'Kotowiczówna',
}

sayHelloBound.call(person2)
sayHelloBound.call(person2, 'Cześć', '!!!')
sayHelloBound.apply(person2)
sayHelloBound.apply(person2, ['Cześć', '!!!'])