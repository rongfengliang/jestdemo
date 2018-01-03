module.exports = {
     sum:sum,
     deleteinfo:deleteinfo,
     addUser:addUser,
     divapp:divapp
};
module.exports.users=[];
function sum(a,b){
    return a+b;
};
function deleteinfo(a,b){
    return a-b
}
function divapp(a,b){
    return a/b;
}
function addUser(user){
    let users =[];
    users.push(user);
    users.push(user);
    users.push(user);
    users.push(user);
    return user;
}