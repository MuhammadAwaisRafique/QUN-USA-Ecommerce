import React from "react";
import {
  Briefcase,
  PhoneCall,
  Users,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const services = [
  {
    icon: <Briefcase className="h-12 w-12 text-blue-600" />,
    title: "Business Process Outsourcing (BPO) Services",
    desc: "Unlock operational excellence by outsourcing non-core functions to our expert teams. Whether you're a startup seeking lean operations or an enterprise aiming for process agility, our customized BPO solutions are crafted to align with your strategic goals.",
    features: [
      {
        heading: "Back Office Support",
        items: [
          "Data entry & management",
          "Invoice processing & accounts payable",
          "Document digitization & workflow automation",
          "Order & claims management",
          "HR operations (payroll, onboarding, benefits administration)",
        ],
      },
      {
        heading: "Front Office Operations",
        items: [
          "Voice, chat, and email-based customer engagement",
          "Lead generation & telemarketing",
          "Sales support & upselling",
          "Appointment scheduling",
          "Market research & survey services",
        ],
      },
      {
        heading: "Industry-Specific BPO Expertise",
        items: [
          "Healthcare: Medical billing, coding, claims processing",
          "Finance: Bookkeeping, tax filing, compliance support",
          "eCommerce: Order fulfillment, return management, catalog handling",
        ],
      },
      {
        heading: "Why Partner with QUN for BPO?",
        items: [
          "ISO-certified processes & strong QA systems",
          "Multilingual, globally diverse workforce",
          "Flexible delivery models (onshore/offshore/hybrid)",
          "Secure IT infrastructure with disaster recovery",
          "SLA-based service governance for performance guarantees",
        ],
      },
    ],
  },
  {
    icon: <PhoneCall className="h-12 w-12 text-emerald-600" />,
    title: "Telecommunication Solutions",
    desc: "We power business communication with reliable, scalable, and secure telecom systems that foster collaboration and elevate customer interaction—globally.",
    features: [
      {
        heading: "Voice Solutions",
        items: [
          "VoIP services",
          "SIP trunking & hosted PBX",
          "Toll-free & virtual numbers",
          "Auto-attendants, call routing & forwarding",
        ],
      },
      {
        heading: "Data & Internet Services",
        items: [
          "Dedicated leased lines & broadband",
          "VPN/MPLS for secure connectivity",
          "Managed WAN/LAN infrastructure",
          "Traffic shaping & bandwidth optimization",
        ],
      },
      {
        heading: "Unified Communications (UCaaS)",
        items: [
          "Integrated voice, video, messaging & file sharing",
          "Cloud conferencing tools",
          "Mobile communications for remote teams",
        ],
      },
      {
        heading: "Call Center Infrastructure",
        items: [
          "Cloud & on-premise call center systems",
          "IVR & ACD setup",
          "Call analytics & recording",
          "Agent scheduling & WFM tools",
        ],
      },
      {
        heading: "Why Our Telecom Services Stand Out",
        items: [
          "99.9% uptime with multi-tier network redundancy",
          "End-to-end encryption & DDoS protection",
          "Scalable solutions for SMEs to enterprises",
          "24/7 Network Operations Center (NOC) support",
        ],
      },
    ],
  },
  {
    icon: <Users className="h-12 w-12 text-purple-600" />,
    title: "Customer Support Services",
    desc: "Delivering exceptional customer service experiences across every channel, our support teams are trained to respond with empathy, efficiency, and expertise—24/7/365.",
    features: [
      {
        heading: "Voice Support",
        items: [
          "Inbound/outbound support",
          "Order status & inquiries",
          "Complaint resolution & escalation handling",
        ],
      },
      {
        heading: "Non-Voice Channels",
        items: [
          "Email & helpdesk ticketing",
          "Live chat for instant web support",
          "Knowledge base creation & management",
        ],
      },
      {
        heading: "Social Media & Reputation Management",
        items: [
          "Real-time interaction across Facebook, Instagram, Twitter",
          "Sentiment analysis & monitoring",
          "Brand advocacy & crisis response",
        ],
      },
      {
        heading: "Technical Support (Tier 1, 2, 3)",
        items: [
          "Software installation & bug fixes",
          "Hardware diagnostics & configuration",
          "Network setup assistance",
        ],
      },
      {
        heading: "Why Choose Our Customer Support Teams?",
        items: [
          "Around-the-clock multilingual coverage",
          "AI-powered chatbots & smart ticket routing",
          "First-contact resolution (FCR) focus",
          "Integrated CRM tools for unified customer history",
        ],
      },
    ],
  },
  {
    icon: <CreditCard className="h-12 w-12 text-rose-600" />,
    title: "Secure eCheck Payment Gateway",
    desc: "QUN USA offers a powerful, secure, and cost-efficient eCheck payment gateway for modern businesses. Accept payments seamlessly via the ACH (Automated Clearing House) network—ideal for recurring billing and high-ticket transactions.",
    features: [
      {
        heading: "How It Works",
        items: [
          "Customer authorizes payment via online form or voice call",
          "Securely submits account & routing details",
          "Funds are transferred from the customer's bank via ACH",
          "Funds typically clear within 3–5 business days",
        ],
      },
      {
        heading: "Benefits of eCheck Processing",
        items: [
          "Lower Processing Costs – Ideal for large or recurring transactions",
          "Bank-Level Security – Encryption & tokenization included",
          "Fewer Chargebacks – Compared to card payments",
          "Automated Reconciliation – Real-time reporting & tracking",
          "Recurring Billing Support – Great for subscriptions or invoices",
        ],
      },
      {
        heading: "Compliance & Data Security",
        items: [
          "Fully NACHA & ACH compliant",
          "PCI-DSS aligned data handling",
          "Active fraud prevention and risk monitoring protocols",
        ],
      },
    ],
  },
];

const stats = [
  {
    number: "500+",
    label: "Satisfied Clients",
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    icon: <Shield className="h-6 w-6 text-blue-600" />,
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: <Clock className="h-6 w-6 text-blue-600" />,
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: <Award className="h-6 w-6 text-blue-600" />,
  },
];

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Professional Services
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Business Solutions for Modern Enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:qunusallc@gmail.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 group-hover:bg-blue-100 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Empowering Business Growth
              <span className="block text-blue-600">Through Innovation</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <p>
                At <span className="font-bold text-blue-700">QUN USA</span>, we
                deliver end-to-end business solutions designed to accelerate
                growth, streamline operations, and transform customer
                experiences.
              </p>
              <p>
                Our comprehensive service portfolio includes{" "}
                <span className="font-semibold text-blue-700">
                  Business Process Outsourcing (BPO)
                </span>
                ,{" "}
                <span className="font-semibold text-emerald-700">
                  Advanced Telecommunication Services
                </span>
                ,{" "}
                <span className="font-semibold text-purple-700">
                  24/7 Customer Support Solutions
                </span>
                , and a{" "}
                <span className="font-semibold text-rose-700">
                  Secure eCheck Payment Gateway
                </span>
                —all engineered to help your business scale efficiently, reduce
                costs, and maximize ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our specialized solutions can transform your business
              operations
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`group ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                } lg:flex lg:items-center lg:gap-16`}
              >
                {/* Service Header */}
                <div className="lg:w-1/3 mb-12 lg:mb-0">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 lg:p-10">
                    <div className="grid sm:grid-cols-2 gap-8">
                      {service.features.map((feature) => (
                        <div key={feature.heading} className="space-y-4">
                          <h4 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
                            {feature.heading}
                          </h4>
                          <ul className="space-y-3">
                            {feature.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-700"
                              >
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Partner with QUN USA and leverage our expertise to drive growth,
              optimize operations, and deliver exceptional customer experiences.
              Let's build the future of your business together.
            </p>
            <p className="text-lg text-blue-200 mb-10">
              Schedule your free consultation today and experience business
              transformation powered by trust, innovation, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
              <a
                href="tel:+14183643410"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
