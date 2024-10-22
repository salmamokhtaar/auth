import bcrypt from 'bcrypt';
import User from '@/models/User';
import connectDb from '@/utils/connectDb'

export async function POST(req) {
  await connectDb();
  
  const { name, email, password, role } = await req.json();
  
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role: role || 'User',
  });

  await newUser.save();

  return new Response(JSON.stringify({ message: 'User created successfully', user: newUser }), { status: 201 });
}