import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Nairobi, Kenya",
    price: "$500 / month",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Mombasa, Kenya",
    price: "$1,200 / month",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden shadow-lg">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-lg font-semibold">{property.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
