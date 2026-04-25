"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { CreditCard, Globe, History, Repeat, Shield, Wallet, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="FinovaPay"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Innovative Digital Payments for Your Future"
      description="FinovaPay empowers small businesses and individuals with secure wallets, instant P2P transfers, and seamless online payment solutions designed for the modern economy."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-young-business-man-talking-phone-sitting-his-office-diagrams-monitor_482257-34736.jpg",
          imageAlt: "FinovaPay Digital Wallet",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169856.jpg",
          imageAlt: "Secure P2P Transfers",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-typing-laptop-sitting-home-with-automation-lighting-system_482257-8729.jpg",
          imageAlt: "Real-time Transactions",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-hand-holding-smartphone-with-black-friday-discount-coupon-while-paying-purchases-checkout-cashier-scanning-promotional-promo-code-displayed-consumer-mobile-device_482257-69278.jpg",
          imageAlt: "Global Payments",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mobile-payment-illustration_23-2151961283.jpg",
          imageAlt: "Seamless Interface",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/contactless-mobile-payment_23-2151961265.jpg",
          imageAlt: "Instant Transfers",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-cash-money_23-2151344873.jpg",
          imageAlt: "Secure Storage",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/banking-app-interface-screens_23-2148594382.jpg",
          imageAlt: "Dynamic Reporting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169864.jpg",
          imageAlt: "Real-time Updates",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/banking-app-interface-screens_23-2148594381.jpg",
          imageAlt: "Simplified Management",
        },
      ]}
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/confident-outline-business-side-face-male_1194-3839.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-businessman-holding-disposable-coffee-cup-hand-looking-camera_23-2148176166.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-successful-entrepreneur_1098-3855.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-man-pointing-camera-with-finger_1262-3118.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiley-business-man_23-2148514859.jpg",
          alt: "User 5",
        },
      ]}
      avatarText="Trusted by 10,000+ professionals"
      marqueeItems={[
        {
          type: "text",
          text: "Visa",
        },
        {
          type: "text",
          text: "Mastercard",
        },
        {
          type: "text",
          text: "PayPal",
        },
        {
          type: "text",
          text: "Stripe",
        },
        {
          type: "text",
          text: "Wise",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Impact"
      metrics={[
        {
          icon: Shield,
          label: "Security Standards",
          value: "256-bit",
        },
        {
          icon: Zap,
          label: "Transaction Time",
          value: "<1s",
        },
        {
          icon: Globe,
          label: "Global Reach",
          value: "150+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Digital Wallet",
          description: "Manage funds and view balances with secure, real-time updates.",
          bentoComponent: "reveal-icon",
          icon: Wallet,
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201859.jpg",
          imageAlt: "financial support chatbot interface",
        },
        {
          title: "Instant P2P",
          description: "Send and receive money instantly from other FinovaPay users.",
          bentoComponent: "reveal-icon",
          icon: Repeat,
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-young-business-man-talking-phone-sitting-his-office-diagrams-monitor_482257-34736.jpg",
          imageAlt: "financial support chatbot interface",
        },
        {
          title: "Secure Payments",
          description: "Process online payments with integrated, encrypted mechanisms.",
          bentoComponent: "reveal-icon",
          icon: CreditCard,
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169856.jpg",
          imageAlt: "financial support chatbot interface",
        },
        {
          title: "Transaction Logs",
          description: "Transparent access to all financial activity for better management.",
          bentoComponent: "reveal-icon",
          icon: History,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1662.jpg",
          imageAlt: "financial support chatbot interface",
        },
      ]}
      title="FinovaPay Services"
      description="Explore the essential infrastructure built for modern finance."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "$0",
          subtitle: "Perfect for individuals",
          features: [
            "Digital Wallet",
            "P2P Transfers",
            "Basic Security",
          ],
          buttons: [
            {
              text: "Start Free",
            },
          ],
        },
        {
          id: "pro",
          badge: "Advanced",
          price: "$29",
          subtitle: "For scaling businesses",
          features: [
            "All Basic Features",
            "Online Payment Gateway",
            "Priority Support",
          ],
          buttons: [
            {
              text: "Upgrade",
            },
          ],
        },
        {
          id: "enterprise",
          badge: "Custom",
          price: "Custom",
          subtitle: "For larger enterprises",
          features: [
            "All Pro Features",
            "Dedicated Account Manager",
            "Advanced Analytics",
          ],
          buttons: [
            {
              text: "Contact Us",
            },
          ],
        },
      ]}
      title="Flexible Pricing Plans"
      description="Choose the best plan for your business growth."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "99.99%",
          title: "Uptime",
          items: [
            "Real-time processing",
            "Reliable backend",
          ],
        },
        {
          id: "m2",
          value: "100K+",
          title: "Transactions",
          items: [
            "Daily processing capacity",
            "Seamless scaling",
          ],
        },
        {
          id: "m3",
          value: "15ms",
          title: "Latency",
          items: [
            "Global edge servers",
            "Instant response",
          ],
        },
      ]}
      title="Platform Performance"
      description="Driving efficiency through scalable architecture."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Johnson",
          role: "CEO",
          testimonial: "FinovaPay has revolutionized our P2P transactions.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1662.jpg",
        },
        {
          id: "t2",
          name: "Michael Chen",
          role: "CTO",
          testimonial: "Extremely robust and secure payment infrastructure.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",
        },
        {
          id: "t3",
          name: "Emily Rodriguez",
          role: "Marketing Director",
          testimonial: "The digital wallet makes tracking expenses so simple.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",
        },
        {
          id: "t4",
          name: "David Kim",
          role: "Product Manager",
          testimonial: "Incredible latency, even with heavy volumes.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-camera_107420-95907.jpg",
        },
        {
          id: "t5",
          name: "Jane Doe",
          role: "Finance Manager",
          testimonial: "Transparency in transaction history is top-notch.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-co-worker-spending-time-office_23-2149328287.jpg",
        },
      ]}
      title="Trusted by Users"
      description="See why businesses prefer FinovaPay."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How secure is my data?",
          content: "We use industry-leading 256-bit encryption for all financial data storage.",
        },
        {
          id: "f2",
          title: "How fast are P2P transfers?",
          content: "P2P transfers occur instantly, providing high availability.",
        },
        {
          id: "f3",
          title: "Can I access history?",
          content: "Yes, our platform keeps a complete, transparent log of all activities.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions about our service?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Started Today"
      description="Join the next generation of financial solutions."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-light-streaks-with-spheres_1017-2806.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="FinovaPay"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
