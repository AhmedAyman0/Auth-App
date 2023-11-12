import axios from "axios";

class UserService {
    private readonly BASE_URL = "http://localhost:3000/users"
    public async register(user) {
        console.log("user", user)
        return await axios.post(`${this.BASE_URL}`, user);
    }
}

export default new UserService();