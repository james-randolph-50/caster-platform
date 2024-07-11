import Image from "../../node_modules/next/image";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
          <main className="relative h-screen w-full">
            <div className="absolute size-full">
              <Image src="/images/bg-img.png" width="300" height="300" alt="background" full className="size-full" />
            </div> 
              {children} 
          </main>
    );
  }
  