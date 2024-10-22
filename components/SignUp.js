export default async function SignUp() {
    return (
        <div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
  <form className="max-w-md mx-auto">
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
      <input type="text" id="username" name="username" placeholder="Enter your username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div className="mb-4">
      <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role</label>
      <select id="role" name="role" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="User">User</option>
        <option value="Agency">Agency</option>
        <option value="Agent">Agent</option>
      </select>
    </div>
    <div className="mb-4">
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Sign Up</button>
    </div>
    <p className="text-center text-gray-500">Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-600">Log In</a></p>
  </form>
</div>
    )
}