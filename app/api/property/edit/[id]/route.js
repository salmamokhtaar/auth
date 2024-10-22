import Property from '@/models/Property';
import connectDb from '@/utils/connectDb';

export async function PATCH(req, { params }) {
  await connectDb();
  const { id } = params;
  const { title, description, price } = await req.json();

  const updatedProperty = await Property.findByIdAndUpdate(id, { title, description, price }, { new: true });
  
  if (!updatedProperty) {
    return new Response(JSON.stringify({ error: 'Property not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(updatedProperty), { status: 200 });
}