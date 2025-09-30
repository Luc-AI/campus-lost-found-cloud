import { Link } from "react-router-dom";
import { Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Lost and Found<span className="text-primary">.</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
              In the Cloud<span className="text-primary">.</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Finde Verlorenes. Teile Gefundenes. Einfach in der Cloud.
          </p>

          {/* Illustration */}
          <div className="my-12 md:my-16">
            <img
              src={heroIllustration}
              alt="Lost and Found Illustration"
              className="mx-auto max-w-2xl w-full h-auto rounded-3xl shadow-card"
            />
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/gallery" className="block">
              <Button
                variant="hero"
                size="xl"
                className="w-full group"
              >
                <Search className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold text-lg">Ich habe etwas verloren</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    Zur Fundstück-Galerie
                  </div>
                </div>
              </Button>
            </Link>

            <Link to="/upload" className="block">
              <Button
                variant="hero"
                size="xl"
                className="w-full group"
              >
                <Upload className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold text-lg">Ich habe etwas gefunden</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    Fundstück melden
                  </div>
                </div>
              </Button>
            </Link>
          </div>

          {/* Info Text */}
          <div className="pt-8 text-sm text-muted-foreground max-w-xl mx-auto space-y-2">
            <p>
              🎓 Der smarte Lost & Found Service für deinen Campus
            </p>
            <p>
              Schnell, einfach und kostenlos – für Studierende gemacht
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Lost and Found. In the Cloud. – Dein Campus Fundservice
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
