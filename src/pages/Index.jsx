import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold mb-4 text-foreground">Blank App</h1>
      <p className="text-xl text-muted-foreground mb-8">Your new project starts here</p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Index;
