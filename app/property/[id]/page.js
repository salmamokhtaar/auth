export default function PropertyDetail({ params }) {
    const { id } = params;
    
    // Fetch the property by ID and display it
    return (
      <div className="p-4">
        <h1>Property Detail: {id}</h1>
      </div>
    );
  }