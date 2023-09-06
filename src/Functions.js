function CheckEmailCredibility (email){
    const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(regex.test(email))
    return regex.test(email);
}

export { CheckEmailCredibility };