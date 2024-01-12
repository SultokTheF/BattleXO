interface User {
  username: string;
  email: string;
  role: 'user' | 'admin' | 'other'; // Replace 'other' with the actual values in your ROLES constant
  user_level: number;
}

export default User;
