import { useEffect, useRef, useState } from "react";
import Robot3D from "./Robot3D";
import { gsap } from "gsap";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("");
  const overlayRef = useRef(null);
  const loadingTextRef = useRef(null);
  const heroTextRef = useRef(null);
  const descriptionRef = useRef(null);

  const greetings = [
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "Halo", // Indonesian
    "你好", // Mandarin
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Ciao", // Italian
    "Olá", // Portuguese
    "Здраво", // Serbian
    "שלום", // Hebrew
    "Aloha", // Hawaiian
  ];

  useEffect(() => {
    const overlay = overlayRef.current;
    const loadingText = loadingTextRef.current;
    const heroText = heroTextRef.current;
    const description = descriptionRef.current;

    gsap.set(overlay, { backgroundColor: "black" });
    gsap.set(loadingText, { opacity: 0, scale: 0.5 });
    gsap.set(heroText.children, { y: 50, opacity: 0 });
    gsap.set(description, { width: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        revealHeroText();
      },
    });

    tl.to(loadingText, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    })
      .to(loadingText, {
        y: "-50vh",
        duration: 1.5,
        ease: "power3.inOut",
      })
      .to(
        overlay,
        {
          y: "-100%",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.5"
      );

    const revealHeroText = () => {
      const heroTl = gsap.timeline();

      heroTl
        .to(heroText.children, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        })
        .to(description, {
          width: "100%",
          duration: 2,
          ease: "power3.inOut",
        });
    };

    let index = 0;
    const interval = setInterval(() => {
      setGreeting(greetings[index]);
      index = (index + 1) % greetings.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-primary-100 pb-10">
      <div className="flex  flex-col sm:gap-20 gap-5 sm:mx-16 mx-5">
        {loading && (
          <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div ref={loadingTextRef} className="w-4/5 text-white">
              <h1 className="font-bold sm:text-8xl text-6xl font-montserrat">
                WELCOME TO MY
                <br />
                PORTFOLIO <br />
                <span className="light opacity-50 font-montserrat">
                  FROM
                </span>{" "}
                LEONARDO!
              </h1>
            </div>
          </div>
        )}
        <div className="lg:w-full w-full overflow-hidden">
          <h1
            ref={heroTextRef}
            className="bold sm:text-8xl text-center text-6xl"
          >
            <div className="font-montserrat">{greeting.toUpperCase()}</div>
          </h1>
        </div>
        <div>
          <Robot3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;
