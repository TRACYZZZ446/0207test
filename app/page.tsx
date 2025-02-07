import { Marquee } from "@/components/marquee";
import { IconCloud } from "@/components/icon-cloud";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { Button } from "@/components/ui/button";
import { 
  PersonIcon, 
  RocketIcon, 
  LockClosedIcon, 
  GlobeIcon 
} from "@radix-ui/react-icons";

export default function Home() {
  // 使用一些女性力量相关的图标
  const empowermentIcons = [
    "/icons/crown.svg",
    "/icons/diamond.svg",
    "/icons/star.svg",
    "/icons/heart.svg",
    "/icons/lightning.svg",
    "/icons/rocket.svg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-purple-100 dark:from-purple-950 dark:via-pink-950 dark:to-purple-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Ms Alpha
          </h1>
          <Marquee className="bg-white/10 backdrop-blur-sm rounded-2xl my-8 py-6" pauseOnHover>
            <p className="text-3xl font-light text-purple-800 dark:text-pink-200 px-8">
              The Future is Fierce • The Future is Female • Lead with Grace • Move with Purpose • Win with Strategy
            </p>
          </Marquee>
          <div className="flex justify-center gap-4 mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Join Sisterhood
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <BentoGrid className="max-w-7xl mx-auto">
            <BentoCard
              name="About Ms Alpha"
              className="col-span-2 row-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-900/50 dark:to-pink-900/50" />}
              Icon={PersonIcon}
              description="Born on the Solana blockchain, Ms Alpha is the epitome of elegance, strategy, and unstoppable determination."
              href="#about"
              cta="Discover More"
            />
            <BentoCard
              name="Tokenomics"
              className="col-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 dark:from-pink-900/50 dark:to-purple-900/50" />}
              Icon={LockClosedIcon}
              description="Total Supply: 1 Billion | Tax: ZERO"
              href="#tokenomics"
              cta="View Details"
            />
          </BentoGrid>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-20 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-800 dark:text-pink-200 mb-16">
            How to Buy
          </h2>
          <Marquee 
            className="bg-white/5 backdrop-blur-sm rounded-xl py-8" 
            pauseOnHover
          >
            {[
              {
                title: "Create a Wallet",
                desc: "Download Phantom or any Solana-compatible wallet",
                icon: PersonIcon
              },
              {
                title: "Get Some SOL",
                desc: "Purchase SOL from major exchanges",
                icon: RocketIcon
              },
              {
                title: "Go to Raydium",
                desc: "Connect your wallet to Raydium DEX",
                icon: LockClosedIcon
              },
              {
                title: "Join Sisterhood",
                desc: "Swap for $MsAlpha and join the movement",
                icon: GlobeIcon
              }
            ].map((step, i) => (
              <div key={i} className="mx-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-[320px] transform transition-all hover:scale-105">
                <step.icon className="w-8 h-8 mb-4 text-purple-500 dark:text-pink-400" />
                <h3 className="text-xl font-bold text-purple-700 dark:text-pink-300 mb-3">
                  {step.title}
                </h3>
                <p className="text-purple-600 dark:text-pink-200">
                  {step.desc}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Icon Cloud Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-12">
          <IconCloud images={empowermentIcons} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-900/10 backdrop-blur-md py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-purple-600 dark:text-pink-200">© 2024 Ms Alpha</p>
            <div className="flex gap-6">
              <Button variant="ghost" className="text-purple-600 dark:text-pink-200">
                Twitter
              </Button>
              <Button variant="ghost" className="text-purple-600 dark:text-pink-200">
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
