export default function TestimonialCard({
  name,
  role,
  message,
  image,
  rating,
}) {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center">
        <img src={image} alt={name} className="mr-4 h-14 w-14 rounded-full" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      {/* Stars row */}
      <div className="mb-2 flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>
      <p className="text-gray-700">“{message}”</p>
    </div>
  );
}
