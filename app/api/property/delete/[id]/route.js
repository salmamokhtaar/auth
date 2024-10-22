import Property from '@/models/Property';
import connectDb from '@/utils/connectDb';

export async function DELETE(req, { params }) {
  await connectDb();
  const { id } = params;

  const deletedProperty = await Property.findByIdAndDelete(id);
  
  if (!deletedProperty) {
    return new Response(JSON.stringify({ error: 'Property not found' }), { status: 404 });
  }

  return new Response(JSON.stringify({ message: 'Property deleted' }), { status: 200 });
}