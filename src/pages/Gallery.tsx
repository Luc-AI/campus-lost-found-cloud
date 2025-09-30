import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for found items
const foundItems = [
  {
    id: 1,
    title: "AirPods Pro",
    description: "Weiße AirPods Pro in Ladehülle gefunden",
    location: "Bibliothek, 2. Stock",
    date: "2025-09-28",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Blaue Hydro Flask",
    description: "Hellblaue Wasserflasche mit Stickern",
    location: "Mensa",
    date: "2025-09-29",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Schlüsselbund",
    description: "Schlüsselbund mit Teddy-Anhänger",
    location: "Sportplatz",
    date: "2025-09-27",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Notizbuch",
    description: "Schwarzes Moleskine Notizbuch",
    location: "Hörsaal A3",
    date: "2025-09-26",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Sonnenbrille",
    description: "Ray-Ban Sonnenbrille im schwarzen Etui",
    location: "Cafeteria",
    date: "2025-09-29",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    title: "USB-Stick",
    description: "64GB SanDisk USB-Stick",
    location: "Computerraum B12",
    date: "2025-09-25",
    image: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400&h=400&fit=crop",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="gradient-hero border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">
              Lost and Found<span className="text-primary">.</span>
            </h1>
            <div className="w-24" /> {/* Spacer for center alignment */}
          </div>
          
          {/* Search bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Suche nach Gegenständen..."
              className="pl-10 h-12 shadow-soft"
            />
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Gefundene Gegenstände</h2>
          <p className="text-muted-foreground">
            Durchsuche alle gefundenen Items auf dem Campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundItems.map((item) => (
            <article
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-base border border-border hover:border-primary/50"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-base hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">📍</span>
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">📅</span>
                    <span>{new Date(item.date).toLocaleDateString("de-DE")}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
