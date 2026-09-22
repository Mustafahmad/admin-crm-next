export default function CustomerNotFound() {
    return (
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Customer not found
        </h2>
  
        <p className="mt-2 text-sm text-muted">
          The customer you're looking for doesn't exist.
        </p>
      </div>
    );
  }