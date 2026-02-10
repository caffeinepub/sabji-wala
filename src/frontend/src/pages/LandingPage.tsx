import { BrandHeader } from '../components/BrandHeader';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Leaf, ShoppingBasket, Truck, Heart, CheckCircle2, Sprout } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function LandingPage() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'sabji-wala';

  return (
    <div className="min-h-screen flex flex-col">
      <BrandHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-sm font-medium px-4 py-1.5">
                    <Sprout className="h-3.5 w-3.5 mr-1.5 inline" />
                    Fresh from Farm to Your Table
                  </Badge>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    Fresh Vegetables,
                    <span className="text-primary block mt-2">Delivered Daily</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                    Experience the finest selection of farm-fresh vegetables, handpicked with care and delivered to your doorstep with love.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="text-base px-8 shadow-lg hover:shadow-xl transition-shadow">
                    <ShoppingBasket className="mr-2 h-5 w-5" />
                    Explore Fresh Produce
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Fresh Guarantee</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Available</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">5★</div>
                    <div className="text-sm text-muted-foreground">Rated Service</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <img 
                  src="/assets/generated/sabji-wala-hero.dim_1600x900.png" 
                  alt="Fresh vegetables and produce" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Freshness Promise Section */}
        <section id="freshness" className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-sm font-medium px-4 py-1.5">
                <Leaf className="h-3.5 w-3.5 mr-1.5 inline text-primary" />
                Our Commitment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The Freshness Promise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We guarantee the highest quality vegetables, sourced directly from trusted local farms and delivered with care.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Farm Fresh Daily</CardTitle>
                  <CardDescription>
                    Vegetables picked fresh every morning from our partner farms, ensuring maximum nutrition and flavor.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quality Checked</CardTitle>
                  <CardDescription>
                    Every item is carefully inspected by our quality team to meet our strict freshness standards.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Handled with Care</CardTitle>
                  <CardDescription>
                    From farm to your kitchen, we handle each vegetable with the utmost care to preserve its freshness.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-28">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-sm font-medium px-4 py-1.5">
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting fresh vegetables has never been easier. Follow these simple steps.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Browse Selection</h3>
                  <p className="text-muted-foreground">
                    Explore our wide variety of fresh vegetables and seasonal produce.
                  </p>
                </div>
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Place Your Order</h3>
                  <p className="text-muted-foreground">
                    Select your items and choose your preferred delivery time slot.
                  </p>
                </div>
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Receive Fresh</h3>
                  <p className="text-muted-foreground">
                    Get your fresh vegetables delivered right to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose" className="py-20 md:py-28 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-sm font-medium px-4 py-1.5">
                Why Sabji wala
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to bringing you the best produce experience with unmatched quality and service.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Truck className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">Fast Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Same-day delivery available for orders placed before noon.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Leaf className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">100% Organic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All our vegetables are grown without harmful pesticides.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">Customer First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our priority with hassle-free returns.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShoppingBasket className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">Wide Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Over 100+ varieties of fresh vegetables and produce.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/generated/sabji-wala-logo.dim_512x512.png" 
                  alt="Sabji wala" 
                  className="h-8 w-8 rounded-lg"
                />
                <span className="font-bold text-lg">Sabji wala</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fresh vegetables delivered daily with love and care.
              </p>
              <div className="flex gap-3">
                <a href="#" className="h-9 w-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                  <SiFacebook className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                  <SiInstagram className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors">
                  <SiX className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#freshness" className="hover:text-foreground transition-colors">Our Promise</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#why-choose" className="hover:text-foreground transition-colors">Why Choose Us</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Sabji wala. All rights reserved. Built with <Heart className="inline h-4 w-4 text-destructive" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
