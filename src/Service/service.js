const getAllUsersData = async () => {
    try {
        return await fetch('https://gorest.co.in/public/v1/users')
    }
    catch (error) {
        console.log("error in method get all users" + error)
    }
}
export default getAllUsersData;