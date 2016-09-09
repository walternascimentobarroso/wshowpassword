var password = document.querySelectorAll('input[type="password"]');
for(var i=0;i<password.length;i++) {
  if(password[i].type) {
    password[i].type="text";
  }
};
alert("Asteristicos Liberado!");
