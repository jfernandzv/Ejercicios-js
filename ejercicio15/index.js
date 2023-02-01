const users = [
    {username:'ppc90', age: 30, premium: false},
    {username:'lu65', age: 24, premium: false},
    {username:'maria3', age: 36, premium: false},
    {username:'abc123', age: 20, premium: true},
    {username:'sergio58', age: 26, premium: true},
];
users.filter(usuario => usuario.premium).map(usuario => console.log(`El usuario ${usuario.username} es premium`));

const usuariosNoPremium = users.filter(usuario => !usuario.premium).map(usuario=>usuario.username);
console.log(usuariosNoPremium);