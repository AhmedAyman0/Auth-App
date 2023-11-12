import axios from "axios";

class AuthService {
    private readonly BASE_URL = "http://localhost:3000/auth"
    public async login(user) {
        console.log("user")
        user = {
            ...user,
            username: user.email,
        }
        return await axios.post(`${this.BASE_URL}/login`, user);
    }
}

export default new AuthService();