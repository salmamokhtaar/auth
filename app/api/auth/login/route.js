import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import connectDb from '@/utils/connectDb';

export async function POST(req) {
  await connectDb();
  
  const { email, password } = await req.json();
  const user = await User.findOne({ email });

  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }

  // Debug log
  console.log("JWT_SECRET:", process.env.JWT_SECRET);

  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return new Response(JSON.stringify({ token, user }), { status: 200 });
}
