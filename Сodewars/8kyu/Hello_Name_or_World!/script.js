function hello(name) {
    if (name.trim() !== '') {
        let newName = name.toLowerCase().split('')
        newName[0] = newName[0].toUpperCase()
        newName = newName.join('')
        return `Hello, ${newName}!`
    } else {
        return "Hello, World!"
    }
}

hello('sadasdasd')
