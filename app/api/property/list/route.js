import Property from '@/models/Property';
import connectDb from '@/utils/connectDb';

export async function GET(req) {
  await connectDb();
  
  const properties = await Property.find().populate('owner', 'name email');
  return new Response(JSON.stringify(properties), { status: 200 });
}