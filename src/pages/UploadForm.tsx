import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const UploadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: new Date().toISOString().split("T")[0],
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.location || !formData.image) {
      toast.error("Bitte fülle alle Pflichtfelder aus");
      return;
    }

    toast.success("Fundstück erfolgreich hochgeladen!");
    setTimeout(() => {
      navigate("/gallery");
    }, 1500);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="gradient-hero border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">
              Lost and Found<span className="text-primary">.</span>
            </h1>
            <div className="w-24" /> {/* Spacer */}
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Fundstück melden</h2>
            <p className="text-muted-foreground">
              Hilf anderen, ihre verlorenen Gegenstände wiederzufinden
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image">Foto des Fundstücks *</Label>
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-base bg-card shadow-soft">
                {imagePreview ? (
                  <div className="space-y-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData({ ...formData, image: null });
                      }}
                    >
                      Bild ändern
                    </Button>
                  </div>
                ) : (
                  <label htmlFor="image" className="cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Klicke oder ziehe ein Bild hierher
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG bis zu 10MB
                    </p>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Was wurde gefunden? *</Label>
              <Input
                id="title"
                placeholder="z.B. AirPods, Wasserflasche, Schlüssel..."
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="h-12 shadow-soft"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Beschreibung (optional)</Label>
              <Textarea
                id="description"
                placeholder="Zusätzliche Details zum Fundstück..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="min-h-24 shadow-soft"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">
                <MapPin className="inline h-4 w-4 mr-1" />
                Wo wurde es gefunden? *
              </Label>
              <Input
                id="location"
                placeholder="z.B. Bibliothek, Mensa, Hörsaal A3..."
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="h-12 shadow-soft"
                required
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label htmlFor="date">
                <Calendar className="inline h-4 w-4 mr-1" />
                Funddatum *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="h-12 shadow-soft"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="xl"
              className="w-full"
            >
              Fundstück hochladen
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UploadForm;
