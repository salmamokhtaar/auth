export default function EditProperty({ params }) {
    const { id } = params;
  
    return (
      <div className="p-4">
        <h1>Edit Property: {id}</h1>
        {/* Form to edit property */}
      </div>
    );
  }