import Property from '@/models/Property';
import connectDb from '@/utils/connectDb';

export async function POST(req) {
  await connectDb();
  const { title, description, price, owner } = await req.json();

  const newProperty = new Property({
    title,
    description,
    price,
    owner,
  });

  await newProperty.save();
  
  return new Response(JSON.stringify(newProperty), { status: 201 });
}