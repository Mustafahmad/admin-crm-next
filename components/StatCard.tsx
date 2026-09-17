type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      <p className="text-sm text-gray-500 font-medium text-gray-900">{title}</p>

      <h3 className="text-3xl font-bold mt-2 text-gray-900">{value}</h3>
    </div>
  );
}
